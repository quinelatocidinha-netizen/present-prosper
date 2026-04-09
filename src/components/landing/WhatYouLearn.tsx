import { Instagram, Type, BookmarkCheck, Film, MessageSquare, CalendarDays, MapPin, Star, AlertTriangle, ListChecks } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const topics = [
  { icon: Instagram, title: "Como organizar o Instagram da sua empresa do zero" },
  { icon: Type, title: "Como construir uma bio clara e objetiva" },
  { icon: BookmarkCheck, title: "Como estruturar destaques com lógica comercial" },
  { icon: Film, title: "Stories, posts, carrosséis e reels: função de cada formato" },
  { icon: MessageSquare, title: "O que postar para gerar confiança e manter presença" },
  { icon: CalendarDays, title: "Como criar uma rotina simples de conteúdo sem depender de perfeição" },
  { icon: MapPin, title: "Por que sua empresa precisa da ficha do Google" },
  { icon: Star, title: "Como fortalecer a ficha do Google e manter sua empresa ativa nas buscas" },
  { icon: AlertTriangle, title: "Os principais erros que fazem uma empresa parecer amadora no digital" },
  { icon: ListChecks, title: "Plano de ação de 7 dias para organizar sua presença digital" },
];

export default function WhatYouLearn() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 blur-[150px] rounded-full -translate-x-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Conteúdo do eBook
          </p>
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight">
            O que você vai aprender
          </h2>
        </ScrollReveal>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
          {topics.map(({ icon: Icon, title }, i) => (
            <ScrollReveal key={i}>
              <div className="group flex items-start gap-4 md:gap-5 p-5 md:p-7 rounded-2xl border border-border/30 bg-card/30 hover:bg-card/60 hover:border-primary/20 transition-all duration-300">
                <div className="flex-shrink-0 flex items-center gap-3 md:gap-4">
                  <span className="font-serif text-xl md:text-2xl font-bold text-primary/20 group-hover:text-primary/40 transition-colors min-w-[1.5rem] md:min-w-[2rem] text-right">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-primary/10 group-hover:bg-primary/15 flex items-center justify-center transition-colors">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                </div>
                <p className="font-sans text-sm md:text-base text-secondary-foreground leading-relaxed pt-1.5 md:pt-2">
                  {title}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
