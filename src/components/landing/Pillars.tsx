import { UserCheck, Bookmark, FileText, Search } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const pillars = [
  {
    icon: UserCheck,
    label: "Bio",
    title: "Bio que converte em 3 segundos",
    description: "A pessoa precisa entender rápido quem é a empresa, o que faz, para quem atende, onde atende e como entrar em contato.",
  },
  {
    icon: Bookmark,
    label: "Destaques",
    title: "Destaques estratégicos",
    description: "Funcionam como atalhos de informação e reduzem insegurança do cliente. Cada destaque deve responder uma dúvida comum.",
  },
  {
    icon: FileText,
    label: "Conteúdo",
    title: "Conteúdo que gera confiança",
    description: "O perfil não pode viver só de promoção. Precisa mostrar confiança, prova, produto e relacionamento com o público.",
  },
  {
    icon: Search,
    label: "Google",
    title: "Ficha do Google que fortalece visibilidade local",
    description: "Ajuda a empresa a ser encontrada por intenção de busca local, reforça credibilidade e facilita contato direto.",
  },
];

export default function Pillars() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="max-w-3xl mb-16">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Os 4 pilares práticos
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Bio, Destaques, Conteúdo e Google
          </h2>
        </ScrollReveal>

        {/* Zigzag layout */}
        <div className="space-y-6">
          {pillars.map(({ icon: Icon, label, title, description }, i) => (
            <ScrollReveal key={i}>
              <div
                className={`flex flex-col ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-6 md:gap-10 items-center p-6 md:p-0`}
              >
                {/* Visual block */}
                <div className="w-full md:w-2/5 flex-shrink-0">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border/30 bg-card/50">
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <span className="font-sans text-xs font-semibold tracking-[0.2em] uppercase text-primary">
                        {label}
                      </span>
                    </div>
                    {/* Corner accents */}
                    <div className="absolute top-3 left-3 w-6 h-6 border-t border-l border-primary/20 rounded-tl-lg" />
                    <div className="absolute bottom-3 right-3 w-6 h-6 border-b border-r border-primary/20 rounded-br-lg" />
                  </div>
                </div>

                {/* Text block */}
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">
                    {title}
                  </h3>
                  <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                  <div className="mt-6 w-12 h-px bg-primary/30" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
