import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: ANÁLISE DE CUSTOS
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — escrito para dar corpo à página e mostrar o layout
 * funcionando. Precisa de revisão da Líder Jr. antes de publicar.
 * Ver PENDENCIAS.md. O `depoimento` também é FORJADO: pessoa e fala inventadas,
 * a pedido, só para a seção existir enquanto não há uma citação real.
 * ============================================================================
 */
export const analiseDeCustos: Servico = {
  slug: "analise-de-custos",
  grupoId: "gestao-financeira",
  titulo: "Análise de\nCustos",
  chamada: "Precifique com inteligência e proteja sua margem!",
  descricao:
    "Analisamos sua estrutura de custos e desenvolvemos estratégias de precificação alinhadas ao mercado e à margem desejada.",
  tags: ["Custos", "Precificação", "Margem"],
  icone: "check",
  imagem: imagens.dashboardIndicadores,

  detalhe: {
    metadados: {
      titulo: "Análise de Custos",
      descricao:
        "Levantamento da estrutura de custos, cálculo do custo real por produto e definição de preço com margem sustentável e coerente com o mercado.",
    },

    imagemDeFundo: comoFundo(imagens.dashboardIndicadores),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Saiba quanto custa antes de dizer quanto custa",
      paragrafos: [
        "A análise de custos ajuda a empresa a entender como seus custos são formados e o quanto cada um deles impacta o resultado do negócio — quanto custa, de verdade, cada produto ou serviço que ela entrega.",
        "Levantamos custos fixos e variáveis, rateamos o que é indireto e chegamos ao custo unitário real. A partir dessa análise, identificamos desperdícios, avaliamos oportunidades de redução e chegamos a uma base mais segura para as decisões de precificação.",
      ],
      imagem: imagens.painelDeGestao,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do trabalho",
      etapas: [
        {
          numero: "01",
          titulo: "Levantamento",
          descricao:
            "Levantamento dos custos da empresa, separando o que é fixo do que é variável.",
        },
        {
          numero: "02",
          titulo: "Classificação",
          descricao:
            "Classificação e organização dos gastos por natureza e por produto ou serviço.",
        },
        {
          numero: "03",
          titulo: "Composição",
          descricao:
            "Análise da composição dos custos e cálculo do custo unitário real de cada item.",
        },
        {
          numero: "04",
          titulo: "Impactos",
          descricao:
            "Identificação dos principais impactos dos custos no resultado do negócio.",
        },
        {
          numero: "05",
          titulo: "Oportunidades",
          descricao:
            "Identificação de oportunidades de redução de custos e de ajuste na precificação.",
        },
        {
          numero: "06",
          titulo: "Recomendações",
          descricao:
            "Recomendações para otimização dos custos, com base sólida para a decisão de preço.",
        },
      ],
    },

    resultados: {
      titulo: "Por que analisar seus custos?",
      descricao:
        "Sem saber como o custo se forma, decisão de desconto, corte e preço são tomadas no escuro — e o preço é a que mais rápido muda o resultado da empresa.",
      itens: [
        {
          icone: "quedaGrafico",
          titulo: "Desperdícios Identificados",
          descricao:
            "Custos que hoje passam despercebidos ficam visíveis, com oportunidades concretas de redução.",
        },
        {
          icone: "escudo",
          titulo: "Margem Protegida",
          descricao:
            "Com o custo real na mão, o desconto deixa de ser um chute e passa a ter um limite conhecido.",
        },
        {
          icone: "alvo",
          titulo: "Preço Defensável",
          descricao:
            "A tabela passa a ter racional: dá para explicar ao cliente e sustentar na negociação.",
        },
      ],
    },

    // ⚠️ DEPOIMENTO FORJADO — pessoa e fala inventadas, a pedido, só para a
    // seção aparecer enquanto não há depoimento real. TROCAR ANTES DE PUBLICAR.
    depoimento: {
      texto:
        "Descobrimos que o produto que mais vendíamos era o que menos deixava margem. Refizemos a tabela com o custo real na mão e hoje sei até onde posso ir num desconto sem trabalhar de graça.",
      autor: "Anderson Pires",
      cargo: "Proprietário, Confecção",
      iniciais: "AP",
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Você sabe qual produto seu dá lucro?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Estrutura de custos fixos e variáveis levantada",
          "Custo unitário real por produto ou serviço",
          "Tabela de preços com margem e ponto de equilíbrio",
          "Planilha de simulação de cenários",
        ],
      },
    },
  },
};
