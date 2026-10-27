# Pendências

O que ficou em aberto, o que foi padronizado em relação ao protótipo e onde
estão os pontos de integração futura.

---

## 1. Bloqueios de conteúdo — precisam do cliente

### 1.1 Filiações (Quem Somos) — resolvido

Os quatro textos foram fornecidos pela Líder Jr. Os logos foram extraídos dos
SVGs da página Quem Somos da Beets Jr. (`beetsjr.com.br/assets/…`), a pedido do
cliente, e agora ficam no próprio projeto. Se houver versões oficiais melhores,
basta trocar os arquivos.
📄 `src/content/quem-somos.ts` · `public/imagens/filiacoes/`

### 1.2 Imagens

As fotos das páginas fixas (home, quem somos, serviços, cases, materiais, blog e
fale conosco) agora são fotos reais da Líder Jr., extraídas do PDF "Fotos para o
site". Cada serviço usa a mesma foto no card, no topo e em "Como funciona".
📄 `src/content/imagens.ts` · `public/imagens/`

Pontos que merecem atenção:

- **Quatro fotos vieram em resolução baixa** no PDF: Cronoanálise (327×581),
  Previsão de Demanda (422×750), Planejamento Estratégico (500×750) e Análise de
  Custos (500×334). Em telas grandes elas ficam borradas — vale pedir os
  arquivos originais.
- **Duas imagens se repetem no blog.** Os posts de KPIs e de Gestão de Estoques
  usam a mesma foto de dashboard, consequência da substituição descrita em 3.1.

### 1.3 Logo e favicon — resolvido

