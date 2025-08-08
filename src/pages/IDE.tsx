import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import Editor from "@monaco-editor/react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { supabase } from "@/integrations/supabase/client";

const LANGUAGES = [
  { id: "c", label: "C", ext: "c" },
  { id: "cpp", label: "C++", ext: "cpp" },
  { id: "java", label: "Java", ext: "java" },
  { id: "python", label: "Python", ext: "py" },
  { id: "javascript", label: "JavaScript", ext: "js" },
] as const;

type LangId = typeof LANGUAGES[number]["id"];

const TEMPLATES: Record<LangId, string> = {
  c: "#include <stdio.h>\n\nint main() {\n    // Write your code here\n    printf(\"Hello, C!\\n\");\n    return 0;\n}",
  cpp: "#include <bits/stdc++.h>\nusing namespace std;\n\nint main(){\n    // Write your code here\n    cout << \"Hello, C++!\\n\";\n    return 0;\n}",
  java: "import java.util.*;\n\npublic class Main {\n  public static void main(String[] args) {\n    // Write your code here\n    System.out.println(\"Hello, Java!\");\n  }\n}",
  python: "# Write your code here\nprint('Hello, Python!')\n",
  javascript: "// Write your code here\nconsole.log('Hello, JavaScript!')\n",
};

const storageKey = (lang: string) => `ide_code_${lang}`;

const IDE = () => {
  const [lang, setLang] = useState<LangId>("javascript");
  const [code, setCode] = useState<string>("");
  const [stdin, setStdin] = useState<string>("");
  const [output, setOutput] = useState<string>("");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(storageKey(lang));
    setCode(saved ?? TEMPLATES[lang]);
  }, [lang]);

  useEffect(() => {
    localStorage.setItem(storageKey(lang), code);
  }, [lang, code]);

  const currentLabel = useMemo(() => LANGUAGES.find(l => l.id === lang)?.label ?? "JavaScript", [lang]);

  const runCode = async () => {
    setRunning(true);
    setOutput("");
    const { data, error } = await supabase.functions.invoke("run-code", {
      body: { language: lang, code, stdin },
    });
    if (error) {
      setOutput(`Error: ${error.message}`);
    } else {
      setOutput(data?.output ?? "");
    }
    setRunning(false);
  };

  return (
    <main className="container py-10">
      <Helmet>
        <title>Online IDE for C, C++, Java, Python, JavaScript — AlgoForge</title>
        <meta name="description" content="Run C, C++, Java, Python, and JavaScript code in your browser with our online IDE." />
        <link rel="canonical" href="/ide" />
      </Helmet>

      <header className="mb-4">
        <h1 className="text-2xl font-semibold">Online IDE</h1>
        <p className="text-muted-foreground">Compile and run code for C, C++, Java, Python, and JavaScript.</p>
      </header>

      <section className="mb-3 flex items-center gap-2">
        <Select value={lang} onValueChange={(v) => setLang(v as LangId)}>
          <SelectTrigger className="w-[220px]"><SelectValue placeholder="Language" /></SelectTrigger>
          <SelectContent>
            {LANGUAGES.map(l => (
              <SelectItem key={l.id} value={l.id}>{l.label}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={runCode} disabled={running}>
          {running ? "Running..." : "Run"}
        </Button>
      </section>

      <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="space-y-2">
          <Editor
            height="60vh"
            theme="vs-dark"
            language={lang === "cpp" ? "cpp" : lang}
            value={code}
            onChange={(v) => setCode(v ?? "")}
            options={{ fontSize: 14, minimap: { enabled: false } }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <h2 className="mb-2 text-sm font-medium">Input</h2>
            <Textarea value={stdin} onChange={(e) => setStdin(e.target.value)} placeholder="stdin..." className="h-[120px]" />
          </div>
          <div>
            <h2 className="mb-2 text-sm font-medium">Output</h2>
            <pre className="h-[300px] overflow-auto rounded-md bg-muted p-3 text-sm whitespace-pre-wrap">{output}</pre>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IDE;
