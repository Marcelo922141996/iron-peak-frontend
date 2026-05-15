import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "@tanstack/react-router";

gsap.registerPlugin(ScrollTrigger);

export function ScrollFx() {
  const location = useLocation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal on scroll for sections
      gsap.utils.toArray<HTMLElement>("section").forEach((section) => {
        const headings = section.querySelectorAll("h1, h2, h3");
        const cards = section.querySelectorAll("[data-fx='card']");

        if (headings.length) {
          gsap.from(headings, {
            y: 40,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
            scrollTrigger: { trigger: section, start: "top 85%", once: true },
          });
        }

        if (cards.length) {
          gsap.from(cards, {
            y: 60,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.06,
            scrollTrigger: { trigger: section, start: "top 80%", once: true },
          });
        }
      });

      // Subtle parallax on hero images
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        gsap.to(el, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });
    });

    const t = setTimeout(() => ScrollTrigger.refresh(), 200);
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);
    // Also refresh when any image finishes loading (covers lazy + late layout shifts)
    const imgs = Array.from(document.images);
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", onLoad, { once: true });
    });
    return () => {
      clearTimeout(t);
      window.removeEventListener("load", onLoad);
      imgs.forEach((img) => img.removeEventListener("load", onLoad));
      ctx.revert();
    };
  }, [location.pathname]);

  return null;
}