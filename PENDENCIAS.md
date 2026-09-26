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

**Falta:** o símbolo oficial em SVG, e uma versão em PNG de pelo menos
112×112px. O PNG entra como `logo` nos dados estruturados da organização — é o
logo que o Google pode exibir no painel da empresa nos resultados de busca.
📄 `src/components/layout/logo.tsx` · `src/app/icon.svg` ·
`src/lib/dados-estruturados.ts`

### 1.4 Redes sociais — resolvido

Os três links (LinkedIn, Instagram, Facebook) já apontam para os perfis reais
da Líder Jr.
📄 `src/content/site.ts`

### 1.5 Arquivos dos materiais

Os seis materiais existem, mas **nenhum arquivo foi entregue**. Os botões
aparecem desabilitados, escritos "Em breve".

No protótipo o botão parecia ativo e não fazia nada — preferimos ser honestos
com o visitante.

**Para liberar:** abra o material em `/keystatic` e envie o arquivo no campo
"Arquivo para download". Ele vai para `public/materiais/` sozinho.
📄 `content/materiais/*.yaml`

### 1.6 Texto de dez páginas de serviço

Só a página de **Mapeamento de Processos** tem texto validado. As outras dez
foram escritas para o site ficar completo e descrevem cada serviço de forma
genérica, no formato do modelo — **precisam da revisão da Líder Jr. antes de
publicar**, porque afirmam o que a empresa entrega:

- **Pesquisa de Mercado, Planejamento Estratégico, Gestão de Estoques, Análise
  de Custos** já existiam (as duas últimas com nome e URL novos desde a
  reorganização em grupos, ver 2.3) e têm texto provisório herdado.
- **Cronoanálise, Plano de Negócios, Previsão de Demanda, DRE, Gestão de Fluxo
  de Caixa, Plano de Marketing** são seis páginas novas, criadas na
  reorganização em grupos só para o site sair completo — o texto é ainda mais
  provisório que o das demais e nenhuma delas tem depoimento (ver abaixo).

Cada arquivo abre com um aviso de conteúdo provisório. Revise em especial a
`metodologia` (as quatro etapas) e o `checklist` do CTA ("O que você recebe"),
que descrevem entregáveis concretos.

**Cinco depoimentos são forjados** — pessoa, empresa e fala inventadas, a
pedido, para a seção existir enquanto não há citação real: Pesquisa de
Mercado, Planejamento Estratégico, Gestão de Estoques, Análise de Custos, e o
de Mapeamento de Processos, herdado do protótipo. Cada um está marcado com
`⚠️ DEPOIMENTO FORJADO` na linha acima do campo. As seis páginas novas não têm
depoimento — o campo é opcional e foi deixado de fora em vez de inventar mais
seis citações falsas.

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

### 1.8 Domínio de produção — confirmado

O domínio real é `liderjr.com`. `site.url` já está em `https://www.liderjr.com`,
valor que alimenta o `sitemap.xml`, o `robots.txt` e as URLs de
compartilhamento.
📄 `src/content/site.ts`

---

## 2. Decisões pendentes do cliente

### 2.1 Formato de CTA usado na Home — decidido

O cliente escolheu o formato em duas colunas.

- **Em uso:** `CTATestimonialColumns` — depoimento à esquerda, chamada à
  direita, com o conteúdo em `home.ctaFinal` (`src/content/home.ts`).
- O formato alternativo (depoimento em cima, chamada embaixo) e o texto de
  chamada que o acompanhava foram removidos do código. Se um dia fizerem
  falta, estão no histórico do git, antes do commit que os removeu.
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

### 2.3 Taxonomia de serviços — decidido

O cliente reorganizou os serviços em **11, agrupados em 4 categorias**
(organizacionais apenas — nenhum grupo tem página própria): Otimização de
Processos, Empreendedorismo, Gestão Financeira e Captação de Clientes.

- **Removido:** Gestão da Qualidade (não fazia parte da nova lista).
- **Renomeados, com URL nova** (sem redirecionamento, a pedido do cliente):
  Consultoria em Estoque → Gestão de Estoques (`/servicos/gestao-de-estoques`);
  Custos e Precificação → Análise de Custos (`/servicos/analise-de-custos`). O
  conteúdo provisório de ambos foi mantido — só o nome mudou.
- **Inalterados:** Mapeamento de Processos, Planejamento Estratégico, Pesquisa
  de Mercado.
