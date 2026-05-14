## Concepto: "Luz y Poder" — Dark Futuristic

Rediseño visual completo del home (`src/routes/index.tsx`) con efectos cinemáticos, glassmorphism con tinte rojo, formas redondeadas y animaciones GSAP/ScrollTrigger. **No se borra ningún contenido**: textos, imágenes, productos, sedes, planes, testimonios, transformaciones y horarios se conservan.

### Cambios globales (afectan todo el sitio)

1. **Tipografía** — `src/styles.css`: añadir Bebas Neue + Share Tech Mono para los números/labels que pediste, manteniendo Anton/Rajdhani/Outfit como base deportiva moderna.
2. **Tokens de diseño** — añadir utilities: `.glass` (rgba(13,13,13,0.8) + blur(20px) + border rojo translúcido + radius 20px), `.glass-pill`, `.btn-pill`, animación `marquee`, animación `border-glow` (conic-gradient rotando para plan popular), pulse rojo.
3. **Botones** — todos los botones del home pasan a forma `pill` (rounded-full) con variantes glass / sólido rojo / outline rojo. Otras páginas heredan utilities pero no se reescriben (out of scope).

### Componentes nuevos

- `components/three/HeroFog.tsx` — niebla volumétrica roja sutil en la parte inferior del Hero (R3F, plano + shader simple o `<Cloud>` de drei tintado rojo).
- `components/site/InfiniteMarquee.tsx` — franja delgada bajo el hero con frases ("SÉ TU MEJOR VERSIÓN · #IRONGYM · 5 SEDES · 5AM · …") en bucle infinito.
- `components/site/CounterStat.tsx` — counter 0→N con ScrollTrigger, glow rojo pulse al terminar.
- `components/site/SedeSwitcher.tsx` — pills glass + crossfade GSAP del detalle de la sede activa.
- `components/site/TestimonialsCarousel.tsx` — carrusel auto-avance 5s, prev/next, dots rojos.
- Reuso de `BeforeAfterSlider`, `ProductDetailDialog`, `TrialBookingForm`, `InstagramEmbedGrid` existentes (ya cumplen).

### Reescritura por sección de `src/routes/index.tsx`

1. **Hero** — fondo imagen actual + niebla roja R3F inferior + overlay glass, headline `SÉ TU MEJOR VERSIÓN` con stagger GSAP palabra por palabra, CTAs pill (rojo glow + glass outline).
2. **Marquee infinito** — franja delgada animada.
3. **Stats bar** — 4 stats, número Bebas Neue rojo 56px, label Share Tech Mono gris 10px, separadores verticales rojos opacity .3, counter animation + pulse glow.
4. **Por qué Iron Gym** — título stagger palabra por palabra, 6 cards glass redondeadas r20 con float-up hover y glow rojo, botón "Ver más" → `/nosotros`.
5. **Servicios** — 6 image cards 380px r24, gradient negro→rojo abajo, ícono+nombre, hover scale 1.03 + descripción fadeIn + línea roja sobre el nombre + glow border, botón "Ver más" → `/servicios`.
6. **Sedes** — pills glass de las 5 sedes (activa = border rojo glow), crossfade GSAP del detalle (dirección, horario, mapa link, WhatsApp).
7. **Planes** — 5 cards r24, scroll horizontal en mobile, plan "Mensual" con borde conic-gradient animado + scale 1.05 + pill "MÁS POPULAR", precio rojo 56px + lista checkmarks rojos + botón pill.
8. **Tienda preview** — filtros pills glass (TODOS · SUPLEMENTO · INDUMENTARIA · ACCESORIO · NUTRICIÓN), grid 4 col / 2 mobile con fade GSAP stagger al cambiar tab, hover overlay rojo + botón "VER DETALLE" sube, botón final "VER MÁS PRODUCTOS" pill outline rojo → `/tienda`.
9. **Cronograma semanal** — tabs días pills glass + activo rojo, GSAP stagger al cambiar día, filas glass r12 (hora rojo · clase · coach · botón RESERVAR pill outline).
10. **Antes & Después** — tabs filtro pills glass, grid 3 col de `BeforeAfterSlider` en cards r24, nombre/objetivo/meses/quote.
11. **Reserva clase gratis** — sección cinemática con partículas rojas R3F densas + overlay 80%, izquierda: label + título stagger + 3 bullets check rojos, derecha: form glass r24 (`TrialBookingForm` reestilizado) → wa.me/51988499194.
12. **Galería** — masonry 3 col con clip-path reveal por imagen + lightbox glass con flechas y teclas.
13. **Testimonios** — carrusel 3 visibles auto-avance 5s, comillas rojas decorativas, dots indicadores.
14. **Instagram** — `InstagramEmbedGrid` existente, mantenido.

### Notas de scope

- **No tocaré** las páginas internas (`/nosotros`, `/servicios`, `/tienda`, `/sedes`, `/planes`, `/galeria`, `/blog`, `/contacto`) salvo que hereden tokens del CSS global.
- **WhatsApp FAB** y `ScrollFx` global se mantienen.
- Three.js: niebla del hero y partículas de la sección de reserva. Resto del WOW va con GSAP + CSS para no degradar performance móvil.
- Todo responsive y verificado en viewport móvil.

¿Apruebas que proceda con esta reestructura completa del home? Es un trabajo extenso (12 secciones + 5 componentes nuevos + tokens globales).