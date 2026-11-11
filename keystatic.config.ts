import { collection, config, fields, singleton } from "@keystatic/core";
import { campoDeLista } from "./src/cms/campo-de-lista";
import { campoDeSlug } from "./src/cms/campo-de-slug";
import { campoDoCorpo } from "./src/cms/corpo-de-texto";
import { CATEGORIAS_DO_BLOG } from "./src/content/blog/categorias";
import { servicos } from "./src/content/servicos";
import { grupos } from "./src/content/servicos/grupos";
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
 * impede uma publicação sem resumo, sem categoria ou sem imagem — o papel que
 * o TypeScript fazia quando o conteúdo era escrito à mão.
 *
 * O nome do arquivo é o slug. Trocar o título não muda o endereço.
 * ============================================================================
 */
/**
 * Só o arquivo da imagem. O `alt` não é pedido: quem usa o CMS não é técnico, e
 * o adapter usa o título do post ou o nome da empresa do case (ver
 * src/content/blog e src/content/cases).
 * Largura e altura também não: o build mede o arquivo (ver src/lib/imagem.ts).
 *
 * Continua sendo um objeto com `arquivo` dentro para não mudar o formato dos
 * YAML já gravados.
 */
function campoDeImagem(rotulo: string, diretorio: string, caminhoPublico: string) {
  return fields.object(
    {
      arquivo: fields.image({
        label: rotulo,
        directory: diretorio,
        publicPath: caminhoPublico,
        validation: { isRequired: true },
      }),
    },
    { label: rotulo },
  );
}

/**
 * As opções do campo "Serviço" de um case: os serviços do site, na ordem do
 * registry, com o grupo na frente ("Otimização de Processos › Cronoanálise").
 * Grava o slug do serviço; o grupo sai dele (ver src/content/cases/index.ts).
 */
const OPCOES_DE_SERVICO = servicos.map((servico) => ({
  label: `${grupos.find((g) => g.id === servico.grupoId)?.titulo} › ${servico.titulo.replace(/\s*\n\s*/g, " ")}`,
  value: servico.slug,
}));

/**
 * Onde o CMS grava.
 *
 * `local` escreve direto no disco — é o modo de quem está com o projeto aberto
 * na máquina. `github` faz cada publicação virar um commit no repositório,
 * autenticada pela conta de quem publicou, e é o modo que vai para o ar.
 *
 * PARA LIGAR O MODO GITHUB: o passo a passo está na seção 3 do .env.local.
 * Em resumo:
 *   1. com KEYSTATIC_GITHUB_CLIENT_ID preenchido com qualquer texto, rode o
 *      site, abra /keystatic e siga a tela de configuração, que cria o App;
 *   2. ele grava as variáveis num arquivo `.env` — passe os valores para o
 *      .env.local (que tem prioridade sobre o `.env`) e para a Vercel:
 *      KEYSTATIC_GITHUB_CLIENT_ID, KEYSTATIC_GITHUB_CLIENT_SECRET,
 *      KEYSTATIC_SECRET e NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG.
 * Quem tiver acesso ao repositório publica; quem sair da equipe perde o acesso
 * junto com o resto. Não há senha para o site guardar.
 */
