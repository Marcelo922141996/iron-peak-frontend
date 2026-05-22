import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";
import { ScrollFx } from "./ScrollFx";
import { CartProvider } from "@/lib/cart-context";
import { CartDrawer } from "./CartDrawer";
import { CartFAB } from "./CartFAB";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFAB />
        <CartFAB />
        <CartDrawer />
        <ScrollFx />
      </div>
    </CartProvider>
  );
}
