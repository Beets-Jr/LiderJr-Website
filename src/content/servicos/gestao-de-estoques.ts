import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: GESTÃO DE ESTOQUES
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — escrito para dar corpo à página e mostrar o layout
 * funcionando. Precisa de revisão da Líder Jr. antes de publicar.
 * Ver PENDENCIAS.md. O `depoimento` também é FORJADO: pessoa e fala inventadas,
 * a pedido, só para a seção existir enquanto não há uma citação real.
 * ============================================================================
 */
export const gestaoDeEstoques: Servico = {
  slug: "gestao-de-estoques",
  grupoId: "otimizacao-de-processos",
  titulo: "Gestão de Estoques",
  chamada: "Estoque enxuto, operação mais ágil!",
  descricao:
    "Otimizamos a gestão de estoques com modelos de lote econômico, curva ABC e sistemas de reabastecimento inteligente.",
  tags: ["ABC", "EOQ", "Kanban"],
  icone: "estrela",
  // No protótipo esta imagem eram figurinhas do Mario. Ver PENDENCIAS.md.
  imagem: imagens.dashboardIndicadores,

  detalhe: {
    metadados: {
      titulo: "Gestão de Estoques",
      descricao:
        "Curva ABC, lote econômico e política de reposição para liberar capital parado sem correr o risco de faltar item na hora da venda.",
    },

    imagemDeFundo: comoFundo(imagens.engenheiraLinhaMontagem),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "O equilíbrio entre faltar e sobrar",
      paragrafos: [
        "Excesso de produtos parados, faltas recorrentes, perdas ou a falta de um critério claro para decidir quando e quanto comprar — os sintomas variam, mas a raiz costuma ser a mesma: ninguém está olhando os dados de perto o suficiente.",
        "Analisamos os dados e o comportamento de cada item em estoque para organizar esse controle. Classificamos os itens por relevância com a curva ABC, calculamos o lote econômico de compra e definimos ponto de pedido e estoque de segurança por faixa, dando mais segurança às decisões de compra e reposição.",
      ],
      imagem: imagens.analiseDeFluxoEmPapel,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da gestão",
      etapas: [
        {
          numero: "01",
          titulo: "Diagnóstico",
          descricao:
            "Levantamento da situação atual da gestão de estoques: o que falta, o que sobra e por quê.",
        },
        {
          numero: "02",
          titulo: "Organização dos Dados",
          descricao:
            "Levantamento e organização dos dados existentes sobre movimentação e níveis de estoque.",
        },
        {
          numero: "03",
          titulo: "Análise",
          descricao:
            "Estudo do comportamento dos produtos — consumo, giro e criticidade — item por item.",
        },
        {
          numero: "04",
          titulo: "Oportunidades",
          descricao:
            "Identificação dos problemas atuais e das oportunidades concretas de melhoria.",
        },
        {
          numero: "05",
          titulo: "Parâmetros",
          descricao:
            "Definição dos métodos e parâmetros de controle — curva ABC, lote econômico, ponto de pedido.",
        },
        {
          numero: "06",
          titulo: "Ferramentas",
          descricao:
            "Estruturação das ferramentas de acompanhamento que a equipe vai usar no dia a dia.",
        },
      ],
    },

    resultados: {
      titulo: "Por que revisar seu estoque?",
      descricao:
        "O estoque costuma ser a maior conta esquecida da empresa: aparece no balanço como ativo e some do caixa como dinheiro.",
      itens: [
        {
          icone: "quedaGrafico",
          titulo: "Capital Liberado",
          descricao:
            "Itens de giro baixo deixam de consumir caixa e espaço que a operação precisa para o que realmente vende.",
        },
        {
          icone: "escudo",
          titulo: "Menos Ruptura",
          descricao:
            "Ponto de pedido e estoque de segurança definidos reduzem a falta justamente do item que sustenta a venda.",
        },
        {
          icone: "relogio",
          titulo: "Compra Previsível",
          descricao:
            "A reposição passa a seguir uma regra, e não a urgência de quem percebeu a falta primeiro.",
        },
      ],
    },

    // ⚠️ DEPOIMENTO FORJADO — pessoa e fala inventadas, a pedido, só para a
    // seção aparecer enquanto não há depoimento real. TROCAR ANTES DE PUBLICAR.
    depoimento: {
      texto:
        "Comprávamos por pressentimento e vivíamos entre o excesso e a falta. Com a curva ABC e o ponto de pedido definidos, sobrou espaço no almoxarifado e, principalmente, sobrou caixa.",
      autor: "Marcelo Tanaka",
      cargo: "Gerente de Suprimentos, Distribuidora",
      iniciais: "MT",
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Quanto do seu caixa está parado na prateleira?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Curva ABC dos itens em estoque",
          "Lote econômico de compra por item relevante",
          "Ponto de pedido e estoque de segurança definidos",
          "Política de reposição documentada e treinada",
        ],
      },
    },
  },
};
