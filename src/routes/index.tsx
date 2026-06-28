import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { Layout } from "@/components/site/Layout";
import { BeforeAfterSlider } from "@/components/site/BeforeAfterSlider";
import { TrialBookingForm } from "@/components/site/TrialBookingForm";
import { ProductDetailDialog } from "@/components/site/ProductDetailDialog";
import { CounterStat } from "@/components/site/CounterStat";
import { InfiniteMarquee } from "@/components/site/InfiniteMarquee";
import { TestimonialsCarousel } from "@/components/site/TestimonialsCarousel";
import { ProductImageCarousel } from "@/components/site/ProductImageCarousel";
import { useCart } from "@/lib/cart-context";
import { HeroFog } from "@/components/three/HeroFog";
import heroImg from "@/assets/imagen/hero.jpg";
import musculacionImg from "@/assets/imagen/musculacion.jpg";
import cardioImg from "@/assets/imagen/cardio.jpg";
import funcionalImg from "@/assets/imagen/funcional.jpg";
import clasesImg from "@/assets/imagen/clases.jpg";
import coachImg from "@/assets/imagen/coach.jpg";
import nutricionImg from "@/assets/imagen/nutricion.jpg";
import uTesti1 from "@/assets/imagen/u-testi-1.jpg";
import uTesti2 from "@/assets/imagen/u-testi-2.jpg";
import uTesti3 from "@/assets/imagen/u-testi-3.jpg";
import uTesti4 from "@/assets/imagen/u-testi-4.jpg";
import uTesti5 from "@/assets/imagen/u-testi-5.jpg";
import {
  Dumbbell, HeartPulse, Activity, Users, Apple, UserCheck,
  Clock, MapPin, Star, Trophy, Flame, Check, ArrowRight,
  Instagram, MessageCircle, ShoppingBag, CalendarDays, Phone, Plus,
} from "lucide-react";
import { SEDES, PLANES, SITE, PRODUCTS, DIAS, SCHEDULE, TRANSFORMACIONES, INSTAGRAM_POSTS, waUrl, type Objetivo, type Product } from "@/lib/site-data";

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
  { icon: Dumbbell, title: "Musculación", desc: "Mancuernas, barras y máquinas de élite para hipertrofia y fuerza.", img: musculacionImg },
  { icon: HeartPulse, title: "Cardio", desc: "Cintas, bicicletas y elípticas de última generación.", img: cardioImg },
  { icon: Activity, title: "Funcional", desc: "Kettlebells, TRX, battle ropes y entrenamiento integral.", img: funcionalImg },
  { icon: Users, title: "Clases grupales", desc: "Spinning, zumba, aeróbicos y calistenia en grupo.", img: clasesImg },
  { icon: UserCheck, title: "Personal Trainer", desc: "Sesiones 1 a 1 con seguimiento profesional.", img: coachImg },
  { icon: Apple, title: "Nutrición", desc: "Plan de alimentación y suplementación a medida.", img: nutricionImg },
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
  { name: "Carlos M.", role: "Socio · Sede Principal", text: "El mejor gym de Jaén. Maquinaria nueva, ambiente top y los coaches te empujan a más.", img: uTesti1 },
  { name: "Lucía R.", role: "Socia · Bolívar Plaza", text: "Bajé 12 kg en 4 meses con el plan nutricional. Hoy entreno feliz.", img: uTesti2 },
  { name: "Diego T.", role: "Socio · Los Robles", text: "Llevo 2 años aquí. Es el ambiente, la gente y los precios. No cambio Iron Gym por nada.", img: uTesti3 },
  { name: "Ana P.", role: "Socia · Pueblo Libre", text: "Los coaches son lo máximo, la sala siempre limpia y con buena energía.", img: uTesti4 },
  { name: "Renato S.", role: "Socio · Alfredo Bastos", text: "Subí 14 kg de músculo en un año con el personal trainer.", img: uTesti5 },
];

const OBJETIVOS: ("Todos" | Objetivo)[] = ["Todos", "Pérdida de peso", "Ganancia muscular", "Definición"];
const TIENDA_CATS = ["Todos", "Suplemento", "Indumentaria", "Accesorio", "Nutrición"];

function planWaHref(planName: string) {
  return waUrl(SITE.whatsapp, `Hola Iron Gym, quiero inscribirme al plan ${planName}. ¿Me dan más información?`);
}

