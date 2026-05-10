import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-data";
export function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/51${SITE.whatsapp}?text=Hola%20Iron%20Gym%2C%20quiero%20información`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-gradient-primary pl-2 pr-5 py-2 shadow-glow hover:scale-105 transition group"
      aria-label="WhatsApp Iron Gym"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-background/15 backdrop-blur">
        <MessageCircle className="h-6 w-6 text-primary-foreground" />
      </span>
      <span className="hidden sm:flex flex-col leading-tight text-primary-foreground">
        <span className="font-heading uppercase tracking-wider text-xs opacity-90">¿Necesitas info?</span>
        <span className="font-display text-sm tracking-wider">Presiona aquí</span>
      </span>
      <span className="sm:hidden font-heading uppercase tracking-wider text-xs text-primary-foreground">Info aquí</span>
    </a>
  );
}
