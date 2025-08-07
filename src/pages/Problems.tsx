import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { problems } from "@/data/problems";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Problems = () => {
  const [search, setSearch] = useState("");
  const [difficulty, setDifficulty] = useState<string>("All");

  const filtered = useMemo(() => {
    return problems.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesDiff = difficulty === "All" || p.difficulty === difficulty;
      return matchesSearch && matchesDiff;
    });
  }, [search, difficulty]);

  return (
    <main className="container py-10">
      <Helmet>
        <title>Problems — AlgoForge</title>
        <meta name="description" content="Browse coding interview problems filtered by difficulty, tags, and companies." />
        <link rel="canonical" href="/problems" />
      </Helmet>

      <section className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h1 className="text-2xl font-semibold">Problems</h1>
        <div className="flex gap-3">
          <Input
            placeholder="Search problems"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-56"
            aria-label="Search problems"
          />
          <Select value={difficulty} onValueChange={setDifficulty}>
            <SelectTrigger className="w-40">
              <SelectValue placeholder="Difficulty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All">All</SelectItem>
              <SelectItem value="Easy">Easy</SelectItem>
              <SelectItem value="Medium">Medium</SelectItem>
              <SelectItem value="Hard">Hard</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <Link key={p.id} to={`/problems/${p.id}`} className="group">
            <Card className="h-full transition-all duration-200 group-hover:shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center justify-between text-base">
                  <span>{p.title}</span>
                  <Badge variant="outline">{p.difficulty}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground space-y-3">
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <Badge key={t} variant="secondary">{t}</Badge>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.companies.slice(0, 3).map((c) => (
                    <Badge key={c.name} variant="outline">{c.name} · {c.frequency}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>
    </main>
  );
};

export default Problems;
