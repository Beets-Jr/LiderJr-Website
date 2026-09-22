import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: CRONOANÁLISE
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — serviço novo, criado só para a página existir.
 * Sem depoimento (opcional): melhor a seção ausente do que mais uma citação
 * inventada. Aguardando o texto definitivo do cliente. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const cronoanalise: Servico = {
  slug: "cronoanalise",
  grupoId: "otimizacao-de-processos",
  titulo: "Cronoanálise",
  chamada: "Meça o tempo certo de cada tarefa!",
  descricao:
    "Cronometragem e análise dos tempos de execução para dimensionar equipes, prazos e capacidade produtiva com precisão.",
  tags: ["Tempos e Métodos", "MTM", "Capacidade"],
  icone: "relogio",
  imagem: imagens.analiseDeFluxoEmPapel,

  detalhe: {
    metadados: {
      titulo: "Cronoanálise",
      descricao:
        "Cronometragem das etapas do processo para calcular tempo padrão, dimensionar equipe e planejar a capacidade produtiva com base em dados reais.",
    },

    imagemDeFundo: comoFundo(imagens.analiseDeFluxoEmPapel),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "O tempo real da sua operação, cronometrado",
      paragrafos: [
        "Prazos e dimensionamento de equipe muitas vezes partem de uma estimativa que ninguém cronometrou. A cronoanálise troca a estimativa pelo tempo medido em campo, tarefa por tarefa.",
        "Cronometramos as etapas do processo, aplicamos as tolerâncias adequadas e calculamos o tempo padrão de cada atividade — base para metas, escalas e custos de mão de obra realistas.",
      ],
      imagem: imagens.workshopPostIts,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da cronoanálise",
      etapas: [
        {
          numero: "01",
          titulo: "Preparação",
          descricao:
            "Escolha das atividades a cronometrar e explicação do método para quem será observado.",
        },
        {
          numero: "02",
          titulo: "Cronometragem",
          descricao:
            "Coleta dos tempos em campo, com repetições suficientes para representar a operação real.",
        },
        {
          numero: "03",
          titulo: "Tratamento",
          descricao:
            "Aplicação de tolerâncias e cálculo do tempo padrão de cada tarefa.",
        },
        {
          numero: "04",
          titulo: "Relatório",
          descricao:
            "Tempos padrão documentados, prontos para dimensionar equipe, prazo e capacidade.",
        },
      ],
    },

    resultados: {
      titulo: "Por que cronometrar seus processos?",
      descricao:
        "Tempo não medido é tempo administrado no escuro — e no escuro é fácil dimensionar errado equipe, prazo e custo.",
      itens: [
        {
          icone: "quedaGrafico",
          titulo: "Ociosidade Reduzida",
          descricao:
            "Tempos reais mostram onde a equipe está sub ou sobrecarregada, antes de contratar ou remanejar.",
        },
        {
          icone: "grafico",
          titulo: "Metas Realistas",
          descricao:
            "Prazos e metas passam a partir do tempo medido, não do que parecia razoável.",
        },
        {
          icone: "check",
          titulo: "Custo de Mão de Obra Preciso",
          descricao:
            "O tempo padrão de cada tarefa vira insumo direto para o custo real da operação.",
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
