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
        "Toda ideia de negócio parece boa por dentro da cabeça de quem a teve. O plano de negócios é o que testa essa ideia no papel, antes de comprometer tempo e dinheiro de verdade — seja antes de abrir, seja já em operação.",
        "Estruturamos o modelo de negócio e analisamos mercado, público-alvo, concorrentes e fornecedores. Definimos a operação, as estratégias de marketing e as projeções financeiras, para que a decisão de investir — ou não — seja tomada com informação, não só com entusiasmo.",
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
            "Estruturação do modelo de negócio em Business Model Canvas: proposta de valor, público e receita.",
        },
        {
          numero: "02",
          titulo: "Mercado",
          descricao:
            "Pesquisa e análise de mercado para dimensionar o cenário em que o negócio vai operar.",
        },
        {
          numero: "03",
          titulo: "Público e Concorrência",
          descricao:
            "Definição do público-alvo, com análise de concorrentes e fornecedores.",
        },
        {
          numero: "04",
          titulo: "Plano Operacional",
          descricao:
            "Estruturação da operação necessária para entregar o produto ou serviço no dia a dia.",
        },
        {
          numero: "05",
          titulo: "Plano de Marketing",
          descricao:
            "Estruturação das estratégias de atração e relacionamento com os clientes.",
        },
        {
          numero: "06",
          titulo: "Plano Financeiro",
          descricao:
            "Projeção de investimento inicial, receita, custos e ponto de equilíbrio.",
        },
        {
          numero: "07",
          titulo: "Análise Estratégica",
          descricao:
            "Análise SWOT para mapear forças, fraquezas, oportunidades e ameaças do negócio.",
        },
        {
          numero: "08",
          titulo: "Metas e Indicadores",
          descricao:
            "Definição de metas e KPIs para acompanhar a empresa depois que o plano sai do papel.",
        },
        {
          numero: "09",
          titulo: "Consolidação",
          descricao:
            "Reunião das informações em um plano único e apresentação dos resultados do projeto.",
        },
      ],
    },

    resultados: {
      titulo: "Por que fazer um plano de negócios?",
      descricao:
        "Serve para quem ainda não abriu e para quem já opera, mas precisa organizar melhor suas informações e decisões.",
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
          "Modelo de negócio em Business Model Canvas",
          "Análise de mercado, público-alvo e concorrência",
          "Plano operacional, de marketing e financeiro",
          "Análise SWOT e metas de acompanhamento (KPIs)",
        ],
      },
    },
  },
};
