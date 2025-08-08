import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

async function getLatestVersion(lang: string): Promise<string | null> {
  try {
    const res = await fetch("https://emkc.org/api/v2/piston/runtimes");
    const runtimes = await res.json();
    const matches = runtimes.filter((r: any) => {
      const name = String(r.language).toLowerCase();
      const target = lang.toLowerCase();
      if (target === "cpp") return name === "cpp" || name === "c++";
      if (target === "javascript") return name === "javascript" || name === "node" || name === "nodejs";
      return name === target;
    });
    if (!matches.length) return null;
    // pick the last (often latest) version
    return matches[matches.length - 1].version;
  } catch (_) {
    return null;
  }
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { language, code, stdin } = await req.json();
    if (!language || !code) {
      return new Response(JSON.stringify({ error: "language and code are required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const version = await getLatestVersion(language);
    if (!version) {
      return new Response(JSON.stringify({ error: `Language not supported: ${language}` }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const filename = (() => {
      switch (language) {
        case "c": return "main.c";
        case "cpp": return "main.cpp";
        case "java": return "Main.java";
        case "python": return "main.py";
        case "javascript": return "main.js";
        default: return "main.txt";
      }
    })();

    const execRes = await fetch("https://emkc.org/api/v2/piston/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language,
        version,
        files: [{ name: filename, content: code }],
        stdin: stdin ?? "",
      }),
    });

    const execData = await execRes.json();
    const out = [execData.run?.stdout, execData.run?.stderr].filter(Boolean).join("");

    return new Response(JSON.stringify({ output: out }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("run-code error", error);
    return new Response(JSON.stringify({ error: "Unexpected error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
