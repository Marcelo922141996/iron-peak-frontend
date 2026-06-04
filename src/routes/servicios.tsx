import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Dumbbell, HeartPulse, Activity, Users, UserCheck, Apple, Check, ArrowRight } from "lucide-react";
import musculacionImg from "@/assets/imagen/musculacion.jpg";
import cardioImg from "@/assets/imagen/cardio.jpg";
import funcionalImg from "@/assets/imagen/funcional.jpg";
import clasesImg from "@/assets/imagen/clases.jpg";
import coachImg from "@/assets/imagen/coach.jpg";
import nutricionImg from "@/assets/imagen/nutricion.jpg";

export const Route = createFileRoute("/servicios")({
  head: () => ({ meta: [
    { title: "Servicios — Iron Gym Jaén" },
    { name: "description", content: "Musculación, cardio, funcional, clases grupales, personal trainer y nutrición. Todo en un solo lugar." },
    { property: "og:title", content: "Servicios — Iron Gym Jaén" },
  ]}),
  component: Page,
});

const SERVICES = [
  { icon: Dumbbell, title: "Musculación / Pesas", img: musculacionImg, items: ["Mancuernas hasta 50kg", "Máquinas Hammer Strength", "Rack de sentadillas", "Banco olímpico"] },
  { icon: HeartPulse, title: "Cardio", img: cardioImg, items: ["Cintas profesionales", "Bicicletas estáticas", "Elípticas", "Escaladoras"] },
  { icon: Activity, title: "Funcional", img: funcionalImg, items: ["Kettlebells", "TRX & Battle ropes", "Plyo boxes", "Sleds y trineos"] },
  { icon: Users, title: "Clases Grupales", img: clasesImg, items: ["Spinning / Indoor cycle", "Funcional / CrossFit", "Aeróbicos & Zumba", "Calistenia"] },
  { icon: UserCheck, title: "Personal Trainer", img: coachImg, items: ["Sesiones 1 a 1", "Plan personalizado", "Seguimiento de medidas", "Coaches certificados"] },
  { icon: Apple, title: "Nutrición", img: nutricionImg, items: ["Evaluación corporal", "Plan de alimentación", "Suplementación", "Seguimiento mensual"] },
];

const PROGRAMAS = [
  "Pérdida de peso", "Ganancia muscular (volumen)", "Definición", "Tonificación femenina",
  "Glúteos y piernas", "Para principiantes", "Para adultos mayores", "Recomposición corporal",
];

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="Servicios" title="ENTRENA COMO UN PRO" subtitle="Todo lo que necesitas para alcanzar tus metas, en una sola membresía." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 space-y-10">
        {SERVICES.map((s, i) => (
          <div key={s.title} className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 ? "lg:[&>img]:order-2" : ""}`}>
            <img src={s.img} alt={s.title} loading="lazy" className="w-full aspect-[4/3] object-cover border border-border" />
            <div>
              <s.icon className="h-10 w-10 text-primary mb-4" strokeWidth={1.5} />
              <h2 className="font-display text-4xl lg:text-5xl">{s.title}</h2>
              <ul className="mt-6 space-y-2">
                {s.items.map((it) => (
                  <li key={it} className="flex gap-3 text-muted-foreground"><Check className="h-5 w-5 text-primary mt-0.5" /> {it}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-4xl lg:text-5xl text-center mb-12">PROGRAMAS ESPECIALIZADOS</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {PROGRAMAS.map((p) => (
              <div key={p} className="p-5 border border-border bg-card flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <span className="font-heading uppercase text-sm tracking-wide">{p}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/" hash="planes" className="inline-flex items-center gap-2 rounded-sm bg-gradient-primary px-7 py-4 font-heading uppercase tracking-wider text-primary-foreground shadow-glow hover:scale-105 transition">
              Ver planes <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
