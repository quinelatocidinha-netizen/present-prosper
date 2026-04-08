import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const CTA_LINK = "#comprar";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      role="complementary"
      aria-label="Botão de compra fixo"
    >
      <div className="bg-background/95 backdrop-blur-md border-t border-border px-4 py-3">
        <a
          href={CTA_LINK}
          className="flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl font-sans font-semibold text-sm text-primary-foreground bg-primary hover:brightness-110 transition-all duration-200 shadow-lg"
          style={{ boxShadow: "var(--shadow-emerald)" }}
        >
          Quero meu eBook agora
          <ArrowRight className="w-4 h-4" />
        </a>
        <p className="text-center text-xs text-muted-foreground mt-1.5 font-sans">
          R$ 47,00 · Acesso imediato
        </p>
      </div>
    </div>
  );
}
