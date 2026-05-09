import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { MapPin, Clock, MessageCircle, Car, Dumbbell } from "lucide-react";
import { SEDES } from "@/lib/site-data";

export const Route = createFileRoute("/sedes")({
  head: () => ({ meta: [
    { title: "Sedes — Iron Gym Jaén" },
    { name: "description", content: "5 sedes en Jaén. Encuentra la más cercana: Pedro Cornejo, Los Robles, Pueblo Libre, Bolívar Plaza y Alfredo Bastos." },
    { property: "og:title", content: "Sedes — Iron Gym Jaén" },
  ]}),
  component: Page,
});

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="Ubicaciones" title="5 SEDES EN JAÉN" subtitle="La mayor red de gimnasios de la ciudad. Encuentra la sede más cercana a ti." />
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid md:grid-cols-2 gap-6">
        {SEDES.map((s) => (
          <div key={s.slug} className="border border-border bg-card overflow-hidden">
            <iframe
              title={s.name}
              src={`https://www.google.com/maps?q=${encodeURIComponent(s.address + ", Jaén, Perú")}&output=embed`}
              className="w-full h-64 border-0"
              loading="lazy"
            />
            <div className="p-7">
              <p className="font-heading uppercase tracking-widest text-xs text-primary">{s.note}</p>
              <h3 className="font-display text-3xl mt-2">{s.name}</h3>
              <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-3"><MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {s.address}</li>
                <li className="flex gap-3"><Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {s.horario}</li>
                <li className="flex gap-3"><Car className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Estacionamiento disponible</li>
                <li className="flex gap-3"><Dumbbell className="h-4 w-4 text-primary mt-0.5 shrink-0" /> Equipamiento completo</li>
              </ul>
              <a href={`https://wa.me/51${s.whatsapp}?text=Hola,%20quiero%20info%20de%20${encodeURIComponent(s.name)}`} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 rounded-sm bg-gradient-primary px-5 py-3 font-heading uppercase tracking-wider text-sm text-primary-foreground hover:scale-105 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
