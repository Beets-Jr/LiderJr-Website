# Design System — Líder Jr.

Fonte única de verdade do visual do site. Os tokens vivem em
[`src/app/globals.css`](src/app/globals.css); os componentes que os aplicam, em
[`src/components/ui/`](src/components/ui/).

> **Regra que sustenta o resto:** a paleta padrão do Tailwind foi **removida**.
> `bg-blue-500`, `rounded-3xl` e `shadow-2xl` não compilam. Só existe o que está
> declarado aqui. Se você precisa de algo que não existe, o certo é discutir o
> token — não escrever um valor solto.

---

## Cor

### Marca

| Token         | Valor     | Onde usar                                  |
| ------------- | --------- | ------------------------------------------ |
| `brand`       | `#ff751f` | Botão primário, ícones, rótulos, destaques |
| `brand-hover` | `#f26821` | Estado hover do botão primário             |
| `brand-fg`    | `#ffffff` | Texto sobre o laranja                      |

### Superfícies claras

| Token            | Valor     | Onde usar                        |
| ---------------- | --------- | -------------------------------- |
| `surface`        | `#ffffff` | Fundo padrão e fundo de card     |
| `surface-muted`  | `#f4f4f5` | Seções alternadas, chips neutros |
| `surface-subtle` | `#fafafa` | Fundo de campo de formulário     |

### Superfícies escuras — três degraus

| Token            | Valor     | Onde usar                         |
| ---------------- | --------- | --------------------------------- |
| `surface-dark`   | `#000000` | Seções escuras, cabeçalho, rodapé |
| `surface-dark-2` | `#0b0b0c` | Card sobre superfície escura      |
| `surface-dark-3` | `#141416` | Hover sobre superfície escura     |

### Texto

| Token           | Valor      | Contraste                                          |
| --------------- | ---------- | -------------------------------------------------- |
| `fg`            | `#0b0b0c`  | 19,67:1 sobre branco                               |
| `fg-muted`      | `#52525b`  | 7,73:1 sobre branco · 7,03:1 sobre `surface-muted` |
| `on-dark`       | branco     | 21:1 sobre `surface-dark`                          |
| `on-dark-muted` | branco 72% | 10,47:1                                            |
| `on-dark-faint` | branco 56% | 6,49:1 — o piso; não escureça mais                 |

### Bordas e estados

`border` · `border-strong` · `border-on-dark` · `border-on-dark-strong` ·
`danger` (`#c8102e`) · `success` (`#0f7a58`) ·
`whatsapp` / `whatsapp-hover` (cor de marca do WhatsApp, obrigatória)

### ⚠️ Uma reprovação de contraste conhecida

O laranja da marca contra fundos claros dá **2,69:1**, abaixo do mínimo de
4,5:1 do WCAG AA. Afeta:

- **texto branco sobre o laranja** — botão primário, badge sólido, primeiro card
  de números;
- **texto laranja sobre branco** — eyebrows, links "Ver todos", rótulos de card.

Sobre o fundo escuro o mesmo laranja dá 7,82:1 e passa sem problema.

Foi mantido por decisão de projeto, para preservar o visual aprovado pelo
cliente. As alternativas medidas e o custo de cada uma estão em
[PENDENCIAS.md](PENDENCIAS.md).

---

## Tipografia

| Família        | Fonte            | Uso                            |
| -------------- | ---------------- | ------------------------------ |
| `font-heading` | League Spartan   | Títulos                        |
| `font-body`    | Raleway          | Texto corrido, botões, rótulos |
| `font-serif`   | DM Serif Display | Só citações e depoimentos      |

Carregadas por `next/font` em [`src/app/fonts.ts`](src/app/fonts.ts).

### Escala de títulos — componente `Heading`

`level` define a **aparência**; `as` define a **tag HTML**. São separados de
propósito: assim a hierarquia semântica pode estar correta mesmo quando o visual
não segue a ordem.

