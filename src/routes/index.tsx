import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Layout } from "@/components/site/Layout";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { TrialBookingForm } from "@/components/site/TrialBookingForm";
import { ProductDetailDialog } from "@/components/site/ProductDetailDialog";
import { InstagramEmbedGrid } from "@/components/site/InstagramEmbedGrid";
import { Tilt3DCard } from "@/components/site/Tilt3DCard";
import heroImg from "@/assets/hero.jpg";
import musculacionImg from "@/assets/musculacion.jpg";
import cardioImg from "@/assets/cardio.jpg";
import funcionalImg from "@/assets/funcional.jpg";
import clasesImg from "@/assets/clases.jpg";
import coachImg from "@/assets/coach.jpg";
import nutricionImg from "@/assets/nutricion.jpg";
import {
  Dumbbell, HeartPulse, Activity, Users, Apple, UserCheck,
  Clock, MapPin, Star, Trophy, Flame, ShieldCheck, ArrowRight, Quote,
  Instagram, Package, MessageCircle, ShoppingBag, ChevronDown, CalendarDays,
} from "lucide-react";
import { SEDES, PLANES, SITE, PRODUCTS, DIAS, SCHEDULE, TRANSFORMACIONES, INSTAGRAM_POST_URLS, type Objetivo, type Product } from "@/lib/site-data";

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

const OBJETIVOS: ("Todos" | Objetivo)[] = ["Todos", "Pérdida de peso", "Ganancia muscular", "Definición"];

function planWaHref(planName: string) {
  return `https://wa.me/51${SITE.whatsapp}?text=${encodeURIComponent(`Hola Iron Gym, quiero inscribirme al plan ${planName}. ¿Me dan más información?`)}`;
}

