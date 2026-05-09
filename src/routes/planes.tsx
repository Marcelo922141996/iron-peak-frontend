import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Check, Snowflake, Tag, CreditCard } from "lucide-react";
import { PLANES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/planes")({
  head: () => ({ meta: [
    { title: "Planes y Precios — Iron Gym Jaén" },
    { name: "description", content: "Day pass, quincenal, mensual, trimestral y anual. Inscripción gratis y promociones 2x1." },
    { property: "og:title", content: "Planes y Precios — Iron Gym Jaén" },
  ]}),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="Planes" title="ELIGE TU MEMBRESÍA" subtitle="Sin sorpresas. Inscripción gratis en planes mensuales o mayores." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">
          {PLANES.map((p) => (
            <div key={p.name} className={`p-7 border ${p.highlight ? "border-primary bg-card shadow-glow lg:scale-105" : "border-border bg-card"}`}>
              {p.highlight && <div className="text-xs font-heading uppercase tracking-widest text-primary mb-2">Más popular</div>}
              <h3 className="font-display text-2xl">{p.name}</h3>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="font-display text-4xl text-primary">S/{p.price}</span>
                <span className="text-xs text-muted-foreground">/{p.period}</span>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {p.features.map((f) => <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}</li>)}
              </ul>
              <a href={`https://wa.me/51${SITE.whatsapp}?text=Quiero%20el%20plan%20${encodeURIComponent(p.name)}`} target="_blank" rel="noreferrer" className={`mt-6 block text-center py-3 font-heading uppercase tracking-wider text-xs ${p.highlight ? "bg-gradient-primary text-primary-foreground" : "border border-border hover:border-primary"} transition`}>
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: Tag, t: "Promociones 2x1", d: "Inscríbete con un amigo y aprovecha el descuento." },
            { icon: Snowflake, t: "Congela tu membresía", d: "Hasta 15 días al mes sin perder tus días." },
            { icon: CreditCard, t: "Pagos fáciles", d: "Yape, Plin, transferencia o tarjeta." },
          ].map((b) => (
            <div key={b.t} className="p-7 border border-border bg-card">
              <b.icon className="h-8 w-8 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="font-heading uppercase text-lg">{b.t}</h3>
              <p className="text-sm text-muted-foreground mt-2">{b.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
