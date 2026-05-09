import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Target, Eye, Heart, Award, Users, Calendar, MapPin, Trophy } from "lucide-react";
import coachImg from "@/assets/coach.jpg";

export const Route = createFileRoute("/nosotros")({
  head: () => ({ meta: [
    { title: "Nosotros — Iron Gym Jaén" },
    { name: "description", content: "Conoce la historia, misión, visión y equipo de Iron Gym, el gimnasio más emblemático de Jaén." },
    { property: "og:title", content: "Nosotros — Iron Gym Jaén" },
  ]}),
  component: Page,
});

const VALORES = [
  { icon: Heart, title: "Disciplina", text: "El éxito nace del compromiso diario." },
  { icon: Users, title: "Comunidad", text: "Entrenas con personas que te impulsan." },
  { icon: Trophy, title: "Resultados", text: "Cada esfuerzo se convierte en logro." },
  { icon: Award, title: "Profesionalismo", text: "Equipo certificado y atención de élite." },
];

const COACHES = [
  { name: "Carlos Vega", spec: "Hipertrofia & Fuerza", cert: "CPT-NSCA" },
  { name: "Andrea Núñez", spec: "Funcional & HIIT", cert: "ACE Certified" },
  { name: "Jhon Salazar", spec: "Powerlifting", cert: "USAPL Coach" },
  { name: "María Torres", spec: "Nutrición Deportiva", cert: "Lic. Nutrición" },
];

function Page() {
  return (
    <Layout>
      <PageHero eyebrow="Nuestra historia" title="FORJADOS DESDE 2018" subtitle="De una sola sede a la red de gimnasios más grande de Jaén. Esta es la historia de Iron Gym." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <img src={coachImg} alt="Equipo Iron Gym" loading="lazy" className="w-full aspect-[4/3] object-cover" />
        <div>
          <h2 className="font-display text-4xl lg:text-5xl">DE 1 A 5 SEDES</h2>
          <p className="mt-5 text-muted-foreground">
            Iron Gym nació en Jaén con una misión clara: ofrecer entrenamiento de calidad,
            equipamiento de élite y una comunidad real para los jaénos. Lo que comenzó como
            un gimnasio de barrio en la calle Pedro Cornejo, hoy es una red de 5 sedes que
            atiende a miles de atletas semanalmente.
          </p>
          <p className="mt-4 text-muted-foreground">
            Con más de 98,000 seguidores combinados entre Instagram y Facebook, somos la
            comunidad fitness más grande del nororiente peruano.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 grid md:grid-cols-2 gap-6">
          <div className="p-10 border border-border bg-card">
            <Target className="h-10 w-10 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-3xl">MISIÓN</h3>
            <p className="mt-4 text-muted-foreground">Transformar la vida de los jaénos a través del fitness profesional, accesible y de calidad.</p>
          </div>
          <div className="p-10 border border-border bg-card">
            <Eye className="h-10 w-10 text-primary mb-4" strokeWidth={1.5} />
            <h3 className="font-display text-3xl">VISIÓN</h3>
            <p className="mt-4 text-muted-foreground">Ser la cadena de gimnasios líder del nororiente peruano, reconocida por su comunidad y resultados.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20">
        <h2 className="font-display text-4xl lg:text-5xl text-center mb-12">NUESTROS VALORES</h2>
        <div className="grid md:grid-cols-4 gap-5">
          {VALORES.map((v) => (
            <div key={v.title} className="p-7 border border-border bg-card text-center">
              <v.icon className="h-9 w-9 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="font-heading uppercase text-lg">{v.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h2 className="font-display text-4xl lg:text-5xl text-center mb-12">EQUIPO DE COACHES</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {COACHES.map((c) => (
              <div key={c.name} className="p-7 border border-border bg-card">
                <div className="aspect-square bg-gradient-primary mb-4 grid place-items-center">
                  <Users className="h-12 w-12 text-primary-foreground" strokeWidth={1.5} />
                </div>
                <h3 className="font-heading uppercase text-lg">{c.name}</h3>
                <p className="text-sm text-primary mt-1">{c.spec}</p>
                <p className="text-xs text-muted-foreground mt-1">{c.cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {[
          { icon: Calendar, n: "8+", l: "Años en el mercado" },
          { icon: MapPin, n: "5", l: "Sedes en Jaén" },
          { icon: Users, n: "5,000+", l: "Socios activos" },
          { icon: Trophy, n: "1,200+", l: "Transformaciones" },
        ].map((s) => (
          <div key={s.l}>
            <s.icon className="h-8 w-8 text-primary mx-auto mb-3" strokeWidth={1.5} />
            <div className="font-display text-5xl">{s.n}</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </section>
    </Layout>
  );
}
