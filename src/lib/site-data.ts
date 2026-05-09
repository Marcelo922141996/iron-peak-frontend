export const SITE = {
  name: "Iron Gym",
  tagline: "#SETUMEJORVERSION",
  city: "Jaén, Cajamarca · Perú",
  whatsapp: "988499194",
  whatsapp2: "912836539",
  instagram: "https://instagram.com/gimnasioirongymjaen",
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

export const PRODUCTS = [
  { name: "Lady Pro Proteína", cat: "Suplemento", price: 95, desc: "Proteína con aguaje, suero de leche, soya y colágeno." },
  { name: "Whey Protein 2kg", cat: "Suplemento", price: 220, desc: "Proteína de suero, 24g por scoop." },
  { name: "Creatina Monohidratada", cat: "Suplemento", price: 75, desc: "300g · Pura, sin saborizantes." },
  { name: "BCAA 2:1:1", cat: "Suplemento", price: 90, desc: "Recuperación muscular acelerada." },
  { name: "Pre-entreno Burst", cat: "Suplemento", price: 110, desc: "Energía explosiva sin caída." },
  { name: "Quemador Termogénico", cat: "Suplemento", price: 85, desc: "Apoyo al déficit calórico." },
  { name: "Polo Iron Gym", cat: "Indumentaria", price: 45, desc: "Algodón premium, logo bordado." },
  { name: "Tomatodo Iron Gym 1L", cat: "Accesorio", price: 35, desc: "Acero inoxidable, doble pared." },
  { name: "Shaker 600ml", cat: "Accesorio", price: 25, desc: "Resistente, libre de BPA." },
  { name: "Guantes de entrenamiento", cat: "Accesorio", price: 55, desc: "Cuero sintético, agarre firme." },
  { name: "Cinturón de levantamiento", cat: "Accesorio", price: 95, desc: "Cuero genuino, soporte lumbar." },
  { name: "Snack proteico", cat: "Nutrición", price: 12, desc: "20g de proteína, sin azúcar." },
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
  { name: "Lucía R.", objetivo: "Pérdida de peso", meses: 4, antes: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=70", despues: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=70", quote: "Bajé 12 kg con el plan nutricional." },
  { name: "Diego T.", objetivo: "Ganancia muscular", meses: 8, antes: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=70", despues: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=70", quote: "+9 kg de masa magra entrenando duro." },
  { name: "Carlos M.", objetivo: "Definición", meses: 5, antes: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&q=70", despues: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=70", quote: "Bajé 10% de grasa, marqué el abdomen." },
  { name: "Ana P.", objetivo: "Pérdida de peso", meses: 6, antes: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=70", despues: "https://images.unsplash.com/photo-1518310952931-b1de897abd40?w=600&q=70", quote: "-15 kg y una nueva versión de mí." },
  { name: "Renato S.", objetivo: "Ganancia muscular", meses: 12, antes: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&q=70", despues: "https://images.unsplash.com/photo-1583454152671-0c736ab1f6f1?w=600&q=70", quote: "Subí 14 kg de músculo con coach personal." },
  { name: "María G.", objetivo: "Definición", meses: 4, antes: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=600&q=70", despues: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?w=600&q=70", quote: "Tonifiqué piernas y glúteos." },
];

export const INSTAGRAM_POSTS = [
  { id: "1", url: "https://instagram.com/gimnasioirongymjaen", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=70", caption: "Leg day · Sede Principal" },
  { id: "2", url: "https://instagram.com/gimnasioirongymjaen", img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=600&q=70", caption: "Hombro a tope 💪" },
  { id: "3", url: "https://instagram.com/gimnasioirongymjaen", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=600&q=70", caption: "Spinning lleno hoy 🔥" },
  { id: "4", url: "https://instagram.com/gimnasioirongymjaen", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=70", caption: "Funcional Total · Sábado 10am" },
  { id: "5", url: "https://instagram.com/gimnasioirongymjaen", img: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&q=70", caption: "Coach Carlos en acción" },
  { id: "6", url: "https://instagram.com/gimnasioirongymjaen", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=70", caption: "Cardio fire 🚴‍♀️" },
  { id: "7", url: "https://instagram.com/gimnasioirongymjaen", img: "https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?w=600&q=70", caption: "Bench press PR" },
  { id: "8", url: "https://instagram.com/gimnasioirongymjaen", img: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?w=600&q=70", caption: "Comunidad Iron Gym" },
];