| `level`      | Tamanho                            | Uso                                |
| ------------ | ---------------------------------- | ---------------------------------- |
| `display`    | `text-4xl sm:text-5xl lg:text-6xl` | O H1 do topo da página             |
| `section`    | `text-3xl lg:text-4xl`             | Título de seção                    |
| `subsection` | `text-2xl`                         | Sub-bloco, título dentro de artigo |
| `card`       | `text-xl`                          | Título de card                     |
| `minor`      | `text-base`                        | Cross-links, rodapé                |

```tsx
<Heading as="h2" level="section">Nossas áreas de atuação</Heading>
<Heading as="p"  level="display">Texto grande que não é título</Heading>
```

**Regra de hierarquia:** um `h1` por página. Numa listagem, cada item é `h2`. Na
Home, onde os cards ficam sob o `h2` da seção, eles são `h3`. Nunca pule níveis.

### Texto corrido — componente `Text`

`size`: `xs` · `sm` · `base` · `lg`
`tone`: `default` · `muted` · `brand` · `onDark` · `onDarkMuted` · `onDarkFaint`
`weight`: `normal` · `medium` · `semibold` · `bold`
`family`: `body` · `serif` · `heading`

```tsx
<Text size="lg" tone="muted">Parágrafo de abertura.</Text>
<Text family="serif">“Uma citação.”</Text>
```

### `Eyebrow`

O rótulo pequeno em caixa-alta acima dos títulos. Não recrie à mão.

```tsx
<Eyebrow>Como funciona</Eyebrow>
<Eyebrow tone="onDarkFaint">Sobre fundo escuro</Eyebrow>
```

---

## Espaçamento e largura

### `Section` — ritmo vertical

Nenhuma página define espaçamento vertical por conta própria.

| `spacing` | Valor            | Uso                              |
| --------- | ---------------- | -------------------------------- |
| `tight`   | `py-12 lg:py-16` | Faixas curtas                    |
| `default` | `py-16 lg:py-24` | Padrão                           |
| `hero`    | `py-20 lg:py-28` | Topo de página                   |
| `none`    | —                | Quando a própria página controla |

`tone`: `light` · `muted` · `dark`. Com `glow`, aplica o brilho radial laranja.

### `Container` — largura máxima

| `width`   | Valor       | Uso                                            |
| --------- | ----------- | ---------------------------------------------- |
| `prose`   | `max-w-3xl` | Texto de artigo — respeita a medida de leitura |
| `narrow`  | `max-w-5xl` | CTA, depoimento centrado                       |
| `default` | `max-w-7xl` | Padrão do site                                 |

```tsx
<Section tone="muted">
  <Container>…</Container>
</Section>
```

---

## Raio, sombra e movimento

**Raio** — três degraus, e só:

| Token        | Valor | Uso                   |
| ------------ | ----- | --------------------- |
| `rounded-sm` | 8px   | Chips, tiles pequenos |
| `rounded-md` | 12px  | Botões, campos        |
| `rounded-lg` | 16px  | Cards, painéis        |

`rounded-full` continua disponível para pílulas e avatares.

**Sombra** — `shadow-sm` (repouso) · `shadow-md` · `shadow-lg` (hover de card).

**Movimento** — o padrão do Tailwind foi trocado: toda transição sem duração
explícita roda a **200ms** com a curva `cubic-bezier(0.16, 1, 0.3, 1)`. Use
`duration-300` só em transformações e sombras. Todo o site respeita
`prefers-reduced-motion`.

---

## Componentes

### `Button` e `ButtonLink`

`ButtonLink` navega de verdade (usa `next/link`); `Button` dispara uma ação.

| `variant`       | Uso                                   |
| --------------- | ------------------------------------- |
| `primary`       | A ação principal                      |
| `secondary`     | Ação secundária sobre fundo claro     |
| `outline`       | Contorno sobre fundo claro            |
| `outlineOnDark` | O par do `primary` nas seções escuras |
| `ghost`         | Sem cromo                             |
| `link`          | Link textual laranja                  |

