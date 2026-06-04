import { useEffect, useState } from "react";
import { Package } from "lucide-react";
import uLadyPro1 from "@/assets/imagen/u-lady-pro-1.jpg";
import uQuemador from "@/assets/imagen/u-quemador.jpg";
import uLadyPro3 from "@/assets/imagen/u-lady-pro-3.jpg";
import uIndu1 from "@/assets/imagen/u-indu-1.jpg";
import uIndu2 from "@/assets/imagen/u-indu-2.jpg";
import uIndu3 from "@/assets/imagen/u-indu-3.jpg";
import uGuantes from "@/assets/imagen/u-guantes.jpg";
import uAcc2 from "@/assets/imagen/u-acc-2.jpg";
import uCinturon from "@/assets/imagen/u-cinturon.jpg";
import uSnack from "@/assets/imagen/u-snack.jpg";
import uPreentreno from "@/assets/imagen/u-preentreno.jpg";
import uNutri3 from "@/assets/imagen/u-nutri-3.jpg";

const FALLBACKS: Record<string, string[]> = {
  Suplemento: [uLadyPro1, uQuemador, uLadyPro3],
  Indumentaria: [uIndu1, uIndu2, uIndu3],
  Accesorio: [uGuantes, uAcc2, uCinturon],
  Nutrición: [uSnack, uPreentreno, uNutri3],
};

export function pad3(images: string[], cat: string): string[] {
  const ext = [...images.filter(Boolean), ...(FALLBACKS[cat] ?? [])];
  while (ext.length < 3) ext.push(ext[0] ?? "");
  return ext.slice(0, 3);
}

export function ProductImageCarousel({ images, cat, alt }: { images: string[]; cat: string; alt: string }) {
  const imgs = pad3(images, cat);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % imgs.length), 3000);
    return () => clearInterval(t);
  }, [imgs.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <Package className="absolute inset-0 m-auto h-20 w-20 text-primary/30" strokeWidth={1} />
      {imgs.map((src, i) =>
        src ? (
          <img
            key={i + src}
            src={src}
            alt={alt}
            loading="lazy"
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.opacity = "0")}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
              i === idx ? "opacity-100 animate-pi-zoom" : "opacity-0"
            }`}
          />
        ) : null,
      )}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 z-10">
        {imgs.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setIdx(i);
            }}
            aria-label={`Imagen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${i === idx ? "w-5 bg-primary" : "w-1.5 bg-white/40"}`}
          />
        ))}
      </div>
    </div>
  );
}