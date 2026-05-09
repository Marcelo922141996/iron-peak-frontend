import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import heroImg from "@/assets/hero.jpg";
import musculacionImg from "@/assets/musculacion.jpg";
import cardioImg from "@/assets/cardio.jpg";
import funcionalImg from "@/assets/funcional.jpg";
import clasesImg from "@/assets/clases.jpg";
import coachImg from "@/assets/coach.jpg";
import nutricionImg from "@/assets/nutricion.jpg";
import {
  Dumbbell, HeartPulse, Activity, Users, Apple, UserCheck,
  Clock, MapPin, Star, Trophy, Flame, ShieldCheck, ArrowRight, Quote
} from "lucide-react";
import { SEDES, PLANES, SITE } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Iron Gym Jaén — El gimnasio más emblemático de Jaén · #SETUMEJORVERSION" },
      { name: "description", content: "5 sedes en Jaén, maquinaria de élite, entrenadores certificados y atención desde las 5:00 AM. Únete a más de 15,000 atletas." },
      { property: "og:title", content: "Iron Gym Jaén · #SETUMEJORVERSION" },
      { property: "og:description", content: "El gimnasio más emblemático de Jaén. Inscríbete hoy." },
    ],
  }),
  component: Home,
});

const SERVICES = [
  { icon: Dumbbell, title: "Musculación", img: musculacionImg },
  { icon: HeartPulse, title: "Cardio", img: cardioImg },
  { icon: Activity, title: "Funcional", img: funcionalImg },
  { icon: Users, title: "Clases grupales", img: clasesImg },
  { icon: UserCheck, title: "Personal Trainer", img: coachImg },
  { icon: Apple, title: "Nutrición", img: nutricionImg },
];

const REASONS = [
  { icon: Dumbbell, title: "Maquinaria de élite", text: "Equipos de última generación renovados constantemente." },
  { icon: UserCheck, title: "Coaches certificados", text: "Entrenadores formados y con resultados comprobados." },
  { icon: MapPin, title: "5 sedes en Jaén", text: "La mayor red de gimnasios de la ciudad, cerca de ti." },
  { icon: Clock, title: "Abrimos 5:00 AM", text: "Lunes a sábado desde temprano. Domingos desde las 9:00 AM." },
  { icon: Users, title: "+15K atletas", text: "Una comunidad fuerte que entrena, crece y motiva contigo." },
  { icon: Flame, title: "Promociones activas", text: "2x1, descuentos en inscripción y planes flexibles." },
];

const TESTIMONIOS = [
  { name: "Carlos M.", role: "Socio · Sede Principal", text: "El mejor gym de Jaén. Maquinaria nueva, ambiente top y los coaches te empujan a más." },
  { name: "Lucía R.", role: "Socia · Bolívar Plaza", text: "Bajé 12 kg en 4 meses con el plan nutricional. Hoy entreno feliz." },
  { name: "Diego T.", role: "Socio · Los Robles", text: "Llevo 2 años aquí. Es el ambiente, la gente y los precios. No cambio Iron Gym por nada." },
];

