import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export type Testimonial = { name: string; role: string; text: string; img?: string };

export function TestimonialsCarousel({ items }: { items: Testimonial[] }) {
  const [idx, setIdx] = useState(0);
  const [perView, setPerView] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calc = () => setPerView(window.innerWidth >= 1024 ? 3 : window.innerWidth >= 640 ? 2 : 1);
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  const max = Math.max(0, items.length - perView);
  const next = () => setIdx((i) => (i >= max ? 0 : i + 1));
  const prev = () => setIdx((i) => (i <= 0 ? max : i - 1));

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [max]);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${(idx * 100) / perView}%)` }}
        >
          {items.map((t) => (
            <div key={t.name} className="px-3 shrink-0" style={{ width: `${100 / perView}%` }}>
              <div className="glass p-8 h-full" data-fx="card">
                <Quote className="h-10 w-10 text-primary -ml-1 -mt-2" strokeWidth={1.2} />
                <p className="mt-3 italic text-foreground/90 leading-relaxed">"{t.text}"</p>
                <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                  {t.img ? (
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover border-2 border-primary/40 shadow-glow"
                      onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gradient-primary grid place-items-center font-bebas text-primary-foreground">
                      {t.name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <div className="font-heading uppercase tracking-wide">{t.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 mt-8">
        <button onClick={prev} aria-label="Anterior" className="glass-pill !p-2.5"><ChevronLeft className="h-4 w-4" /></button>
        <div className="flex items-center gap-2">
          {Array.from({ length: max + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === idx ? "w-6 bg-primary shadow-glow" : "w-2 bg-white/20"}`}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Siguiente" className="glass-pill !p-2.5"><ChevronRight className="h-4 w-4" /></button>
      </div>
    </div>
  );
}