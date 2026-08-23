import { collection, config, fields, singleton } from "@keystatic/core";
import { TIPOS_DE_MATERIAL } from "./src/types/material";

/**
 * ============================================================================
 * SCHEMA DO CMS
 * ============================================================================
 * Cada coleção abaixo vira uma tela de edição em /keystatic e escreve arquivos
 * YAML em content/. O build lê esses arquivos e converte para os tipos de
 * domínio de src/types/ (ver os adapters em src/content/<coleção>/index.ts).
 *
 * REGRA: o que é obrigatório no tipo é obrigatório aqui. É este arquivo que
 * impede uma publicação sem resumo, sem categoria ou sem `alt` na imagem —
 * o papel que o TypeScript fazia quando o conteúdo era escrito à mão.
 *
 * O nome do arquivo é o slug. Trocar o título não muda o endereço.
 * ============================================================================
 */
/**
 * Imagem + alt, sempre juntos. O `alt` é obrigatório aqui porque é a única
 * garantia de que ninguém publica uma imagem muda para leitor de tela — a mesma
 * regra que o tipo `Imagem` impõe em src/types/. Largura e altura não são
 * pedidas: o build mede o arquivo (ver src/lib/imagem.ts).
 */
function imagemComAlt(rotulo: string, diretorio: string, caminhoPublico: string) {
  return fields.object(
    {
      arquivo: fields.image({
        label: rotulo,
        directory: diretorio,
        publicPath: caminhoPublico,
        validation: { isRequired: true },
      }),
      alt: fields.text({
        label: "Descrição da imagem (alt)",
        validation: { isRequired: true },
        description:
          "Descreva o que se vê, para quem usa leitor de tela. Ex.: “Engenheira analisando uma linha de montagem”.",
      }),
    },
    { label: rotulo },
  );
}

/**
 * Os seis blocos que montam o corpo de um artigo — espelham `BlocoDePost` em
 * src/types/post.ts. Quem escreve escolhe o tipo num menu; ninguém digita HTML.
 */
function blocoDeTexto() {
  return fields.conditional(
    fields.select({
      label: "Tipo de bloco",
      options: [
        { label: "Parágrafo", value: "paragrafo" },
        { label: "Subtítulo", value: "subtitulo" },
        { label: "Citação", value: "citacao" },
        { label: "Lista", value: "lista" },
        { label: "Lista numerada", value: "listaNumerada" },
        { label: "Imagem", value: "imagem" },
      ],
      defaultValue: "paragrafo",
    }),
    {
      paragrafo: fields.text({
        label: "Texto",
        multiline: true,
        validation: { isRequired: true },
      }),
      subtitulo: fields.text({ label: "Subtítulo", validation: { isRequired: true } }),
      citacao: fields.object({
        texto: fields.text({
          label: "Citação",
          multiline: true,
          validation: { isRequired: true },
        }),
        autor: fields.text({ label: "Autor (opcional)" }),
      }),
      lista: fields.array(fields.text({ label: "Item" }), {
        label: "Itens",
        itemLabel: (item) => item.value || "Item",
      }),
      listaNumerada: fields.array(
        fields.object({
          titulo: fields.text({ label: "Título", validation: { isRequired: true } }),
          descricao: fields.text({
            label: "Descrição",
            multiline: true,
            validation: { isRequired: true },
          }),
        }),
        { label: "Itens", itemLabel: (item) => item.fields.titulo.value || "Item" },
      ),
      imagem: fields.object({
        imagem: imagemComAlt("Imagem", "public/imagens/blog", "/imagens/blog/"),
        legenda: fields.text({ label: "Legenda (opcional)" }),
      }),
    },
  );
}

/**
 * Os ícones oferecidos nos números de impacto de um case. É um recorte da lista
 * de `NomeDeIcone` — os que fazem sentido ao lado de um número. Oferecer os 23
 * seria transformar uma escolha simples em um catálogo.
 */
