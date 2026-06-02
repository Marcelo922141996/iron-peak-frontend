import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCart } from "@/lib/cart-context";
import { Minus, Plus, Trash2, ArrowRight, ShoppingBag, Package } from "lucide-react";
import { CheckoutDialog } from "./CheckoutDialog";

const FREE_SHIP_OVER = 200;

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, subtotal, clear } = useCart();
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full sm:max-w-md flex flex-col p-0 gap-0">
        <SheetHeader className="p-5 border-b border-border text-left">
          <SheetTitle className="font-bebas tracking-wider text-2xl flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-primary" /> Tu canasta
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 grid place-items-center p-8 text-center text-muted-foreground">
            <div>
              <Package className="h-16 w-16 mx-auto text-primary/30" strokeWidth={1} />
              <p className="mt-4 text-sm">Tu canasta está vacía.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {items.map((i) => (
                <div key={i.product.id} className="flex gap-3 border border-border rounded-lg p-3 bg-card">
                  <div className="h-20 w-20 shrink-0 bg-gradient-hero rounded overflow-hidden grid place-items-center">
                    {i.product.images[0] ? (
                      <img src={i.product.images[0]} alt={i.product.name} className="h-full w-full object-cover" />
                    ) : (
                      <Package className="h-8 w-8 text-primary/40" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-heading uppercase text-sm truncate">{i.product.name}</div>
                    <div className="text-xs text-muted-foreground">S/{i.product.price} c/u</div>
                    <div className="mt-2 flex items-center gap-2">
                      <button onClick={() => setQty(i.product.id, i.qty - 1)} aria-label="Restar" className="h-7 w-7 grid place-items-center border border-border rounded hover:border-primary"><Minus className="h-3 w-3" /></button>
                      <span className="font-bebas text-lg w-6 text-center">{i.qty}</span>
                      <button onClick={() => setQty(i.product.id, i.qty + 1)} aria-label="Sumar" className="h-7 w-7 grid place-items-center border border-border rounded hover:border-primary"><Plus className="h-3 w-3" /></button>
                      <button onClick={() => remove(i.product.id)} aria-label="Quitar" className="ml-auto h-7 w-7 grid place-items-center text-muted-foreground hover:text-destructive"><Trash2 className="h-3.5 w-3.5" /></button>
                    </div>
                  </div>
                  <div className="text-right font-bebas text-primary text-lg whitespace-nowrap">S/{(i.product.price * i.qty).toFixed(0)}</div>
                </div>
              ))}
            </div>

            <div className="border-t border-border p-5 space-y-2">
              <div className="flex justify-between text-sm"><span className="text-muted-foreground">Subtotal</span><span>S/{subtotal.toFixed(2)}</span></div>
              {subtotal > 0 && subtotal < FREE_SHIP_OVER && (
                <p className="text-[11px] text-muted-foreground">Agrega S/{(FREE_SHIP_OVER - subtotal).toFixed(2)} más y el envío en Jaén es gratis.</p>
              )}
              <p className="text-[11px] text-muted-foreground">El envío o recojo se calcula en el checkout.</p>
              <button
                onClick={() => setCheckoutOpen(true)}
                className="mt-3 w-full inline-flex items-center justify-center gap-2 py-3.5 font-heading uppercase tracking-wider text-sm bg-gradient-primary text-primary-foreground shadow-glow hover:scale-[1.02] transition rounded"
              >
                Ir al checkout <ArrowRight className="h-4 w-4" />
              </button>
              <button onClick={clear} className="w-full text-xs text-muted-foreground hover:text-foreground mt-1">Vaciar canasta</button>
            </div>
          </>
        )}
      </SheetContent>
      <CheckoutDialog open={checkoutOpen} onOpenChange={setCheckoutOpen} />
    </Sheet>
  );
}