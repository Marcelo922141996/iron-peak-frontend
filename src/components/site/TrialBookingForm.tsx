import { useState } from "react";
import { CalendarDays, Clock, MapPin, MessageCircle } from "lucide-react";
import { SEDES, DIAS, SITE, waUrl } from "@/lib/site-data";

const HORAS = ["06:00", "07:00", "09:00", "11:00", "16:00", "18:00", "19:30"];

export function TrialBookingForm() {
  const [name, setName] = useState("");
  const [sede, setSede] = useState(SEDES[0].slug);
  const [dia, setDia] = useState<string>(DIAS[0]);
  const [hora, setHora] = useState(HORAS[0]);

  const sedeObj = SEDES.find((s) => s.slug === sede)!;
  const safeName = name.trim().slice(0, 60);
  const message =
    `Hola Iron Gym, soy ${safeName || "[mi nombre]"}.\n` +
    `Quiero reservar mi clase en *${sedeObj.name}*.\n` +
    `Día: *${dia}* · Hora: *${hora}*.\n` +
    `¿Me confirman disponibilidad? 💪`;
  const href = waUrl(sedeObj.whatsapp, message);

  const fieldCls =
    "mt-1.5 w-full bg-white/10 border border-white/15 rounded-full px-5 py-3 text-white placeholder:text-white/40 backdrop-blur focus:outline-none focus:border-primary transition";
  const labelCls =
    "text-xs font-heading uppercase tracking-widest text-white/70 flex items-center gap-1.5";

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); window.open(href, "_blank", "noopener,noreferrer"); }}
      className="grid gap-4 max-w-xl mx-auto"
    >
      <label className="block">
        <span className={labelCls}>Tu nombre</span>
        <input
          required
          maxLength={60}
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ej. Carlos Mendoza"
          className={fieldCls}
        />
      </label>
      <label className="block">
        <span className={labelCls}><MapPin className="h-3 w-3" /> Sede</span>
        <select value={sede} onChange={(e) => setSede(e.target.value)} className={fieldCls}>
          {SEDES.map((s) => <option key={s.slug} value={s.slug} className="text-black">{s.name}</option>)}
        </select>
      </label>
      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className={labelCls}><CalendarDays className="h-3 w-3" /> Día</span>
          <select value={dia} onChange={(e) => setDia(e.target.value)} className={fieldCls}>
            {DIAS.map((d) => <option key={d} value={d} className="text-black">{d}</option>)}
          </select>
        </label>
        <label className="block">
          <span className={labelCls}><Clock className="h-3 w-3" /> Hora</span>
          <select value={hora} onChange={(e) => setHora(e.target.value)} className={fieldCls}>
            {HORAS.map((h) => <option key={h} value={h} className="text-black">{h}</option>)}
          </select>
        </label>
      </div>
      <button type="submit" className="btn-pill btn-pill-primary mt-2 w-full">
        <MessageCircle className="h-5 w-5" /> Reservar por WhatsApp
      </button>
      <p className="text-[11px] text-white/60 text-center">Enviaremos tu reserva al WhatsApp oficial de {sedeObj.name} · +51 {SITE.whatsapp}</p>
    </form>
  );
}
