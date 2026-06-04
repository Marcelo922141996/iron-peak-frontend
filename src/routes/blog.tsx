import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Calendar, ArrowRight } from "lucide-react";
import musculacionImg from "@/assets/imagen/musculacion.jpg";
import cardioImg from "@/assets/imagen/cardio.jpg";
import nutricionImg from "@/assets/imagen/nutricion.jpg";
import funcionalImg from "@/assets/imagen/funcional.jpg";
import clasesImg from "@/assets/imagen/clases.jpg";
import coachImg from "@/assets/imagen/coach.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({ meta: [
    { title: "Blog — Iron Gym Jaén" },
    { name: "description", content: "Rutinas, nutrición, suplementación y motivación. El blog del gimnasio más grande de Jaén." },
    { property: "og:title", content: "Blog — Iron Gym Jaén" },
  ]}),
  component: Page,
});

const POSTS = [
  { img: musculacionImg, cat: "Rutinas", title: "5 ejercicios para hipertrofia que no pueden faltar", date: "5 May 2026" },
  { img: nutricionImg, cat: "Nutrición", title: "Cómo armar tu macros para ganar masa muscular", date: "1 May 2026" },
  { img: cardioImg, cat: "Cardio", title: "HIIT vs cardio LISS: ¿cuál es mejor para perder grasa?", date: "28 Abr 2026" },
  { img: funcionalImg, cat: "Funcional", title: "Entrenamiento funcional: por qué deberías sumarlo", date: "22 Abr 2026" },
  { img: coachImg, cat: "Motivación", title: "La mentalidad del atleta: forja tu disciplina", date: "18 Abr 2026" },
  { img: clasesImg, cat: "Fitness femenino", title: "Glúteos y piernas: rutina de 4 semanas", date: "12 Abr 2026" },
];

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="Blog" title="CONOCIMIENTO QUE ENTRENA" subtitle="Consejos, rutinas y nutrición del equipo Iron Gym." />
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {POSTS.map((p) => (
          <article key={p.title} className="border border-border bg-card overflow-hidden group">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition duration-700 group-hover:scale-110" />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-3 text-xs font-heading uppercase tracking-widest">
                <span className="text-primary">{p.cat}</span>
                <span className="text-muted-foreground flex items-center gap-1"><Calendar className="h-3 w-3" /> {p.date}</span>
              </div>
              <h3 className="font-heading text-xl uppercase mt-3 leading-tight">{p.title}</h3>
              <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-heading uppercase tracking-wider text-primary">Leer <ArrowRight className="h-4 w-4" /></a>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
}
