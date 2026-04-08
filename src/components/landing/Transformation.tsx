import { X, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const before = [
  "Pouca clareza sobre o que a empresa faz",
  "Pouca confiança visual no perfil",
  "Pouca visibilidade nas buscas",
  "Perfil que não explica nada",
  "Presença inconsistente e sem ritmo",
  "Google sem força local",
  "Aparência amadora em todos os canais",
];

const after = [
  "Instagram claro e funcional",
  "Bio objetiva e que direciona",
  "Destaques organizados com propósito",
  "Conteúdo coerente e estratégico",
  "Google mais forte nas buscas locais",
  "Mais percepção de profissionalismo",
  "Mais segurança para o cliente entrar em contato",
];

export default function Transformation() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Divider top */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            A transformação
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            O que muda quando sua presença digital{" "}
            <span className="text-primary">começa a trabalhar a seu favor</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Before */}
          <ScrollReveal>
            <div className="relative p-8 md:p-10 rounded-2xl border border-border/50 bg-card/30 backdrop-blur-sm">
              <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-muted-foreground/20 to-muted-foreground/5" />
              <span className="inline-block mb-6 px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-wide uppercase text-muted-foreground border border-border/50 bg-muted/30">
                Antes
              </span>
              <ul className="space-y-4">
                {before.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-muted/50 flex items-center justify-center">
                      <X className="w-3 h-3 text-muted-foreground/60" />
                    </span>
                    <span className="font-sans text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          {/* After */}
          <ScrollReveal>
            <div className="relative p-8 md:p-10 rounded-2xl border border-primary/20 bg-primary/5 backdrop-blur-sm">
              <div className="absolute top-0 inset-x-0 h-1 rounded-t-2xl bg-gradient-to-r from-primary to-accent" />
              <span className="inline-block mb-6 px-3 py-1 rounded-full text-xs font-sans font-semibold tracking-wide uppercase text-primary border border-primary/20 bg-primary/10">
                Depois
              </span>
              <ul className="space-y-4">
                {after.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </span>
                    <span className="font-sans text-sm text-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="mt-12 text-center">
          <p className="font-sans text-base md:text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "O pequeno negócio não precisa tentar parecer grande.{" "}
            <span className="text-foreground font-medium not-italic">Precisa parecer confiável, claro e ativo.</span>"
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
