import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import type { Product } from "./site-data";

export type CartItem = { product: Product; qty: number };

type CartCtx = {
  items: CartItem[];
  add: (p: Product, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
  open: boolean;
  setOpen: (v: boolean) => void;
};

const Ctx = createContext<CartCtx | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);

  const add = useCallback((p: Product, qty = 1) => {
    setItems((prev) => {
      const ex = prev.find((i) => i.product.id === p.id);
      if (ex) return prev.map((i) => (i.product.id === p.id ? { ...i, qty: i.qty + qty } : i));
      return [...prev, { product: p, qty }];
    });
    setOpen(true);
  }, []);

  const remove = useCallback((id: string) => setItems((prev) => prev.filter((i) => i.product.id !== id)), []);
  const setQty = useCallback(
    (id: string, qty: number) =>
      setItems((prev) => prev.map((i) => (i.product.id === id ? { ...i, qty: Math.max(1, qty) } : i))),
    [],
  );
  const clear = useCallback(() => setItems([]), []);

  const count = items.reduce((a, i) => a + i.qty, 0);
  const subtotal = items.reduce((a, i) => a + i.qty * i.product.price, 0);

  return (
    <Ctx.Provider value={{ items, add, remove, setQty, clear, count, subtotal, open, setOpen }}>
      {children}
    </Ctx.Provider>
  );
}

export function useCart() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
}