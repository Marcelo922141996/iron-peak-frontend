import { useState } from "react";
import { CalendarDays, Clock, MapPin, MessageCircle } from "lucide-react";
import { SEDES, DIAS, SITE } from "@/lib/site-data";

const HORAS = ["06:00", "07:00", "09:00", "11:00", "16:00", "18:00", "19:30"];

export function TrialBookingForm() {
  const [name, setName] = useState("");
  const [sede, setSede] = useState(SEDES[0].slug);
  const [dia, setDia] = useState<string>(DIAS[0]);
  const [hora, setHora] = useState(HORAS[0]);

  const sedeObj = SEDES.find((s) => s.slug === sede)!;
  const safeName = name.trim().slice(0, 60);
  const message =
    `Hola Iron Gym, soy ${safeName || "[mi nombre]"}.%0A` +
    `Quiero reservar mi clase de prueba en *${sedeObj.name}*.%0A` +
    `Día: *${dia}* · Hora: *${hora}*.%0A` +
    `¿Me confirman disponibilidad? 💪`;
  const href = `https://wa.me/51${sedeObj.whatsapp}?text=${message}`;

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); window.open(href, "_blank", "noopener,noreferrer"); }}
      className="grid gap-4 p-7 border border-border bg-card max-w-xl mx-auto"
    >
      <label className="block">
        <span className="text-xs font-heading uppercase tracking-widest text-muted-foreground">Tu nombre</span>
        <input
          required
          maxLength={60}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. Carlos Mendoza"
          className="mt-1.5 w-full bg-input border border-border px-4 py-3 focus:outline-none focus:border-primary transition"
        />
      </label>
      <label className="block">
        <span className="text-xs font-heading uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><MapPin className="h-3 w-3" /> Sede</span>
        <select value={sede} onChange={(e) => setSede(e.target.value)} className="mt-1.5 w-full bg-input border border-border px-4 py-3 focus:outline-none focus:border-primary transition">
          {SEDES.map((s) => <option key={s.slug} value={s.slug}>{s.name}</option>)}
        </select>
      </label>
      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className="text-xs font-heading uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><CalendarDays className="h-3 w-3" /> Día</span>
          <select value={dia} onChange={(e) => setDia(e.target.value)} className="mt-1.5 w-full bg-input border border-border px-4 py-3 focus:outline-none focus:border-primary transition">
            {DIAS.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
        </label>
        <label className="block">
          <span className="text-xs font-heading uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"><Clock className="h-3 w-3" /> Hora</span>
          <select value={hora} onChange={(e) => setHora(e.target.value)} className="mt-1.5 w-full bg-input border border-border px-4 py-3 focus:outline-none focus:border-primary transition">
            {HORAS.map((h) => <option key={h} value={h}>{h}</option>)}
          </select>
        </label>
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center gap-2 rounded-sm bg-gradient-primary px-6 py-4 font-heading uppercase tracking-wider text-primary-foreground shadow-glow hover:scale-[1.02] transition"
      >
        <MessageCircle className="h-5 w-5" /> Reservar por WhatsApp
      </button>
      <p className="text-[11px] text-muted-foreground text-center">Enviaremos tu reserva al WhatsApp oficial de {sedeObj.name} · +51 {SITE.whatsapp}</p>
    </form>
  );
}