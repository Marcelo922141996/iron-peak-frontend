import { useMemo, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Truck, Store, Wallet, Smartphone, MessageCircle, CheckCircle2 } from "lucide-react";
import { useCart } from "@/lib/cart-context";
import { SITE, SEDES, waUrl } from "@/lib/site-data";

const SHIPPING_JAEN = 5;
const FREE_SHIP_OVER = 200;

type Delivery = "delivery" | "pickup";
type Payment = "yape" | "plin" | "efectivo";

export function CheckoutDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (v: boolean) => void }) {
  const { items, subtotal, clear, setOpen: setCartOpen } = useCart();
  const [delivery, setDelivery] = useState<Delivery>("delivery");
  const [sede, setSede] = useState<string>(SEDES[0].slug);
  const [payment, setPayment] = useState<Payment>("yape");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const shipping = useMemo(() => {
    if (delivery === "pickup") return 0;
    if (subtotal >= FREE_SHIP_OVER) return 0;
    return SHIPPING_JAEN;
  }, [delivery, subtotal]);
  const total = subtotal + shipping;

  const sedeObj = SEDES.find((s) => s.slug === sede) ?? SEDES[0];
  const paymentLabel: Record<Payment, string> = {
    yape: "Yape",
    plin: "Plin",
    efectivo: "Efectivo (al recibir / en sede)",
  };

  const valid = items.length > 0 && name.trim().length >= 2 && (delivery === "pickup" || address.trim().length >= 5);

  const lines = items
    .map((i) => `• ${i.product.name} x${i.qty} — S/${(i.product.price * i.qty).toFixed(2)}`)
    .join("\n");

  const msg =
    `*Nuevo pedido — Iron Gym*\n\n` +
    `*Cliente:* ${name || "-"}\n` +
    `*Entrega:* ${delivery === "delivery" ? `Envío a domicilio (Jaén)\nDirección: ${address}` : `Recojo en sede · GRATIS\nSede: ${sedeObj.name} — ${sedeObj.address}`}\n` +
    `*Pago:* ${paymentLabel[payment]}\n\n` +
    `*Productos:*\n${lines}\n\n` +
    `Subtotal: S/${subtotal.toFixed(2)}\n` +
    `Envío: ${shipping === 0 ? "GRATIS" : `S/${shipping.toFixed(2)}`}\n` +
    `*Total: S/${total.toFixed(2)}*\n\n` +
    `¿Me confirman el pedido y los datos para ${payment === "efectivo" ? "el pago al recibir" : `el ${paymentLabel[payment]}`}?`;

  const wa = waUrl(SITE.whatsapp, msg);

  const handleSend = () => {
    if (!valid) return;
    window.open(wa, "_blank");
    clear();
    onOpenChange(false);
    setCartOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-[95vw] max-h-[92vh] overflow-y-auto p-0 gap-0">
        <DialogHeader className="p-5 border-b border-border text-left">
          <DialogTitle className="font-bebas tracking-wider text-2xl">Checkout</DialogTitle>
          <DialogDescription className="text-xs text-muted-foreground">Confirma tu pedido y envíalo por WhatsApp.</DialogDescription>
        </DialogHeader>

        <div className="p-5 space-y-6">
          {/* Resumen */}
          <section>
            <h3 className="font-heading uppercase tracking-wider text-xs text-primary mb-2">Tu pedido</h3>
            <div className="border border-border rounded bg-card divide-y divide-border">
              {items.map((i) => (
                <div key={i.product.id} className="flex items-center justify-between px-3 py-2 text-sm">
                  <span className="truncate pr-2">{i.product.name} <span className="text-muted-foreground">x{i.qty}</span></span>
                  <span className="font-bebas text-primary whitespace-nowrap">S/{(i.product.price * i.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Datos cliente */}
          <section className="grid gap-3">
            <h3 className="font-heading uppercase tracking-wider text-xs text-primary">Tus datos</h3>
            <div className="grid gap-1.5">
              <Label htmlFor="ck-name" className="text-xs">Nombre completo</Label>
              <Input id="ck-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Ej. Juan Pérez" />
            </div>
          </section>

          {/* Entrega */}
          <section className="grid gap-3">
            <h3 className="font-heading uppercase tracking-wider text-xs text-primary">Entrega</h3>
            <RadioGroup value={delivery} onValueChange={(v) => setDelivery(v as Delivery)} className="grid sm:grid-cols-2 gap-2">
              <label htmlFor="d-delivery" className={`flex items-start gap-3 p-3 border rounded cursor-pointer transition ${delivery === "delivery" ? "border-primary bg-primary/5" : "border-border"}`}>
                <RadioGroupItem value="delivery" id="d-delivery" className="mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 font-heading uppercase text-xs tracking-wider"><Truck className="h-4 w-4 text-primary" /> Envío en Jaén</div>
                  <div className="text-[11px] text-muted-foreground mt-1">{subtotal >= FREE_SHIP_OVER ? "GRATIS (compra +S/200)" : `S/${SHIPPING_JAEN}.00`}</div>
                </div>
              </label>
              <label htmlFor="d-pickup" className={`flex items-start gap-3 p-3 border rounded cursor-pointer transition ${delivery === "pickup" ? "border-primary bg-primary/5" : "border-border"}`}>
                <RadioGroupItem value="pickup" id="d-pickup" className="mt-0.5" />
                <div className="flex-1">
                  <div className="flex items-center gap-2 font-heading uppercase text-xs tracking-wider"><Store className="h-4 w-4 text-primary" /> Recojo en sede</div>
                  <div className="text-[11px] text-muted-foreground mt-1">GRATIS</div>
                </div>
              </label>
            </RadioGroup>

            {delivery === "delivery" ? (
              <div className="grid gap-1.5">
                <Label htmlFor="ck-addr" className="text-xs">Dirección de envío (Jaén)</Label>
                <Input id="ck-addr" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Calle, número, referencia" />
              </div>
            ) : (
              <div className="grid gap-1.5">
                <Label htmlFor="ck-sede" className="text-xs">Elige la sede</Label>
                <select
                  id="ck-sede"
                  value={sede}
                  onChange={(e) => setSede(e.target.value)}
                  className="h-10 rounded border border-border bg-background px-3 text-sm focus:outline-none focus:border-primary"
                >
                  {SEDES.map((s) => (
                    <option key={s.slug} value={s.slug}>{s.name} — {s.address}</option>
                  ))}
                </select>
              </div>
            )}
          </section>

          {/* Pago */}
          <section className="grid gap-3">
            <h3 className="font-heading uppercase tracking-wider text-xs text-primary">Método de pago</h3>
            <RadioGroup value={payment} onValueChange={(v) => setPayment(v as Payment)} className="grid sm:grid-cols-3 gap-2">
              {([
                { id: "yape", label: "Yape", icon: Smartphone },
                { id: "plin", label: "Plin", icon: Smartphone },
                { id: "efectivo", label: "Efectivo", icon: Wallet },
              ] as { id: Payment; label: string; icon: typeof Wallet }[]).map((p) => (
                <label key={p.id} htmlFor={`p-${p.id}`} className={`flex items-center gap-2 p-3 border rounded cursor-pointer transition ${payment === p.id ? "border-primary bg-primary/5" : "border-border"}`}>
                  <RadioGroupItem value={p.id} id={`p-${p.id}`} />
                  <p.icon className="h-4 w-4 text-primary" />
                  <span className="font-heading uppercase text-xs tracking-wider">{p.label}</span>
                </label>
              ))}
            </RadioGroup>
            {payment !== "efectivo" && (
              <p className="text-[11px] text-muted-foreground flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-primary" /> Te enviaremos el número {payment === "yape" ? "Yape" : "Plin"} por WhatsApp tras confirmar el pedido.</p>
            )}
          </section>

          {/* Totales */}
          <section className="border-t border-border pt-4 space-y-1.5 text-sm">
            <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span>S/{subtotal.toFixed(2)}</span></div>
            <div className="flex justify-between"><span className="text-muted-foreground">{delivery === "pickup" ? "Recojo en sede" : "Envío"}</span><span>{shipping === 0 ? "GRATIS" : `S/${shipping.toFixed(2)}`}</span></div>
            <div className="flex justify-between font-bebas text-2xl text-primary pt-2 border-t border-border"><span>Total</span><span>S/{total.toFixed(2)}</span></div>
          </section>

          <button
            onClick={handleSend}
            disabled={!valid}
            className="w-full inline-flex items-center justify-center gap-2 py-4 font-heading uppercase tracking-wider text-sm bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.02] transition rounded disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
          >
            <MessageCircle className="h-4 w-4" /> Enviar pedido por WhatsApp
          </button>
          {!valid && items.length > 0 && (
            <p className="text-[11px] text-muted-foreground text-center -mt-3">Completa tu nombre {delivery === "delivery" ? "y dirección" : ""} para continuar.</p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}