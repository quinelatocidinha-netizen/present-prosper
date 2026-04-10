import { ArrowRight, Check, Shield, Zap, Clock } from "lucide-react";
import EbookMockup from "./EbookMockup";
import ScrollReveal from "./ScrollReveal";

const CTA_LINK = "#comprar";

const included = [
  "Como organizar o Instagram da sua empresa do zero",
  "Como construir uma bio clara e objetiva",
  "Como estruturar destaques com lógica comercial",
  "O que postar para gerar confiança e presença",
  "Rotina simples de conteúdo sem depender de perfeição",
  "Como fortalecer a ficha do Google nas buscas locais",
  "Os erros que fazem um negócio parecer amador",
  "Plano de ação de 7 dias para aplicar tudo",
];

export default function Pricing() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden" id="investimento">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 blur-[150px] rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Investimento
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Tudo isso por um{" "}
            <span className="text-primary">único investimento</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <div className="relative rounded-3xl border border-primary/20 bg-gradient-to-br from-card/80 via-card/50 to-primary/5 overflow-hidden">
            {/* Accent line top */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-primary via-accent to-primary" />

            <div className="grid lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 p-6 sm:p-8 md:p-10 lg:p-12">
              {/* Left: pricing + items */}
              <div>
                {/* Price block */}
                <div className="mb-8">
                  <div className="flex flex-wrap items-baseline gap-3 mb-2">
                    <span className="font-serif text-5xl sm:text-6xl md:text-7xl font-bold text-primary">
                      R$ 47
                    </span>
                    <span className="font-serif text-2xl sm:text-3xl md:text-4xl text-primary/70">,00</span>
                  </div>
                  <p className="font-sans text-base sm:text-lg text-muted-foreground">
                    ou{" "}
                    <span className="text-foreground font-semibold">3x de R$ 16,77</span>
                    <span className="text-muted-foreground/60"> sem juros</span>
                  </p>
                </div>

                {/* Included items */}
                <div className="mb-8">
                  <p className="font-sans text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">
                    O que está incluso
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {included.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                          <Check className="w-3 h-3 text-primary" />
                        </span>
                        <span className="font-sans text-sm text-secondary-foreground leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mb-6">
                  <a
                    href={CTA_LINK}
                    className="group inline-flex items-center gap-2.5 px-8 py-4 sm:px-10 sm:py-5 rounded-xl font-sans font-bold text-base text-primary-foreground bg-primary hover:brightness-110 transition-all duration-200 shadow-lg w-full sm:w-auto justify-center sm:justify-start"
                    style={{ boxShadow: "var(--shadow-emerald)" }}
                  >
                    Quero meu eBook agora
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap gap-4 text-xs font-sans text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-primary" />
                    Acesso imediato
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-primary" />
                    Garantia de 7 dias
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    Pagamento seguro
                  </span>
                </div>
              </div>

              {/* Right: Mockup - hidden on mobile, shown on lg */}
              <div className="hidden lg:flex items-center justify-center">
                <EbookMockup size="md" />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
