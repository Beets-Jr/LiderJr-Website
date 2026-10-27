import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: DRE
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const dre: Servico = {
  slug: "dre",
  grupoId: "gestao-financeira",
  titulo: "DRE",
  chamada: "Entenda onde sua empresa ganha e perde dinheiro!",
  descricao:
    "Organizamos receitas, custos e despesas para mostrar de forma clara como o resultado do negócio é formado e apoiar uma análise mais precisa da rentabilidade.",
  tags: ["Resultado", "Rentabilidade", "Finanças"],
  icone: "colunas",
  imagem: imagens.consultorComPlanilhaNoNotebook,

  detalhe: {
    metadados: {
      titulo: "DRE",
      descricao:
        "Organizamos receitas, custos e despesas para mostrar como o resultado da empresa é formado e apoiar uma análise mais clara da rentabilidade do negócio.",
    },

    descricaoDoTopo:
      "Organizamos receitas, custos e despesas para mostrar como o resultado da empresa é formado e apoiar uma análise mais clara da rentabilidade do negócio.",

    imagemDeFundo: comoFundo(imagens.consultorComPlanilhaNoNotebook),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Entenda como o resultado da sua empresa é formado",
      paragrafos: [
        "Organizamos receitas, custos e despesas para construir uma visão estruturada do desempenho financeiro da empresa.",
        "Com a DRE, torna-se mais fácil identificar os principais fatores que impactam o resultado e analisar a rentabilidade do negócio.",
      ],
      imagem: imagens.consultorComPlanilhaNoNotebook,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da nossa DRE",
      etapas: [
        {
          numero: "01",
          titulo: "Levantamento",
          descricao: "Coletamos os dados financeiros necessários para a análise.",
        },
        {
          numero: "02",
          titulo: "Organização",
          descricao: "Classificamos receitas, custos e despesas.",
        },
        {
          numero: "03",
          titulo: "Estruturação da DRE",
          descricao: "Consolidamos as informações e estruturamos o demonstrativo.",
        },
        {
          numero: "04",
          titulo: "Análise",
          descricao:
            "Avaliamos o resultado e identificamos os principais impactos e oportunidades.",
        },
      ],
    },

    resultados: {
      titulo: "Por que estruturar sua DRE?",
      itens: [
        {
          icone: "calculadora",
          titulo: "Entenda a formação do resultado",
          descricao:
            "Veja com clareza como receitas, custos e despesas se combinam para formar o resultado da empresa.",
        },
        {
          icone: "lupa",
          titulo: "Identifique os principais impactos",
          descricao:
            "Descubra quais itens mais influenciam o desempenho financeiro do negócio.",
        },
        {
          icone: "lampada",
          titulo: "Tenha uma base para agir",
          descricao:
            "Use uma visão estruturada dos resultados para apoiar decisões e direcionar melhorias.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Você sabe qual foi o lucro da empresa no mês passado?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Receitas, custos e despesas organizados",
          "DRE do período estruturada",
          "Indicadores de margem calculados",
          "Modelo para atualizar a DRE mensalmente",
        ],
      },
    },
  },
};
