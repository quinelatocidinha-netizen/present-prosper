import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    q: "Para quem é este eBook?",
    a: "Para pequenos empresários, comércios locais e prestadores de serviço que querem melhorar sua presença no Instagram e no Google. Mesmo que você não saiba nada de marketing digital, o conteúdo foi feito para ser prático e direto.",
  },
  {
    q: "Preciso entender de marketing digital?",
    a: "Não. O eBook foi escrito justamente para quem está começando ou tem pouco conhecimento sobre o assunto. A linguagem é simples e as instruções são práticas, passo a passo.",
  },
  {
    q: "Esse conteúdo serve para qualquer tipo de negócio?",
    a: "Sim. Os princípios de organização, clareza e presença digital se aplicam a qualquer pequeno negócio — desde comércios físicos até prestadores de serviço autônomos.",
  },
  {
    q: "Em quanto tempo consigo aplicar?",
    a: "O eBook inclui um plano de ação de 7 dias. Você pode começar a aplicar no mesmo dia em que acessar o material.",
  },
  {
    q: "Como recebo o material?",
    a: "Após a confirmação do pagamento, você recebe o acesso ao eBook imediatamente por e-mail, em formato digital (PDF).",
  },
  {
    q: "Como funciona a garantia de 7 dias?",
    a: "Conforme previsto nas condições legais, você tem 7 dias após a compra para solicitar o reembolso caso o material não atenda às suas expectativas.",
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="relative max-w-3xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-12">
          <p className="text-xs font-sans font-semibold tracking-[0.2em] uppercase text-primary mb-4">
            Dúvidas frequentes
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-foreground leading-tight">
            Perguntas e respostas
          </h2>
        </ScrollReveal>

        <ScrollReveal>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border border-border/30 rounded-xl px-6 bg-card/30 hover:bg-card/50 transition-colors data-[state=open]:bg-card/50 data-[state=open]:border-primary/20"
              >
                <AccordionTrigger className="font-sans text-sm md:text-base font-medium text-foreground hover:no-underline py-5">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-sm text-muted-foreground leading-relaxed pb-5">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>
      </div>
    </section>
  );
}
