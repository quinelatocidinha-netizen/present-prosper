import { Shield, Check } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

export default function Guarantee() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-3xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="relative p-6 sm:p-8 md:p-12 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card/50 to-card/30 text-center overflow-hidden">
            {/* Corner accents */}
            <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-xl" />
            <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/30 rounded-br-xl" />

            {/* Shield icon */}
            <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary/10 border border-primary/20 mb-5 md:mb-6">
              <Shield className="w-6 h-6 md:w-7 md:h-7 text-primary" />
            </div>

            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-foreground mb-3 md:mb-4">
              Seu investimento protegido por{" "}
              <span className="text-primary">7 dias</span>
            </h2>

            <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed max-w-lg mx-auto mb-5 md:mb-6">
              Você pode adquirir o material com segurança. Caso a compra esteja dentro das condições legais aplicáveis e do prazo de 7 dias, a garantia deve ser apresentada de forma clara e responsável.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 text-xs font-sans text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                Compra segura
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                Acesso imediato
              </span>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-primary" />
                Garantia legal de 7 dias
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
