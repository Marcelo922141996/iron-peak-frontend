import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";

const NAV = [
  { to: "/", label: "Inicio" },
  { to: "/nosotros", label: "Nosotros" },
  { to: "/servicios", label: "Servicios" },
  { to: "/sedes", label: "Sedes" },
  { to: "/planes", label: "Planes" },
  { to: "/tienda", label: "Tienda" },
  { to: "/horarios", label: "Horarios" },
  { to: "/galeria", label: "Galería" },
  { to: "/blog", label: "Blog" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-gradient-primary shadow-glow">
            <Dumbbell className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
          </span>
          <span className="font-display text-2xl tracking-wider">IRON <span className="text-primary">GYM</span></span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              activeOptions={{ exact: n.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="px-3 py-2 text-sm font-heading uppercase tracking-wide text-muted-foreground transition hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/planes"
          className="hidden lg:inline-flex items-center rounded-sm bg-gradient-primary px-5 py-2.5 font-heading text-sm uppercase tracking-wider text-primary-foreground shadow-glow transition hover:scale-105"
        >
          Inscríbete
        </Link>
        <button
          className="lg:hidden text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col p-4 gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                activeOptions={{ exact: n.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="px-3 py-3 font-heading uppercase tracking-wide text-muted-foreground"
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
