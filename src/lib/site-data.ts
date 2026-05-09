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
