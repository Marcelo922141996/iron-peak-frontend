export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative border-b border-border bg-gradient-hero">
      <div className="mx-auto max-w-7xl px-4 lg:px-8 py-20 lg:py-28">
        {eyebrow && <p className="font-heading uppercase text-sm tracking-[0.3em] text-primary mb-3">{eyebrow}</p>}
        <h1 className="font-display text-5xl lg:text-7xl tracking-wider">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{subtitle}</p>}
      </div>
    </section>
  );
}
