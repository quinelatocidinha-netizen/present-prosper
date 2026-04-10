

# Remover sombra verde do eBook + Aumentar espaçamento do título

## 1. Limpar EbookMockup (`src/components/landing/EbookMockup.tsx`)

Remover todos os efeitos decorativos, deixando apenas a imagem:
- **Linha 18**: Remover o div "Glow behind" (`bg-primary/20 blur-3xl`)
- **Linha 21**: Remover o div "Book shadow" (`bg-background/80 blur-xl`)
- **Linha 33**: Remover o `boxShadow` inline que tem cor verde (`hsl(163 67% 50% / 0.15)`)
- **Linha 37**: Remover o div "Spine highlight" (`bg-gradient-to-b from-primary/60`)
- **Linha 48**: Remover o div "Subtle texture overlay" (`bg-gradient-to-t ... to-primary/5`)
- Classe `shadow-2xl` também será removida

O componente ficará apenas com a imagem dentro de um container com tamanho responsivo.

## 2. Aumentar espaçamento entre linhas do título

Em `Hero.tsx` (linha 51), o `h1` tem `leading-[1.15]`. Alterar para `leading-[1.3]` para dar mais respiro entre as linhas.

Em `FinalCTA.tsx` (linha 25), o `h2` tem `leading-tight`. Alterar para `leading-[1.3]` também.

### Arquivos alterados
- `src/components/landing/EbookMockup.tsx`
- `src/components/landing/Hero.tsx`
- `src/components/landing/FinalCTA.tsx`

