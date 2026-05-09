import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Clock, MessageCircle, Car, Dumbbell, Navigation, Phone } from "lucide-react";
import { SEDES } from "@/lib/site-data";
import musculacionImg from "@/assets/musculacion.jpg";
import cardioImg from "@/assets/cardio.jpg";
import funcionalImg from "@/assets/funcional.jpg";
import clasesImg from "@/assets/clases.jpg";
import coachImg from "@/assets/coach.jpg";

export const Route = createFileRoute("/sedes")({
  head: () => ({ meta: [
    { title: "Sedes — Iron Gym Jaén" },
    { name: "description", content: "5 sedes en Jaén con mapa interactivo: Pedro Cornejo, Los Robles, Pueblo Libre, Bolívar Plaza y Alfredo Bastos." },
    { property: "og:title", content: "Sedes — Iron Gym Jaén" },
  ]}),
  component: Page,
});

const GALERIAS: Record<string, string[]> = {
  principal: [musculacionImg, cardioImg, coachImg],
  "los-robles": [funcionalImg, clasesImg, musculacionImg],
  "pueblo-libre": [cardioImg, coachImg, clasesImg],
  "bolivar-plaza": [clasesImg, musculacionImg, funcionalImg],
  "alfredo-bastos": [coachImg, funcionalImg, cardioImg],
};

function Page() {
  const [activo, setActivo] = useState(SEDES[0].slug);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const slug = window.location.hash.replace("#", "");
      if (SEDES.some((s) => s.slug === slug)) setActivo(slug);
    }
  }, []);

  const sede = SEDES.find((s) => s.slug === activo)!;
  const mapsQuery = encodeURIComponent(sede.address + ", Jaén, Perú");

  return (
    <Layout>
      <PageHero eyebrow="Ubicaciones" title="5 SEDES EN JAÉN" subtitle="La mayor red de gimnasios de la ciudad. Selecciona una sede en el mapa para ver detalles." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-16">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-6">
          {/* SELECTOR DE SEDES */}
          <div className="space-y-3">
            {SEDES.map((s) => (
              <button
                key={s.slug}
                id={s.slug}
                onClick={() => setActivo(s.slug)}
                className={`w-full text-left p-5 border transition ${activo === s.slug ? "border-primary bg-card shadow-glow" : "border-border bg-card hover:border-primary/60"}`}
              >
                <div className="flex items-start gap-3">
                  <span className={`grid h-10 w-10 place-items-center rounded-sm shrink-0 ${activo === s.slug ? "bg-gradient-primary text-primary-foreground" : "border border-border text-primary"}`}>
                    <MapPin className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-heading uppercase tracking-widest text-primary">{s.note}</p>
                    <h3 className="font-heading uppercase text-lg leading-tight">{s.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1 truncate">{s.address}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* MAPA + DETALLE */}
          <div className="border border-border bg-card overflow-hidden">
            <iframe
              key={sede.slug}
              title={sede.name}
              src={`https://www.google.com/maps?q=${mapsQuery}&output=embed`}
              className="w-full h-80 border-0"
              loading="lazy"
            />
            <div className="p-7">
              <h2 className="font-display text-4xl">{sede.name}</h2>
              <ul className="mt-5 grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {sede.address}</li>
                <li className="flex gap-3"><Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {sede.horario}</li>
                <li className="flex gap-3"><Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" /> +51 {sede.whatsapp}</li>
                <li className="flex gap-3"><Car className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Estacionamiento disponible</li>
                <li className="flex gap-3 sm:col-span-2"><Dumbbell className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Musculación, cardio, funcional y clases grupales</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a href={`https://wa.me/51${sede.whatsapp}?text=${encodeURIComponent(`Hola, quiero info de ${sede.name}`)}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm bg-gradient-primary px-5 py-3 font-heading uppercase tracking-wider text-xs text-primary-foreground hover:scale-105 transition">
                  <MessageCircle className="h-4 w-4" /> WhatsApp directo
                </a>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${mapsQuery}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-sm border border-border hover:border-primary hover:text-primary px-5 py-3 font-heading uppercase tracking-wider text-xs transition">
                  <Navigation className="h-4 w-4" /> Cómo llegar
                </a>
              </div>

              {/* GALERIA */}
              <div className="mt-8">
                <p className="text-xs font-heading uppercase tracking-widest text-muted-foreground mb-3">Galería de la sede</p>
                <div className="grid grid-cols-3 gap-2">
                  {GALERIAS[sede.slug].map((img, i) => (
                    <div key={i} className="aspect-square overflow-hidden border border-border">
                      <img src={img} alt={`${sede.name} foto ${i + 1}`} loading="lazy" className="h-full w-full object-cover hover:scale-110 transition duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}