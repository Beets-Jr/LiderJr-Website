# Pendências

O que ficou em aberto, o que foi padronizado em relação ao protótipo e onde
estão os pontos de integração futura.

---

## 1. Bloqueios de conteúdo — precisam do cliente

### 1.1 Filiações (Quem Somos) — o mais urgente

No protótipo, os quatro textos desta seção **descreviam outra empresa júnior, a
Beets Jr.**, e os logos eram carregados do site dela
(`beetsjr.com.br/assets/…`). Um dos textos dizia literalmente _"A **Beets Jr.**
se filiou ao NuCa em julho de 2020"_.

Os textos foram substituídos por marcadores `[TEXTO PENDENTE — …]` e os logos por
placeholders com a palavra "LOGO PENDENTE".

**A Líder Jr. precisa fornecer:** os quatro textos corretos e os quatro logos
(ou a autorização de uso deles).
📄 `src/content/quem-somos.ts` · `public/imagens/filiacoes/`

### 1.2 Imagens

Todas as sete imagens são de banco, herdadas do protótipo. Precisam virar fotos
reais da Líder Jr.
📄 `src/content/imagens.ts` · `public/imagens/`

Dois pontos merecem atenção:

- **`apresentacao-para-equipe.jpg` tem marca de terceiro visível** — há um telão
  escrito "Proof ALL HANDS 4/24/2019" e um painel de parede com outra marca. É
  usada em Quem Somos, Fale Conosco e no case da rede de clínicas.
- **Duas imagens se repetem no blog.** Os posts de KPIs e de Gestão de Estoques
  usam a mesma foto de dashboard, consequência da substituição descrita em 3.1.

### 1.3 Logo e favicon

Não existe arquivo de logo. O protótipo usava um ícone genérico (`Box`, do
lucide) dentro de um quadrado laranja, e é isso que está no ar. O favicon
(`src/app/icon.svg`) e a imagem de compartilhamento
(`src/app/opengraph-image.tsx`) seguem a mesma solução provisória.

**Falta:** o símbolo oficial em SVG.
📄 `src/components/layout/logo.tsx` · `src/app/icon.svg`

### 1.4 Redes sociais

Os três links (LinkedIn, Instagram, Facebook) apontam para `#`, exatamente como
no protótipo. **Faltam as URLs dos perfis.**
📄 `src/content/site.ts`

### 1.5 Arquivos dos materiais

Os seis materiais existem, mas **nenhum arquivo foi entregue**. Os botões
aparecem desabilitados, escritos "Em breve".

No protótipo o botão parecia ativo e não fazia nada — preferimos ser honestos
com o visitante.

**Para liberar:** abra o material em `/keystatic` e envie o arquivo no campo
"Arquivo para download". Ele vai para `public/materiais/` sozinho.
📄 `content/materiais/*.yaml`

### 1.6 Texto de cinco páginas de serviço

Só a página de **Mapeamento de Processos** tem texto validado. As outras cinco
(Gestão da Qualidade, Pesquisa de Mercado, Planejamento Estratégico, Custos e
Precificação, Consultoria em Estoque) foram escritas para o site ficar completo
e descrevem cada serviço de forma genérica, no formato do modelo — **precisam da
revisão da Líder Jr. antes de publicar**, porque afirmam o que a empresa entrega.

Cada arquivo abre com um aviso de conteúdo provisório. Revise em especial a
`metodologia` (as quatro etapas) e o `checklist` do CTA ("O que você recebe"),
que descrevem entregáveis concretos.

**Os cinco depoimentos são forjados** — pessoa, empresa e fala inventadas, a
pedido, para a seção existir enquanto não há citação real. O mesmo vale para o
depoimento da página de Mapeamento de Processos, herdado do protótipo. São seis
ao todo, cada um marcado com `⚠️ DEPOIMENTO FORJADO` na linha acima do campo.

> **Publicar depoimento inventado como se fosse de cliente é propaganda
> enganosa.** Antes de o site ir ao ar: substituir por depoimentos reais, com
> autorização de quem falou, ou apagar o campo `depoimento` — ele é opcional e a
> página continua íntegra sem ele.

📄 `src/content/servicos/*.ts`

### 1.7 Clientes da faixa da Home — nomes e logos

Os 12 nomes que passam na faixa da Home são fictícios, herdados do protótipo
("Empresa Alpha", "TechSul", "GrupoMax"…). Substituir pelos clientes reais — ou
remover a seção.

A faixa já aceita **logo em imagem** (PNG ou SVG) no lugar do nome escrito.
Cada item é `{ nome, logo? }`: com `logo`, aparece a imagem; sem, o nome. Para
ligar um logo, declare o arquivo em `src/content/imagens.ts` (guardado em
`public/imagens/clientes/`) e acrescente o campo ao item. O `nome` continua
obrigatório mesmo com logo — é ele que vira o `alt` de fallback e o que sobra
se a imagem falhar.
📄 `src/content/home.ts` · `src/content/imagens.ts`

