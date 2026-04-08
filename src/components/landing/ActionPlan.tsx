import { UserCircle, BookmarkPlus, LayoutGrid, MessageCircle, MapPin, ImagePlus, MessageSquare } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const days = [
  { day: 1, icon: UserCircle, title: "Revise foto, nome, categoria e bio", color: "from-primary/20 to-primary/5" },
  { day: 2, icon: BookmarkPlus, title: "Organize destaques com lógica", color: "from-accent/20 to-accent/5" },
  { day: 3, icon: LayoutGrid, title: "Defina tipos de conteúdo", color: "from-primary/20 to-primary/5" },
  { day: 4, icon: MessageCircle, title: "Publique seus primeiros stories", color: "from-accent/20 to-accent/5" },
  { day: 5, icon: MapPin, title: "Cuide da ficha do Google", color: "from-primary/20 to-primary/5" },
  { day: 6, icon: ImagePlus, title: "Atualize fotos e dados", color: "from-accent/20 to-accent/5" },
  { day: 7, icon: MessageSquare, title: "Responda avaliações e planeje a continuidade", color: "from-primary/20 to-primary/5" },
];

export default function ActionPlan() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Plano de ação
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-4">
            Um plano simples para tirar sua empresa{" "}
            <span className="text-primary">da paralisia</span>
          </h2>
          <p className="font-sans text-base text-muted-foreground max-w-xl mx-auto">
            Em vez de tentar resolver tudo de uma vez, você avança em pequenas etapas bem feitas.
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent md:-translate-x-px" />

          <div className="space-y-6 md:space-y-8">
            {days.map(({ day, icon: Icon, title, color }, i) => (
              <ScrollReveal key={i}>
                <div className={`relative flex items-start gap-6 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Content */}
                  <div className={`flex-1 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"} pl-16 md:pl-0`}>
                    <div className={`inline-block p-5 md:p-6 rounded-2xl border border-border/30 bg-gradient-to-br ${color} backdrop-blur-sm`}>
                      <div className="flex items-center gap-3 mb-2">
                        <Icon className="w-4 h-4 text-primary" />
                        <span className="font-sans text-xs font-bold tracking-[0.15em] uppercase text-primary">
                          Dia {day}
                        </span>
                      </div>
                      <p className="font-sans text-sm text-secondary-foreground leading-relaxed">
                        {title}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-6 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 z-10" />

                  {/* Spacer for alternating */}
                  <div className="hidden md:block flex-1" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
