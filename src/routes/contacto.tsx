import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/PageHero";
import { Phone, Mail, MapPin, MessageCircle, Send, Instagram, Facebook } from "lucide-react";
import { SITE, SEDES } from "@/lib/site-data";
import { useState } from "react";

export const Route = createFileRoute("/contacto")({
  head: () => ({ meta: [
    { title: "Contacto — Iron Gym Jaén" },
    { name: "description", content: "Escríbenos, llámanos o visítanos. WhatsApp +51 988 499 194." },
    { property: "og:title", content: "Contacto — Iron Gym Jaén" },
  ]}),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  return (
    <Layout>
      <PageHero eyebrow="Contacto" title="HABLEMOS" subtitle="Estamos disponibles todos los días para ti." />

      <section className="mx-auto max-w-7xl px-4 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
        <div>
          <h2 className="font-display text-3xl mb-6">ESCRÍBENOS</h2>
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="space-y-4"
          >
            <input required placeholder="Tu nombre" className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition" />
            <input required type="tel" placeholder="Celular / WhatsApp" className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition" />
            <input required type="email" placeholder="Email" className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition" />
            <select className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition">
              <option>Sede de interés</option>
              {SEDES.map(s => <option key={s.slug}>{s.name}</option>)}
            </select>
            <textarea required rows={5} placeholder="Tu mensaje" className="w-full px-4 py-3 bg-input border border-border focus:border-primary outline-none transition resize-none" />
            <button type="submit" className="inline-flex items-center gap-2 rounded-sm bg-gradient-primary px-7 py-4 font-heading uppercase tracking-wider text-primary-foreground shadow-glow hover:scale-105 transition">
              <Send className="h-4 w-4" /> Enviar mensaje
            </button>
            {sent && <p className="text-primary font-heading uppercase tracking-widest text-sm">¡Mensaje enviado! Te contactaremos pronto.</p>}
          </form>
        </div>

        <div>
          <h2 className="font-display text-3xl mb-6">CANALES DIRECTOS</h2>
          <ul className="space-y-4">
            <li className="flex items-start gap-4 p-5 border border-border bg-card">
              <Phone className="h-6 w-6 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <div className="font-heading uppercase">Teléfono</div>
                <div className="text-muted-foreground">+51 {SITE.whatsapp} · +51 {SITE.whatsapp2}</div>
              </div>
            </li>
            <li className="flex items-start gap-4 p-5 border border-border bg-card">
              <MessageCircle className="h-6 w-6 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <div className="font-heading uppercase">WhatsApp</div>
                <a href={`https://wa.me/51${SITE.whatsapp}`} className="text-primary hover:underline">Chatear ahora</a>
              </div>
            </li>
            <li className="flex items-start gap-4 p-5 border border-border bg-card">
              <Mail className="h-6 w-6 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <div className="font-heading uppercase">Email</div>
                <div className="text-muted-foreground">{SITE.email}</div>
              </div>
            </li>
            <li className="flex items-start gap-4 p-5 border border-border bg-card">
              <MapPin className="h-6 w-6 text-primary mt-1" strokeWidth={1.5} />
              <div>
                <div className="font-heading uppercase">Sedes</div>
                <div className="text-muted-foreground">5 ubicaciones en {SITE.city}</div>
              </div>
            </li>
            <li className="flex gap-3 p-5 border border-border bg-card">
              <a href={SITE.instagram} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-sm bg-gradient-primary"><Instagram className="h-5 w-5 text-primary-foreground" /></a>
              <a href={SITE.facebook} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-sm bg-gradient-primary"><Facebook className="h-5 w-5 text-primary-foreground" /></a>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
