
# Landing Page Premium — eBook "Seu Negócio Mais Profissional no Instagram e no Google"

## Objetivo
Landing page de vendas com direção de arte editorial-comercial premium. Fundo escuro azul-petróleo, acentos verde-esmeralda, tipografia forte. R$ 47,00 via Hotmart (link placeholder). Design autoral, longe de template.

## Identidade Visual
- **Paleta:** fundo #1a2332 a #1e3044, acentos #2dd4a8/#3cb5a0, texto branco/off-white, cards em variações sutis do fundo
- **Tipografia:** headings bold com tracking refinado, corpo leve e legível
- **Atmosfera:** editorial premium, composições assimétricas, respiro generoso, microdetalhes elegantes

## Estrutura (14 seções)

### 1. Hero Premium
Split assimétrico: mockup 3D do eBook à direita, headline forte à esquerda. Selo "Guia prático para pequenos negócios", headline, subheadline, 4 bullets, CTA principal verde-esmeralda, CTA secundário para scroll. Microprova "R$ 47,00 · acesso imediato".

### 2. Marquee Estratégico
Faixa animada com frases curtas em loop suave ("Mais clareza", "Mais confiança", etc.). Pausa no hover, respeita prefers-reduced-motion.

### 3. Bloco de Identificação com a Dor
Título emocional + grid autoral com 10 cards de dores reais (bio confusa, feed parado, etc.). Composição assimétrica, ícones minimalistas, animações stagger no scroll.

### 4. Bloco "O Básico Bem Feito"
Seção conceitual com 3 pilares (Organização, Clareza, Presença) em layout editorial assimétrico com linhas decorativas e profundidade sutil.

### 5. Seção de Transformação (Antes x Depois)
Duas colunas com tratamento visual diferenciado — lado "antes" mais opaco/desfocado, lado "depois" vibrante e nítido. Sem clichê de tabela comparativa.

### 6. O Que Você Vai Aprender
Grid editorial com 10 tópicos reais do eBook. Numeração refinada, divisões editoriais, ícones minimalistas. Composição intercalada, não lista simples.

### 7. Bio, Destaques, Conteúdo e Google
4 blocos com layouts alternados (imagem/texto zig-zag), cada pilar com explicação concisa e visual diferenciado.

### 8. Rotina Simples
Seção com ícones de frequência e visual de checklist premium. Tom prático e acessível.

### 9. Plano de Ação de 7 Dias
Timeline vertical premium com animação de progresso no scroll. Cada dia com ícone, título e descrição curta. Visual autoral e bem animado.

### 10. Prova Social
3 depoimentos placeholder com avatar, nome, tipo de negócio. Visual premium com aspas estilizadas.

### 11. Garantia de 7 Dias
Selo visual premium com badge, texto claro e responsável. Bloco de redução de risco.

### 12. FAQ
Accordion autoral com 6 perguntas. Visual sofisticado, não genérico.

### 13. CTA Final
Headline de fechamento + mockup do eBook + CTA verde-esmeralda + reforço de preço.

### 14. Rodapé
Quinelato Giuseppe Soluções Web e Tecnológicas, links legais, contato, copyright.

## Motion & UX
- Scroll reveal com fade+translate e stagger em listas/cards (Intersection Observer)
- Hover states sofisticados em botões e cards
- Sticky CTA no mobile após scroll
- prefers-reduced-motion respeitado globalmente
- Lazy loading em imagens abaixo da dobra
- Imagens de banco via Unsplash (pequenos negócios, comércio local)

## SEO
Title, meta description e Open Graph preparados para o eBook.

## Estrutura Técnica
- Componentes por seção em `src/components/landing/`
- CSS custom properties para a paleta do eBook no index.css
- Hooks reutilizáveis para scroll animation e marquee
- Mobile-first, responsivo
