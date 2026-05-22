import { ShoppingBag } from "lucide-react";
import { useCart } from "@/lib/cart-context";

export function CartFAB() {
  const { count, setOpen } = useCart();
  return (
    <button
      onClick={() => setOpen(true)}
      aria-label="Abrir canasta"
      className="fixed bottom-20 right-5 sm:bottom-24 z-50 inline-flex items-center justify-center h-12 w-12 rounded-full bg-background border border-primary/40 shadow-glow hover:scale-105 transition"
    >
      <ShoppingBag className="h-5 w-5 text-primary" />
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 min-w-5 h-5 px-1 grid place-items-center rounded-full bg-gradient-primary text-primary-foreground text-[10px] font-bold">
          {count}
        </span>
      )}
    </button>
  );
}