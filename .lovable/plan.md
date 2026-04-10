

# 3 Ajustes: Bordas do Mockup, Fontes do Preço e Meta Pixel

## 1. Remover bordas do EbookMockup
Em `EbookMockup.tsx`, remover `border border-primary/20` do div do "Book body" (linha 28). Isso elimina a borda visível ao redor da imagem do eBook em todas as instâncias (Hero, Pricing, FinalCTA).

## 2. Aumentar tamanho da fonte dos valores na Pricing
Em `Pricing.tsx`:
- Preço principal "R$ 47": de `text-4xl sm:text-5xl md:text-6xl` → `text-5xl sm:text-6xl md:text-7xl`
- Centavos ",00": de `text-xl sm:text-2xl` → `text-2xl sm:text-3xl md:text-4xl`
- Parcelamento "3x de R$ 16,77": de `text-sm` → `text-base sm:text-lg`

## 3. Adicionar Meta Pixel ao index.html
- Inserir o `<script>` do Facebook Pixel no `<head>` (após as meta tags)
- Inserir o `<noscript><img>` fallback no `<body>` (antes do `<div id="root">`)

### Arquivos alterados
- `src/components/landing/EbookMockup.tsx`
- `src/components/landing/Pricing.tsx`
- `index.html`

