import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-data";
export function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/51${SITE.whatsapp}?text=Hola%20Iron%20Gym%2C%20quiero%20información`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-50 group inline-flex items-center gap-0 sm:gap-2 rounded-full bg-gradient-primary p-3 sm:pl-3 sm:pr-5 shadow-glow hover:scale-105 transition-all"
      aria-label="WhatsApp Iron Gym"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
      <span className="hidden sm:inline font-heading uppercase tracking-wider text-xs text-primary-foreground">
        Info aquí
      </span>
    </a>
  );
}
