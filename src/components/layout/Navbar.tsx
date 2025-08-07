import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight">
          <span className="text-gradient-brand">AlgoForge</span>
        </Link>
        <div className="flex items-center gap-2">
          <NavLink to="/problems" className={({ isActive }) =>
            `rounded-md px-3 py-2 text-sm ${isActive ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground hover:bg-accent`
          }>
            Problems
          </NavLink>
          <Button asChild variant="hero" size="sm">
            <Link to="/problems">Get Started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