const ICONES_DE_IMPACTO = [
  { label: "Alvo", value: "alvo" },
  { label: "Gráfico subindo", value: "grafico" },
  { label: "Gráfico caindo", value: "quedaGrafico" },
  { label: "Relógio", value: "relogio" },
  { label: "Escudo", value: "escudo" },
  { label: "Estrela", value: "estrela" },
  { label: "Pessoas", value: "pessoas" },
] as const;

/** O rótulo que resume o bloco na lista do editor, para não virar "Item 1, 2, 3". */
function rotuloDoBloco(tipo: string): string {
  const rotulos: Record<string, string> = {
    paragrafo: "Parágrafo",
    subtitulo: "Subtítulo",
    citacao: "Citação",
    lista: "Lista",
    listaNumerada: "Lista numerada",
    imagem: "Imagem",
  };
  return rotulos[tipo] ?? tipo;
}

/**
 * Onde o CMS grava.
 *
 * `local` escreve direto no disco — é o modo de quem está com o projeto aberto
 * na máquina. `github` faz cada publicação virar um commit no repositório,
 * autenticada pela conta de quem publicou, e é o modo que vai para o ar.
 *
 * PARA LIGAR O MODO GITHUB (quando o repositório estiver no GitHub):
 *   1. crie um GitHub App pelo próprio Keystatic: rode o site, abra
 *      /keystatic e siga o passo a passo da tela de configuração;
 *   2. ele grava as variáveis no .env.local — leve as mesmas para a Vercel:
 *      KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET,
 *      KEYSTATIC_SECRET e NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG;
 *   3. troque `repo` abaixo pelo dono/nome reais.
 * Quem tiver acesso ao repositório publica; quem sair da equipe perde o acesso
 * junto com o resto. Não há senha para o site guardar.
 */
const armazenamento = process.env.KEYSTATIC_GITHUB_CLIENT_ID
  ? ({ kind: "github", repo: "liderjr/site" } as const)
  : ({ kind: "local" } as const);

