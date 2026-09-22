import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PLANO DE NEGÓCIOS
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — serviço novo, criado só para a página existir.
 * Sem depoimento (opcional): melhor a seção ausente do que mais uma citação
 * inventada. Aguardando o texto definitivo do cliente. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const planoDeNegocios: Servico = {
  slug: "plano-de-negocios",
  grupoId: "empreendedorismo",
  titulo: "Plano de Negócios",
  chamada: "Coloque a ideia no papel antes de investir!",
  descricao:
    "Estruturamos um plano de negócios completo — mercado, operação e financeiro — para quem vai abrir ou reposicionar uma empresa.",
  tags: ["Canvas", "Viabilidade", "Financeiro"],
  icone: "documento",
  imagem: imagens.equipeReuniaoMesa,

  detalhe: {
    metadados: {
      titulo: "Plano de Negócios",
      descricao:
        "Plano de negócios estruturado, com análise de mercado, modelo de operação e projeção financeira, para dar consistência a uma ideia antes do investimento.",
    },

    imagemDeFundo: comoFundo(imagens.equipeReuniaoMesa),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Da ideia ao plano que sustenta uma decisão",
      paragrafos: [
        "Toda ideia de negócio parece boa por dentro da cabeça de quem a teve. O plano de negócios é o que testa essa ideia no papel, antes de comprometer tempo e dinheiro de verdade.",
        "Estruturamos o modelo de negócio, dimensionamos o mercado e a operação e projetamos o financeiro, para que a decisão de investir — ou não — seja tomada com informação, não só com entusiasmo.",
      ],
      imagem: imagens.apresentacaoParaEquipe,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do plano",
      etapas: [
        {
          numero: "01",
          titulo: "Modelo de Negócio",
          descricao:
            "Definição da proposta de valor, do público e de como a empresa vai gerar receita.",
        },
        {
          numero: "02",
          titulo: "Mercado",
          descricao:
            "Dimensionamento do mercado, da concorrência e do posicionamento pretendido.",
        },
        {
          numero: "03",
          titulo: "Operação",
          descricao:
            "Estrutura necessária para entregar o produto ou serviço no dia a dia.",
        },
        {
          numero: "04",
          titulo: "Financeiro",
          descricao:
            "Projeção de investimento inicial, receita, custos e ponto de equilíbrio.",
        },
      ],
    },

    resultados: {
      titulo: "Por que fazer um plano de negócios?",
      descricao:
        "A maior parte dos negócios que fecham cedo não tinha o básico calculado antes de abrir.",
      itens: [
        {
          icone: "alvo",
          titulo: "Decisão Informada",
          descricao:
            "Você decide investir sabendo o tamanho do mercado, o investimento necessário e o ponto de equilíbrio.",
        },
        {
          icone: "escudo",
          titulo: "Risco Mapeado",
          descricao:
            "Pontos fracos do modelo aparecem no papel, antes de aparecerem no caixa.",
        },
        {
          icone: "grafico",
          titulo: "Base para Captação",
          descricao:
            "Um plano estruturado é o que investidores e bancos pedem antes de conversar sobre capital.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Sua ideia já tem um plano por trás?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Modelo de negócio estruturado",
          "Análise de mercado e concorrência",
          "Estrutura operacional definida",
          "Projeção financeira e ponto de equilíbrio",
        ],
      },
    },
  },
};
