import { imagens } from "@/content/imagens";
import type { Post } from "@/types/post";

/**
 * ============================================================================
 * POST: LEAN MANUFACTURING
 * ============================================================================
 * Modelo para todos os posts do blog. Para criar outro, copie este arquivo,
 * troque o conteúdo e registre em ./index.ts.
 *
 * O texto do artigo fica no array `corpo`, em BLOCOS. Cada bloco tem um `tipo`
 * e os blocos aparecem na ordem em que estão escritos. Os tipos disponíveis
 * são: paragrafo, subtitulo, citacao, lista, listaNumerada e imagem.
 * Ver CONTEUDO.md para o exemplo de cada um.
 * ============================================================================
 */
export const leanManufacturing: Post = {
  slug: "lean-manufacturing",
  titulo: "Como o Lean Manufacturing pode transformar sua pequena empresa",
  resumo:
    "Conheça os princípios do Lean e como aplicá-los na redução de desperdícios e aumento da produtividade em negócios de pequeno porte.",
  data: "2026-06-15",
  categoria: "Processos",
  tempoDeLeitura: "6 min",
  imagem: imagens.engenheiraLinhaMontagem,

  detalhe: {
    metadados: {
      titulo: "Como o Lean Manufacturing pode transformar sua pequena empresa",
      descricao:
        "Os cinco princípios do Lean explicados de forma prática, com o primeiro passo para aplicá-los em uma pequena empresa sem investimento alto.",
    },

    autor: { nome: "Consultor Líder Júnior", iniciais: "LJ" },

    corpo: [
      { tipo: "subtitulo", texto: "O que é Lean Manufacturing" },
      {
        tipo: "paragrafo",
        texto:
          "Lean Manufacturing é uma filosofia de gestão originada no Sistema Toyota de Produção, focada em entregar mais valor ao cliente com menos desperdício. Na prática, isso significa olhar para cada etapa do processo produtivo e perguntar: essa atividade agrega valor real para quem compra o produto ou serviço?",
      },
      {
        tipo: "paragrafo",
        texto:
          "Para pequenas empresas, o Lean costuma parecer distante da realidade — algo feito apenas por grandes indústrias. Na prática, os princípios são simples e podem ser aplicados com baixo investimento, desde que haja disciplina para observar o processo com atenção.",
      },
      {
        tipo: "citacao",
        texto:
          "Desperdício não é só material jogado fora — é também tempo de espera, retrabalho e etapas que ninguém sabe explicar por que existem.",
      },
      { tipo: "subtitulo", texto: "Os 5 princípios do Lean" },
      {
        tipo: "listaNumerada",
        itens: [
          {
            titulo: "Valor",
            descricao: "Definir o que realmente importa para o cliente final.",
          },
          {
            titulo: "Fluxo de valor",
            descricao:
              "Mapear todas as etapas do processo e identificar o que não agrega valor.",
          },
          {
            titulo: "Fluxo contínuo",
            descricao: "Eliminar interrupções e esperas entre uma etapa e outra.",
          },
          {
            titulo: "Produção puxada",
            descricao:
              "Produzir de acordo com a demanda real, não com previsões otimistas.",
          },
          {
            titulo: "Melhoria contínua",
            descricao:
              "Revisar processos periodicamente em busca de pequenos ganhos constantes.",
          },
        ],
      },
      { tipo: "subtitulo", texto: "Como começar na sua empresa" },
      {
        tipo: "paragrafo",
        texto:
          "O primeiro passo não é comprar ferramentas ou treinamentos caros — é observar. Escolha um processo, acompanhe-o do início ao fim e anote onde o trabalho para, onde há retrabalho e onde a informação se perde. Esses pontos costumam ser os gargalos mais fáceis de atacar primeiro.",
      },
    ],

    cta: {
      titulo: "Quer aplicar o Lean na sua empresa?",
      descricao:
        "Nossa equipe pode ajudar a mapear seus processos e encontrar oportunidades reais de melhoria.",
      botaoPrimario: { label: "Fale Conosco", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros artigos", href: "/blog" },
    },
  },
};
