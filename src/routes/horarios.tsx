import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { useState } from "react";

export const Route = createFileRoute("/horarios")({
  head: () => ({ meta: [
    { title: "Horarios y Clases — Iron Gym Jaén" },
    { name: "description", content: "Cronograma semanal de clases grupales: spinning, funcional, zumba y más." },
    { property: "og:title", content: "Horarios y Clases — Iron Gym Jaén" },
  ]}),
  component: Page,
});

const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];
const SCHEDULE: Record<string, { hora: string; clase: string; coach: string }[]> = {
  Lunes: [{hora:"06:00", clase:"Spinning", coach:"Andrea"}, {hora:"09:00", clase:"Funcional", coach:"Carlos"}, {hora:"18:00", clase:"Zumba", coach:"María"}, {hora:"19:30", clase:"CrossFit", coach:"Jhon"}],
  Martes: [{hora:"06:00", clase:"Funcional", coach:"Carlos"}, {hora:"09:00", clase:"Aeróbicos", coach:"María"}, {hora:"18:00", clase:"Spinning", coach:"Andrea"}, {hora:"19:30", clase:"Calistenia", coach:"Jhon"}],
  Miércoles: [{hora:"06:00", clase:"Spinning", coach:"Andrea"}, {hora:"09:00", clase:"Funcional", coach:"Carlos"}, {hora:"18:00", clase:"Zumba", coach:"María"}, {hora:"19:30", clase:"CrossFit", coach:"Jhon"}],
  Jueves: [{hora:"06:00", clase:"Funcional", coach:"Carlos"}, {hora:"09:00", clase:"Aeróbicos", coach:"María"}, {hora:"18:00", clase:"Spinning", coach:"Andrea"}, {hora:"19:30", clase:"Calistenia", coach:"Jhon"}],
  Viernes: [{hora:"06:00", clase:"Spinning", coach:"Andrea"}, {hora:"09:00", clase:"HIIT", coach:"Carlos"}, {hora:"18:00", clase:"Zumba", coach:"María"}, {hora:"19:30", clase:"CrossFit", coach:"Jhon"}],
  Sábado: [{hora:"08:00", clase:"Spinning", coach:"Andrea"}, {hora:"10:00", clase:"Funcional Total", coach:"Carlos"}, {hora:"11:30", clase:"Zumba", coach:"María"}],
  Domingo: [{hora:"09:00", clase:"Open Gym", coach:"-"}, {hora:"10:30", clase:"Funcional Express", coach:"Carlos"}],
};

function Page() {
  const [dia, setDia] = useState("Lunes");
  return (
    <Layout>
      <PageHero eyebrow="Horarios" title="CRONOGRAMA SEMANAL" subtitle="Apertura desde las 5:00 AM de lunes a sábado. Domingos desde las 9:00 AM." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {DIAS.map((d) => (
            <button key={d} onClick={() => setDia(d)} className={`px-5 py-2.5 font-heading uppercase tracking-wider text-sm transition ${dia === d ? "bg-gradient-primary text-primary-foreground shadow-glow" : "border border-border hover:border-primary"}`}>{d}</button>
          ))}
        </div>
        <div className="border border-border bg-card divide-y divide-border max-w-3xl mx-auto">
          {SCHEDULE[dia].map((c, i) => (
            <div key={i} className="p-5 flex items-center justify-between gap-4">
              <div className="font-display text-3xl text-primary w-24">{c.hora}</div>
              <div className="flex-1">
                <div className="font-heading uppercase text-lg">{c.clase}</div>
                <div className="text-sm text-muted-foreground">Coach {c.coach}</div>
              </div>
              <button className="px-4 py-2 border border-border hover:border-primary hover:text-primary font-heading uppercase text-xs tracking-wider transition">Reservar</button>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}
