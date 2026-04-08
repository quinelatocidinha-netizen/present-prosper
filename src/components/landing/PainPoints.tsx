import { AlertCircle, User, ImageOff, Layout, Clock, Megaphone, ThumbsDown, MapPin, Camera, MousePointerClick } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const painPoints = [
  { icon: User, text: "Bio confusa ou vaga" },
  { icon: ImageOff, text: "Perfil com aparência improvisada" },
  { icon: Layout, text: "Destaques sem lógica" },
  { icon: Clock, text: "Feed parado há semanas" },
  { icon: AlertCircle, text: "Stories inexistentes" },
  { icon: Megaphone, text: "Excesso de promoção sem contexto" },
  { icon: ThumbsDown, text: "Falta de prova social" },
  { icon: MapPin, text: "Ficha do Google abandonada" },
  { icon: Camera, text: "Fotos ruins ou antigas" },
  { icon: MousePointerClick, text: "Ausência de chamada clara para ação" },
];

export default function PainPoints() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" id="conteudo">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] rounded-full bg-destructive/5 blur-[150px] -translate-y-1/2 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            O problema que ninguém fala
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight mb-6">
            Talvez o seu negócio não esteja faltando qualidade.{" "}
            <span className="text-primary">Talvez esteja faltando clareza.</span>
          </h2>
          <p className="font-sans text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Muitos pequenos negócios não deixam de vender porque oferecem algo ruim. Eles perdem oportunidades porque estão mal apresentados no Instagram, quase invisíveis no Google e pouco claros para quem chega pela primeira vez.
          </p>
        </ScrollReveal>

        {/* Cards grid - asymmetric layout */}
        <ScrollReveal stagger>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
            {painPoints.map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className={`group relative p-5 md:p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-destructive/30 hover:bg-card transition-all duration-300 ${
                  i === 0 ? "md:col-span-2 lg:col-span-2" : ""
                } ${i === 5 ? "md:col-span-2 lg:col-span-2" : ""}`}
              >
                <Icon className="w-5 h-5 text-muted-foreground group-hover:text-destructive/70 transition-colors duration-300 mb-3" />
                <p className="font-sans text-sm font-medium text-secondary-foreground leading-snug">
                  {text}
                </p>
                {/* Subtle glow on hover */}
                <div className="absolute inset-0 rounded-2xl bg-destructive/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-12 max-w-2xl">
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed italic border-l-2 border-primary/30 pl-5">
            Esses detalhes reduzem confiança e fazem a empresa parecer menos preparada do que realmente é. A boa notícia? Resolver isso é mais simples do que parece.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
