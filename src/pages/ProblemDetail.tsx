import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { problems } from "@/data/problems";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const ProblemDetail = () => {
  const { id } = useParams();
  const problem = problems.find((p) => p.id === id);

  if (!problem) {
    return (
      <main className="container py-10">
        <h1 className="text-2xl font-semibold">Problem not found</h1>
        <Button asChild className="mt-4" variant="secondary"><Link to="/problems">Back to problems</Link></Button>
      </main>
    );
  }

  return (
    <main className="container py-10">
      <Helmet>
        <title>{problem.title} — AlgoForge</title>
        <meta name="description" content={`Practice ${problem.title}. Includes examples, description and metadata.`} />
        <link rel="canonical" href={`/problems/${problem.id}`} />
      </Helmet>

      <header className="mb-6">
        <h1 className="text-2xl font-semibold">{problem.title}</h1>
        <div className="mt-2 flex flex-wrap items-center gap-2">
          <Badge variant="outline">{problem.difficulty}</Badge>
          {problem.tags.map((t) => (
            <Badge key={t} variant="secondary">{t}</Badge>
          ))}
        </div>
      </header>

      <Tabs defaultValue="statement" className="w-full">
        <TabsList>
          <TabsTrigger value="statement">Problem</TabsTrigger>
          <TabsTrigger value="companies">Companies</TabsTrigger>
          <TabsTrigger value="solutions">Solutions</TabsTrigger>
        </TabsList>
        <TabsContent value="statement" className="max-w-none space-y-4">
          <p>{problem.description}</p>
          <h3>Constraints</h3>
          {problem.constraints && problem.constraints.length > 0 ? (
            <ul className="list-disc pl-6">
              {problem.constraints.map((c, idx) => (
                <li key={idx}>{c}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted-foreground">No constraints provided.</p>
          )}
          <h3>Examples</h3>
          <ul className="list-disc pl-6">
            {problem.examples.map((ex, idx) => (
              <li key={idx}>
                <span className="font-medium">Input:</span> {ex.input} · <span className="font-medium">Output:</span> {ex.output}
              </li>
            ))}
          </ul>
        </TabsContent>
        <TabsContent value="companies">
          <div className="flex flex-wrap gap-2">
            {problem.companies.map((c) => (
              <Badge key={c.name} variant="outline">{c.name} · {c.frequency}</Badge>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="solutions">
          {problem.solutions && problem.solutions.length > 0 ? (
            <div className="space-y-6">
              {problem.solutions.map((s, idx) => (
                <article key={idx} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium">{s.language} solution</h4>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigator.clipboard.writeText(s.code)}
                    >
                      Copy code
                    </Button>
                  </div>
                  {s.explanation && (
                    <p className="text-sm text-muted-foreground">{s.explanation}</p>
                  )}
                  <pre className="rounded-md bg-muted p-3 overflow-auto text-sm"><code>{s.code}</code></pre>
                </article>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">No solutions available yet.</p>
          )}
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ProblemDetail;
