import { Flame } from "lucide-react";

const ITEMS = [
  "SÉ TU MEJOR VERSIÓN",
  "#IRONGYM JAÉN",
  "5 SEDES",
  "ABRIMOS 5:00 AM",
  "+15K ATLETAS",
  "FORJAMOS HIERRO",
  "FORJAMOS PERSONAS",
  "MAQUINARIA DE ÉLITE",
];

export function InfiniteMarquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="relative border-y border-border bg-background overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-3 will-change-transform">
        {row.map((it, i) => (
          <span key={i} className="flex items-center gap-6 px-6 font-bebas text-sm md:text-base tracking-[0.2em] text-foreground/80">
            <Flame className="h-3.5 w-3.5 text-primary" />
            <span>{it}</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}