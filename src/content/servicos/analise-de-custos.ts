import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: ANÁLISE DE CUSTOS
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const analiseDeCustos: Servico = {
  slug: "analise-de-custos",
  grupoId: "gestao-financeira",
  titulo: "Análise de\nCustos",
  chamada: "Entenda seus custos para tomar decisões melhores!",
  descricao:
    "Analisamos como os custos da empresa são formados, identificamos desperdícios e oportunidades de redução e criamos uma base mais segura para decisões de precificação.",
  tags: ["Custos", "Margem", "Precificação"],
  icone: "check",
  imagem: imagens.calculadoraEGraficos,

  detalhe: {
    metadados: {
      titulo: "Análise de Custos",
      descricao:
        "Analisamos como os custos da empresa são formados para identificar impactos no resultado, oportunidades de redução e apoiar decisões de precificação.",
    },

    descricaoDoTopo:
      "Analisamos como os custos da empresa são formados para identificar impactos no resultado, oportunidades de redução e apoiar decisões de precificação.",

    imagemDeFundo: comoFundo(imagens.calculadoraEGraficos),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Entenda onde seus custos estão impactando o resultado",
      paragrafos: [
        "Levantamos e organizamos os custos da empresa para compreender como eles são formados e quais possuem maior impacto no negócio.",
        "A análise permite identificar desperdícios, oportunidades de redução e gerar uma base mais segura para decisões de precificação.",
      ],
      imagem: imagens.calculadoraEGraficos,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da nossa análise de custos",
      etapas: [
        {
          numero: "01",
          titulo: "Levantamento",
          descricao: "Identificamos os principais custos da empresa.",
        },
        {
          numero: "02",
          titulo: "Classificação",
          descricao: "Organizamos e estruturamos os diferentes tipos de gastos.",
        },
        {
          numero: "03",
          titulo: "Análise",
          descricao: "Avaliamos a composição dos custos e seus impactos no resultado.",
        },
        {
          numero: "04",
          titulo: "Recomendações",
          descricao: "Identificamos oportunidades de melhoria e otimização.",
        },
      ],
    },

    resultados: {
      titulo: "Por que analisar seus custos?",
      itens: [
        {
          icone: "pizza",
          titulo: "Maior visibilidade",
          descricao: "Entenda exatamente como os custos do negócio são formados.",
        },
        {
          icone: "quedaGrafico",
          titulo: "Oportunidades de redução",
          descricao: "Identifique desperdícios e pontos de melhoria.",
        },
        {
          icone: "tag",
          titulo: "Precificação mais segura",
          descricao: "Use informações de custos como base para decisões de preço.",
        },
      ],
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
