import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: DRE
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — serviço novo, criado só para a página existir.
 * Sem depoimento (opcional): melhor a seção ausente do que mais uma citação
 * inventada. Aguardando o texto definitivo do cliente. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const dre: Servico = {
  slug: "dre",
  grupoId: "gestao-financeira",
  titulo: "DRE",
  chamada: "Enxergue o lucro real do seu negócio!",
  descricao:
    "Estruturamos a Demonstração do Resultado do Exercício para mostrar com clareza receita, custos, despesas e lucro.",
  tags: ["DRE", "Resultado", "Indicadores"],
  icone: "colunas",
  imagem: imagens.painelDeGestao,

  detalhe: {
    metadados: {
      titulo: "DRE",
      descricao:
        "Estruturação da Demonstração do Resultado do Exercício, organizando receitas, custos e despesas para mostrar com clareza se a empresa dá lucro.",
    },

    imagemDeFundo: comoFundo(imagens.painelDeGestao),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Saiba se a empresa dá lucro, com números",
      paragrafos: [
        "Caixa positivo no fim do mês não significa lucro — pode ser dinheiro de cliente que ainda vai virar despesa. A DRE ajuda a empresa a entender como seu resultado é formado, organizando com clareza as receitas, os custos e as despesas do período.",
        "É um trabalho útil para quem não tem visibilidade clara sobre onde está ganhando ou perdendo dinheiro. Organizamos as contas da empresa na estrutura da DRE, da receita bruta ao lucro líquido, criando uma rotina simples para manter o relatório atualizado mês a mês e analisar a rentabilidade com mais precisão.",
      ],
      imagem: imagens.dashboardIndicadores,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas do trabalho",
      etapas: [
        {
          numero: "01",
          titulo: "Levantamento",
          descricao:
            "Levantamento dos dados financeiros da empresa no período analisado.",
        },
        {
          numero: "02",
          titulo: "Organização",
          descricao:
            "Organização das receitas, custos e despesas em uma única base.",
        },
        {
          numero: "03",
          titulo: "Estruturação",
          descricao:
            "Estruturação da DRE, do faturamento bruto ao lucro líquido do período.",
        },
        {
          numero: "04",
          titulo: "Análise",
          descricao:
            "Análise dos resultados obtidos e dos principais indicadores de margem.",
        },
        {
          numero: "05",
          titulo: "Impactos",
          descricao:
            "Identificação dos principais impactos sobre o resultado, para saber onde agir primeiro.",
        },
        {
          numero: "06",
          titulo: "Recomendações",
          descricao:
            "Apresentação das recomendações e do modelo para manter a DRE atualizada mês a mês.",
        },
      ],
    },

    resultados: {
      titulo: "Por que estruturar a DRE?",
      descricao:
        "Sem DRE, decisão de preço, corte de custo e investimento são tomadas sem saber, de fato, quanto a empresa lucra.",
      itens: [
        {
          icone: "grafico",
          titulo: "Lucro Real Visível",
          descricao:
            "Fica claro se a empresa lucra, quanto lucra e em qual parte da operação o resultado se forma.",
        },
        {
          icone: "escudo",
          titulo: "Decisão Mais Segura",
          descricao:
            "Cortar custo, mexer em preço ou investir passa a ser decisão baseada no resultado apurado.",
        },
        {
          icone: "check",
          titulo: "Rotina Simples",
          descricao:
            "A DRE passa a ser atualizada todo mês, sem depender de um levantamento do zero.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Você sabe qual foi o lucro da empresa no mês passado?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Receitas, custos e despesas organizados",
          "DRE do período estruturada",
          "Indicadores de margem calculados",
          "Modelo para atualizar a DRE mensalmente",
        ],
      },
    },
  },
};
