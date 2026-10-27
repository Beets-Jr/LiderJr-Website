import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: GESTÃO DE FLUXO DE CAIXA
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const gestaoDeFluxoDeCaixa: Servico = {
  slug: "gestao-de-fluxo-de-caixa",
  grupoId: "gestao-financeira",
  // O \n força a quebra no card de /servicos; nos outros lugares vira espaço.
  titulo: "Gestão de Fluxo\nde Caixa",
  chamada: "Tenha mais controle sobre o presente e o futuro do seu caixa!",
  descricao:
    "Estruturamos e analisamos as entradas e saídas financeiras para dar mais visibilidade ao caixa e antecipar períodos de falta ou disponibilidade de recursos.",
  tags: ["Caixa", "Controle", "Previsibilidade"],
  icone: "bussola",
  imagem: imagens.consultorAnalisandoPlanilha,

  detalhe: {
    metadados: {
      titulo: "Gestão de Fluxo de Caixa",
      descricao:
        "Estruturamos e analisamos as entradas e saídas financeiras para dar mais controle sobre o caixa e antecipar necessidades futuras de recursos.",
    },

    descricaoDoTopo:
      "Estruturamos e analisamos as entradas e saídas financeiras para dar mais controle sobre o caixa e antecipar necessidades futuras de recursos.",

    imagemDeFundo: comoFundo(imagens.consultorAnalisandoPlanilha),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Tenha mais previsibilidade sobre o seu caixa",
      paragrafos: [
        "Organizamos as entradas e saídas financeiras da empresa para tornar mais claro o comportamento do caixa ao longo do tempo.",
        "Com a projeção das movimentações futuras, sua empresa consegue antecipar possíveis períodos de falta ou disponibilidade de recursos.",
      ],
      imagem: imagens.consultorAnalisandoPlanilha,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da nossa gestão de fluxo de caixa",
      etapas: [
        {
          numero: "01",
          titulo: "Levantamento",
          descricao: "Mapeamos as movimentações financeiras da empresa.",
        },
        {
          numero: "02",
          titulo: "Estruturação",
          descricao: "Organizamos entradas e saídas e construímos o fluxo de caixa.",
        },
        {
          numero: "03",
          titulo: "Análise",
          descricao: "Avaliamos o comportamento financeiro ao longo do tempo.",
        },
        {
          numero: "04",
          titulo: "Projeção",
          descricao:
            "Estimamos movimentações futuras e identificamos necessidades e oportunidades.",
        },
      ],
    },

    resultados: {
      titulo: "Por que gerenciar seu fluxo de caixa?",
      itens: [
        {
          icone: "carteira",
          titulo: "Maior controle",
          descricao:
            "Entenda como as entradas e saídas se comportam ao longo do tempo.",
        },
        {
          icone: "calendario",
          titulo: "Mais previsibilidade",
          descricao: "Antecipe possíveis períodos de aperto financeiro.",
        },
        {
          icone: "cifrao",
          titulo: "Planejamento financeiro",
          descricao:
            "Tenha informações para organizar compromissos e decisões futuras.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Você sabe qual vai ser o saldo de caixa da empresa em 30 dias?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Entradas e saídas mapeadas e organizadas",
          "Fluxo de caixa estruturado por data",
          "Projeção de saldo para as próximas semanas",
          "Modelo de rotina para manter o fluxo atualizado",
        ],
      },
    },
  },
};
