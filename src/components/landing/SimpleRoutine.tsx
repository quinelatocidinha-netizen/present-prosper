import { Camera, FileImage, Video, MapPin, RefreshCw } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const routineItems = [
  { icon: Camera, text: "Stories diários mostrando rotina, bastidores, atendimento ou produto" },
  { icon: FileImage, text: "2 a 3 posts por semana com conteúdo relevante" },
  { icon: Video, text: "1 a 2 reels por semana com formato dinâmico" },
  { icon: MapPin, text: "Revisão semanal da ficha do Google" },
  { icon: RefreshCw, text: "Reaproveitamento inteligente de conteúdo" },
];

export default function SimpleRoutine() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-20 items-center">
          <ScrollReveal>
            <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
              Constância simples
            </p>
            <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight mb-4 md:mb-6">
              Você não precisa de perfeição.{" "}
              <span className="text-primary">Precisa de uma rotina possível.</span>
            </h2>
            <p className="font-sans text-sm sm:text-base text-muted-foreground leading-relaxed mb-6 md:mb-8">
              No digital, estar presente com regularidade vale mais do que aparecer com força por poucos dias e depois desaparecer por semanas.
            </p>
          </ScrollReveal>

          <ScrollReveal stagger>
            <div className="space-y-3 md:space-y-4">
              {routineItems.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border/30 bg-card/30 hover:bg-card/50 hover:border-primary/20 transition-all duration-300">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <p className="font-sans text-sm text-secondary-foreground leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
