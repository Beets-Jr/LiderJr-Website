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
        "Muita empresa precifica olhando para o concorrente e descobre tarde que vende bem e ganha pouco. O ponto de partida é outro: quanto custa, de verdade, cada produto ou serviço que você entrega.",
        "Levantamos custos fixos e variáveis, rateamos o que é indireto e chegamos ao custo unitário real. Com esse número em mãos, definimos preço, margem e ponto de equilíbrio — e aí sim comparamos com o mercado.",
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
            "Mapeamento de todos os custos e despesas da operação, separando o que é fixo do que é variável.",
        },
        {
          numero: "02",
          titulo: "Custeio",
          descricao:
            "Rateio dos custos indiretos e cálculo do custo unitário real de cada produto ou serviço.",
        },
        {
          numero: "03",
          titulo: "Precificação",
          descricao:
            "Definição de preço e margem por item, com ponto de equilíbrio e comparação com a prática do mercado.",
        },
        {
          numero: "04",
          titulo: "Simulação",
          descricao:
            "Planilha para testar cenários de volume, custo e desconto antes de mexer na tabela de preços.",
        },
      ],
    },

    resultados: {
      titulo: "Por que revisar sua precificação?",
      descricao:
        "Preço é a decisão que mais rápido muda o resultado da empresa — e a que mais costuma ser tomada no escuro.",
      itens: [
        {
          icone: "escudo",
          titulo: "Margem Protegida",
          descricao:
            "Com o custo real na mão, o desconto deixa de ser um chute e passa a ter um limite conhecido.",
        },
        {
          icone: "grafico",
          titulo: "Mix Mais Rentável",
          descricao:
            "Fica visível quais produtos sustentam a empresa e quais só ocupam capacidade sem pagar por ela.",
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
