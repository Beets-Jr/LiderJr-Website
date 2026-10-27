import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PLANO DE MARKETING
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const planoDeMarketing: Servico = {
  slug: "plano-de-marketing",
  grupoId: "captacao-de-clientes",
  titulo: "Plano de Marketing",
  chamada: "Transforme divulgação em estratégia.",
  descricao:
    "Estruturamos sua estratégia de marketing a partir da análise do público, mercado e concorrência, definindo posicionamento, canais, ações e indicadores para alcançar seus objetivos.",
  tags: ["Marketing", "Posicionamento", "Estratégia"],
  icone: "alvo",
  imagem: imagens.planoDeMarketingComPostIts,

  detalhe: {
    metadados: {
      titulo: "Plano de Marketing",
      descricao:
        "Analisamos público, mercado e concorrência para estruturar posicionamento, estratégias, canais e ações de marketing alinhadas aos objetivos da empresa.",
    },

    descricaoDoTopo:
      "Analisamos público, mercado e concorrência para estruturar posicionamento, estratégias, canais e ações de marketing alinhadas aos objetivos da empresa.",

    imagemDeFundo: comoFundo(imagens.planoDeMarketingComPostIts),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Transforme ações de marketing em uma estratégia estruturada",
      paragrafos: [
        "Analisamos o negócio, seu público, mercado e concorrentes para entender onde a empresa está e qual posicionamento deseja construir.",
        "A partir disso, estruturamos estratégias, canais, ações e indicadores de marketing alinhados aos objetivos da empresa.",
      ],
      imagem: imagens.planoDeMarketingComPostIts,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do nosso plano de marketing",
      etapas: [
        {
          numero: "01",
          titulo: "Diagnóstico",
          descricao: "Analisamos o negócio, o mercado, o público e a concorrência.",
        },
        {
          numero: "02",
          titulo: "Posicionamento",
          descricao: "Definimos o direcionamento estratégico da marca no mercado.",
        },
        {
          numero: "03",
          titulo: "Estratégias e canais",
          descricao:
            "Estruturamos as principais ações de produto, preço, praça e promoção.",
        },
        {
          numero: "04",
          titulo: "Plano de ação",
          descricao:
            "Organizamos as iniciativas e definimos indicadores para acompanhamento.",
        },
      ],
    },

    resultados: {
      titulo: "Por que ter um plano de marketing?",
      itens: [
        {
          icone: "bussola",
          titulo: "Mais direcionamento",
          descricao: "Evite ações isoladas sem um objetivo claro.",
        },
        {
          icone: "pessoas",
          titulo: "Melhor conhecimento do público",
          descricao:
            "Construa estratégias considerando quem sua empresa deseja alcançar.",
        },
        {
          icone: "barras",
          titulo: "Ações mensuráveis",
          descricao: "Defina iniciativas e indicadores para acompanhar os resultados.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Sua empresa sabe de onde vêm os clientes que mais compram?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Diagnóstico de posicionamento e concorrência",
          "Posicionamento e mensagem definidos",
          "Canais prioritários mapeados",
          "Plano de ação com prazos e indicadores",
        ],
      },
    },
  },
};
