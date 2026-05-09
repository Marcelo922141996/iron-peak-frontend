import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site-data";
export function WhatsAppFAB() {
  return (
    <a
      href={`https://wa.me/51${SITE.whatsapp}?text=Hola%20Iron%20Gym%2C%20quiero%20información`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-primary shadow-glow hover:scale-110 transition"
      aria-label="WhatsApp"
    >
      <MessageCircle className="h-6 w-6 text-primary-foreground" />
    </a>
  );
}