const armazenamento = process.env.KEYSTATIC_GITHUB_CLIENT_ID
  ? ({ kind: "github", repo: "Beets-Jr/LiderJr-Website" } as const)
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
            validation: { length: { min: 0, max: 3 } },
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
      // O corpo do artigo vai no próprio arquivo (.mdoc), abaixo dos campos.
      format: { contentField: "corpo" },
      columns: ["titulo", "data"],
      schema: {
        titulo: campoDeSlug({
          prefixoDoEndereco: "/blog/",
          name: { label: "Título", validation: { isRequired: true } },
          slug: {
            label: "URL",
            description:
              "O final do endereço do post: /blog/… Não mude depois de publicado — links antigos param de funcionar.",
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
          defaultValue: { kind: "today" },
          description:
            "A listagem ordena por esta data, da mais nova para a mais antiga. Já vem preenchida com a data de hoje.",
        }),
        categoria: campoDeLista({
          label: "Categoria",
          options: CATEGORIAS_DO_BLOG.map((c) => ({ label: c.titulo, value: c.id })),
          defaultValue: CATEGORIAS_DO_BLOG[0].id,
          description:
            "Um dos grupos de serviço, ou Atualidades. Alimenta o filtro da página.",
        }),
        imagem: campoDeImagem(
          "Imagem de capa",
          "public/imagens/blog",
          "/imagens/blog/",
        ),

        /* O artigo em si. Vazio = o post aparece na listagem mas não tem página
           própria, que é como cinco dos seis posts estão hoje. */
        /* O texto do post. Obrigatório: todo post tem página própria. Título
           e descrição para o Google saem do título e do resumo acima. */
        corpo: campoDoCorpo({ label: "Corpo do artigo", pasta: "blog" }),
        /* Só o texto do convite é escrito por artigo. Embaixo dele vem o
           formulário de contato, igual em todos (src/content/fale-conosco.ts). */
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
          {
            label: "Convite no fim do artigo",
            description:
              "Aparece acima do formulário de contato que fecha o artigo. O envio chega na Dash Hub marcado com este post.",
          },
        ),
      },
    }),

    cases: collection({
      label: "Cases",
      entryLayout: "content",
      slugField: "empresa",
      path: "content/cases/*",
      // O texto do case vai no próprio arquivo (.mdoc), abaixo dos campos.
      format: { contentField: "corpo" },
      columns: ["empresa", "data"],
      schema: {
        empresa: campoDeSlug({
          prefixoDoEndereco: "/cases/",
          name: {
            label: "Título",
            validation: { isRequired: true },
            description:
              "Aparece no card e no topo da página do case. Use o nome do cliente, ou o setor quando o nome não puder ser divulgado.",
          },
          slug: {
            label: "URL",
            description:
              "O final do endereço do case: /cases/… Não mude depois de publicado — links antigos param de funcionar.",
          },
        }),
        data: fields.date({
          label: "Data de publicação",
          validation: { isRequired: true },
          defaultValue: { kind: "today" },
          description:
            "Organiza a lista de cases aqui no CMS. Já vem preenchida com a data de hoje.",
        }),
        descricao: fields.text({
          label: "Descrição",
          multiline: true,
          validation: { isRequired: true, length: { min: 40, max: 260 } },
        }),
        servico: campoDeLista({
          label: "Serviço",
          options: OPCOES_DE_SERVICO,
          defaultValue: OPCOES_DE_SERVICO[0]!.value,
          description:
            "O serviço feito no projeto. Aparece como etiqueta no card, e o grupo (a etiqueta laranja em destaque, usada no filtro) vem dele.",
        }),
        segmento: fields.text({
          label: "Segmento",
          validation: { isRequired: true },
          description: "O ramo da empresa. Ex.: Indústria, Varejo, Saúde.",
        }),
        imagem: campoDeImagem("Imagem", "public/imagens/cases", "/imagens/cases/"),

        /* A história completa. Obrigatória: todo case tem página própria.
           Título e descrição para o Google saem do título e da descrição. */
        corpo: campoDoCorpo({
          label: "História do case",
          description:
            'Texto livre. Formato recomendado: três subtítulos — "O Desafio", "A Solução" e "Os Resultados" —, cada um com um ou dois parágrafos.',
          pasta: "cases",
        }),
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
          {
            label: "Convite no fim da página",
            description:
              "Aparece acima do formulário de contato que fecha o case. O envio chega na Dash Hub marcado com este case.",
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
      columns: ["titulo", "data"],
      schema: {
        titulo: campoDeSlug({
          name: {
            label: "Título",
            validation: { isRequired: true },
            description: "Aparece no card da listagem.",
          },
          slug: {
            label: "URL",
            description:
              "Identifica o material no CMS. Evite mudar depois de publicado.",
          },
        }),
        resumo: fields.text({
          label: "Resumo",
          multiline: true,
          validation: { isRequired: true, length: { min: 40, max: 220 } },
          description: "Duas linhas explicando o que a pessoa vai baixar.",
        }),
        data: fields.date({
          label: "Data de publicação",
          validation: { isRequired: true },
          defaultValue: { kind: "today" },
          description:
            "Organiza a lista de materiais aqui no CMS. Já vem preenchida com a data de hoje.",
        }),
        tipo: fields.select({
          label: "Tipo",
          options: TIPOS_DE_MATERIAL.map((t) => ({ label: t, value: t })),
          defaultValue: "E-book",
        }),
        categoria: campoDeLista({
          label: "Categoria",
          options: grupos.map((g) => ({ label: g.titulo, value: g.id })),
          defaultValue: grupos[0]!.id,
          description:
            "O grupo de serviços a que o material se refere. Alimenta o filtro da página.",
        }),
        imagem: campoDeImagem(
          "Imagem do card",
          "public/imagens/materiais",
          "/imagens/materiais/",
        ),
        arquivo: fields.file({
          label: "Arquivo para download",
          directory: "public/materiais",
          publicPath: "/materiais/",
          validation: { isRequired: true },
          description: "O arquivo que a pessoa baixa pelo botão do card. Obrigatório.",
        }),
      },
    }),
  },
});
