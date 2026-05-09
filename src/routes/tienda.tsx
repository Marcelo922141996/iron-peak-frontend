import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { ShoppingBag, MessageCircle, Package } from "lucide-react";
import { SITE } from "@/lib/site-data";

export const Route = createFileRoute("/tienda")({
  head: () => ({ meta: [
    { title: "Tienda — Iron Gym Jaén" },
    { name: "description", content: "Suplementos Lady Pro, whey protein, creatina, BCAA, indumentaria y accesorios Iron Gym." },
    { property: "og:title", content: "Tienda — Iron Gym Jaén" },
  ]}),
  component: Page,
});

const PRODUCTS = [
  { name: "Lady Pro Proteína", cat: "Suplemento", price: 95, desc: "Proteína con aguaje, suero de leche, soya y colágeno." },
  { name: "Whey Protein 2kg", cat: "Suplemento", price: 220, desc: "Proteína de suero, 24g por scoop." },
  { name: "Creatina Monohidratada", cat: "Suplemento", price: 75, desc: "300g · Pura, sin saborizantes." },
  { name: "BCAA 2:1:1", cat: "Suplemento", price: 90, desc: "Recuperación muscular acelerada." },
  { name: "Pre-entreno Burst", cat: "Suplemento", price: 110, desc: "Energía explosiva sin caída." },
  { name: "Quemador Termogénico", cat: "Suplemento", price: 85, desc: "Apoyo al déficit calórico." },
  { name: "Polo Iron Gym", cat: "Indumentaria", price: 45, desc: "Algodón premium, logo bordado." },
  { name: "Tomatodo Iron Gym 1L", cat: "Accesorio", price: 35, desc: "Acero inoxidable, doble pared." },
  { name: "Shaker 600ml", cat: "Accesorio", price: 25, desc: "Resistente, libre de BPA." },
  { name: "Guantes de entrenamiento", cat: "Accesorio", price: 55, desc: "Cuero sintético, agarre firme." },
  { name: "Cinturón de levantamiento", cat: "Accesorio", price: 95, desc: "Cuero genuino, soporte lumbar." },
  { name: "Snack proteico", cat: "Nutrición", price: 12, desc: "20g de proteína, sin azúcar." },
];

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="Tienda" title="EQUÍPATE PARA ROMPER" subtitle="Suplementos, indumentaria y accesorios. Pide por WhatsApp y recoge en sede." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {PRODUCTS.map((p) => (
          <div key={p.name} className="border border-border bg-card overflow-hidden group">
            <div className="aspect-square bg-gradient-hero grid place-items-center relative overflow-hidden">
              <Package className="h-20 w-20 text-primary/40 group-hover:scale-110 transition" strokeWidth={1} />
              <span className="absolute top-3 left-3 text-xs font-heading uppercase tracking-widest bg-background/70 backdrop-blur px-2 py-1">{p.cat}</span>
            </div>
            <div className="p-6">
              <h3 className="font-heading text-lg uppercase">{p.name}</h3>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="font-display text-2xl text-primary">S/{p.price}</span>
                <a href={`https://wa.me/51${SITE.whatsapp}?text=Quiero%20comprar%20${encodeURIComponent(p.name)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider px-4 py-2 bg-gradient-primary text-primary-foreground">
                  <MessageCircle className="h-3.5 w-3.5" /> Pedir
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
