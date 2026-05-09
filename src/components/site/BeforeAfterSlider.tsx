import { useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfterSlider({ before, after, alt }: { before: string; after: string; alt: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, x)));
  };

  return (
    <div
      ref={ref}
      className="relative w-full aspect-[4/5] overflow-hidden select-none cursor-ew-resize bg-surface"
      onMouseDown={(e) => { dragging.current = true; move(e.clientX); }}
      onMouseMove={(e) => dragging.current && move(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => { dragging.current = true; move(e.touches[0].clientX); }}
      onTouchMove={(e) => dragging.current && move(e.touches[0].clientX)}
      onTouchEnd={() => (dragging.current = false)}
    >
      <img src={after} alt={`${alt} después`} className="absolute inset-0 h-full w-full object-cover pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ width: `${pos}%` }}>
        <img src={before} alt={`${alt} antes`} className="absolute inset-0 h-full w-full object-cover" style={{ width: `${100 / (pos / 100)}%`, maxWidth: "none" }} />
      </div>
      <div className="absolute top-3 left-3 px-2.5 py-1 text-[10px] font-heading uppercase tracking-widest bg-background/70 backdrop-blur">Antes</div>
      <div className="absolute top-3 right-3 px-2.5 py-1 text-[10px] font-heading uppercase tracking-widest bg-primary/90 text-primary-foreground">Después</div>
      <div className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-glow pointer-events-none" style={{ left: `${pos}%` }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground shadow-glow">
          <MoveHorizontal className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}