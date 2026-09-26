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
  grupoId: "empreendedorismo",
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
        "Diagnóstico interno e externo, definição de objetivos e construção de um plano de ação com indicadores, para alinhar as áreas da empresa em torno da mesma direção.",
    },

    imagemDeFundo: comoFundo(imagens.workshopPostIts),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Do desejo de crescer ao plano de execução",
      paragrafos: [
        "O planejamento estratégico ajuda a empresa a definir para onde quer ir e como pretende chegar lá. Boa parte das empresas sabe a resposta da primeira pergunta, mas não tem a segunda escrita — e o dia a dia acaba consumindo o que era estratégico.",
        "A partir do entendimento da situação atual do negócio e do cenário em que ele está inserido, definimos objetivos, prioridades e ações. O resultado é mais alinhamento entre as áreas da empresa e um acompanhamento mais claro dos resultados ao longo do tempo.",
      ],
      imagem: imagens.equipeReuniaoMesa,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do planejamento",
      etapas: [
        {
          numero: "01",
          titulo: "Diagnóstico Interno",
          descricao:
            "Análise interna e externa da empresa, ouvindo a liderança e olhando os números que ela já tem.",
        },
        {
          numero: "02",
          titulo: "Cenário",
          descricao: "Análise do cenário e do mercado em que a empresa atua, com SWOT.",
        },
        {
          numero: "03",
          titulo: "Direcionadores",
          descricao:
            "Definição ou revisão dos direcionadores estratégicos — missão, visão e valores, quando cabível.",
        },
        {
          numero: "04",
          titulo: "Objetivos",
          descricao:
            "Definição dos objetivos estratégicos: aonde a empresa quer chegar no horizonte escolhido.",
        },
        {
          numero: "05",
          titulo: "Priorização",
          descricao:
            "Priorização das iniciativas, para que a equipe saiba o que realmente vem primeiro.",
        },
        {
          numero: "06",
          titulo: "Plano de Ação",
          descricao:
            "Construção do plano de ação: o que será feito, por quem e até quando.",
        },
        {
          numero: "07",
          titulo: "Indicadores",
          descricao:
            "Definição dos indicadores que mantêm o plano vivo e acompanhado ao longo do tempo.",
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
