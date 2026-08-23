# Como mexer no conteúdo do site

Este guia é para quem vai **escrever e trocar o conteúdo** do site da Líder Jr.
Você não precisa saber programar.

O conteúdo do site fica em dois lugares, e este guia diz qual usar em cada caso:

- **Blog, Cases e Materiais** — na interface do CMS, em `/keystatic`. Sem abrir
  código.
- **O resto** (textos das páginas, serviços, contato) — nos arquivos de
  `src/content/`.

---

## Antes de começar: três regras

**1. Texto sempre entre aspas.**

```ts
titulo: "Nossos Serviços",
```

**2. Toda linha termina com vírgula.**

```ts
titulo: "Nossos Serviços",
descricao: "Soluções em Engenharia de Produção.",
```

**3. Aspas dentro do texto precisam de barra invertida.**

```ts
texto: "Ele disse \"foi ótimo\" na reunião.",
```

Para evitar isso, use aspas curvas — que ficam mais bonitas: `“foi ótimo”`.

> **Se algo quebrar:** o site avisa com uma mensagem vermelha na tela, apontando
> o arquivo e a linha. Quase sempre é uma vírgula faltando ou uma aspa aberta e
> não fechada. Desfaça a última alteração e tente de novo.

---

## Onde fica cada coisa

| Quero mudar…                                  | Abra este arquivo                |
| --------------------------------------------- | -------------------------------- |
| Telefone, e-mail, redes sociais, menu, rodapé | `src/content/site.ts`            |
| Página inicial                                | `src/content/home.ts`            |
| Quem Somos                                    | `src/content/quem-somos.ts`      |
| Página de Serviços (a listagem)               | `src/content/servicos/pagina.ts` |
| Um serviço específico                         | `src/content/servicos/`          |
| Página de Cases (a listagem)                  | `src/content/cases/pagina.ts`    |
| Quais cases aparecem na Home                  | **o CMS**, em `/keystatic`       |
| Um case específico                            | **o CMS**, em `/keystatic`       |
| Página do Blog (a listagem)                   | `src/content/blog/pagina.ts`     |
| Um post específico                            | **o CMS**, em `/keystatic`       |
| Materiais para download                       | **o CMS**, em `/keystatic`       |
| Fale Conosco                                  | `src/content/fale-conosco.ts`    |
| Qualquer imagem                               | `src/content/imagens.ts`         |

---

## Trocar um texto

Abra o arquivo da página, ache a frase e troque o que está entre aspas.

**Exemplo — mudar o título da Home.** Abra `src/content/home.ts`:

```ts
hero: {
  tituloDestaque: "Líder Jr.",
  titulo: "Consultoria Empresarial",
  descricao: "A solução que você precisa, com a qualidade que só um Líder tem!",
```

Trocando `titulo` para `"Consultoria em Processos"`, o título da Home muda.
Salve o arquivo e o site atualiza sozinho.

### Trocar o telefone (ou o e-mail)

Está em **um lugar só**, e o site inteiro acompanha — menu, rodapé, página de
contato e botão do WhatsApp. Abra `src/content/site.ts`:

```ts
contato: {
  telefone: {
    icone: "telefone",
    rotulo: "Telefone",
    texto: "(15) 99827-7936",        // ← o que aparece na tela
    href: "tel:+5515998277936",      // ← para onde o clique liga
  },
```

Mude **os dois**: `texto` (o que se lê) e `href` (o número de verdade, com
`+55`, sem espaço nem traço).

Para o WhatsApp, logo abaixo:

```ts
whatsapp: {
  numero: "5515998277936",   // só números, com 55 na frente
```

---

## Trocar uma imagem

São dois passos.

**Passo 1 — coloque o arquivo novo** na pasta `public/imagens/`. Use um nome sem
acento, sem espaço e com hífen: `equipe-2026.jpg`.

**Passo 2 — abra `src/content/imagens.ts`** e ajuste a imagem que quer trocar:

```ts
equipeReuniaoMesa: {
  src: "/imagens/equipe-2026.jpg",
  alt: "Equipe da Líder Jr. reunida na sala de projetos",
  largura: 1920,
  altura: 1281,
},
```

- **`src`** — o caminho começa com `/imagens/` e depois o nome do arquivo.
- **`alt`** — descreva **o que se vê na foto**. É o que uma pessoa cega ouve, e
  o que aparece se a imagem não carregar. Escreva "Equipe reunida em volta de uma
  mesa", não "foto" nem "imagem da equipe".
- **`largura` e `altura`** — as dimensões reais do arquivo, em pixels. No
  Windows: botão direito → Propriedades → Detalhes. No Mac: Cmd+I.

Toda página que usava aquela imagem passa a usar a nova.

---

## Publicar post, case ou material — pelo CMS

Blog, Cases e Materiais **não são mais editados em arquivo**. Eles têm uma
interface própria, com campos, upload de imagem e botão de salvar.

**Como abrir.** Com o site rodando (`npm run dev`), acesse
**http://localhost:3000/keystatic**. No ar, é o endereço do site seguido de
`/keystatic`, e entra-se com a conta do GitHub.

**Como publicar.** Escolha a coleção no menu da esquerda, clique em criar, e
preencha. Os campos têm explicação embaixo do rótulo. Ao salvar:

- **na sua máquina**, o arquivo aparece em `content/<coleção>/` — é só commitar;
- **no ar**, a publicação vira um commit no repositório e a Vercel refaz o site
  em cerca de um minuto.

