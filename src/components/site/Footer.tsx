import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MessageCircle, MapPin, Mail, Phone } from "lucide-react";
import { SITE, SEDES } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface mt-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-16 grid gap-10 lg:grid-cols-4">
        <div>
          <div className="font-display text-3xl">IRON <span className="text-primary">GYM</span></div>
          <p className="mt-3 text-sm text-muted-foreground">
            El gimnasio más emblemático de Jaén. {SITE.tagline}
          </p>
          <div className="mt-5 flex gap-3">
            <a href={SITE.instagram} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-sm border border-border hover:border-primary hover:text-primary transition"><Instagram className="h-4 w-4" /></a>
            <a href={SITE.facebook} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-sm border border-border hover:border-primary hover:text-primary transition"><Facebook className="h-4 w-4" /></a>
            <a href={`https://wa.me/51${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-sm border border-border hover:border-primary hover:text-primary transition"><MessageCircle className="h-4 w-4" /></a>
          </div>
        </div>
        <div>
          <h4 className="font-heading uppercase text-sm tracking-widest mb-4">Sedes</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {SEDES.map((s) => (
              <li key={s.slug}><Link to="/sedes" className="hover:text-primary transition">{s.name}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading uppercase text-sm tracking-widest mb-4">Enlaces</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/nosotros" className="hover:text-primary transition">Nosotros</Link></li>
            <li><Link to="/servicios" className="hover:text-primary transition">Servicios</Link></li>
            <li><Link to="/planes" className="hover:text-primary transition">Planes</Link></li>
            <li><Link to="/tienda" className="hover:text-primary transition">Tienda</Link></li>
            <li><Link to="/blog" className="hover:text-primary transition">Blog</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading uppercase text-sm tracking-widest mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 text-primary mt-0.5" /> +51 {SITE.whatsapp}</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 text-primary mt-0.5" /> {SITE.email}</li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary mt-0.5" /> {SITE.city}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Iron Gym Jaén · Todos los derechos reservados
      </div>
    </footer>
  );
}
