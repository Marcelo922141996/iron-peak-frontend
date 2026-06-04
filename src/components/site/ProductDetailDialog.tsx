import { useState } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { MessageCircle, Truck, Store, Star, ShieldCheck, Package, ShoppingBag } from "lucide-react";
import type { Product } from "@/lib/site-data";
import { SITE, waUrl } from "@/lib/site-data";
import { useCart } from "@/lib/cart-context";
import { pad3 } from "./ProductImageCarousel";

export function ProductDetailDialog({ product, open, onOpenChange }: { product: Product | null; open: boolean; onOpenChange: (v: boolean) => void }) {
  const [idx, setIdx] = useState(0);
  const { add } = useCart();
  if (!product) return null;
  const imgs = pad3(product.images, product.cat);
  const wa = waUrl(SITE.whatsapp, `Hola Iron Gym, quiero comprar "${product.name}" (S/${product.price}). ¿Me confirman disponibilidad y envío?`);
  const avg = product.comments.length
    ? (product.comments.reduce((a, c) => a + c.rating, 0) / product.comments.length).toFixed(1)
    : "—";
  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); if (!v) setIdx(0); }}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[92vh] overflow-y-auto p-0 gap-0">
        <div className="grid md:grid-cols-2">
          {/* Imágenes */}
          <div className="bg-gradient-hero p-4 md:p-6">
            <div className="aspect-square w-full overflow-hidden border border-border bg-card grid place-items-center relative">
              {imgs[idx] ? (
                <img key={idx} src={imgs[idx]} alt={product.name} className="h-full w-full object-cover animate-pi-zoom" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              ) : (
                <Package className="h-24 w-24 text-primary/40" strokeWidth={1} />
              )}
            </div>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {imgs.map((src, i) => (
                <button key={i} onClick={() => setIdx(i)} className={`aspect-square overflow-hidden border ${i === idx ? "border-primary" : "border-border"}`}>
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Detalle */}
          <div className="p-5 md:p-7 flex flex-col">
            <span className="text-[10px] font-heading uppercase tracking-widest text-primary">{product.cat}</span>
            <DialogTitle className="font-display text-3xl md:text-4xl uppercase tracking-wider mt-1">{product.name}</DialogTitle>
            <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5" fill={i < Math.round(Number(avg)) ? "currentColor" : "none"} strokeWidth={1.5} />)}
              </div>
              <span>{avg} · {product.comments.length} opiniones</span>
            </div>

            <div className="mt-5 flex items-baseline gap-2">
              <span className="font-display text-5xl text-primary">S/{product.price}</span>
              <span className="text-xs uppercase tracking-widest text-muted-foreground">{product.stock}</span>
            </div>

            <DialogDescription className="text-sm text-muted-foreground mt-4">{product.longDesc}</DialogDescription>

            <div className="mt-5 grid gap-3 text-sm">
              <div className="flex items-start gap-3 p-3 border border-border bg-card">
                <Truck className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <div className="font-heading uppercase text-xs tracking-wider">Envío</div>
                  <div className="text-xs text-muted-foreground">Jaén: S/{product.shipping.jaen} · Nacional: S/{product.shipping.nacional}</div>
                  <div className="text-xs text-muted-foreground">{product.shipping.eta}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border border-border bg-card">
                <Store className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <div className="font-heading uppercase text-xs tracking-wider">Recojo en sede · Gratis</div>
                  <div className="text-xs text-muted-foreground">{product.pickup.note}</div>
                  <div className="text-xs text-muted-foreground mt-1">{product.pickup.sedes.join(" · ")}</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 border border-border bg-card">
                <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                <div>
                  <div className="font-heading uppercase text-xs tracking-wider">Garantía Iron Gym</div>
                  <div className="text-xs text-muted-foreground">Producto original. Cambio gratis si llega defectuoso.</div>
                </div>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={() => { add(product, 1); onOpenChange(false); }}
                className="inline-flex items-center justify-center gap-2 py-4 font-heading uppercase tracking-wider text-sm border border-primary/50 text-primary hover:bg-primary/10 transition rounded"
              >
                <ShoppingBag className="h-4 w-4" /> Agregar a canasta
              </button>
              <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 py-4 font-heading uppercase tracking-wider text-sm bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.02] transition rounded">
                <MessageCircle className="h-4 w-4" /> Comprar ahora
              </a>
            </div>

            {/* Comentarios */}
            <div className="mt-7">
              <h4 className="font-heading uppercase tracking-wider text-sm mb-3">Comentarios ({product.comments.length})</h4>
              <div className="space-y-3">
                {product.comments.map((c, i) => (
                  <div key={i} className="p-3 border border-border bg-card">
                    <div className="flex items-center justify-between">
                      <span className="font-heading uppercase text-xs">{c.user}</span>
                      <div className="flex items-center gap-0.5 text-primary">
                        {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-3 w-3" fill={k < c.rating ? "currentColor" : "none"} strokeWidth={1.5} />)}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1.5">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}