function TiendaCard({ p, onOpen }: { p: Product; onOpen: () => void }) {
  const { add } = useCart();
  return (
    <div className="tienda-card glass !p-0 overflow-hidden flex flex-col group" data-fx="card">
      <div
        role="button"
        tabIndex={0}
        onClick={onOpen}
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }}
        className="aspect-square bg-gradient-hero relative overflow-hidden block w-full text-left cursor-pointer"
      >
        <ProductImageCarousel images={p.images} cat={p.cat} alt={p.name} />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition duration-500 pointer-events-none" />
        <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur text-[10px] font-techmono uppercase tracking-widest text-white/80 border border-white/10">{p.cat}</span>
      </div>
      <div className="p-4 sm:p-5 flex flex-col flex-1">
        <button onClick={onOpen} className="text-left">
          <h3 className="font-heading text-sm sm:text-base uppercase">{p.name}</h3>
          <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{p.desc}</p>
        </button>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="font-bebas text-primary" style={{ fontSize: "1.4rem" }}>S/{p.price}</span>
          <button
            onClick={() => add(p, 1)}
            className="inline-flex items-center gap-1 px-3 py-2 rounded-full bg-gradient-primary text-primary-foreground text-[10px] font-heading uppercase tracking-wider shadow-glow hover:scale-105 transition"
          >
            <Plus className="h-3 w-3" /> Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const [dia, setDia] = useState<string>(DIAS[0]);
  const [objetivo, setObjetivo] = useState<"Todos" | Objetivo>("Todos");
  const [activeProduct, setActiveProduct] = useState<Product | null>(null);
  const [tiendaCat, setTiendaCat] = useState("Todos");
  const [sedeIdx, setSedeIdx] = useState(0);

  const transformaciones = objetivo === "Todos" ? TRANSFORMACIONES : TRANSFORMACIONES.filter((t) => t.objetivo === objetivo);
  const tiendaList = useMemo(
    () => (tiendaCat === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === tiendaCat)).slice(0, 12),
    [tiendaCat]
  );
  const sedeActiva = SEDES[sedeIdx];

  // Hero word-by-word reveal
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroImgRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (!heroTitleRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".reveal-word", {
        y: 80, opacity: 0, duration: 1, ease: "power4.out", stagger: 0.12, delay: 0.2,
      });
      // Cinematic zoom-in on hero background
      if (heroImgRef.current) {
        gsap.fromTo(
          heroImgRef.current,
          { scale: 1.25, filter: "brightness(0.6)" },
          { scale: 1, filter: "brightness(1)", duration: 2.4, ease: "power3.out" }
        );
      }
    }, heroTitleRef);
    return () => ctx.revert();
  }, []);

  // Tienda fade-in stagger on category change
  const tiendaGridRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!tiendaGridRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".tienda-card", { y: 24, opacity: 0, duration: 0.55, ease: "power2.out", stagger: 0.05 });
    }, tiendaGridRef);
    return () => ctx.revert();
  }, [tiendaCat]);

  // Schedule rows stagger on day change
  const scheduleRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!scheduleRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(".sched-row", { y: -18, opacity: 0, duration: 0.45, ease: "power2.out", stagger: 0.06 });
    }, scheduleRef);
    return () => ctx.revert();
  }, [dia]);

  // Sede crossfade
  const sedeDetailRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!sedeDetailRef.current) return;
    gsap.fromTo(sedeDetailRef.current, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.55, ease: "power2.out" });
  }, [sedeIdx]);

  return (
    <Layout>
      {/* HERO */}
      <section className="relative overflow-hidden min-h-[92vh] bg-background">
        <img
          ref={heroImgRef}
          src={heroImg}
          alt="Atleta entrenando en Iron Gym Jaén"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover opacity-90 will-change-transform origin-center"
          data-parallax
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/65 to-background/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {/* niebla volumétrica roja */}
        <div className="absolute inset-x-0 bottom-0 h-[60%]"><HeroFog /></div>
        {/* viñeta roja sutil */}
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 50% at 80% 20%, rgba(232,0,13,.18), transparent 70%)" }} />

        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-28 lg:py-44">
          <div className="glass-pill mb-6">
            <Star className="h-3.5 w-3.5 text-primary fill-primary" />
            +15K en redes · 4.3 en Google
          </div>
          <h1 ref={heroTitleRef} className="font-bebas tracking-wider leading-[0.88] max-w-5xl" style={{ fontSize: "clamp(3.5rem, 11vw, 9rem)" }}>
            <span className="reveal-word">SÉ&nbsp;</span>
            <span className="reveal-word">TU&nbsp;</span>
            <span className="reveal-word">MEJOR&nbsp;</span>
            <span className="reveal-word text-gradient">VERSIÓN</span>
          </h1>
          <p className="mt-6 text-lg lg:text-xl text-muted-foreground max-w-2xl">
            5 sedes · Maquinaria de élite · Atención desde las 5:00 AM. El gimnasio más emblemático de Jaén te está esperando.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#planes" className="btn-pill btn-pill-primary"><Flame className="h-5 w-5" /> Inscríbete ahora</a>
            <a href="#sedes" className="btn-pill btn-pill-glass"><MapPin className="h-5 w-5" /> Encuentra tu sede</a>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <InfiniteMarquee />

      {/* STATS */}
      <section className="bg-surface border-b border-border">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/30">
            <CounterStat value={5} label="Sedes en Jaén" />
            <CounterStat value={15000} suffix="+" label="Comunidad IG" />
            <CounterStat value={83000} suffix="+" label="Comunidad FB" />
            <CounterStat value={43} label="Google Maps · /10" />
          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="text-center mb-14">
          <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Por qué Iron Gym</p>
          <h2 className="font-bebas mt-3 leading-[0.95]" style={{ fontSize: "clamp(2.5rem, 7vw, 5.6rem)" }}>
            FORJAMOS HIERRO,<br />FORJAMOS PERSONAS
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {REASONS.map((r) => (
            <div key={r.title} data-fx="card" className="glass p-7 group">
              <div className="grid place-items-center h-12 w-12 rounded-full bg-primary/15 border border-primary/30 mb-4 group-hover:shadow-glow transition">
                <r.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="font-heading text-xl uppercase tracking-wide">{r.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{r.text}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-16 md:mt-20">
          <Link to="/nosotros" className="btn-pill btn-pill-outline">Ver más <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-surface py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 50% at 50% 0%, rgba(232,0,13,.08), transparent 60%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Servicios</p>
            <h2 className="font-bebas mt-3" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}>TODO LO QUE NECESITAS</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {SERVICES.map((s) => (
              <article key={s.title} className="group relative overflow-hidden border border-border shadow-card transition-all duration-500 hover:scale-[1.03] hover:border-primary/60 hover:shadow-[0_20px_60px_-20px_rgba(232,0,13,.6)]" style={{ borderRadius: 24, height: 380 }}>
                <img src={s.img} alt={s.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.55) 60%, rgba(120,0,0,0.85) 100%)" }} />
                <div className="absolute inset-x-0 bottom-0 p-7 transition-transform duration-500 group-hover:-translate-y-2">
                  <s.icon className="h-6 w-6 text-primary mb-3" strokeWidth={1.5} />
                  <div className="h-px w-0 bg-primary transition-all duration-500 group-hover:w-12 mb-3" />
                  <h3 className="font-bebas tracking-wider text-white" style={{ fontSize: "1.75rem" }}>{s.title}</h3>
                  <p className="text-sm text-white/70 mt-2 max-h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:max-h-24 group-hover:opacity-100">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-16 md:mt-20">
            <Link to="/servicios" className="btn-pill btn-pill-outline">Ver más <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      {/* SEDES */}
      <section id="sedes" className="mx-auto max-w-7xl px-4 lg:px-8 py-24 scroll-mt-20">
        <div className="text-center mb-12">
          <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Nuestras sedes</p>
          <h2 className="font-bebas mt-3" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}>5 SEDES EN JAÉN</h2>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {SEDES.map((s, i) => (
            <button
              key={s.slug}
              onClick={() => setSedeIdx(i)}
              data-active={i === sedeIdx}
              className="glass-pill"
              style={i === sedeIdx ? { background: "rgba(232,0,13,0.12)", borderColor: "rgba(232,0,13,0.7)", color: "var(--color-primary)", boxShadow: "var(--shadow-glow)" } : undefined}
            >
              <MapPin className="h-3.5 w-3.5" /> {s.name}
            </button>
          ))}
        </div>
        <div ref={sedeDetailRef} key={sedeActiva.slug} className="glass p-6 lg:p-10 max-w-6xl mx-auto" data-fx="card">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="overflow-hidden rounded-2xl border border-border">
              <iframe
                title={sedeActiva.name}
                src={`https://www.google.com/maps?q=${encodeURIComponent(sedeActiva.address + ", Jaén, Perú")}&output=embed`}
                className="w-full h-72 lg:h-80 border-0"
                loading="lazy"
              />
            </div>
            <div>
              <p className="font-techmono text-xs text-primary uppercase tracking-widest">{sedeActiva.note}</p>
              <h3 className="font-bebas mt-2" style={{ fontSize: "2.5rem" }}>{sedeActiva.name}</h3>
              <p className="text-muted-foreground mt-3 flex items-start gap-2"><MapPin className="h-4 w-4 text-primary mt-1 shrink-0" /> {sedeActiva.address}</p>
              <p className="text-muted-foreground mt-2 flex items-start gap-2"><Clock className="h-4 w-4 text-primary mt-1 shrink-0" /> {sedeActiva.horario}</p>
              <p className="text-muted-foreground mt-2 flex items-start gap-2"><Phone className="h-4 w-4 text-primary mt-1 shrink-0" /> +51 {sedeActiva.whatsapp}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={waUrl(sedeActiva.whatsapp, `Hola Iron Gym ${sedeActiva.name}, quiero más información.`)} target="_blank" rel="noreferrer" className="btn-pill btn-pill-primary"><MessageCircle className="h-4 w-4" /> WhatsApp sede</a>
                <a href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(sedeActiva.address + ", Jaén, Perú")}`} target="_blank" rel="noreferrer" className="btn-pill btn-pill-glass">Cómo llegar <ArrowRight className="h-4 w-4" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section id="planes" className="bg-surface py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Planes</p>
            <h2 className="font-bebas mt-3" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}>ELIGE TU CAMINO</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {PLANES.map((p) => (
              <div
                key={p.name}
                data-fx="card"
                className={`glass relative w-full p-7 flex flex-col ${p.highlight ? "z-10 border-primary/60" : ""}`}
                style={{ borderRadius: 24 }}
              >
                {p.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-gradient-primary text-primary-foreground font-heading uppercase text-[10px] tracking-widest shadow-glow">
                    Más popular
                  </span>
                )}
                <h3 className="font-bebas tracking-wider" style={{ fontSize: "2rem" }}>{p.name}</h3>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className="font-bebas text-primary leading-none" style={{ fontSize: "3.5rem" }}>S/{p.price}</span>
                  <span className="text-xs text-muted-foreground">/{p.period}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm text-foreground/85 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-primary mt-0.5 shrink-0" /> {f}</li>
                  ))}
                </ul>
                <a href={planWaHref(p.name)} target="_blank" rel="noreferrer" className={`mt-6 btn-pill ${p.highlight ? "btn-pill-primary" : "btn-pill-outline"}`}>
                  <MessageCircle className="h-4 w-4" /> {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIENDA PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="text-center mb-10">
          <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Tienda</p>
          <h2 className="font-bebas mt-3" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}>EQUÍPATE PARA ROMPER</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Suplementos, indumentaria y accesorios. Pide por WhatsApp y recoge en sede.</p>
        </div>
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {TIENDA_CATS.map((c) => (
            <button key={c} onClick={() => setTiendaCat(c)} data-active={tiendaCat === c} className="glass-pill">{c}</button>
          ))}
        </div>
        <div ref={tiendaGridRef} className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {tiendaList.map((p) => (
            <TiendaCard key={p.id} p={p} onOpen={() => setActiveProduct(p)} />
          ))}
        </div>
        <div className="text-center mt-16 md:mt-20">
          <Link to="/tienda" className="btn-pill btn-pill-outline"><ShoppingBag className="h-4 w-4" /> Ver más productos</Link>
        </div>
      </section>

      {/* HORARIOS */}
      <section id="horarios" className="bg-surface py-24 scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-10">
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Horarios</p>
            <h2 className="font-bebas mt-3" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}>CRONOGRAMA SEMANAL</h2>
            <p className="text-muted-foreground mt-3">Apertura desde las 5:00 AM lunes a sábado · Domingos desde las 9:00 AM.</p>
          </div>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {DIAS.map((d) => (
              <button key={d} onClick={() => setDia(d)} data-active={dia === d} className="glass-pill">{d}</button>
            ))}
          </div>
          <div ref={scheduleRef} className="max-w-3xl mx-auto space-y-3">
            {SCHEDULE[dia].map((c, i) => (
              <div key={`${dia}-${i}`} className="sched-row glass !rounded-xl p-4 flex items-center justify-between gap-4">
                <div className="font-bebas text-primary leading-none w-20 md:w-24" style={{ fontSize: "1.75rem" }}>{c.hora}</div>
                <div className="flex-1">
                  <div className="font-heading uppercase">{c.clase}</div>
                  <div className="text-xs text-muted-foreground">Coach {c.coach}</div>
                </div>
                <a
                  href={waUrl(SITE.whatsapp, `Quiero reservar la clase de ${c.clase} el ${dia} a las ${c.hora}`)}
                  target="_blank" rel="noreferrer"
                  className="btn-pill btn-pill-outline !py-2 !px-4 !text-[10px]"
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
        <div className="text-center mb-10">
          <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Transformaciones</p>
          <h2 className="font-bebas mt-3" style={{ fontSize: "clamp(2.5rem, 7vw, 5.6rem)" }}>ANTES &amp; DESPUÉS</h2>
          <p className="text-muted-foreground mt-3 max-w-xl mx-auto">Arrastra el slider y comprueba cómo entrenan, cambian y rompen sus límites en Iron Gym.</p>
        </div>
        <div className="flex flex-wrap gap-2 mb-10 justify-center">
          {OBJETIVOS.map((o) => (
            <button key={o} onClick={() => setObjetivo(o)} data-active={objetivo === o} className="glass-pill">{o}</button>
          ))}
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {transformaciones.map((t) => (
            <div key={t.name} data-fx="card" className="glass !p-0 overflow-hidden">
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

      {/* RESERVA TRIAL — Cinemática */}
      <section className="relative overflow-hidden border-y border-border">
        <img src={coachImg} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(60% 50% at 30% 50%, rgba(232,0,13,.18), transparent 70%)" }} />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8 py-24 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Reserva tu clase</p>
            <h2 className="font-bebas mt-3 leading-[0.95] text-white" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}>
              AGENDA TU<br /><span className="text-primary">PRÓXIMA CLASE</span>
            </h2>
            <p className="text-white/80 mt-4 max-w-md">
              Elige sede, día y hora. Te confirmamos por WhatsApp para que vengas a entrenar sin contratiempos.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-white/90">
              <li className="flex gap-2"><Check className="h-5 w-5 text-primary mt-0.5" /> Acceso completo a la sede</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-primary mt-0.5" /> Asesoría inicial personalizada</li>
              <li className="flex gap-2"><Check className="h-5 w-5 text-primary mt-0.5" /> Reserva rápida vía WhatsApp</li>
            </ul>
          </div>
          <div className="glass !p-6 sm:!p-8" style={{ borderRadius: 24, background: "rgba(0,0,0,0.7)" }}>
            <TrialBookingForm />
          </div>
        </div>
      </section>

      {/* INSTAGRAM FEED */}
      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-24">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm flex items-center gap-2"><Instagram className="h-4 w-4" /> @gimnasioirongymjaen</p>
            <h2 className="font-bebas mt-3" style={{ fontSize: "clamp(2.2rem, 5.5vw, 4rem)" }}>SÍGUENOS EN INSTAGRAM</h2>
          </div>
          <a href={SITE.instagram} target="_blank" rel="noreferrer" className="btn-pill btn-pill-outline">Ver perfil <ArrowRight className="h-4 w-4" /></a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {INSTAGRAM_POSTS.map((post) => (
            <a
              key={post.id}
              href={post.url}
              target="_blank"
              rel="noreferrer"
              className="group relative block aspect-square overflow-hidden border border-border bg-card"
            >
              <img
                src={post.img}
                alt={post.caption}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-3">
                <Instagram className="h-5 w-5 text-white mb-1" />
                <p className="text-xs text-white font-medium line-clamp-2">{post.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section className="bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-12">
            <p className="font-heading uppercase tracking-[0.3em] text-primary text-sm">Testimonios</p>
            <h2 className="font-bebas mt-3" style={{ fontSize: "clamp(2.5rem, 6.5vw, 5rem)" }}>HISTORIAS DE HIERRO</h2>
          </div>
          <TestimonialsCarousel items={TESTIMONIOS} />
        </div>
      </section>

      <ProductDetailDialog product={activeProduct} open={!!activeProduct} onOpenChange={(v) => !v && setActiveProduct(null)} />
    </Layout>
  );
}