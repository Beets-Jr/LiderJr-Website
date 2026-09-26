import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: GESTÃO DE FLUXO DE CAIXA
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — serviço novo, criado só para a página existir.
 * Sem depoimento (opcional): melhor a seção ausente do que mais uma citação
 * inventada. Aguardando o texto definitivo do cliente. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const gestaoDeFluxoDeCaixa: Servico = {
  slug: "gestao-de-fluxo-de-caixa",
  grupoId: "gestao-financeira",
  // O \n força a quebra no card de /servicos; nos outros lugares vira espaço.
  titulo: "Gestão de Fluxo\nde Caixa",
  chamada: "Nunca mais seja surpreendido pelo caixa!",
  descricao:
    "Organizamos as entradas e saídas da empresa em um fluxo de caixa vivo, para antecipar apertos e planejar sobras.",
  tags: ["Fluxo de Caixa", "Liquidez", "Planejamento"],
  icone: "bussola",
  imagem: imagens.analiseDeFluxoEmPapel,

  detalhe: {
    metadados: {
      titulo: "Gestão de Fluxo de Caixa",
      descricao:
        "Estruturação do fluxo de caixa, com entradas e saídas organizadas por data, para antecipar apertos e planejar a saúde financeira da empresa.",
    },

    imagemDeFundo: comoFundo(imagens.analiseDeFluxoEmPapel),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Saiba hoje o caixa de daqui a 30 dias",
      paragrafos: [
        "É comum um negócio ter dificuldade em prever se vai ter recursos suficientes para honrar seus compromissos nos próximos meses — a boa notícia é que a maioria dos apertos financeiros não pega a empresa de surpresa de verdade, só ninguém tinha o fluxo organizado para enxergar com antecedência.",
        "Estruturamos as entradas e saídas em um fluxo de caixa por data, com projeção para as próximas semanas, dando mais controle sobre a situação atual do caixa e antecipando períodos de aperto ou de folga financeira.",
      ],
      imagem: imagens.painelDeGestao,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do trabalho",
      etapas: [
        {
          numero: "01",
          titulo: "Levantamento",
          descricao:
            "Levantamento de todas as movimentações financeiras — entradas e saídas — da empresa.",
        },
        {
          numero: "02",
          titulo: "Organização",
          descricao:
            "Organização das entradas e saídas, separando o que é recorrente do que é pontual.",
        },
        {
          numero: "03",
          titulo: "Estruturação",
          descricao:
            "Estruturação do fluxo de caixa por data, pronto para consulta e acompanhamento.",
        },
        {
          numero: "04",
          titulo: "Análise",
          descricao:
            "Análise do comportamento do caixa ao longo do tempo, identificando os padrões da empresa.",
        },
        {
          numero: "05",
          titulo: "Projeção",
          descricao:
            "Projeção das movimentações futuras, com cenários de atraso e antecipação de recebimentos.",
        },
        {
          numero: "06",
          titulo: "Oportunidades",
          descricao:
            "Identificação de necessidades e oportunidades de melhoria na gestão do caixa.",
        },
      ],
    },

    resultados: {
      titulo: "Por que organizar o fluxo de caixa?",
      descricao:
        "Empresa lucrativa também quebra por falta de caixa no momento errado — o fluxo existe para isso nunca ser surpresa.",
      itens: [
        {
          icone: "escudo",
          titulo: "Aperto Antecipado",
          descricao:
            "Faltas de caixa aparecem no radar com semanas de antecedência, não no dia do pagamento.",
        },
        {
          icone: "grafico",
          titulo: "Decisão Financeira Mais Segura",
          descricao:
            "Pagar, receber, investir ou renegociar passa a ser decisão com o saldo projetado na mão.",
        },
        {
          icone: "check",
          titulo: "Rotina Sustentável",
          descricao:
            "O fluxo passa a ser atualizado toda semana, sem depender de um levantamento do zero.",
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
