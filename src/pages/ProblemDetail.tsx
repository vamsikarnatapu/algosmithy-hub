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
          <TabsTrigger value="solutions" disabled>Solutions (coming)</TabsTrigger>
        </TabsList>
        <TabsContent value="statement" className="max-w-none space-y-4">
          <p>{problem.description}</p>
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
          <p className="text-muted-foreground">Editor and solutions will appear here.</p>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default ProblemDetail;
