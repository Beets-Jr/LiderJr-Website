import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PLANO DE MARKETING
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — serviço novo, criado só para a página existir.
 * Sem depoimento (opcional): melhor a seção ausente do que mais uma citação
 * inventada. Aguardando o texto definitivo do cliente. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const planoDeMarketing: Servico = {
  slug: "plano-de-marketing",
  grupoId: "captacao-de-clientes",
  titulo: "Plano de Marketing",
  chamada: "Atraia os clientes certos, de forma planejada!",
  descricao:
    "Estruturamos um plano de marketing com posicionamento, canais e ações para atrair e converter os clientes certos.",
  tags: ["Posicionamento", "Canais", "Funil"],
  icone: "alvo",
  imagem: imagens.workshopPostIts,

  detalhe: {
    metadados: {
      titulo: "Plano de Marketing",
      descricao:
        "Plano de marketing estruturado, com posicionamento, canais e ações prioritárias, para atrair e converter os clientes que a empresa quer captar.",
    },

    imagemDeFundo: comoFundo(imagens.workshopPostIts),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Atrair cliente também se planeja",
      paragrafos: [
        "É indicado para empresas que investem em divulgação sem um direcionamento claro, ou que ainda não têm uma estratégia estruturada de marketing — publicar sem estratégia gasta tempo e verba sem saber, de fato, se está atraindo o cliente certo ou só gerando ruído.",
        "A partir de um entendimento mais profundo do público-alvo, do mercado e da concorrência, definimos o posicionamento da empresa e estruturamos as estratégias de atração e relacionamento com os clientes mais adequadas para alcançar os objetivos definidos.",
      ],
      imagem: imagens.equipeReuniaoMesa,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do plano",
      etapas: [
        {
          numero: "01",
          titulo: "Diagnóstico",
          descricao:
            "Diagnóstico do negócio e do mercado em que a empresa está inserida.",
        },
        {
          numero: "02",
          titulo: "Público-Alvo",
          descricao:
            "Definição e análise do público-alvo: quem é, o que valoriza e como decide comprar.",
        },
        {
          numero: "03",
          titulo: "Concorrência",
          descricao:
            "Análise dos concorrentes diretos e de como eles se posicionam hoje.",
        },
        {
          numero: "04",
          titulo: "Posicionamento",
          descricao:
            "Definição do posicionamento da empresa frente ao público e à concorrência.",
        },
        {
          numero: "05",
          titulo: "Estratégias",
          descricao:
            "Estruturação das estratégias de marketing — produto, preço, praça e promoção.",
        },
        {
          numero: "06",
          titulo: "Canais",
          descricao:
            "Definição dos canais e das ações a serem utilizados para alcançar o público.",
        },
        {
          numero: "07",
          titulo: "Plano de Ação",
          descricao:
            "Construção do plano de ação, com prioridade e prazo para cada iniciativa.",
        },
        {
          numero: "08",
          titulo: "Indicadores",
          descricao:
            "Definição dos indicadores de acompanhamento do plano de marketing.",
        },
      ],
    },

    resultados: {
      titulo: "Por que planejar o marketing?",
      descricao:
        "Marketing sem plano é gasto; marketing com plano é investimento com retorno para acompanhar.",
      itens: [
        {
          icone: "alvo",
          titulo: "Público Certo",
          descricao:
            "Esforço e verba concentrados em quem realmente tem chance de comprar.",
        },
        {
          icone: "bussola",
          titulo: "Mensagem Consistente",
          descricao:
            "A marca comunica a mesma coisa em todos os canais, em vez de tentar tudo ao mesmo tempo.",
        },
        {
          icone: "grafico",
          titulo: "Resultado Mensurável",
          descricao:
            "Cada ação tem indicador definido, então dá para saber o que está funcionando e o que não está.",
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