export default config({
  storage: armazenamento,

  ui: {
    brand: { name: "Líder Jr." },
    navigation: {
      Publicações: ["posts", "cases", "materiais"],
      Home: ["casesEmDestaque"],
    },
  },

  singletons: {
    /**
     * Quais cases aparecem no carrossel da Home, e em que ordem.
     *
     * É uma escolha editorial, não uma lista automática: publicar um case novo
     * NÃO muda a Home. Quem decide o que fica em vitrine é quem edita esta
     * tela. (O oposto de "Últimas do blog", que é sempre o que saiu por último.)
     */
    casesEmDestaque: singleton({
      label: "Home — cases em destaque",
      path: "content/home-cases-em-destaque",
      format: { data: "yaml" },
      schema: {
        cases: fields.array(
          fields.relationship({ label: "Case", collection: "cases" }),
          {
            label: "Cases no carrossel da Home",
            itemLabel: (item) => item.value ?? "Escolha um case",
            description:
              "Três é o número que o carrossel foi desenhado para mostrar. Arraste para ordenar — o primeiro da lista abre no centro.",
            validation: { length: { min: 1, max: 3 } },
          },
        ),
      },
    }),
  },

  collections: {
    posts: collection({
      label: "Blog",
      entryLayout: "content",
      slugField: "titulo",
      path: "content/blog/*",
      format: { data: "yaml" },
      columns: ["titulo", "data", "categoria"],
      schema: {
        titulo: fields.slug({
          name: { label: "Título", validation: { isRequired: true } },
          slug: {
            label: "Endereço (slug)",
            description:
              "Vira a URL: /blog/<slug>. Não mude depois de publicado — links antigos param de funcionar.",
          },
        }),
        resumo: fields.text({
          label: "Resumo",
          multiline: true,
          validation: { isRequired: true, length: { min: 60, max: 260 } },
          description: "Aparece no card da listagem e na busca do Google.",
        }),
        data: fields.date({
          label: "Data de publicação",
          validation: { isRequired: true },
          description:
            "A listagem ordena por esta data, da mais nova para a mais antiga.",
        }),
        categoria: fields.text({
          label: "Categoria",
          validation: { isRequired: true },
          description: "Alimenta o filtro da página. Reaproveite uma existente.",
        }),
        tempoDeLeitura: fields.text({
          label: "Tempo de leitura",
          validation: { isRequired: true },
          description: 'No formato "6 min".',
        }),
        imagem: imagemComAlt("Imagem de capa", "public/imagens/blog", "/imagens/blog/"),

        /* O artigo em si. Vazio = o post aparece na listagem mas não tem página
           própria, que é como cinco dos seis posts estão hoje. */
        artigo: fields.conditional(
          fields.checkbox({
            label: "Este post tem página própria",
            description:
              "Desmarcado, ele aparece só como card na listagem, sem link. É o estado de quem ainda não teve o texto escrito.",
          }),
          {
            false: fields.empty(),
            true: fields.object({
              autor: fields.object({
                nome: fields.text({
                  label: "Autor",
                  validation: { isRequired: true },
                }),
                iniciais: fields.text({
                  label: "Iniciais",
                  validation: { isRequired: true, length: { min: 2, max: 2 } },
                  description: "Duas letras, exibidas no círculo laranja.",
                }),
              }),
              tituloSeo: fields.text({
                label: "Título para o Google",
                description: "Deixe vazio para usar o título do post.",
              }),
              descricaoSeo: fields.text({
                label: "Descrição para o Google",
                multiline: true,
                description: "Deixe vazio para usar o resumo.",
              }),
              corpo: fields.array(blocoDeTexto(), {
                label: "Corpo do artigo",
                itemLabel: (item) => rotuloDoBloco(item.discriminant),
                description:
                  "Os blocos aparecem na ordem em que estiverem aqui. Arraste para reordenar.",
              }),
              /* Só o texto do convite é escrito por artigo. Os dois botões são
                 navegação do site e vivem em src/content/blog/pagina.ts. */
              cta: fields.object(
                {
                  titulo: fields.text({
                    label: "Título do convite",
                    validation: { isRequired: true },
                  }),
                  descricao: fields.text({
                    label: "Texto do convite",
                    multiline: true,
                    validation: { isRequired: true },
                  }),
                },
                { label: "Convite no fim do artigo" },
              ),
            }),
          },
        ),
      },
    }),

    cases: collection({
      label: "Cases",
      entryLayout: "content",
      slugField: "empresa",
      path: "content/cases/*",
      format: { data: "yaml" },
      columns: ["empresa", "resultado", "categoria"],
      schema: {
        empresa: fields.slug({
          name: {
            label: "Cliente",
            validation: { isRequired: true },
            description:
              "Como o cliente aparece no site. Use o setor quando o nome não puder ser divulgado.",
          },
          slug: {
            label: "Endereço (slug)",
            description: "Vira a URL: /cases/<slug>. Não mude depois de publicado.",
          },
        }),
        resultado: fields.text({
          label: "Número de destaque",
          validation: { isRequired: true },
          description: 'O número grande do card. Ex.: "-35%", "+28%".',
        }),
        metrica: fields.text({
          label: "O que o número mede",
          validation: { isRequired: true },
          description: 'Ex.: "Tempo de produção".',
        }),
        descricao: fields.text({
          label: "Descrição",
          multiline: true,
          validation: { isRequired: true, length: { min: 40, max: 260 } },
        }),
        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tags",
          itemLabel: (item) => item.value || "Tag",
          description: "Metodologias e áreas. Aparecem como pílulas no card.",
        }),
        categoria: fields.text({
          label: "Categoria",
          validation: { isRequired: true },
          description: "Alimenta o filtro da página. Reaproveite uma existente.",
        }),
        imagem: imagemComAlt("Imagem", "public/imagens/cases", "/imagens/cases/"),

        /* A história completa. Sem ela o case aparece na listagem sem link. */
        historia: fields.conditional(
          fields.checkbox({
            label: "Este case tem página própria",
            description:
              "Desmarcado, ele aparece só como card na listagem — o estado de cinco dos seis cases de hoje.",
          }),
          {
            false: fields.empty(),
            true: fields.object({
              tituloSeo: fields.text({
                label: "Título para o Google",
                description: "Deixe vazio para usar o nome do cliente.",
              }),
              descricaoSeo: fields.text({
                label: "Descrição para o Google",
                multiline: true,
                description: "Deixe vazio para usar a descrição do card.",
              }),
              secoes: fields.array(
                fields.object({
                  titulo: fields.text({
                    label: "Título da seção",
                    validation: { isRequired: true },
                  }),
                  paragrafos: fields.array(
                    fields.text({ label: "Parágrafo", multiline: true }),
                    {
                      label: "Parágrafos",
                      itemLabel: (item) => item.value.slice(0, 50),
                    },
                  ),
                }),
                {
                  label: "Seções",
                  itemLabel: (item) => item.fields.titulo.value || "Seção",
                  description:
                    'Normalmente três: "O Desafio", "A Solução", "Os Resultados".',
                },
              ),
              depoimento: fields.conditional(
                fields.checkbox({ label: "Tem depoimento do cliente" }),
                {
                  false: fields.empty(),
                  true: fields.object({
                    texto: fields.text({
                      label: "Depoimento",
                      multiline: true,
                      validation: { isRequired: true },
                    }),
                    autor: fields.text({
                      label: "Quem falou",
                      validation: { isRequired: true },
                    }),
                    cargo: fields.text({
                      label: "Cargo e empresa",
                      validation: { isRequired: true },
                    }),
                    iniciais: fields.text({
                      label: "Iniciais",
                      validation: { isRequired: true, length: { min: 2, max: 2 } },
                    }),
                  }),
                },
              ),
              numerosDeImpacto: fields.array(
                fields.object({
                  icone: fields.select({
                    label: "Ícone",
                    options: ICONES_DE_IMPACTO,
                    defaultValue: "alvo",
                  }),
                  valor: fields.text({
                    label: "Valor",
                    validation: { isRequired: true },
                  }),
                  rotulo: fields.text({
                    label: "O que representa",
                    validation: { isRequired: true },
                  }),
                }),
                {
                  label: "Números de impacto",
                  itemLabel: (item) => item.fields.valor.value || "Número",
                  description:
                    "Aparecem no painel lateral. Deixe vazio para não exibir o painel.",
                },
              ),
              cta: fields.object(
                {
                  titulo: fields.text({
                    label: "Título do convite",
                    validation: { isRequired: true },
                  }),
                  descricao: fields.text({
                    label: "Texto do convite",
                    multiline: true,
                    validation: { isRequired: true },
                  }),
                  servicoRelacionado: fields.text({
                    label: "Endereço do serviço relacionado",
                    description:
                      'Ex.: "/servicos/mapeamento-de-processos". Vazio manda para a lista de serviços.',
                  }),
                },
                { label: "Convite no fim da página" },
              ),
            }),
          },
        ),
      },
    }),

    materiais: collection({
      label: "Materiais",
      entryLayout: "form",
      slugField: "titulo",
      path: "content/materiais/*",
      format: { data: "yaml" },
      columns: ["titulo", "tipo", "categoria"],
      schema: {
        titulo: fields.slug({
          name: {
            label: "Título",
            validation: { isRequired: true },
            description: "Aparece no card da listagem.",
          },
          slug: {
            label: "Endereço (slug)",
            description: "Vira o nome do arquivo. Evite mudar depois de publicado.",
          },
        }),
        resumo: fields.text({
          label: "Resumo",
          multiline: true,
          validation: { isRequired: true, length: { min: 40, max: 220 } },
          description: "Duas linhas explicando o que a pessoa vai baixar.",
        }),
        tipo: fields.select({
          label: "Tipo",
          options: TIPOS_DE_MATERIAL.map((t) => ({ label: t, value: t })),
          defaultValue: "E-book",
        }),
        categoria: fields.text({
          label: "Categoria",
          validation: { isRequired: true },
          description:
            "Alimenta o filtro da página. Reaproveite uma categoria existente sempre que possível.",
        }),
        arquivo: fields.file({
          label: "Arquivo para download",
          directory: "public/materiais",
          publicPath: "/materiais/",
          description:
            "Sem arquivo, o card aparece com o botão desabilitado, escrito “Em breve”.",
        }),
      },
    }),
  },
});
