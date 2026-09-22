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
  chamada: "Transforme eficiência em vantagem competitiva!",
  descricao:
    "Identificamos gargalos e ineficiências na sua operação, propondo melhorias sustentadas em metodologias como BPMN e fluxogramas.",
  tags: ["Lean", "BPMN", "VSM"],
  icone: "tendencia",
  imagem: imagens.engenheiraLinhaMontagem,

  detalhe: {
    metadados: {
      titulo: "Mapeamento de Processos",
      descricao:
        "Levantamos, documentamos e analisamos os processos da sua empresa com BPMN, fluxogramas e VSM para identificar gargalos, retrabalho e pontos de melhoria.",
    },

    imagemDeFundo: comoFundo(imagens.engenheiraLinhaMontagem),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Enxergue sua operação com clareza",
      paragrafos: [
        "Levantamos, documentamos e analisamos os processos da sua empresa para identificar gargalos, retrabalho e pontos de melhoria — antes de propor qualquer mudança.",
        "Usamos metodologias consolidadas como BPMN, fluxogramas e Value Stream Mapping (VSM) para transformar processos informais em fluxos claros e mensuráveis.",
      ],
      // No protótipo esta imagem eram figurinhas do Mario. Ver PENDENCIAS.md.
      imagem: imagens.workshopPostIts,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do nosso mapeamento",
      etapas: [
        {
          numero: "01",
          titulo: "Levantamento",
          descricao:
            "Entrevistas e observação in loco para entender o processo como ele realmente acontece.",
        },
        {
          numero: "02",
          titulo: "Modelagem",
          descricao:
            "Construção do fluxo atual (AS IS) em notação BPMN, deixando visível cada etapa e responsável.",
        },
        {
          numero: "03",
          titulo: "Diagnóstico",
          descricao:
            "Identificação de gargalos, desperdícios e retrabalho ao longo do fluxo mapeado.",
        },
        {
          numero: "04",
          titulo: "Redesenho",
          descricao:
            "Proposta do processo futuro (TO BE), com melhorias validadas junto à equipe.",
        },
      ],
    },

    resultados: {
      titulo: "Por que mapear seus processos?",
      descricao:
        "O mapeamento não é apenas um desenho. É uma ferramenta estratégica que gera impactos diretos nos resultados da sua empresa.",
      itens: [
        {
          icone: "quedaGrafico",
          titulo: "Redução de Desperdícios",
          descricao:
            "Eliminamos passos desnecessários, reduzindo o tempo de ciclo da operação e cortando custos invisíveis que afetam sua margem.",
        },
        {
          icone: "escudo",
          titulo: "Padronização e Qualidade",
          descricao:
            "Garantimos que as tarefas sejam executadas sempre da melhor forma, diminuindo a dependência de funcionários específicos.",
        },
        {
          icone: "lampada",
          titulo: "Base para Inovação",
          descricao:
            "Um processo mapeado e claro é o primeiro passo obrigatório antes de implementar qualquer automação ou novo software.",
        },
      ],
    },

    depoimento: {
      texto:
        "O mapeamento mostrou gargalos que a gente nem enxergava mais de tão acostumados com a rotina. Em poucas semanas reduzimos o tempo de produção reorganizando o fluxo de ponta a ponta.",
      autor: "Roberto Martins",
      cargo: "Gerente de Produção, Indústria Metalúrgica",
      iniciais: "RM",
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
