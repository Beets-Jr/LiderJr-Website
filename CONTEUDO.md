# Como mexer no conteúdo do site

Este guia é para quem vai **escrever e trocar o conteúdo** do site da Líder Jr.
Você não precisa saber programar.

Todo o texto e toda imagem do site estão numa pasta só: **`src/content/`**.
Você nunca vai precisar abrir nenhuma outra pasta.

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
| Um case específico                            | `src/content/cases/`             |
| Página do Blog (a listagem)                   | `src/content/blog/pagina.ts`     |
| Um post específico                            | `src/content/blog/`              |
| Materiais para download                       | `src/content/materiais.ts`       |
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

## Publicar um post no blog

**Passo 1.** Copie o arquivo `src/content/blog/lean-manufacturing.ts` e dê ao
novo o nome do endereço que você quer. Para o post aparecer em
`/blog/5-erros-de-estoque`, o arquivo se chama `5-erros-de-estoque.ts`.

**Passo 2.** Abra o arquivo novo e troque o conteúdo:

```ts
export const cincoErrosDeEstoque: Post = {
  slug: "5-erros-de-estoque", // igual ao nome do arquivo, sem .ts
  titulo: "5 erros de estoque que custam caro",
  resumo: "O parágrafo de abertura, que aparece no card da listagem.",
  data: "2026-08-20", // sempre ANO-MÊS-DIA
  categoria: "Logística",
  tempoDeLeitura: "5 min",
  imagem: imagens.dashboardIndicadores, // uma das imagens de imagens.ts

  detalhe: {
    metadados: {
      titulo: "5 erros de estoque que custam caro",
      descricao: "Aparece embaixo do título no Google. Entre 120 e 160 letras.",
    },
    autor: { nome: "Consultor Líder Júnior", iniciais: "LJ" },
    corpo: [/* ver a próxima seção */],
    cta: {
      titulo: "Quer organizar seu estoque?",
      descricao: "Nossa equipe pode ajudar.",
      botaoPrimario: { label: "Fale Conosco", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros artigos", href: "/blog" },
    },
  },
};
```

Repare no nome logo depois de `export const`: escolha um nome sem acento e sem
espaço (`cincoErrosDeEstoque`). Você vai usá-lo no passo 3.

**Passo 3.** Abra `src/content/blog/index.ts` e faça duas coisas:

```ts
import { cincoErrosDeEstoque } from "./5-erros-de-estoque";   // ← 1. no topo

const posts: Post[] = [
  cincoErrosDeEstoque,                                        // ← 2. na lista
  leanManufacturing,
  ...
```

Pronto. O post aparece no blog, na Home, no filtro de categorias e no mapa do
site. **A ordem da lista não importa** — os posts se organizam sozinhos por
data, do mais novo para o mais antigo.

### Como escrever o corpo do artigo

O texto é montado por **blocos**, na ordem em que você escrever. São seis tipos:

```ts
corpo: [
  { tipo: "subtitulo", texto: "O primeiro erro" },

  { tipo: "paragrafo", texto: "Um parágrafo comum de texto." },

  { tipo: "citacao", texto: "Uma frase em destaque, com barra laranja." },
  { tipo: "citacao", texto: "Com autor.", autor: "Maria Silva" },

  { tipo: "lista", itens: ["Primeiro item", "Segundo item"] },

  {
    tipo: "listaNumerada",
    itens: [
      { titulo: "Valor", descricao: "O que importa para o cliente." },
      { titulo: "Fluxo", descricao: "Mapear todas as etapas." },
    ],
  },

  {
    tipo: "imagem",
    imagem: imagens.workshopPostIts,
    legenda: "Legenda opcional, embaixo da imagem.",
  },
],
```

Use quantos quiser, na ordem que quiser, repetindo à vontade.

---

## Criar uma página de serviço

O funcionamento é o mesmo do blog, com uma diferença importante:

> **Os seis serviços já aparecem na listagem `/servicos`.** O que o passo abaixo
> faz é dar **página própria** a um deles. Hoje só o Mapeamento de Processos tem.

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

**Passo 3.** Abra `src/content/servicos/index.ts`. Se o serviço **já está** na
lista (é o caso dos seis atuais), **apague o bloco antigo dele** e coloque no
lugar o nome importado:

```ts
import { gestaoDaQualidade } from "./gestao-da-qualidade";    // ← no topo

export const servicos: Servico[] = [
  mapeamentoDeProcessos,
  gestaoDaQualidade,                    // ← substitui o bloco que estava aqui
  { slug: "pesquisa-de-mercado", ... },
```

A página `/servicos/gestao-da-qualidade` passa a existir, o card na listagem
vira link e o item entra no mapa do site.

**Case de sucesso** funciona exatamente igual: copie
`src/content/cases/industria-metalurgica.ts` e registre em
`src/content/cases/index.ts`.

---

## Adicionar um material para download

Abra `src/content/materiais.ts` e acrescente um item na lista:

```ts
{
  slug: "guia-de-indicadores",
  titulo: "Guia de indicadores para PMEs",
  resumo: "Um resumo de duas linhas.",
  tipo: "E-book",          // E-book, Planilha, Guia, Template ou Webinar
  categoria: "Gestão",
  arquivo: "/materiais/guia-de-indicadores.pdf",
},
```

O campo **`arquivo`** é o que libera o download. Coloque o PDF ou a planilha na
pasta `public/materiais/` e escreva o caminho aqui.

**Sem `arquivo`, o botão aparece desabilitado, escrito "Em breve"** — que é como
todos os seis materiais estão hoje, porque nenhum arquivo foi entregue ainda.

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
