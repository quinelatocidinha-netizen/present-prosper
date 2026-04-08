import { FolderOpen, Eye, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: FolderOpen,
    title: "Organização",
    description: "Um perfil organizado comunica cuidado. E cuidado transmite profissionalismo antes mesmo de qualquer palavra ser dita.",
  },
  {
    icon: Eye,
    title: "Clareza",
    description: "Quando o cliente entende rapidamente o que você faz, ele tem mais segurança para avançar.",
  },
  {
    icon: Zap,
    title: "Presença",
    description: "Aparecer com constância mostra que o negócio está vivo, ativo e acessível.",
  },
];

export default function BasicsDoneRight() {
  return (
    <section className="relative py-24 md:py-32">
      {/* Accent */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        {/* Header with asymmetric layout */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-16 items-end mb-20">
          <ScrollReveal>
            <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              O essencial
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
              O básico bem feito já coloca sua empresa{" "}
              <span className="text-primary">na frente de muitas outras</span>
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed">
              Hoje, estar na internet não é mais diferencial. Diferencial é estar da forma certa. Quando o básico está bem feito, o cliente entende mais rápido, sente mais segurança e tem mais facilidade para dar o próximo passo.
            </p>
          </ScrollReveal>
        </div>

        {/* 3 pillars with editorial layout */}
        <div className="grid md:grid-cols-3 gap-0 md:gap-0">
          {pillars.map(({ icon: Icon, title, description }, i) => (
            <ScrollReveal key={i}>
              <div
                className={`relative p-8 md:p-10 ${
                  i < 2 ? "md:border-r border-border/30" : ""
                } ${i > 0 ? "border-t md:border-t-0 border-border/30" : ""}`}
              >
                {/* Number */}
                <span className="font-serif text-6xl md:text-7xl font-bold text-primary/10 absolute top-4 right-6">
                  {String(i + 1).padStart(2, "0")}
                </span>
                
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </div>
                
                {/* Bottom accent line */}
                <div className="mt-8 w-16 h-px bg-gradient-to-r from-primary/50 to-transparent" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
