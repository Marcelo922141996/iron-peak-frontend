import uLadyPro1 from "@/assets/imagen/u-lady-pro-1.jpg";
import uLadyPro2 from "@/assets/imagen/u-lady-pro-2.jpg";
import uLadyPro3 from "@/assets/imagen/u-lady-pro-3.jpg";
import uWhey1 from "@/assets/imagen/u-whey-1.jpg";
import uWhey2 from "@/assets/imagen/u-whey-2.jpg";
import uCreatina from "@/assets/imagen/u-creatina.jpg";
import uBcaa from "@/assets/imagen/u-bcaa.jpg";
import uPreentreno from "@/assets/imagen/u-preentreno.jpg";
import uQuemador from "@/assets/imagen/u-quemador.jpg";
import uPolo from "@/assets/imagen/u-polo.jpg";
import uTomatodo from "@/assets/imagen/u-tomatodo.jpg";
import uShaker from "@/assets/imagen/u-shaker.jpg";
import uGuantes from "@/assets/imagen/u-guantes.jpg";
import uCinturon from "@/assets/imagen/u-cinturon.jpg";
import uSnack from "@/assets/imagen/u-snack.jpg";
import uTrans1a from "@/assets/imagen/u-trans-1a.jpg";
import uTrans1b from "@/assets/imagen/u-trans-1b.jpg";
import uTrans2a from "@/assets/imagen/u-trans-2a.jpg";
import uTrans2b from "@/assets/imagen/u-trans-2b.jpg";
import uTrans3a from "@/assets/imagen/u-trans-3a.jpg";
import uTrans3b from "@/assets/imagen/u-trans-3b.jpg";
import uTrans4a from "@/assets/imagen/u-trans-4a.jpg";
import uTrans4b from "@/assets/imagen/u-trans-4b.jpg";
import uTrans5a from "@/assets/imagen/u-trans-5a.jpg";
import uTrans5b from "@/assets/imagen/u-trans-5b.jpg";
import uTrans6b from "@/assets/imagen/u-trans-6b.jpg";
import uIg3 from "@/assets/imagen/u-ig-3.jpg";
import uIg4 from "@/assets/imagen/u-ig-4.jpg";

const INSTAGRAM_URL = "https://www.instagram.com/gimnasioirongymjaen/";

export function waUrl(phone: string, text?: string): string {
  const base = `https://api.whatsapp.com/send?phone=51${phone}`;
  return text ? `${base}&text=${encodeURIComponent(text)}` : base;
}

export const SITE = {
  name: "Iron Gym",
  tagline: "#SETUMEJORVERSION",
  city: "Jaén, Cajamarca · Perú",
  whatsapp: "988499194",
  whatsapp2: "912836539",
  instagram: INSTAGRAM_URL,
  facebook: "https://facebook.com/gimnasioirongymjaen",
  email: "contacto@irongymjaen.pe",
};

export const SEDES = [
  {
    slug: "principal",
    name: "Sede Principal",
    address: "Calle Pedro Cornejo #349",
    note: "Sede madre del negocio",
    whatsapp: "988499194",
    horario: "Lun–Sáb 5:00 AM · Dom 9:00 AM",
  },
  {
    slug: "los-robles",
    name: "Sede Los Robles",
    address: "Calle Los Robles #269",
    note: "Zona residencial",
    whatsapp: "988499194",
    horario: "Lun–Sáb 5:00 AM · Dom 9:00 AM",
  },
  {
    slug: "pueblo-libre",
    name: "Sede Pueblo Libre",
    address: "Calle Iquitos #1065",
    note: "Sede más nueva",
    whatsapp: "912836539",
    horario: "Lun–Sáb 5:00 AM · Dom 9:00 AM",
  },
  {
    slug: "bolivar-plaza",
    name: "Sede Bolívar Plaza",
    address: "Simón Bolívar #1567, CC Bolívar Plaza, 2do piso (frente a la DISA)",
    note: "Centro comercial",
    whatsapp: "988499194",
    horario: "Lun–Sáb 5:00 AM · Dom 9:00 AM",
  },
  {
    slug: "alfredo-bastos",
    name: "Sede Alfredo Bastos",
    address: "Alfredo Bastos 555, Jaén 06801",
    note: "Sede de barrio",
    whatsapp: "912836539",
    horario: "Lun–Sáb 5:00 AM · Dom 9:00 AM",
  },
];

