import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CounterStat({
  value,
  suffix = "",
  label,
  duration = 2,
}: { value: number; suffix?: string; label: string; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLSpanElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!ref.current || !numRef.current) return;
    const obj = { v: 0 };
    const tween = gsap.to(obj, {
      v: value,
      duration,
      ease: "power2.out",
      scrollTrigger: { trigger: ref.current, start: "top 85%", once: true },
      onUpdate: () => { if (numRef.current) numRef.current.textContent = Math.round(obj.v).toLocaleString("es-PE"); },
      onComplete: () => setDone(true),
    });
    return () => { tween.kill(); };
  }, [value, duration]);

  useEffect(() => {
    if (done && glowRef.current) {
      glowRef.current.classList.remove("pulse-red");
      // restart animation
      void glowRef.current.offsetWidth;
      glowRef.current.classList.add("pulse-red");
    }
  }, [done]);

  return (
    <div ref={ref} className="relative text-center px-4">
      <div className="font-bebas text-primary leading-none" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)" }}>
        <span ref={numRef}>0</span><span>{suffix}</span>
      </div>
      <div ref={glowRef} className="mx-auto mt-1 h-[3px] w-16 rounded-full bg-primary/70 blur-[2px] origin-center opacity-15" />
      <div className="font-techmono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-2">{label}</div>
    </div>
  );
}