function Home() {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <img src={heroImg} alt="Atleta entrenando en Iron Gym Jaén" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-32 lg:py-48">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 mb-6 backdrop-blur">
            <Star className="h-3.5 w-3.5 text-primary fill-primary" />
            <span className="text-xs font-heading uppercase tracking-widest">+15K en redes · 4.3 en Google</span>
          </div>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-wider leading-[0.9] max-w-4xl">
            SÉ TU MEJOR <span className="text-gradient">VERSIÓN</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl">
            5 sedes · Maquinaria de élite · Atención desde las 5:00 AM. El gimnasio más emblemático de Jaén te está esperando.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/planes" className="inline-flex items-center gap-2 rounded-sm bg-gradient-primary px-7 py-4 font-heading uppercase tracking-wider text-primary-foreground shadow-glow hover:scale-105 transition">
              <Flame className="h-5 w-5" /> Inscríbete ahora
            </Link>
            <Link to="/sedes" className="inline-flex items-center gap-2 rounded-sm border border-border bg-background/40 backdrop-blur px-7 py-4 font-heading uppercase tracking-wider hover:border-primary hover:text-primary transition">
              <MapPin className="h-5 w-5" /> Encuentra tu sede
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { n: "5", l: "Sedes en Jaén" },
            { n: "15K+", l: "Comunidad IG" },
            { n: "83K+", l: "Comunidad FB" },
            { n: "4.3★", l: "Google Maps" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-5xl text-primary">{s.n}</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Por qué Iron Gym</p>
          <h2 className="font-display text-4xl lg:text-6xl mt-3">FORJAMOS HIERRO, FORJAMOS PERSONAS</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r) => (
            <div key={r.title} className="group p-7 border border-border bg-card hover:border-primary transition shadow-card">
              <r.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl uppercase tracking-wide">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{r.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Servicios</p>
              <h2 className="font-display text-4xl lg:text-6xl mt-3">TODO LO QUE NECESITAS</h2>
            </div>
            <Link to="/servicios" className="inline-flex items-center gap-2 font-heading uppercase tracking-wider text-sm text-primary">Ver todos <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <div key={s.title} className="group relative overflow-hidden border border-border aspect-[4/5]">
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <s.icon className="h-7 w-7 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-display text-3xl tracking-wider">{s.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEDES */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Nuestras sedes</p>
          <h2 className="font-display text-4xl lg:text-6xl mt-3">5 SEDES EN JAÉN</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SEDES.map((s) => (
            <div key={s.slug} className="group p-7 border border-border bg-card hover:border-primary transition">
              <MapPin className="h-7 w-7 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="font-heading text-2xl uppercase">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.address}</p>
              <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {s.horario}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PLANES */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Planes</p>
            <h2 className="font-display text-4xl lg:text-6xl mt-3">ELIGE TU CAMINO</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {PLANES.slice(0, 3).map((p) => (
              <div key={p.name} className={`p-8 border ${p.highlight ? "border-primary bg-card shadow-glow" : "border-border bg-card"}`}>
                {p.highlight && <div className="text-xs font-heading uppercase tracking-widest text-primary mb-2">Más popular</div>}
                <h3 className="font-display text-3xl">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-5xl text-primary">S/{p.price}</span>
                  <span className="text-sm text-muted-foreground">/{p.period}</span>
                </div>
                <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /> {f}</li>)}
                </ul>
                <Link to="/planes" className={`mt-7 block text-center py-3 font-heading uppercase tracking-wider text-sm ${p.highlight ? "bg-gradient-primary text-primary-foreground" : "border border-border hover:border-primary"} transition`}>
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/planes" className="font-heading uppercase tracking-wider text-sm text-primary inline-flex items-center gap-2">Ver todos los planes <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Testimonios</p>
          <h2 className="font-display text-4xl lg:text-6xl mt-3">HISTORIAS DE HIERRO</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {TESTIMONIOS.map((t) => (
            <div key={t.name} className="p-7 border border-border bg-card">
              <Quote className="h-7 w-7 text-primary mb-3" strokeWidth={1.5} />
              <p className="text-foreground/90">"{t.text}"</p>
              <div className="mt-5 pt-5 border-t border-border">
                <div className="font-heading uppercase">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TRANSFORMACIONES TEASER */}
      <section className="relative overflow-hidden border-y border-border">
        <img src={coachImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-20 text-center">
          <Trophy className="h-12 w-12 text-primary mx-auto mb-4" strokeWidth={1.5} />
          <h2 className="font-display text-4xl lg:text-6xl">RESERVA TU CLASE DE PRUEBA <span className="text-primary">GRATIS</span></h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Ven, conoce nuestras sedes y entrena un día con nosotros. Sin compromiso.</p>
          <a href={`https://wa.me/51${SITE.whatsapp}?text=Quiero%20mi%20clase%20de%20prueba%20gratis`} target="_blank" rel="noreferrer" className="inline-flex mt-8 items-center gap-2 rounded-sm bg-gradient-primary px-8 py-4 font-heading uppercase tracking-wider text-primary-foreground shadow-glow hover:scale-105 transition">
            Reservar por WhatsApp
          </a>
        </div>
      </section>
    </Layout>
  );
}