export const PLANES = [
  { name: "Day Pass", price: 15, period: "día", features: ["Acceso 1 sede", "Equipo completo", "Vestuarios"], cta: "Probar hoy" },
  { name: "Quincenal", price: 45, period: "15 días", features: ["Acceso 1 sede", "Clases grupales", "Vestuarios"], cta: "Inscribirme" },
  { name: "Mensual", price: 80, period: "mes", features: ["Acceso a todas las sedes", "Clases grupales", "Asesoría inicial", "Inscripción gratis"], cta: "Más popular", highlight: true },
  { name: "Trimestral", price: 210, period: "3 meses", features: ["Todas las sedes", "Clases grupales", "Asesoría", "Plan nutricional"], cta: "Inscribirme" },
  { name: "Anual", price: 720, period: "año", features: ["Todas las sedes", "Plan nutricional completo", "Personal trainer 4 sesiones", "2 meses gratis"], cta: "Mejor valor" },
];

export const SERVICIOS = [
  { slug: "musculacion", title: "Musculación", desc: "Mancuernas, barras y máquinas de élite para hipertrofia y fuerza." },
  { slug: "cardio", title: "Cardio", desc: "Cintas, bicicletas, elípticas y escaladoras de última generación." },
  { slug: "funcional", title: "Funcional", desc: "Kettlebells, TRX, battle ropes y entrenamiento integral." },
  { slug: "clases", title: "Clases grupales", desc: "Spinning, aeróbicos, zumba y calistenia con coaches certificados." },
  { slug: "personal", title: "Personal Trainer", desc: "Sesiones 1 a 1 con seguimiento profesional y plan a medida." },
  { slug: "nutricion", title: "Nutrición", desc: "Asesoría, plan de alimentación y suplementación para tus metas." },
];

export type Comment = { user: string; rating: number; text: string };
export type Product = {
  id: string;
  name: string;
  cat: string;
  price: number;
  desc: string;
  longDesc: string;
  images: string[];
  shipping: { jaen: number; nacional: number; eta: string };
  pickup: { available: boolean; sedes: string[]; note: string };
  stock: string;
  comments: Comment[];
};

const COMMON_PICKUP = {
  available: true,
  sedes: ["Sede Principal", "Bolívar Plaza", "Pueblo Libre", "Los Robles", "Alfredo Bastos"],
  note: "Recojo gratis en cualquiera de nuestras 5 sedes.",
};

