import { ArrowRight } from "lucide-react";
import EbookMockup from "./EbookMockup";
import ScrollReveal from "./ScrollReveal";

const CTA_LINK = "#comprar";

export default function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="comprar">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          <ScrollReveal>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              Sua empresa não precisa parecer grande.{" "}
              <span className="text-primary">
                Precisa parecer clara, confiável e presente.
              </span>
            </h2>

            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl">
              Quanto mais clara, confiável e ativa sua empresa parecer, maior a chance de ser lembrada, encontrada e escolhida.
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <a
                href={CTA_LINK}
                className="group inline-flex items-center gap-2.5 px-10 py-5 rounded-xl font-sans font-bold text-base text-primary-foreground bg-primary hover:brightness-110 transition-all duration-200 shadow-lg"
                style={{ boxShadow: "var(--shadow-emerald)" }}
              >
                Quero começar agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>

            <p className="text-sm font-sans text-muted-foreground">
              <span className="text-primary font-semibold text-lg">R$ 47,00</span>
              <span className="mx-2">·</span>
              Acesso imediato
              <span className="mx-2">·</span>
              Garantia de 7 dias
            </p>
          </ScrollReveal>

          <ScrollReveal className="hidden lg:block">
            <EbookMockup size="md" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
