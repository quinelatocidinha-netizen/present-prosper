const phrases = [
  "Mais clareza",
  "Mais confiança",
  "Mais presença",
  "Mais profissionalismo",
  "Mais visibilidade local",
  "Instagram com lógica",
  "Google com força",
  "O básico bem feito",
  "Constância acima da perfeição",
  "Seu negócio mais fácil de ser escolhido",
];

export default function Marquee() {
  const doubled = [...phrases, ...phrases];

  return (
    <section
      className="relative py-6 overflow-hidden border-y border-border/50"
      aria-label="Benefícios do eBook"
      style={{ background: "linear-gradient(90deg, hsl(var(--navy-deep)), hsl(var(--background)), hsl(var(--navy-deep)))" }}
    >
      <div
        className="animate-marquee flex gap-8 whitespace-nowrap hover:[animation-play-state:paused] w-max"
      >
        {doubled.map((phrase, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="text-sm md:text-base font-sans font-medium text-muted-foreground/80 tracking-wide">
              {phrase}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 flex-shrink-0" aria-hidden="true" />
          </span>
        ))}
      </div>
    </section>
  );
}
