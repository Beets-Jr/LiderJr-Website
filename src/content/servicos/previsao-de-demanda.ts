import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PREVISÃO DE DEMANDA
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const previsaoDeDemanda: Servico = {
  slug: "previsao-de-demanda",
  grupoId: "empreendedorismo",
  titulo: "Previsão de Demanda",
  chamada: "Planeje o futuro com base nos seus dados!",
  descricao:
    "Analisamos dados históricos e padrões de comportamento para estimar vendas ou consumo futuros, apoiando decisões de estoque, compras, produção e capacidade.",
  tags: ["Dados", "Previsão", "Planejamento"],
  icone: "grafico",
  imagem: imagens.relatorioComGraficos,

  detalhe: {
    metadados: {
      titulo: "Previsão de Demanda",
      descricao:
        "Analisamos dados históricos e padrões de comportamento para estimar demandas futuras e apoiar decisões de produção, estoque, compras e capacidade.",
    },

    descricaoDoTopo:
      "Analisamos dados históricos e padrões de comportamento para estimar demandas futuras e apoiar decisões de produção, estoque, compras e capacidade.",

    imagemDeFundo: comoFundo(imagens.relatorioComGraficos),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Antecipe sua demanda com base em dados",
      paragrafos: [
        "Analisamos o histórico da empresa para identificar padrões no comportamento da demanda e estimar volumes futuros de vendas ou consumo.",
        "Essas informações ajudam a reduzir incertezas e apoiar decisões de produção, estoque, compras e capacidade.",
      ],
      imagem: imagens.relatorioComGraficos,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da nossa previsão de demanda",
      etapas: [
        {
          numero: "01",
          titulo: "Organização dos dados",
          descricao: "Levantamos e estruturamos o histórico disponível.",
        },
        {
          numero: "02",
          titulo: "Análise da demanda",
          descricao:
            "Identificamos padrões e fatores relevantes no comportamento dos dados.",
        },
        {
          numero: "03",
          titulo: "Modelagem",
          descricao:
            "Aplicamos métodos de previsão adequados às características da demanda.",
        },
        {
          numero: "04",
          titulo: "Recomendações",
          descricao:
            "Consolidamos a previsão e orientamos sua aplicação nas decisões da empresa.",
        },
      ],
    },

    resultados: {
      titulo: "Por que prever sua demanda?",
      itens: [
        {
          icone: "calendario",
          titulo: "Mais planejamento",
          descricao: "Antecipe necessidades futuras da operação.",
        },
        {
          icone: "barras",
          titulo: "Menos incerteza",
          descricao: "Utilize dados históricos para apoiar decisões.",
        },
        {
          icone: "caixa",
          titulo: "Melhor alocação de recursos",
          descricao:
            "Planeje estoque, produção, compras e capacidade com mais informação.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Sua empresa sabe o que vai vender no próximo trimestre?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Análise do histórico de vendas ou demanda",
          "Identificação de tendência e sazonalidade",
          "Modelo de previsão validado",
          "Projeção de demanda para os próximos períodos",
        ],
      },
    },
  },
};
