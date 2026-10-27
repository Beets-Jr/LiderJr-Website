import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: CRONOANÁLISE
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const cronoanalise: Servico = {
  slug: "cronoanalise",
  grupoId: "otimizacao-de-processos",
  titulo: "Cronoanálise",
  chamada: "Entenda onde o tempo da sua operação está sendo utilizado!",
  descricao:
    "Medimos e analisamos o tempo das atividades para identificar desperdícios, definir tempos de referência e encontrar oportunidades de aumento de produtividade e melhor uso da equipe e dos recursos.",
  descricaoNaHome:
    "Analisamos o tempo das atividades para identificar desperdícios, aumentar a produtividade e apoiar um melhor dimensionamento de equipes e recursos.",
  tags: ["Produtividade", "Tempo", "Eficiência"],
  icone: "relogio",
  imagem: imagens.cronometroNaMao,

  detalhe: {
    metadados: {
      titulo: "Cronoanálise",
      descricao:
        "Medimos e analisamos o tempo das atividades para identificar desperdícios, apoiar o aumento da produtividade e melhorar o uso de equipes e recursos.",
    },

    descricaoDoTopo:
      "Medimos e analisamos o tempo das atividades para identificar desperdícios, apoiar o aumento da produtividade e melhorar o uso de equipes e recursos.",

    imagemDeFundo: comoFundo(imagens.cronometroNaMao),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Entenda onde o tempo da sua operação está sendo utilizado",
      paragrafos: [
        "Medimos e analisamos o tempo gasto nas atividades da operação para compreender seu desempenho e identificar oportunidades de melhoria.",
        "Com dados representativos, é possível estabelecer referências mais confiáveis, reduzir desperdícios de tempo e apoiar o melhor dimensionamento de equipes e recursos.",
      ],
      imagem: imagens.cronometroNaMao,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da nossa cronoanálise",
      etapas: [
        {
          numero: "01",
          titulo: "Estruturação do processo",
          descricao:
            "Entendemos a operação e definimos quais atividades serão analisadas.",
        },
        {
          numero: "02",
          titulo: "Planejamento das medições",
          descricao:
            "Estruturamos o plano de coleta necessário para obter dados representativos.",
        },
        {
          numero: "03",
          titulo: "Medição e análise",
          descricao:
            "Coletamos os tempos e realizamos análises técnicas e estatísticas sobre o desempenho das atividades.",
        },
        {
          numero: "04",
          titulo: "Oportunidades de melhoria",
          descricao:
            "Identificamos pontos de otimização e consolidamos recomendações para o processo.",
        },
      ],
    },

    resultados: {
      titulo: "Por que realizar uma cronoanálise?",
      itens: [
        {
          icone: "tendencia",
          titulo: "Aumento de produtividade",
          descricao:
            "Identifique onde o tempo está sendo utilizado de maneira pouco eficiente.",
        },
        {
          icone: "relogio",
          titulo: "Tempos mais confiáveis",
          descricao: "Crie referências baseadas em medições reais da operação.",
        },
        {
          icone: "pessoas",
          titulo: "Melhor dimensionamento",
          descricao: "Tenha dados para apoiar decisões sobre equipes e recursos.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Você sabe quanto tempo cada tarefa realmente leva?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Tempos cronometrados das principais tarefas",
          "Tempo padrão calculado por atividade",
          "Diagnóstico de ociosidade e sobrecarga",
          "Base de tempos para dimensionar equipe e prazo",
        ],
      },
    },
  },
};