### 1.8 Domínio de produção

`site.url` está com um valor provisório (`https://www.liderjr.com.br`). Ele
alimenta o `sitemap.xml`, o `robots.txt` e as URLs de compartilhamento —
**precisa ser o domínio real antes de publicar.**
📄 `src/content/site.ts`

---

## 2. Decisões pendentes do cliente

### 2.1 Qual formato de CTA usar na Home

O cliente gostou dos dois formatos de CTA com depoimento e ainda não escolheu.

- **Em uso:** `CTATestimonial` — depoimento em cima, chamada embaixo.
- **Pronto, sem uso:** `CTATestimonialColumns` — depoimento à esquerda, chamada
  à direita.

Para trocar, use o outro componente na Home e passe `ctaFinalEmColunas`, que já
está escrito em `src/content/home.ts`.
📄 `src/app/(site)/page.tsx` · `src/components/sections/cta.tsx`

### 2.2 Contraste do laranja da marca — a única reprovação de WCAG AA

O laranja `#ff751f` contra fundos claros dá **2,69:1**; o mínimo AA é 4,5:1.
Afeta o texto branco sobre o laranja (botão primário, badge sólido, primeiro card
de números) e o texto laranja sobre branco (eyebrows, links "Ver todos"). Sobre
o fundo escuro o mesmo laranja dá 7,82:1 e passa.

**Decisão tomada:** manter, preservando o visual aprovado. Fica registrado para
o cliente reavaliar. As alternativas foram medidas:

| Opção                            | Resultado    | Custo visual                            |
| -------------------------------- | ------------ | --------------------------------------- |
| Manter branco sobre `#ff751f`    | 2,69:1 ✗     | nenhum (situação atual)                 |
| Texto escuro sobre `#ff751f`     | **7,32:1** ✓ | o laranja não muda; muda a cor do texto |
| Escurecer a marca para `#b84a07` | **5,22:1** ✓ | a marca fica visivelmente mais escura   |
| `#c9520a`                        | 4,47:1 ✗     | ainda reprova por pouco                 |

📄 `src/app/globals.css`

---

## 3. O que foi corrigido em relação ao protótipo

Nenhum destes é pendência — são mudanças deliberadas, listadas para que ninguém
ache que o protótipo foi mal copiado.

### 3.1 Imagem completamente fora de contexto

A foto `photo-1566576912321` do protótipo são **figurinhas do Mario, Luigi e
Peach**. Estava em três lugares, incluindo o painel "Como funciona" da página de
Mapeamento de Processos.

Foi descartada. No painel do serviço entrou a foto do workshop de post-its (que
é literalmente mapeamento de processos); nos outros dois pontos, imagens
pertinentes. Isso causa a repetição descrita em 1.2.

### 3.2 Cinco CTAs iguais no fim da Home

A Home terminava com **cinco seções de CTA escuras seguidas**, com o mesmo
título repetido 3× e o mesmo depoimento 2×. Restou uma. O conteúdo das outras
foi preservado:

