import { useEffect, useState } from "react";
import { Package } from "lucide-react";

const FALLBACKS: Record<string, string[]> = {
  Suplemento: [
    "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=900&q=80",
    "https://images.unsplash.com/photo-1579722820308-d74e571900a9?w=900&q=80",
    "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?w=900&q=80",
  ],
  Indumentaria: [
    "https://images.unsplash.com/photo-1556906781-9a412961c28c?w=900&q=80",
    "https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?w=900&q=80",
    "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=900&q=80",
  ],
  Accesorio: [
    "https://images.unsplash.com/photo-1517344800994-80b3486d4af9?w=900&q=80",
    "https://images.unsplash.com/photo-1583500178690-f7fd39c79204?w=900&q=80",
    "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=900&q=80",
  ],
  Nutrición: [
    "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?w=900&q=80",
    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=80",
    "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=900&q=80",
  ],
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