`size`: `sm` · `md` · `lg` (padrão) · `fullWidth`

```tsx
<ButtonLink href="/fale-conosco">Solicitar orçamento</ButtonLink>
<ButtonLink href="/servicos" variant="outlineOnDark">Ver serviços</ButtonLink>
<ButtonLink href="https://…" external variant="outline">Site parceiro</ButtonLink>
```

Numa seção escura, o par correto é sempre `primary` + `outlineOnDark`.

### `Card`

`tone`: `default` · `raised` (sobre `surface-muted`) · `onDark` · `invertido`
(painel escuro dentro de seção clara)
`padding`: `none` · `sm` · `md` · `lg` · `xl`
`interactive`: eleva e destaca a borda no hover — use em card clicável

**Card clicável:** o card recebe `relative` e o link do título recebe
`after:absolute after:inset-0`. Assim o card inteiro é clicável, mas existe um
único link para teclado e leitores de tela.

```tsx
<Card as="article" interactive className="group relative">
  <Heading as="h2" level="card">
    <Link href={href} className="rounded-sm after:absolute after:inset-0">
      {titulo}
    </Link>
  </Heading>
</Card>
```

### `Badge`

`tone`: `neutral` · `brand` · `brandSolid` (categoria ativa) · `onDark`
`size`: `sm` · `md`

### `Field`, `Input`, `Textarea`

**Sempre** envolva o campo num `Field`. Ele cuida da label associada, da marca de
obrigatório e da mensagem de erro anunciada por leitor de tela.

```tsx
<Field id="contato-email" label="E-mail" required error={erro}>
  <Input id="contato-email" name="email" type="email" invalid={Boolean(erro)} />
</Field>
```

`tone="onDark"` para formulário sobre fundo escuro.

### `Foto`

Envolve o `next/image` e recebe a imagem inteira da camada de conteúdo, com
`alt` e dimensões — assim o `alt` nunca é esquecido nem inventado no componente.

```tsx
<div className="relative aspect-[4/3] overflow-hidden rounded-lg">
  <Foto imagem={conteudo.imagem} sizes="(min-width: 1024px) 50vw, 100vw" />
</div>
```

Use `priority` só na imagem principal acima da dobra.

### Peças menores

`IconTile` (ícone em tile laranja) · `Avatar` (iniciais) · `StepMarker` (círculo
numerado das linhas do tempo) · `Estrelas` (nota 5 de 5 dos depoimentos)

### LinkEsticado

O título de um card que é link para o card inteiro: o `<Link>` do título se
estica por cima do card com `after:absolute`, então o card precisa de
`relative`. Sem `href`, o título sai como texto puro.

```tsx
<Card as="article" className="group relative">
  <Heading as="h3" level="card">
    <LinkEsticado href={getHrefDoPost(post)}>{post.titulo}</LinkEsticado>
  </Heading>
</Card>
```

---

## Utilitários próprios

| Classe           | O que faz                                                        |
| ---------------- | ---------------------------------------------------------------- |
| `glow-brand`     | O brilho radial laranja das seções escuras                       |
| `scrollbar-hide` | Esconde a barra de rolagem sem perder o scroll                   |
| `on-dark`        | Marca uma região escura — muda a cor do anel de foco para branco |

---

## Ao criar uma seção nova

1. Envolva em `Section` e `Container` — nunca defina espaçamento vertical ou
   largura máxima soltos.
2. Use `Heading`, `Text` e `Eyebrow` — não escreva `text-4xl font-bold` à mão.
3. Cor, raio e sombra só a partir dos tokens. Nada de `text-[#ff751f]`.
4. Listas sempre com `.map()` sobre dados, nunca itens escritos um a um.
5. Nenhum texto visível dentro do componente: tudo entra por props, vindo do
   conteúdo. A única exceção são `aria-label`s estruturais (ex.: "Navegação
   principal"), que descrevem a mecânica da interface e não o conteúdo do site.
6. Passando de ~150 linhas, quebre o componente.
