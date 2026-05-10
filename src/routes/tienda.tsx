import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Package } from "lucide-react";
import { PRODUCTS, type Product } from "@/lib/site-data";
import { ProductDetailDialog } from "@/components/site/ProductDetailDialog";

export const Route = createFileRoute("/tienda")({
  head: () => ({ meta: [
    { title: "Tienda — Iron Gym Jaén" },
    { name: "description", content: "Suplementos Lady Pro, whey protein, creatina, BCAA, indumentaria y accesorios Iron Gym." },
    { property: "og:title", content: "Tienda — Iron Gym Jaén" },
  ]}),
  component: Page,
});

function Page() {
  const [active, setActive] = useState<Product | null>(null);
  const cats = ["Todos", ...Array.from(new Set(PRODUCTS.map((p) => p.cat)))];
  const [cat, setCat] = useState<string>("Todos");
  const list = cat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === cat);
  return (
    <Layout>
      <PageHero eyebrow="Tienda" title="EQUÍPATE PARA ROMPER" subtitle="Suplementos, indumentaria y accesorios. Pide por WhatsApp y recoge en sede." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-4 py-2 font-heading uppercase tracking-wider text-xs transition ${cat === c ? "bg-gradient-primary text-primary-foreground shadow-glow" : "border border-border hover:border-primary"}`}>{c}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((p) => (
            <button key={p.id} onClick={() => setActive(p)} className="text-left border border-border bg-card overflow-hidden group hover:border-primary hover:shadow-glow transition flex flex-col">
              <div className="aspect-square bg-gradient-hero grid place-items-center relative overflow-hidden">
                <Package className="h-20 w-20 text-primary/40" strokeWidth={1} />
                {p.images[0] && (
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                )}
                <span className="absolute top-3 left-3 text-xs font-heading uppercase tracking-widest bg-background/70 backdrop-blur px-2 py-1">{p.cat}</span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-lg uppercase">{p.name}</h3>
                <p className="text-sm text-muted-foreground mt-1 flex-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-2xl text-primary">S/{p.price}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider px-4 py-2 bg-gradient-primary text-primary-foreground">Ver detalle</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <ProductDetailDialog product={active} open={!!active} onOpenChange={(v) => !v && setActive(null)} />
    </Layout>
  );
}
