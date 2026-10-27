import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PESQUISA DE MERCADO
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const pesquisaDeMercado: Servico = {
  slug: "pesquisa-de-mercado",
  grupoId: "captacao-de-clientes",
  titulo: "Pesquisa de\nMercado",
  chamada: "Conheça seu público antes de tomar decisões!",
  descricao:
    "Investigamos necessidades, preferências, comportamentos e percepções do seu público para reduzir incertezas e gerar informações que apoiem decisões de marketing e de negócio.",
  descricaoNaHome:
    "Entendemos seu mercado e seu público por meio de dados, identificando comportamentos, necessidades e oportunidades para apoiar decisões mais seguras.",
  tags: ["Dados", "Público", "Estratégia"],
  icone: "pessoas",
  imagem: imagens.dashboardNoNotebook,

  detalhe: {
    metadados: {
      titulo: "Pesquisa de Mercado",
      descricao:
        "Investigamos necessidades, preferências e comportamentos do público para gerar informações que reduzam incertezas e apoiem decisões de marketing e de negócio.",
    },

    descricaoDoTopo:
      "Investigamos necessidades, preferências e comportamentos do público para gerar informações que reduzam incertezas e apoiem decisões de marketing e de negócio.",

    tagsDaPagina: ["Mercado", "Dados", "Público"],

    imagemDeFundo: comoFundo(imagens.dashboardNoNotebook),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Conheça seu mercado antes de tomar decisões",
      paragrafos: [
        "Estruturamos pesquisas para entender melhor o público e o contexto em que sua empresa está inserida.",
        "A partir da coleta e análise de dados, identificamos comportamentos, necessidades, preferências e oportunidades que podem apoiar decisões de marketing e de negócio.",
      ],
      imagem: imagens.dashboardNoNotebook,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da nossa pesquisa de mercado",
      etapas: [
        {
          numero: "01",
          titulo: "Definição da pesquisa",
          descricao: "Estabelecemos objetivo, público e região de estudo.",
        },
        {
          numero: "02",
          titulo: "Estruturação e coleta",
          descricao:
            "Desenvolvemos a metodologia e o questionário e realizamos a coleta das respostas.",
        },
        {
          numero: "03",
          titulo: "Tratamento e análise",
          descricao:
            "Organizamos os dados e identificamos padrões e informações relevantes.",
        },
        {
          numero: "04",
          titulo: "Insights e recomendações",
          descricao:
            "Consolidamos os resultados e apresentamos conclusões e oportunidades identificadas.",
        },
      ],
    },

    resultados: {
      titulo: "Por que realizar uma pesquisa de mercado?",
      itens: [
        {
          icone: "pessoas",
          titulo: "Conhecimento do público",
          descricao:
            "Entenda necessidades, preferências e comportamentos dos consumidores.",
        },
        {
          icone: "barras",
          titulo: "Menos incerteza",
          descricao: "Utilize dados reais como apoio para decisões.",
        },
        {
          icone: "lampada",
          titulo: "Identificação de oportunidades",
          descricao:
            "Encontre insights que podem direcionar estratégias de marketing e negócio.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Qual decisão você precisa tomar?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Escopo com a pergunta de pesquisa e o público definidos",
          "Questionário ou roteiro de entrevista validado",
          "Base de respostas tratada e organizada",
          "Relatório com conclusões e recomendações",
        ],
      },
    },
  },
};
