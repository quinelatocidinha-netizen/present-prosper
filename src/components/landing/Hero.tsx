import { ArrowRight, ChevronDown, Check } from "lucide-react";
import EbookMockup from "./EbookMockup";

const CTA_LINK = "#comprar";

const bullets = [
  "Organize o básico que faz sua empresa parecer mais profissional",
  "Aprenda o que realmente postar para gerar confiança",
  "Estruture Instagram e Google com clareza e lógica comercial",
  "Aplique um plano simples de 7 dias para começar a mudar sua presença digital",
];

export default function Hero() {
  const scrollToContent = () => {
    document.getElementById("conteudo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Apresentação do eBook"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] md:w-[400px] md:h-[400px] rounded-full bg-accent/5 blur-[100px]" />
        {/* Grid subtle */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-5 md:px-8 py-20 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center">
          {/* Left content */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 mb-6 md:mb-8 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-primary/20 bg-primary/5 animate-fade-up">
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse-soft" />
              <span className="text-[10px] md:text-xs font-sans font-medium tracking-wide uppercase text-primary">
                Guia prático para pequenos negócios
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-[3.4rem] font-bold leading-[1.45] tracking-tight text-foreground mb-5 md:mb-6 animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              Seu negócio não precisa parecer grande.{" "}
              <span className="text-primary">
                Precisa parecer claro, confiável e presente.
              </span>
            </h1>

            {/* Subheadline */}
            <p
              className="font-sans text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl mb-6 md:mb-8 animate-fade-up"
              style={{ animationDelay: "200ms" }}
            >
              Um guia prático para pequenos empresários, comércios locais e prestadores de serviço que querem transmitir mais confiança, ser mais encontrados e fortalecer sua presença digital no Instagram e no Google.
            </p>

            {/* Bullets */}
            <ul
              className="space-y-2.5 md:space-y-3 mb-8 md:mb-10 animate-fade-up"
              style={{ animationDelay: "300ms" }}
            >
              {bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm md:text-base font-sans text-secondary-foreground">
                  <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mb-6 md:mb-8 animate-fade-up"
              style={{ animationDelay: "400ms" }}
            >
              <a
                href={CTA_LINK}
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-sans font-semibold text-base text-primary-foreground bg-primary hover:brightness-110 transition-all duration-200 shadow-lg"
                style={{ boxShadow: "var(--shadow-emerald)" }}
              >
                Quero meu eBook agora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <button
                onClick={scrollToContent}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl font-sans font-medium text-sm text-muted-foreground hover:text-foreground border border-border hover:border-primary/30 transition-all duration-200 bg-transparent"
              >
                Ver o que você vai aprender
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Micro proof */}
            <p
              className="text-xs font-sans text-muted-foreground animate-fade-up"
              style={{ animationDelay: "500ms" }}
            >
              <span className="text-primary font-semibold">R$ 47,00</span> · Acesso imediato · Garantia de 7 dias
            </p>
          </div>

          {/* Right - Mockup: visible on all screens */}
          <div
            className="flex justify-center lg:justify-end animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <EbookMockup size="lg" />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground animate-fade-in" style={{ animationDelay: "800ms" }}>
        <span className="text-[10px] font-sans uppercase tracking-[0.2em]">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
      </div>
    </section>
  );
}
