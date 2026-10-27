import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: MAPEAMENTO DE PROCESSOS
 * ============================================================================
 * Este arquivo é o MODELO para todas as páginas de serviço.
 * Para criar outra, copie-o, troque o conteúdo e registre em ./index.ts.
 *
 * O campo `detalhe` é o que faz a página existir. Um serviço sem `detalhe`
 * aparece nas listagens, mas não vira página. Ver CONTEUDO.md.
 * ============================================================================
 */
export const mapeamentoDeProcessos: Servico = {
  slug: "mapeamento-de-processos",
  grupoId: "otimizacao-de-processos",
  titulo: "Mapeamento de Processos",
  chamada: "Processos mais claros, organizados e eficientes!",
  descricao:
    "Entendemos como as atividades da sua empresa acontecem, identificamos gargalos, retrabalhos e desperdícios e propomos melhorias para tornar os processos mais organizados e padronizados.",
  descricaoNaHome:
    "Entendemos como sua operação funciona, identificamos gargalos, retrabalhos e desperdícios e estruturamos processos mais claros, padronizados e eficientes.",
  tags: ["Processos", "Padronização", "Eficiência"],
  icone: "tendencia",
  imagem: imagens.consultoresDesenhandoProcesso,

  detalhe: {
    metadados: {
      titulo: "Mapeamento de Processos",
      descricao:
        "Entendemos como seus processos acontecem, identificamos gargalos, retrabalhos e desperdícios e propomos melhorias para torná-los mais claros, organizados e eficientes.",
    },

    descricaoDoTopo:
      "Entendemos como seus processos acontecem, identificamos gargalos, retrabalhos e desperdícios e propomos melhorias para torná-los mais claros, organizados e eficientes.",

    imagemDeFundo: comoFundo(imagens.consultoresDesenhandoProcesso),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Enxergue seus processos com clareza",
      paragrafos: [
        "Entendemos como as atividades da sua empresa realmente acontecem, identificando gargalos, retrabalhos, desperdícios e pontos de melhoria.",
        "A partir desse diagnóstico, estruturamos processos mais claros, organizados e padronizados, facilitando a execução das atividades e a definição de responsabilidades.",
      ],
      // No protótipo esta imagem eram figurinhas do Mario. Ver PENDENCIAS.md.
      imagem: imagens.consultoresDesenhandoProcesso,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do nosso mapeamento",
      etapas: [
        {
          numero: "01",
          titulo: "Levantamento",
          descricao:
            "Entendemos o processo atual, suas atividades, responsáveis e particularidades.",
        },
        {
          numero: "02",
          titulo: "Mapeamento atual",
          descricao:
            "Estruturamos visualmente como o processo acontece hoje, tornando seu fluxo mais claro.",
        },
        {
          numero: "03",
          titulo: "Diagnóstico",
          descricao:
            "Identificamos gargalos, desperdícios, retrabalhos e oportunidades de melhoria.",
        },
        {
          numero: "04",
          titulo: "Redesenho",
          descricao:
            "Propomos um processo otimizado e documentamos as melhorias recomendadas.",
        },
      ],
    },

    resultados: {
      titulo: "Por que mapear seus processos?",
      descricao:
        "Ter clareza sobre como o trabalho acontece é o primeiro passo para melhorar a operação.",
      itens: [
        {
          icone: "raio",
          titulo: "Mais eficiência",
          descricao:
            "Identifique atividades desnecessárias, gargalos e retrabalhos que prejudicam o desempenho.",
        },
        {
          icone: "listaDeChecagem",
          titulo: "Mais padronização",
          descricao:
            "Estruture processos e responsabilidades para tornar a execução mais consistente.",
        },
        {
          icone: "olho",
          titulo: "Mais clareza operacional",
          descricao:
            "Visualize como as atividades se conectam e onde estão as principais oportunidades de melhoria.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Pronto para enxergar sua operação com clareza?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Fluxo atual (AS IS) documentado em BPMN",
          "Relatório de gargalos e desperdícios identificados",
          "Proposta de processo futuro (TO BE)",
          "Plano de implementação validado com a equipe",
        ],
      },
    },
  },
};
