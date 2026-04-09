import { Quote, Star } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Carla M.",
    role: "Pequena empresária",
    text: "Em pouco tempo, meu perfil ficou muito mais claro e profissional. As pessoas passaram a entender melhor o que eu faço.",
    initials: "CM",
  },
  {
    name: "Roberto S.",
    role: "Comércio local",
    text: "Eu achava que precisava de marketing complicado. Ajustando o básico, já senti muita diferença na forma como os clientes me encontram.",
    initials: "RS",
  },
  {
    name: "Ana Paula L.",
    role: "Prestadora de serviço",
    text: "Sair da bagunça visual e organizar o Google e o Instagram me deu uma base muito mais forte para atrair novos clientes.",
    initials: "AL",
  },
];

export default function SocialProof() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-10 md:mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Quem já aplicou
          </p>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            Resultados reais de quem começou{" "}
            <span className="text-primary">pelo básico</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal stagger>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {testimonials.map(({ name, role, text, initials }, i) => (
              <div
                key={i}
                className="relative p-6 md:p-8 rounded-2xl border border-border/30 bg-card/40 hover:bg-card/60 transition-all duration-300 group"
              >
                {/* Quote mark */}
                <Quote className="w-7 h-7 md:w-8 md:h-8 text-primary/15 mb-4 group-hover:text-primary/25 transition-colors" />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 text-primary fill-primary" />
                  ))}
                </div>

                <p className="font-sans text-sm text-secondary-foreground leading-relaxed mb-6 italic">
                  "{text}"
                </p>

                <div className="flex items-center gap-3 pt-4 border-t border-border/30">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                    <span className="font-sans text-xs font-bold text-primary">{initials}</span>
                  </div>
                  <div>
                    <p className="font-sans text-sm font-semibold text-foreground">{name}</p>
                    <p className="font-sans text-xs text-muted-foreground">{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
