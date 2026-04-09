

# Adicionar capa do eBook + Seção de Preço + Responsividade Mobile-First

## 1. Copiar imagens do eBook para o projeto
- Salvar a imagem da capa (`Ebook-Seu-Negocio-Mais-Profissional-no-Instagram-e-no-Google.png`) em `public/ebook-cover.png`
- Salvar screenshot adicional em `public/ebook-screenshot.png`

## 2. Atualizar `EbookMockup.tsx`
- Remover conteúdo gerado (textos, ícones, SVGs internos)
- Usar `<img src="/ebook-cover.png">` com `object-cover` preenchendo o "corpo do livro"
- Manter efeitos 3D, spine, glow e shadow existentes
- Ajustar tamanhos para mobile-first: `w-40 h-56` → `sm:w-48 sm:h-64` → `md:w-72 md:h-96` → `lg:w-80 lg:h-[28rem]`

## 3. Criar `src/components/landing/Pricing.tsx`
Seção premium de preço com:
- Headline: "Tudo isso por um único investimento"
- Preço destaque: **R$ 47,00** à vista
- Badge: **ou 3x de R$ 16,77**
- Lista de 8 itens inclusos com checkmarks
- CTA verde-esmeralda "Quero meu eBook agora"
- Trust badges (acesso imediato, garantia 7 dias, pagamento seguro)
- Mockup do eBook ao lado no desktop, oculto no mobile
- Card com borda primary, gradiente sutil, accent line no topo

## 4. Atualizar `Index.tsx`
Inserir `<Pricing />` entre `<Guarantee />` e `<FAQ />`

## 5. Ajustes de responsividade mobile-first em todos os componentes

**Hero.tsx:**
- Mostrar mockup em todas as telas (atualmente `hidden lg:flex`), com tamanho menor em mobile
- CTAs empilhados em mobile (já funciona), garantir padding adequado

**PainPoints.tsx:**
- Grid de cards: `grid-cols-1 sm:grid-cols-2 lg:grid-cols-5`  (atualmente `grid-cols-2` pode ficar apertado em 320px)

**WhatYouLearn.tsx:**
- Grid: `grid-cols-1 md:grid-cols-2` (já está OK)

**ActionPlan.tsx:**
- Timeline no mobile: todos alinhados à esquerda (já funciona)
- Garantir padding consistente em telas pequenas

**SocialProof.tsx:**
- Grid: `grid-cols-1 md:grid-cols-3` (atualmente `md:grid-cols-3` sem `grid-cols-1` — verificar)

**FinalCTA.tsx:**
- Mostrar mockup no mobile com tamanho menor (atualmente `hidden lg:block`)

**Todas as seções:**
- Garantir `px-5` mínimo em todos os containers
- Textos responsivos com `text-xl sm:text-2xl md:text-3xl lg:text-4xl` pattern
- Espaçamento vertical `py-16 md:py-24 lg:py-32`

## Detalhes técnicos
- Imagens com `loading="lazy"` para performance
- Pricing section usa ScrollReveal existente
- Mobile-first: todos os estilos base são para mobile, breakpoints adicionam complexidade

