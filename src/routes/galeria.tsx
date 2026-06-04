import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import musculacionImg from "@/assets/imagen/musculacion.jpg";
import cardioImg from "@/assets/imagen/cardio.jpg";
import funcionalImg from "@/assets/imagen/funcional.jpg";
import clasesImg from "@/assets/imagen/clases.jpg";
import coachImg from "@/assets/imagen/coach.jpg";
import heroImg from "@/assets/imagen/hero.jpg";
import nutricionImg from "@/assets/imagen/nutricion.jpg";
import { useState } from "react";

export const Route = createFileRoute("/galeria")({
  head: () => ({ meta: [
    { title: "Galería y Transformaciones — Iron Gym Jaén" },
    { name: "description", content: "Instalaciones, clases, eventos y transformaciones reales de socios Iron Gym." },
    { property: "og:title", content: "Galería — Iron Gym Jaén" },
  ]}),
  component: Page,
});

const PHOTOS = [
  { src: heroImg, cat: "Atletas" },
  { src: musculacionImg, cat: "Instalaciones" },
  { src: cardioImg, cat: "Instalaciones" },
  { src: funcionalImg, cat: "Instalaciones" },
  { src: clasesImg, cat: "Clases" },
  { src: coachImg, cat: "Coaches" },
  { src: nutricionImg, cat: "Nutrición" },
  { src: musculacionImg, cat: "Instalaciones" },
  { src: clasesImg, cat: "Clases" },
];
const CATS = ["Todo", "Instalaciones", "Clases", "Coaches", "Atletas", "Nutrición"];

function Page() {
  const [filt, setFilt] = useState("Todo");
  const items = filt === "Todo" ? PHOTOS : PHOTOS.filter(p => p.cat === filt);
  return (
    <Layout>
      <PageHero eyebrow="Galería" title="LA FUERZA EN IMÁGENES" subtitle="Instalaciones, clases, eventos y las transformaciones de nuestra comunidad." />
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {CATS.map(c => (
            <button key={c} onClick={() => setFilt(c)} className={`px-5 py-2 font-heading uppercase tracking-wider text-xs transition ${filt === c ? "bg-gradient-primary text-primary-foreground" : "border border-border hover:border-primary"}`}>{c}</button>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((p, i) => (
            <div key={i} className="relative overflow-hidden border border-border aspect-square group">
              <img src={p.src} alt={p.cat} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                <span className="text-xs font-heading uppercase tracking-widest text-primary">{p.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