export const PRODUCTS: Product[] = [
  { id: "lady-pro", name: "Lady Pro Proteína", cat: "Suplemento", price: 95,
    desc: "Proteína con aguaje, suero de leche, soya y colágeno.",
    longDesc: "Fórmula femenina con aguaje, colágeno hidrolizado y suero de leche. 22g de proteína, vitaminas y minerales para tonificar y cuidar tu piel.",
    images: [uLadyPro1, uLadyPro2, uLadyPro3],
    shipping: { jaen: 5, nacional: 18, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [
      { user: "Lucía R.", rating: 5, text: "Sabor delicioso y noté el cambio en 3 semanas." },
      { user: "Andrea P.", rating: 5, text: "Mejoró mi piel y mi recuperación post entreno." },
      { user: "María G.", rating: 4, text: "Buen producto, pediría que vuelva el sabor fresa." },
    ]},
  { id: "whey-2kg", name: "Whey Protein 2kg", cat: "Suplemento", price: 220,
    desc: "Proteína de suero, 24g por scoop.",
    longDesc: "Proteína de suero concentrada e hidrolizada, 24g por scoop, bajo en azúcares. Ideal para hipertrofia y recuperación.",
    images: [uWhey1, uWhey2],
    shipping: { jaen: 5, nacional: 22, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [
      { user: "Diego T.", rating: 5, text: "Se mezcla perfecto, sin grumos." },
      { user: "Renato S.", rating: 5, text: "Mi proteína de cabecera, rinde un montón." },
    ]},
  { id: "creatina", name: "Creatina Monohidratada", cat: "Suplemento", price: 75,
    desc: "300g · Pura, sin saborizantes.",
    longDesc: "Creatina monohidratada micronizada 100% pura. 60 servicios. Aumenta fuerza, potencia y volumen muscular.",
    images: [uCreatina],
    shipping: { jaen: 5, nacional: 15, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [
      { user: "Carlos M.", rating: 5, text: "Subí 3kg en banca en un mes." },
      { user: "Jhon S.", rating: 4, text: "Buen precio y calidad." },
    ]},
  { id: "bcaa", name: "BCAA 2:1:1", cat: "Suplemento", price: 90,
    desc: "Recuperación muscular acelerada.",
    longDesc: "Aminoácidos de cadena ramificada en proporción 2:1:1. Reducen la fatiga y aceleran la recuperación.",
    images: [uBcaa],
    shipping: { jaen: 5, nacional: 18, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [{ user: "Ana P.", rating: 5, text: "Menos agujetas al día siguiente." }]},
  { id: "preentreno", name: "Pre-entreno Burst", cat: "Suplemento", price: 110,
    desc: "Energía explosiva sin caída.",
    longDesc: "Pre-entreno con cafeína, beta-alanina y citrulina. Energía sostenida y bombeo brutal.",
    images: [uPreentreno],
    shipping: { jaen: 5, nacional: 18, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Pocas unidades",
    comments: [{ user: "Diego T.", rating: 5, text: "El bombeo es real, recomendado." }]},
  { id: "quemador", name: "Quemador Termogénico", cat: "Suplemento", price: 85,
    desc: "Apoyo al déficit calórico.",
    longDesc: "Termogénico con L-carnitina y té verde. Acelera el metabolismo y la oxidación de grasas.",
    images: [uQuemador],
    shipping: { jaen: 5, nacional: 15, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [{ user: "María G.", rating: 4, text: "Me ayudó a romper meseta." }]},
  { id: "polo", name: "Polo Iron Gym", cat: "Indumentaria", price: 45,
    desc: "Algodón premium, logo bordado.",
    longDesc: "Polo de algodón pima 220g, logo bordado en pecho. Tallas S, M, L, XL. Color negro/rojo.",
    images: [uPolo],
    shipping: { jaen: 5, nacional: 12, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [{ user: "Renato S.", rating: 5, text: "Tela top, calza perfecto." }]},
  { id: "tomatodo", name: "Tomatodo Iron Gym 1L", cat: "Accesorio", price: 35,
    desc: "Acero inoxidable, doble pared.",
    longDesc: "Tomatodo de acero inoxidable doble pared 1L. Conserva frío 24h y caliente 12h. Logo grabado.",
    images: [uTomatodo],
    shipping: { jaen: 5, nacional: 12, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [{ user: "Andrea P.", rating: 5, text: "Mantiene el agua heladita todo el día." }]},
  { id: "shaker", name: "Shaker 600ml", cat: "Accesorio", price: 25,
    desc: "Resistente, libre de BPA.",
    longDesc: "Shaker con resorte mezclador, libre de BPA, escala medidora. Ideal para batidos.",
    images: [uShaker],
    shipping: { jaen: 5, nacional: 10, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [{ user: "Carlos M.", rating: 4, text: "Hace su trabajo, sin filtraciones." }]},
  { id: "guantes", name: "Guantes de entrenamiento", cat: "Accesorio", price: 55,
    desc: "Cuero sintético, agarre firme.",
    longDesc: "Guantes con palma reforzada y muñequera ajustable. Tallas S, M, L.",
    images: [uGuantes],
    shipping: { jaen: 5, nacional: 12, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [{ user: "Jhon S.", rating: 5, text: "Mejor agarre y nada de callos." }]},
  { id: "cinturon", name: "Cinturón de levantamiento", cat: "Accesorio", price: 95,
    desc: "Cuero genuino, soporte lumbar.",
    longDesc: "Cinturón de cuero genuino 10cm con doble hebilla. Soporte lumbar para sentadilla y peso muerto.",
    images: [uCinturon],
    shipping: { jaen: 5, nacional: 18, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Pocas unidades",
    comments: [{ user: "Diego T.", rating: 5, text: "Soporte real, levanté 20kg más en sentadilla." }]},
  { id: "snack", name: "Snack proteico", cat: "Nutrición", price: 12,
    desc: "20g de proteína, sin azúcar.",
    longDesc: "Barra proteica 60g con 20g de proteína, sin azúcar añadido. Sabores chocolate y maní.",
    images: [uSnack],
    shipping: { jaen: 5, nacional: 10, eta: "24–48 h en Jaén · 3–5 días nacional" },
    pickup: COMMON_PICKUP, stock: "Disponible",
    comments: [{ user: "Lucía R.", rating: 5, text: "Mi snack post-entreno favorito." }]},
];

export const DIAS = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"] as const;
export const SCHEDULE: Record<string, { hora: string; clase: string; coach: string }[]> = {
  Lunes: [{hora:"06:00", clase:"Spinning", coach:"Andrea"}, {hora:"09:00", clase:"Funcional", coach:"Carlos"}, {hora:"18:00", clase:"Zumba", coach:"María"}, {hora:"19:30", clase:"CrossFit", coach:"Jhon"}],
  Martes: [{hora:"06:00", clase:"Funcional", coach:"Carlos"}, {hora:"09:00", clase:"Aeróbicos", coach:"María"}, {hora:"18:00", clase:"Spinning", coach:"Andrea"}, {hora:"19:30", clase:"Calistenia", coach:"Jhon"}],
  Miércoles: [{hora:"06:00", clase:"Spinning", coach:"Andrea"}, {hora:"09:00", clase:"Funcional", coach:"Carlos"}, {hora:"18:00", clase:"Zumba", coach:"María"}, {hora:"19:30", clase:"CrossFit", coach:"Jhon"}],
  Jueves: [{hora:"06:00", clase:"Funcional", coach:"Carlos"}, {hora:"09:00", clase:"Aeróbicos", coach:"María"}, {hora:"18:00", clase:"Spinning", coach:"Andrea"}, {hora:"19:30", clase:"Calistenia", coach:"Jhon"}],
  Viernes: [{hora:"06:00", clase:"Spinning", coach:"Andrea"}, {hora:"09:00", clase:"HIIT", coach:"Carlos"}, {hora:"18:00", clase:"Zumba", coach:"María"}, {hora:"19:30", clase:"CrossFit", coach:"Jhon"}],
  Sábado: [{hora:"08:00", clase:"Spinning", coach:"Andrea"}, {hora:"10:00", clase:"Funcional Total", coach:"Carlos"}, {hora:"11:30", clase:"Zumba", coach:"María"}],
  Domingo: [{hora:"09:00", clase:"Open Gym", coach:"-"}, {hora:"10:30", clase:"Funcional Express", coach:"Carlos"}],
};

export type Objetivo = "Pérdida de peso" | "Ganancia muscular" | "Definición";
export const TRANSFORMACIONES: { name: string; objetivo: Objetivo; meses: number; antes: string; despues: string; quote: string }[] = [
  { name: "Lucía R.", objetivo: "Pérdida de peso", meses: 4, antes: uTrans1a, despues: uTrans1b, quote: "Bajé 12 kg con el plan nutricional." },
  { name: "Diego T.", objetivo: "Ganancia muscular", meses: 8, antes: uTrans2a, despues: uTrans2b, quote: "+9 kg de masa magra entrenando duro." },
  { name: "Carlos M.", objetivo: "Definición", meses: 5, antes: uTrans3a, despues: uTrans3b, quote: "Bajé 10% de grasa, marqué el abdomen." },
  { name: "Ana P.", objetivo: "Pérdida de peso", meses: 6, antes: uTrans4a, despues: uTrans4b, quote: "-15 kg y una nueva versión de mí." },
  { name: "Renato S.", objetivo: "Ganancia muscular", meses: 12, antes: uTrans5a, despues: uTrans5b, quote: "Subí 14 kg de músculo con coach personal." },
  { name: "María G.", objetivo: "Definición", meses: 4, antes: uTrans4a, despues: uTrans6b, quote: "Tonifiqué piernas y glúteos." },
];

// Configurable Instagram post URLs. Reemplaza por las URLs reales (formato: https://www.instagram.com/p/SHORTCODE/)
export const INSTAGRAM_POST_URLS: string[] = [
  "https://www.instagram.com/p/C8xK3J9Oa1Z/",
  "https://www.instagram.com/p/C8u2pTQOq8w/",
  "https://www.instagram.com/p/C8s0RmcOlfP/",
  "https://www.instagram.com/p/C8qX9K1OWvQ/",
  "https://www.instagram.com/p/C8oA1bROmhJ/",
  "https://www.instagram.com/p/C8li6r9Op2K/",
  "https://www.instagram.com/p/C8jH4VWOqXn/",
  "https://www.instagram.com/p/C8gE2T3OkLv/",
];

export const INSTAGRAM_POSTS = [
  { id: "1", url: INSTAGRAM_URL, img: uTrans3b, caption: "Leg day · Sede Principal" },
  { id: "2", url: INSTAGRAM_URL, img: uTrans2b, caption: "Hombro a tope 💪" },
  { id: "3", url: INSTAGRAM_URL, img: uIg3, caption: "Spinning lleno hoy 🔥" },
  { id: "4", url: INSTAGRAM_URL, img: uIg4, caption: "Funcional Total · Sábado 10am" },
  { id: "5", url: INSTAGRAM_URL, img: uTrans2a, caption: "Coach Carlos en acción" },
  { id: "6", url: INSTAGRAM_URL, img: uTrans1b, caption: "Cardio fire 🚴‍♀️" },
  { id: "7", url: INSTAGRAM_URL, img: uTrans3a, caption: "Bench press PR" },
  { id: "8", url: INSTAGRAM_URL, img: uTrans6b, caption: "Comunidad Iron Gym" },
];
