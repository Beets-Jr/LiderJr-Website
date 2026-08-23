import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PLANEJAMENTO ESTRATÉGICO
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — escrito para dar corpo à página e mostrar o layout
 * funcionando. Precisa de revisão da Líder Jr. antes de publicar.
 * Ver PENDENCIAS.md. O `depoimento` também é FORJADO: pessoa e fala inventadas,
 * a pedido, só para a seção existir enquanto não há uma citação real.
 * ============================================================================
 */
export const planejamentoEstrategico: Servico = {
  slug: "planejamento-estrategico",
  titulo: "Planejamento Estratégico",
  chamada: "Trace o caminho para um crescimento sólido!",
  descricao:
    "Desenvolvemos planos de negócios e diagnósticos organizacionais com foco em crescimento sustentável e competitividade.",
  tags: ["OKR", "BSC", "Swot"],
  icone: "livro",
  imagem: imagens.workshopPostIts,

  detalhe: {
    metadados: {
      titulo: "Planejamento Estratégico",
      descricao:
        "Diagnóstico organizacional, definição de objetivos e plano de ação com SWOT, BSC e OKR para transformar intenção de crescimento em rotina de execução.",
    },

    imagemDeFundo: comoFundo(imagens.workshopPostIts),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Do desejo de crescer ao plano de execução",
      paragrafos: [
        "Boa parte das empresas sabe aonde quer chegar, mas não tem o caminho escrito: as prioridades mudam a cada semana e o dia a dia consome o que era estratégico.",
        "Conduzimos o diagnóstico da empresa e do mercado com SWOT, traduzimos a estratégia em objetivos mensuráveis com BSC ou OKR e fechamos com um plano de ação que tem responsável e prazo em cada linha.",
      ],
      imagem: imagens.equipeReuniaoMesa,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do planejamento",
      etapas: [
        {
          numero: "01",
          titulo: "Diagnóstico",
          descricao:
            "Análise interna e do mercado com SWOT, ouvindo a liderança e olhando os números que a empresa já tem.",
        },
        {
          numero: "02",
          titulo: "Direcionamento",
          descricao:
            "Definição de aonde a empresa quer chegar no horizonte escolhido, com metas que dá para medir.",
        },
        {
          numero: "03",
          titulo: "Desdobramento",
          descricao:
            "Tradução dos objetivos em indicadores e iniciativas por área, usando BSC ou OKR conforme o porte.",
        },
        {
          numero: "04",
          titulo: "Plano de ação",
          descricao:
            "O que será feito, por quem e até quando — mais a rotina de acompanhamento que mantém o plano vivo.",
        },
      ],
    },

    resultados: {
      titulo: "Por que planejar formalmente?",
      descricao:
        "Estratégia que não vira rotina é intenção. O planejamento existe para que a decisão de hoje conserve a direção de longo prazo.",
      itens: [
        {
          icone: "bussola",
          titulo: "Direção Compartilhada",
          descricao:
            "Toda a equipe passa a saber quais são as prioridades do ano — e o que fica de fora delas.",
        },
        {
          icone: "grafico",
          titulo: "Crescimento Sustentável",
          descricao:
            "Metas ligadas à capacidade real da operação evitam o crescimento que quebra a entrega ou o caixa.",
        },
        {
          icone: "alvo",
          titulo: "Foco na Execução",
          descricao:
            "Cada objetivo vira iniciativa com responsável e prazo, com rotina de acompanhamento definida.",
        },
      ],
    },

    // ⚠️ DEPOIMENTO FORJADO — pessoa e fala inventadas, a pedido, só para a
    // seção aparecer enquanto não há depoimento real. TROCAR ANTES DE PUBLICAR.
    depoimento: {
      texto:
        "Tínhamos metas na cabeça e nenhuma no papel. Sair da reunião com objetivo, responsável e prazo escritos mudou o jeito que a diretoria conduz o mês — e as prioridades pararam de virar do avesso toda semana.",
      autor: "Simone Vasques",
      cargo: "Diretora Administrativa, Empresa de Serviços",
      iniciais: "SV",
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
