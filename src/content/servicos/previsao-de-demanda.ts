import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PREVISÃO DE DEMANDA
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — serviço novo, criado só para a página existir.
 * Sem depoimento (opcional): melhor a seção ausente do que mais uma citação
 * inventada. Aguardando o texto definitivo do cliente. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const previsaoDeDemanda: Servico = {
  slug: "previsao-de-demanda",
  grupoId: "empreendedorismo",
  titulo: "Previsão de Demanda",
  chamada: "Planeje antes que a demanda te surpreenda!",
  descricao:
    "Modelos estatísticos de previsão para antecipar vendas, orientar compras e dimensionar produção com mais segurança.",
  tags: ["Séries Temporais", "Forecast", "Sazonalidade"],
  icone: "grafico",
  imagem: imagens.dashboardIndicadores,

  detalhe: {
    metadados: {
      titulo: "Previsão de Demanda",
      descricao:
        "Modelagem estatística da demanda histórica para prever vendas futuras, reduzindo excesso e falta de estoque.",
    },

    imagemDeFundo: comoFundo(imagens.dashboardIndicadores),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Decida compra e produção olhando para frente",
      paragrafos: [
        "Comprar e produzir olhando só para o mês passado é reagir, não planejar — e normalmente sobra estoque do item errado e falta o que vende.",
        "Analisamos o histórico de vendas, identificamos tendência e sazonalidade e aplicamos modelos de previsão para estimar a demanda futura com margem de erro conhecida.",
      ],
      imagem: imagens.analiseDeFluxoEmPapel,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da previsão",
      etapas: [
        {
          numero: "01",
          titulo: "Histórico",
          descricao:
            "Levantamento e limpeza dos dados de vendas ou demanda passada.",
        },
        {
          numero: "02",
          titulo: "Padrões",
          descricao:
            "Identificação de tendência, sazonalidade e variações atípicas na série.",
        },
        {
          numero: "03",
          titulo: "Modelagem",
          descricao:
            "Aplicação do modelo estatístico mais adequado ao comportamento identificado.",
        },
        {
          numero: "04",
          titulo: "Validação",
          descricao:
            "Teste do modelo contra dados reais e ajuste até a margem de erro ficar aceitável.",
        },
      ],
    },

    resultados: {
      titulo: "Por que prever a demanda?",
      descricao:
        "Errar a previsão custa dos dois lados: capital parado em estoque excedente ou venda perdida por falta.",
      itens: [
        {
          icone: "quedaGrafico",
          titulo: "Estoque Equilibrado",
          descricao:
            "Compra e produção alinhadas à demanda esperada, sem o excesso que imobiliza caixa.",
        },
        {
          icone: "escudo",
          titulo: "Menos Ruptura",
          descricao:
            "Picos de demanda sazonais deixam de pegar a operação desprevenida.",
        },
        {
          icone: "grafico",
          titulo: "Planejamento Antecipado",
          descricao:
            "Produção, compras e caixa passam a ser planejados com semanas ou meses de antecedência.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Sua empresa sabe o que vai vender no próximo trimestre?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Análise do histórico de vendas ou demanda",
          "Identificação de tendência e sazonalidade",
          "Modelo de previsão validado",
          "Projeção de demanda para os próximos períodos",
        ],
      },
    },
  },
};