- **Seis serviços novos**, com conteúdo mínimo/provisório (ver 1.6):
  Cronoanálise, Plano de Negócios, Previsão de Demanda, DRE, Gestão de Fluxo
  de Caixa, Plano de Marketing.

O grupo é um campo de conteúdo (`grupoId`), igual a `categoria` em posts e
cases — o menu, a página /servicos e o rodapé derivam do registry, sem lista
escrita à mão em outro lugar. No menu, passar o mouse em "Serviços" mostra os
4 grupos; passar o mouse num grupo abre os serviços dele ao lado. No rodapé, a
coluna "Serviços" virou duas colunas lado a lado (6 links cada, incluindo
"Ver todos" na segunda) para não ficar muito mais alta que as outras colunas —
sem subtítulo de grupo, é só uma divisão visual da mesma lista.

Na Home, a seção "Nossas áreas de atuação" **é curada, não automática**: o
cliente escolheu Mapeamento de Processos, Plano de Negócios e Pesquisa de
Mercado — um de três grupos diferentes, nessa ordem. Para trocar, edite
`slugsEmDestaque` em `src/app/(site)/page.tsx`.

📄 `src/content/servicos/grupos.ts` · `src/content/servicos/index.ts` ·
`src/types/servico.ts` · `src/components/layout/header.tsx` ·
`src/app/(site)/servicos/page.tsx` · `src/components/layout/footer.tsx` ·
`src/app/(site)/page.tsx`

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

- a variante em colunas é a que está em uso (ver 2.1);
- o formulário rápido (nome + WhatsApp) e o card de confiança ("Consultoria
  inicial gratuita", "Retorno em até 24 horas úteis", "Projetos supervisionados
  por professores especialistas") **saíram do site**. Se algum desses textos
  fizer falta, ele está no protótipo (tag git `prototipo-aprovado`), em
  `prototipo-vibecodado/src/app/App.tsx`, linhas 864–961 e 1630–1746.

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

Além dos campos visíveis, o envio leva `paginaDeOrigem`: a página do site em que
a pessoa estava antes do formulário (ex.: `/servicos/dre`), ou, se ela entrou
direto no Fale Conosco, `externo: <site>` / `acesso direto`. Ver
`src/lib/origem-do-visitante.ts`. A integração deve repassar esse campo.

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

**Problema encontrado — posts e cases existentes não salvam pelo CMS.** Criar e
apagar publicações funciona, mas editar um post ou case que já existe falha com
_"Imagem is required"_: o campo de imagem abre vazio.

A causa é o caminho da imagem nos YAML migrados. O Keystatic espera cada imagem
numa pasta com o nome da publicação —
`public/imagens/cases/comercio-varejista/<arquivo>.jpg`, referenciada como
`/imagens/cases/comercio-varejista/<arquivo>.jpg` — e os arquivos migrados
estão soltos (`/imagens/cases/comercio-varejista.jpg`). O CMS não encontra o
arquivo e trata o campo como vazio.

**Contorno provável (não testado):** ao editar, reenviar a mesma imagem no
campo "Imagem" — o CMS a grava no lugar que espera.
**Correção definitiva:** mover as imagens de `public/imagens/blog/` e
`public/imagens/cases/` para a pasta de cada publicação e atualizar os YAML.
Muda a URL das imagens (inclusive a de compartilhamento dos posts e cases).

### 4.3 Fora de escopo por decisão

Não há backend, banco de dados nem analytics. Serviços e os textos das páginas
seguem em arquivo TypeScript — são páginas de produto e cópia institucional,
não publicações.

---

### 4.4 SEO — depois de publicar

O site já sai com URL canônica, Open Graph completo, imagem de compartilhamento
em todas as páginas, sitemap, robots.txt e dados estruturados (JSON-LD). O que
só dá para fazer com o site no ar:

1. Cadastrar o domínio no **Google Search Console** e enviar
   `https://www.liderjr.com/sitemap.xml`.
2. Passar uma página de post, uma de serviço e a Home no **Teste de
   resultados avançados** (https://search.google.com/test/rich-results).
3. Conferir a prévia de compartilhamento colando um link no WhatsApp ou no
   LinkedIn (Post Inspector).

Hoje só 1 dos 6 posts e 1 dos 6 cases têm página própria. Para o Google, o
que não tem página não existe — cada post publicado com página é uma porta de
entrada a mais pela busca.

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

## 6. Arquivamento do protótipo — concluído

A pasta `prototipo-vibecodado/` saiu do repositório, junto com as exclusões que
existiam só por causa dela. O protótipo continua recuperável pela tag git
`prototipo-aprovado` (ver README.md).