function Home() {
  const [showAllPlans, setShowAllPlans] = useState(false);
  const [dia, setDia] = useState<string>(DIAS[0]);
  const [objetivo, setObjetivo] = useState<"Todos" | Objetivo>("Todos");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const planesVisibles = showAllPlans ? PLANES : PLANES.slice(0, 3);
  const transformaciones = objetivo === "Todos" ? TRANSFORMACIONES : TRANSFORMACIONES.filter((t) => t.objetivo === objetivo);
  const tiendaPreview = PRODUCTS.slice(0, 4);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[88vh]">
        <img src={heroImg} alt="Atleta entrenando en Iron Gym Jaén" width={1920} height={1280} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
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
            <a href="#planes" className="inline-flex items-center gap-2 rounded-sm bg-gradient-primary px-7 py-4 font-heading uppercase tracking-wider text-primary-foreground shadow-glow hover:scale-105 transition">
              <Flame className="h-5 w-5" /> Inscríbete ahora
            </a>
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
            <Tilt3DCard key={r.title} className="group p-7 border border-border bg-card hover:border-primary transition shadow-card overflow-hidden">
              <r.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-heading text-xl uppercase tracking-wide">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{r.text}</p>
            </Tilt3DCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/nosotros" className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary hover:text-primary font-heading uppercase tracking-wider text-sm transition">
            Ver más <ArrowRight className="h-4 w-4" />
          </Link>
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
              <Tilt3DCard key={s.title} intensity={8} className="group relative overflow-hidden border border-border aspect-[4/5] shadow-card">
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <s.icon className="h-7 w-7 text-primary mb-3" strokeWidth={1.5} />
                  <h3 className="font-display text-3xl tracking-wider">{s.title}</h3>
                </div>
              </Tilt3DCard>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/servicios" className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary hover:text-primary font-heading uppercase tracking-wider text-sm transition">
              Ver más <ArrowRight className="h-4 w-4" />
            </Link>
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
            <Link key={s.slug} to="/sedes" hash={s.slug} className="group p-7 border border-border bg-card hover:border-primary hover:shadow-glow transition block">
              <MapPin className="h-7 w-7 text-primary mb-3" strokeWidth={1.5} />
              <h3 className="font-heading text-2xl uppercase">{s.name}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.address}</p>
              <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5"><Clock className="h-3.5 w-3.5" /> {s.horario}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-heading uppercase tracking-wider text-primary">
                Ver detalle <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="bg-surface py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Planes</p>
            <h2 className="font-display text-4xl lg:text-6xl mt-3">ELIGE TU CAMINO</h2>
          </div>
          <div className={`grid gap-5 max-w-6xl mx-auto ${showAllPlans ? "md:grid-cols-2 lg:grid-cols-5" : "md:grid-cols-3"}`}>
            {planesVisibles.map((p) => (
              <Tilt3DCard key={p.name} intensity={10} className={`p-7 border ${p.highlight ? "border-primary bg-card shadow-glow" : "border-border bg-card"} flex flex-col`}>
                {p.highlight && <div className="text-xs font-heading uppercase tracking-widest text-primary mb-2">Más popular</div>}
                <h3 className="font-display text-2xl">{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="font-display text-4xl text-primary">S/{p.price}</span>
                  <span className="text-xs text-muted-foreground">/{p.period}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground flex-1">
                  {p.features.map((f) => <li key={f} className="flex gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}</li>)}
                </ul>
                <a
                  href={planWaHref(p.name)}
                  target="_blank"
                  rel="noreferrer"
                  className={`mt-6 inline-flex items-center justify-center gap-2 py-3 font-heading uppercase tracking-wider text-xs ${p.highlight ? "bg-gradient-primary text-primary-foreground" : "border border-border hover:border-primary"} transition`}
                >
                  <MessageCircle className="h-4 w-4" /> {p.cta}
                </a>
              </Tilt3DCard>
            ))}
          </div>
          <div className="text-center mt-8">
            <button onClick={() => setShowAllPlans((v) => !v)} className="font-heading uppercase tracking-wider text-sm text-primary inline-flex items-center gap-2 hover:gap-3 transition-all">
              {showAllPlans ? "Ver menos planes" : "Ver todos los planes"}
              <ChevronDown className={`h-4 w-4 transition-transform ${showAllPlans ? "rotate-180" : ""}`} />
            </button>
          </div>
        </div>
      </section>

      {/* TIENDA PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <div>
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Tienda</p>
            <h2 className="font-display text-4xl lg:text-6xl mt-3">EQUÍPATE PARA ROMPER</h2>
            <p className="text-muted-foreground mt-3 max-w-xl">Suplementos, indumentaria y accesorios oficiales. Pide por WhatsApp y recoge en sede.</p>
          </div>
          <Link to="/tienda" className="inline-flex items-center gap-2 font-heading uppercase tracking-wider text-sm text-primary">Ver toda la tienda <ArrowRight className="h-4 w-4" /></Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tiendaPreview.map((p) => (
            <button key={p.id} onClick={() => setActiveProduct(p)} className="text-left border border-border bg-card overflow-hidden group flex flex-col hover:border-primary hover:shadow-glow transition">
              <div className="aspect-square bg-gradient-hero grid place-items-center relative overflow-hidden">
                {p.images[0] ? (
                  <img src={p.images[0]} alt={p.name} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110" />
                ) : (
                  <Package className="h-20 w-20 text-primary/40" strokeWidth={1} />
                )}
                <span className="absolute top-3 left-3 text-[10px] font-heading uppercase tracking-widest bg-background/70 backdrop-blur px-2 py-1">{p.cat}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-heading text-base uppercase">{p.name}</h3>
                <p className="text-xs text-muted-foreground mt-1 flex-1">{p.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-display text-2xl text-primary">S/{p.price}</span>
                  <span className="inline-flex items-center gap-1.5 text-[10px] font-heading uppercase tracking-wider px-3 py-2 bg-gradient-primary text-primary-foreground">
                    Ver detalle
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/tienda" className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:border-primary hover:text-primary font-heading uppercase tracking-wider text-sm transition">
            <ShoppingBag className="h-4 w-4" /> Ver más productos
          </Link>
        </div>
      </section>

      {/* HORARIOS */}
      <section id="horarios" className="bg-surface py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Horarios</p>
            <h2 className="font-display text-4xl lg:text-6xl mt-3">CRONOGRAMA SEMANAL</h2>
            <p className="text-muted-foreground mt-3">Apertura desde las 5:00 AM lunes a sábado · Domingos desde las 9:00 AM.</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {DIAS.map((d) => (
              <button key={d} onClick={() => setDia(d)} className={`px-4 py-2 font-heading uppercase tracking-wider text-xs transition ${dia === d ? "bg-gradient-primary text-primary-foreground shadow-glow" : "border border-border hover:border-primary"}`}>{d}</button>
            ))}
          </div>
          <div className="border border-border bg-card divide-y divide-border max-w-3xl mx-auto">
            {SCHEDULE[dia].map((c, i) => (
              <div key={i} className="p-5 flex items-center justify-between gap-4">
                <div className="font-display text-2xl md:text-3xl text-primary w-20 md:w-24">{c.hora}</div>
                <div className="flex-1">
                  <div className="font-heading uppercase">{c.clase}</div>
                  <div className="text-xs text-muted-foreground">Coach {c.coach}</div>
                </div>
                <a
                  href={`https://wa.me/51${SITE.whatsapp}?text=${encodeURIComponent(`Quiero reservar la clase de ${c.clase} el ${dia} a las ${c.hora}`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 border border-border hover:border-primary hover:text-primary font-heading uppercase text-[10px] tracking-wider transition"
                >
                  Reservar
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRANSFORMACIONES */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="text-center mb-12">
          <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Transformaciones</p>
          <h2 className="font-display text-4xl lg:text-6xl mt-3">ANTES & DESPUÉS</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Arrastra el slider y comprueba cómo entrenan, cambian y rompen sus límites en Iron Gym.</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {OBJETIVOS.map((o) => (
            <button key={o} onClick={() => setObjetivo(o)} className={`px-4 py-2 font-heading uppercase tracking-wider text-xs transition ${objetivo === o ? "bg-gradient-primary text-primary-foreground shadow-glow" : "border border-border hover:border-primary"}`}>{o}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformaciones.map((t) => (
            <div key={t.name} className="border border-border bg-card overflow-hidden">
              <BeforeAfterSlider before={t.antes} after={t.despues} alt={t.name} />
              <div className="p-5">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-heading uppercase">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.objetivo} · {t.meses} meses</div>
                  </div>
                  <Trophy className="h-5 w-5 text-primary" strokeWidth={1.5} />
                </div>
                <p className="text-sm text-muted-foreground mt-3 italic">"{t.quote}"</p>
              </div>
            </div>
          ))}
        </div>
        {transformaciones.length === 0 && (
          <p className="text-center text-muted-foreground mt-10">No hay transformaciones para este filtro todavía.</p>
        )}
      </section>

      {/* RESERVA TRIAL */}
      <section className="relative overflow-hidden border-y border-border bg-surface">
        <img src={coachImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Clase de prueba</p>
            <h2 className="font-display text-4xl lg:text-6xl mt-3">RESERVA TU CLASE GRATIS</h2>
            <p className="text-muted-foreground mt-4 max-w-md">
              Elige sede, día y hora. Te confirmamos por WhatsApp y vienes a entrenar sin compromiso.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /> Acceso completo a la sede</li>
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /> Asesoría inicial gratis</li>
              <li className="flex gap-2"><ShieldCheck className="h-4 w-4 text-primary mt-0.5" /> Sin tarjeta, sin permanencia</li>
            </ul>
          </div>
          <TrialBookingForm />
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm flex items-center gap-2"><Instagram className="h-4 w-4" /> @gimnasioirongymjaen</p>
            <h2 className="font-display text-4xl lg:text-6xl mt-3">SÍGUENOS EN INSTAGRAM</h2>
          </div>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-heading uppercase tracking-wider text-sm text-primary">Ver perfil <ArrowRight className="h-4 w-4" /></a>
        </div>
        <InstagramEmbedGrid urls={INSTAGRAM_POST_URLS} />
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
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
        </div>
      </section>

      <ProductDetailDialog product={activeProduct} open={!!activeProduct} onOpenChange={(v) => !v && setActiveProduct(null)} />
    </Layout>
  );
}