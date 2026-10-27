import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PLANO DE NEGÓCIOS
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const planoDeNegocios: Servico = {
  slug: "plano-de-negocios",
  grupoId: "empreendedorismo",
  titulo: "Plano de Negócios",
  chamada: "Transforme uma ideia em um negócio estruturado!",
  descricao:
    "Estruturamos e analisamos seu negócio considerando mercado, público, concorrência, operação, marketing e finanças para apoiar decisões e avaliar sua viabilidade.",
  descricaoNaHome:
    "Transformamos uma ideia ou negócio existente em um plano estruturado, com análises de mercado, operação, marketing e viabilidade financeira.",
  tags: ["Estratégia", "Mercado", "Viabilidade"],
  icone: "documento",
  imagem: imagens.consultoresComNotebookECalculadora,

  detalhe: {
    metadados: {
      titulo: "Plano de Negócios",
      descricao:
        "Estruturamos os principais pilares do seu negócio, analisando mercado, operação, marketing e finanças para apoiar decisões e avaliar sua viabilidade.",
    },

    descricaoDoTopo:
      "Estruturamos os principais pilares do seu negócio, analisando mercado, operação, marketing e finanças para apoiar decisões e avaliar sua viabilidade.",

    tagsDaPagina: ["Viabilidade", "Estratégia", "Negócio"],

    imagemDeFundo: comoFundo(imagens.consultoresComNotebookECalculadora),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Estruture seu negócio antes de tomar grandes decisões",
      paragrafos: [
        "Analisamos os principais pilares do negócio para transformar informações e ideias em um planejamento estruturado.",
        "O projeto contempla mercado, público, concorrência, operação, marketing e finanças, ajudando a avaliar a viabilidade e orientar as próximas decisões da empresa.",
      ],
      imagem: imagens.consultoresComNotebookECalculadora,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do nosso plano de negócios",
      etapas: [
        {
          numero: "01",
          titulo: "Modelo e mercado",
          descricao:
            "Entendemos a proposta do negócio e analisamos mercado, público, concorrentes e fornecedores.",
        },
        {
          numero: "02",
          titulo: "Estruturação da operação",
          descricao:
            "Definimos os principais aspectos necessários para o funcionamento do negócio.",
        },
        {
          numero: "03",
          titulo: "Marketing e finanças",
          descricao:
            "Estruturamos as estratégias de marketing e as projeções financeiras.",
        },
        {
          numero: "04",
          titulo: "Consolidação estratégica",
          descricao:
            "Integramos as análises, avaliamos a viabilidade e definimos metas e indicadores.",
        },
      ],
    },

    resultados: {
      titulo: "Por que fazer um plano de negócios?",
      itens: [
        {
          icone: "check",
          titulo: "Avaliação de viabilidade",
          descricao:
            "Entenda melhor as condições necessárias para colocar uma ideia em prática ou desenvolver um negócio existente.",
        },
        {
          icone: "documento",
          titulo: "Decisões mais estruturadas",
          descricao:
            "Tenha informações sobre mercado, operação, marketing e finanças reunidas em um único planejamento.",
        },
        {
          icone: "bussola",
          titulo: "Visão completa do negócio",
          descricao:
            "Enxergue como diferentes áreas e decisões se conectam antes de avançar.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Sua ideia já tem um plano por trás?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Modelo de negócio em Business Model Canvas",
          "Análise de mercado, público-alvo e concorrência",
          "Plano operacional, de marketing e financeiro",
          "Análise SWOT e metas de acompanhamento (KPIs)",
        ],
      },
    },
  },
};