O cubo da Líder Jr. foi redesenhado em vetor a partir do PNG oficial do site
antigo (mesma geometria, espessuras e cor, #CC6538) e está no cabeçalho, no
rodapé, no favicon, nas imagens de compartilhamento e no `logo` dos dados
estruturados (PNG 512×512). O nome ao lado do cubo é texto na fonte do site;
se a marca tiver o logotipo completo em vetor, ele pode substituir a composição.
📄 `src/components/layout/cubo-da-marca.tsx` · `src/components/layout/logo.tsx`
· `src/app/icon.svg` · `public/imagens/marca/logo.png`

### 1.4 Redes sociais — resolvido

Os três links (LinkedIn, Instagram, Facebook) já apontam para os perfis reais
da Líder Jr.
📄 `src/content/site.ts`

### 1.5 Arquivos dos materiais

O arquivo para download agora é obrigatório em todo material. Como nenhum
arquivo real foi entregue, os seis materiais têm uma **imagem de teste** (PNG
com o título e o aviso "Arquivo de teste") — o botão funciona e baixa essa
imagem.

A "Imagem do card", também obrigatória, usa por enquanto fotos genéricas do
banco de imagens do site.

**Antes de publicar:** abra cada material em `/keystatic` e troque o arquivo
no campo "Arquivo para download" pelo PDF ou planilha real, e a imagem do card
por uma que represente o material.
📄 `content/materiais/*.yaml` · `public/materiais/`

### 1.6 Páginas de serviço — CTA e depoimentos

Topo, "Como funciona", metodologia e benefícios das onze páginas já têm o texto
da Líder Jr. Continua provisória, em todas, a **chamada final** (`cta`): o
título, o texto e principalmente o `checklist` "O que você recebe", que descreve
entregáveis concretos e ainda cita ferramentas do texto antigo (BPMN, curva
ABC, OKR…).

Os depoimentos (cinco deles inventados) foram removidos de todas as páginas de
serviço. O campo `depoimento` continua opcional: se a Líder Jr. tiver uma
citação real, com autorização de quem falou, basta preenchê-lo e a seção volta
a aparecer.

📄 `src/content/servicos/*.ts`

### 1.7 Clientes da faixa da Home — resolvido

Os 16 logos vieram da seção "Alguns de nossos clientes" do site antigo
(liderjr.com), com margens recortadas e fundo branco tornado transparente
(menos na Leal Dutra, cujo fundo amarelo é parte da marca). Se a Líder Jr. tiver
versões melhores (SVG ou PNG maior), basta trocar o arquivo em
`public/imagens/clientes/` e atualizar `largura`/`altura` em `imagens.ts`.
Cliente sem logo: deixe só `nome` no item, e aparece o nome escrito.
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
cliente escolheu Mapeamento de Processos, Plano de Negócios e Cronoanálise,
nessa ordem (Pesquisa de Mercado saiu da Home a pedido do cliente; a página do
serviço continua no ar). Para trocar, edite
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

### 4.1 Formulário de contato — ActiveCampaign

O formulário envia para **/api/contato**, que valida de novo e repassa para o
ActiveCampaign. A chave de API fica só no servidor.

📄 `src/app/api/contato/route.ts` · `src/lib/active-campaign.ts`

A cada envio: o contato é criado ou atualizado pelo e-mail (não duplica), e a
mensagem vira uma **nota** no contato — com todos os campos, o formulário de
onde veio e a página de origem.

O mesmo formulário aparece em dois lugares: no **Fale Conosco** (a página de
origem é a anterior, ver `src/lib/origem-do-visitante.ts`) e, em formato
horizontal, no **fim de cada case e de cada post** (a página de origem é o
próprio case ou post). Os campos são os de `src/content/fale-conosco.ts` nos
dois. Se configurados, o contato entra
numa lista e recebe uma tag, que é o que dispara automações.

**Falta para ir ao ar:** configurar as variáveis no `.env.local` e na Vercel.

| Variável                 | Onde achar no ActiveCampaign                             |
| ------------------------ | -------------------------------------------------------- |
| `ACTIVECAMPAIGN_URL`     | Settings → Developer → URL (`https://conta.api-us1.com`) |
| `ACTIVECAMPAIGN_API_KEY` | Settings → Developer → Key                               |
| `ACTIVECAMPAIGN_LIST_ID` | Opcional. Número no endereço da lista                    |
| `ACTIVECAMPAIGN_TAG_ID`  | Opcional. Número no endereço da tag                      |

Sem as duas primeiras, o formulário mostra a mensagem de erro (campo
`formulario.erroNoEnvio` em `src/content/fale-conosco.ts`) e o motivo aparece
no log do servidor. Lista ou tag com ID errado não bloqueiam o envio: o contato
é salvo e o problema só vai para o log.

**Contra robôs**, duas barreiras em `/api/contato`:

- **campo-armadilha** (`website`), invisível para pessoas. Preenchido, a rota
  responde "sucesso" e não envia nada — sem dar pista ao robô;
- **reCAPTCHA v3**, invisível (ninguém clica em nada). Envios com nota abaixo
  de 0,5 são recusados com a mensagem de erro normal. Ajuste `NOTA_MINIMA` em
  `src/lib/recaptcha-servidor.ts` se pessoas reais forem barradas — as notas
  aparecem no painel do reCAPTCHA. Se o Google estiver fora do ar, o envio
  passa (a armadilha continua valendo).

| Variável                         | Onde achar                                                             |
| -------------------------------- | ---------------------------------------------------------------------- |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | google.com/recaptcha/admin → criar site do tipo **v3** → chave do site |
| `RECAPTCHA_SECRET_KEY`           | Mesma tela → chave secreta                                             |

Cadastre no reCAPTCHA o domínio de produção e `localhost`. Sem a chave secreta
a verificação fica desligada (log de aviso) — só para desenvolvimento. A chave
do site entra no build: depois de configurá-la na Vercel, faça um novo deploy.

Testado contra um ActiveCampaign simulado (contato, nota, lista, tag, erros de
validação e ausência de credenciais). **Ainda não testado contra a conta real.**

### 4.2 CMS — implantado

Blog, Cases e Materiais são editados em **/keystatic**, uma interface gráfica
que escreve arquivos YAML em `content/`. Publicar vira commit; o commit dispara
o deploy; as páginas continuam estáticas.

**Falta para ir ao ar:** criar o GitHub App (o próprio Keystatic guia pela tela
de configuração), levar as variáveis do `.env.local` para a Vercel e apontar
`repo` em `keystatic.config.ts` para o repositório real. Enquanto isso, o CMS
roda em modo local — grava direto no disco de quem está com o projeto aberto.

📄 `keystatic.config.ts` · `src/content/*/index.ts`

**Onde ficam as imagens das publicações.** O Keystatic guarda a imagem de cada
post ou case numa pasta com o nome da publicação:
`public/imagens/<blog|cases>/<slug>/imagem/arquivo.jpg`. Não mova nem renomeie
esses arquivos à mão — o CMS só encontra a imagem nesse caminho. (As imagens
migradas antes estavam soltas em `public/imagens/cases/<slug>.jpg`, o CMS não as
achava e recusava salvar qualquer edição com _"Imagem is required"_. Corrigido
e testado editando e salvando um post e um case pelo /keystatic.)

### 4.3 Fora de escopo por decisão

Não há banco de dados nem analytics; o único trecho de servidor é o envio do
formulário (4.1). Serviços e os textos das páginas
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

**Compartilhamento.** Toda página tem prévia em 1200×630: a Home e as
listagens usam a imagem padrão; cada serviço, case e post com página própria
ganha um cartão com o próprio título, gerado sozinho — inclusive as
publicações futuras, sem ninguém produzir imagem.
📄 `src/lib/imagem-de-compartilhamento.tsx`

Todo post e todo case tem página própria (obrigatório no CMS). Cinco posts e
cinco cases estão com **texto de teste**, marcado no primeiro parágrafo —
trocar pelo texto real antes de publicar.

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
