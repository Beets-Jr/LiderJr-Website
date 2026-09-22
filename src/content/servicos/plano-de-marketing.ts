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
        "Publicar sem estratégia gasta tempo e verba sem saber, de fato, se está atraindo o cliente certo ou só gerando ruído.",
        "Definimos o posicionamento, mapeamos os canais mais relevantes para o público da empresa e estruturamos um plano de ações com prioridade e prazo, em vez de um calendário de posts solto.",
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
            "Análise do posicionamento atual, do público-alvo e da concorrência direta.",
        },
        {
          numero: "02",
          titulo: "Posicionamento",
          descricao:
            "Definição da mensagem e da proposta de valor que a marca vai comunicar.",
        },
        {
          numero: "03",
          titulo: "Canais",
          descricao:
            "Escolha dos canais mais relevantes para alcançar o público definido.",
        },
        {
          numero: "04",
          titulo: "Plano de Ação",
          descricao:
            "Cronograma de ações prioritárias, com responsável, prazo e indicador de acompanhamento.",
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
