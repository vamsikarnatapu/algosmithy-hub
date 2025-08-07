import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <main className="relative min-h-[80vh] overflow-hidden">
      <Helmet>
        <title>AlgoForge — Coding Interview Practice</title>
        <meta name="description" content="Practice coding interview problems with filters by difficulty, topic, and company. Read solutions and approaches with complexity." />
        <link rel="canonical" href="/" />
      </Helmet>

      <section className="container py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl md:text-6xl font-bold tracking-tight">
            Master coding interviews with a beautiful, fast workspace
          </h1>
          <p className="mt-4 text-muted-foreground text-lg md:text-xl">
            Explore a curated problem bank with company tags, frequency, and detailed solutions. Filters like LeetCode, experience like nowhere else.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/problems">Browse Problems</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#features">See Features</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="features" className="container grid gap-6 md:grid-cols-3 pb-20">
        <article className="feature-card">
          <h3 className="font-semibold text-lg">Company Filters</h3>
          <p className="text-muted-foreground mt-2">Filter by FAANG and beyond with real frequency metrics.</p>
        </article>
        <article className="feature-card">
          <h3 className="font-semibold text-lg">Editorial Solutions</h3>
          <p className="text-muted-foreground mt-2">Multiple languages with approaches and complexities.</p>
        </article>
        <article className="feature-card">
          <h3 className="font-semibold text-lg">Fast Workspace</h3>
          <p className="text-muted-foreground mt-2">Minimal, focused UI to help you think and ship.</p>
        </article>
      </section>

      <div className="pointer-glow" aria-hidden="true" />
    </main>
  );
};

export default Index;