**O que o CMS não deixa passar.** Resumo curto demais, categoria em branco,
imagem sem descrição (`alt`): o formulário acusa antes de salvar. E se um
arquivo chegar quebrado no repositório, o build falha em vez de publicar uma
página torta.

**Post e case sem texto pronto.** Existe a chave "tem página própria". Desmarcada,
o item aparece como card na listagem e não vira link — que é como cinco dos seis
posts e cinco dos seis cases estão hoje. Marque quando o texto estiver pronto.

**O corpo do artigo é montado em blocos** — parágrafo, subtítulo, citação, lista,
lista numerada e imagem. Escolha o tipo, escreva, arraste para reordenar.
Ninguém digita HTML, e é por isso que todo artigo sai com a mesma cara.

> **Endereço (slug):** é o nome do arquivo e a URL. Mudar o slug de algo já
> publicado quebra os links antigos e a posição no Google. Na dúvida, não mude.

---

## O que aparece na Home

As duas seções da Home seguem regras **opostas**, e é de propósito:

| Seção na Home         | Como escolhe                                            |
| --------------------- | ------------------------------------------------------- |
| **Últimas do blog**   | Automático: os três posts com a data mais recente       |
| **Cases em destaque** | Manual: os que você escolher em `/keystatic` → **Home** |

**Blog.** Publicou um post com data mais nova que os outros, ele entra na Home
sozinho e o mais antigo sai. Ninguém precisa lembrar de atualizar a Home — é
justamente o que "últimas" quer dizer. Quem manda é o campo **Data de
publicação**, não a ordem em que os posts foram criados.

**Cases.** A Home é vitrine, e vitrine se escolhe. Publicar um case novo **não**
muda a Home. Para trocar, abra `/keystatic` → **Home — cases em destaque**,
escolha os três e arraste para ordenar: o primeiro da lista abre no centro do
carrossel.

> **Se você apagar um case que está em destaque**, o site avisa na hora de
> publicar, dizendo o nome dele — em vez de a Home ir ao ar com um card a menos.
> É só voltar nessa tela e escolher outro.

---

## Criar uma página de serviço

O funcionamento é o mesmo do blog.

> **Os seis serviços já têm página própria**, uma por arquivo em
> `src/content/servicos/`. O texto de cinco delas é provisório e está marcado no
> topo do arquivo — para revisar, é só editar o arquivo do serviço. O passo a
> passo abaixo serve para criar um serviço **novo**. Ver PENDENCIAS.md.

**Passo 1.** Copie `src/content/servicos/mapeamento-de-processos.ts` e nomeie o
arquivo com o endereço desejado, ex.: `gestao-da-qualidade.ts`.

**Passo 2.** Troque o conteúdo. A página tem cinco blocos, todos obrigatórios:

| Campo         | O que aparece na página                            |
| ------------- | -------------------------------------------------- |
| `sobre`       | "Como funciona": texto de um lado, imagem do outro |
| `metodologia` | A linha do tempo de etapas numeradas               |
| `resultados`  | Os três cards de "por que contratar"               |
| `depoimento`  | Opcional — a citação em destaque                   |
| `cta`         | A chamada final, com a lista "O que você recebe"   |

**Passo 3.** Abra `src/content/servicos/index.ts`, importe o arquivo no topo e
acrescente o nome na lista:

```ts
import { gestaoDaQualidade } from "./gestao-da-qualidade"; // ← no topo

export const servicos: Servico[] = [
  mapeamentoDeProcessos,
  gestaoDaQualidade, // ← a ordem aqui é a ordem no site
  pesquisaDeMercado,
];
```

A página `/servicos/gestao-da-qualidade` passa a existir, o card na listagem
vira link e o item entra no mapa do site.

> **Case de sucesso não funciona mais assim** — ele virou publicação do CMS.
> Ver a seção "Publicar post, case ou material".

---

## Adicionar um material para download

Pelo CMS, em `/keystatic` → **Materiais** → criar. O arquivo do PDF ou da
planilha entra no próprio formulário, no campo "Arquivo para download".

Sem arquivo, o material aparece na listagem com o botão desabilitado, escrito
"Em breve" — que é como os seis materiais de hoje estão.

---

## Trocar as categorias dos filtros

**Não existe lista de categorias para manter.** Os botões de filtro em Cases,
Materiais e Blog são montados a partir do campo `categoria` de cada item.

Para criar uma categoria nova, basta escrevê-la em algum item. Para eliminar
uma, tire-a do último item que a usa. Uma categoria sem nenhum item nunca
aparece — assim ninguém clica num filtro que só mostra tela vazia.

Atenção: `"Logística"` e `"Logistica"` são categorias **diferentes**. Copie e
cole para não errar o acento.

---

## Perguntas frequentes

**Como vejo o resultado?**
No terminal, dentro da pasta do projeto: `npm run dev`. Abra
`http://localhost:3000`. Cada arquivo salvo atualiza a tela sozinho.

**Mudei a data de um post e a ordem não mudou.**
A data precisa estar em `AAAA-MM-DD`: `"2026-08-20"`, não `"20/08/2026"`. O site
converte para "20 Ago 2026" sozinho — escreva a data em um lugar só.

**Posso apagar um serviço, case ou post?**
Sim: tire-o da lista no `index.ts` e apague o arquivo. Se ele tinha página, o
endereço passa a dar 404 — só faça isso se ninguém tiver o link salvo.

**Escrevi um nome de ícone e deu erro.**
Os nomes válidos estão em `src/types/site.ts`, na lista `NomeDeIcone`. O erro é
proposital: evita ícone escrito errado passar despercebido.