- a variante em colunas está em `ctaFinalEmColunas` (ver 2.1);
- o formulário rápido (nome + WhatsApp) e o card de confiança ("Consultoria
  inicial gratuita", "Retorno em até 24 horas úteis", "Projetos supervisionados
  por professores especialistas") **saíram do site**. Se algum desses textos
  fizer falta, ele está no protótipo, em `App.tsx` linhas 864–961 e 1630–1746.

### 3.3 Rodapé com lorem ipsum

A coluna "Serviços" do rodapé era `Lorem Ipsum / Dolor Sit / Amet Consectetur /
Adipiscing Elit`, com botões sem ação. Agora sai do registry de serviços.

### 3.4 Filtros com categoria fantasma

As três listas de categoria eram escritas à mão e **todas incluíam "Inovação"**,
que não correspondia a nenhum item — clicar sempre levava a uma tela vazia.
Agora as opções saem do próprio conteúdo.

### 3.5 Data do post contraditória

O card do blog dizia "15 Jun 2026 · 6 min"; a página do post dizia "17 Jul, 2026
· 5 min". A data agora é escrita uma vez, em `AAAA-MM-DD`, e formatada pelo site.

### 3.6 Acessibilidade

| Problema no protótipo                                 | Como está agora                                                  |
| ----------------------------------------------------- | ---------------------------------------------------------------- |
| Submenu de Serviços abria só por `group-hover` em CSS | Abre por clique e teclado, com `aria-expanded`, fecha com Escape |
| Navegação toda em `<button onClick>`                  | `next/link` — middle-click, nova aba e SEO funcionam             |
| Cards clicáveis eram `<div onClick>`                  | Um único link, o do título, esticado sobre o card                |
| Formulário com placeholder no lugar de label          | Toda `<label>` associada, erro anunciado por `role="alert"`      |
| `--muted-foreground: #999999` — 2,85:1                | `#52525b` — 7,73:1                                               |
| `text-white/40` sobre escuro — 3,4:1                  | Piso em 56% — 6,49:1                                             |
| Contadores animavam na montagem                       | Só ao entrar na tela; respeitam `prefers-reduced-motion`         |
| `lang="en"` e `noindex, nofollow`                     | `lang="pt-BR"`, indexável, com sitemap                           |

### 3.7 Consistência visual

| Item                         | Protótipo                                          | Agora                    |
| ---------------------------- | -------------------------------------------------- | ------------------------ |
| Estilos de botão             | 6 estilos, 8 variações só do primário              | 6 variantes × 3 tamanhos |
| Raios                        | 6 valores sem hierarquia                           | 3                        |
| Sombras                      | 5 degraus                                          | 3                        |
| Receitas de título de seção  | 8 competindo                                       | 1                        |
| Níveis de branco translúcido | 11 ad-hoc                                          | 3 superfícies opacas     |
| Duração de transição         | 78 de 88 herdavam 150ms; as outras 200/300/500/700 | 200ms como padrão        |
| Cor de fundo escuro          | `#000000` puro, sem degraus                        | `#000000` com 3 degraus  |
| `scrollbar-hide`             | usada 3×, nunca definida                           | definida                 |
| Largura do texto do artigo   | 1280px                                             | `max-w-3xl`              |
| Espaçamento de seção         | fixo em mobile e desktop                           | responsivo               |
| Cores dos cards de material  | 4 famílias do Tailwind fora da marca               | só o laranja da marca    |

---

## 4. Pontos de integração futura

### 4.1 Formulário de contato — o único que existe

O formulário valida no navegador e **não envia para lugar nenhum**. Todo o envio
está isolado em um arquivo:

📄 **`src/lib/formulario-de-contato.ts`**

```ts
// TODO: integração — trocar por um POST real.
console.info("[formulário de contato] dados que seriam enviados:", dados);
```

A assinatura da função e o tipo do resultado já estão prontos para uma chamada
real. O componente `ContactForm` não precisa mudar.

Ao integrar, **remova também o aviso** exibido abaixo do botão — está em
`src/content/fale-conosco.ts`, campo `formulario.aviso`.

### 4.2 CMS — implantado

Blog, Cases e Materiais são editados em **/keystatic**, uma interface gráfica
que escreve arquivos YAML em `content/`. Publicar vira commit; o commit dispara
o deploy; o site continua 100% estático.

**Falta para ir ao ar:** criar o GitHub App (o próprio Keystatic guia pela tela
de configuração), levar as variáveis do `.env.local` para a Vercel e apontar
`repo` em `keystatic.config.ts` para o repositório real. Enquanto isso, o CMS
roda em modo local — grava direto no disco de quem está com o projeto aberto.

📄 `keystatic.config.ts` · `src/content/*/index.ts`

### 4.3 Fora de escopo por decisão

Não há backend, banco de dados nem analytics. Serviços e os textos das páginas
seguem em arquivo TypeScript — são páginas de produto e cópia institucional,
não publicações.

---

## 5. Verificado nesta entrega

| Checagem                                              | Resultado                                                       |
| ----------------------------------------------------- | --------------------------------------------------------------- |
| `npm run lint`                                        | zero erros, zero warnings                                       |
| `npm run typecheck`                                   | strict, zero `any`                                              |
| `npm run build`                                       | limpo; nenhum arquivo do protótipo no output                    |
| `npm run format:check`                                | tudo formatado                                                  |
| Nome acessível em todo elemento interativo            | 11 rotas, todos nomeados                                        |
| Rolagem horizontal em 320 / 390 / 768 / 1024 / 1440px | nenhuma                                                         |
| Hierarquia de headings                                | nenhum pulo de nível em nenhuma rota                            |
| `alt` em imagens                                      | 100%                                                            |
| Foco visível na navegação por teclado                 | 14 primeiros elementos, todos                                   |
| Menu mobile                                           | abre, `aria-expanded` correto, trava o scroll, fecha com Escape |
| LCP em produção                                       | imagem do hero (desktop) e H1 (mobile)                          |
| Contraste dos pares do sistema                        | todos passam, exceto o descrito em 2.2                          |
| Criar página só preenchendo `detalhe`                 | comprovado em build e revertido                                 |

---

## 6. Arquivamento do protótipo

A pasta `prototipo-vibecodado/` continua no repositório como referência. Ela está
fora do build, do lint, do Prettier, do deploy e das buscas do editor.

Quando não for mais necessária, o roteiro é: criar a tag git
`prototipo-aprovado`, remover a pasta e limpar as exclusões que existem só por
causa dela (`tsconfig.json`, `eslint.config.mjs`, `.prettierignore`,
`.vercelignore`, `.vscode/settings.json`, `.claude/settings.json`).

**Não há prazo e não há pressa** — as exclusões já mantêm a pasta totalmente
inofensiva.
