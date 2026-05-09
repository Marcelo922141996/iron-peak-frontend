import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFAB } from "./WhatsAppFAB";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppFAB />
    </div>
  );
}
