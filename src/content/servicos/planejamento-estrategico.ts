import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PLANEJAMENTO ESTRATÉGICO
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const planejamentoEstrategico: Servico = {
  slug: "planejamento-estrategico",
  grupoId: "empreendedorismo",
  titulo: "Planejamento Estratégico",
  chamada: "Defina onde sua empresa quer chegar e como chegar lá!",
  descricao:
    "Analisamos o cenário atual da empresa e estruturamos objetivos, prioridades, iniciativas e indicadores para transformar a estratégia em um plano de ação claro.",
  tags: ["Estratégia", "Objetivos", "Indicadores"],
  icone: "livro",
  imagem: imagens.graficosSobreAMesa,

  detalhe: {
    metadados: {
      titulo: "Planejamento Estratégico",
      descricao:
        "Analisamos o cenário da empresa e estruturamos objetivos, prioridades, ações e indicadores para transformar a estratégia em um direcionamento claro.",
    },

    descricaoDoTopo:
      "Analisamos o cenário da empresa e estruturamos objetivos, prioridades, ações e indicadores para transformar a estratégia em um direcionamento claro.",

    imagemDeFundo: comoFundo(imagens.graficosSobreAMesa),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Transforme objetivos em um direcionamento claro",
      paragrafos: [
        "Analisamos a situação atual da empresa e o ambiente em que ela está inserida para definir onde o negócio quer chegar e quais caminhos devem ser priorizados.",
        "A partir disso, estruturamos objetivos, iniciativas, planos de ação e indicadores para acompanhar a execução da estratégia.",
      ],
      imagem: imagens.graficosSobreAMesa,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do nosso planejamento estratégico",
      etapas: [
        {
          numero: "01",
          titulo: "Diagnóstico",
          descricao: "Analisamos o cenário interno e externo da organização.",
        },
        {
          numero: "02",
          titulo: "Direcionamento",
          descricao: "Definimos ou revisamos os principais objetivos estratégicos.",
        },
        {
          numero: "03",
          titulo: "Priorização",
          descricao: "Estruturamos iniciativas e priorizamos as ações mais relevantes.",
        },
        {
          numero: "04",
          titulo: "Acompanhamento",
          descricao:
            "Construímos planos de ação e indicadores para acompanhar os resultados.",
        },
      ],
    },

    resultados: {
      titulo: "Por que fazer um planejamento estratégico?",
      itens: [
        {
          icone: "alvo",
          titulo: "Defina o que realmente importa",
          descricao:
            "Evite dispersar esforços e estabeleça prioridades para o crescimento da empresa.",
        },
        {
          icone: "rota",
          titulo: "Tire os objetivos do papel",
          descricao:
            "Transforme direcionamentos estratégicos em iniciativas e ações executáveis.",
        },
        {
          icone: "velocimetro",
          titulo: "Meça o avanço da estratégia",
          descricao:
            "Acompanhe resultados com indicadores e ajuste o caminho quando necessário.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Onde sua empresa quer estar em três anos?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Diagnóstico interno e de mercado (SWOT)",
          "Objetivos e indicadores desdobrados por área",
          "Plano de ação com responsáveis e prazos",
          "Rotina de acompanhamento das metas",
        ],
      },
    },
  },
};
