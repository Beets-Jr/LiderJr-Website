import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: GESTÃO DE ESTOQUES
 * ============================================================================
 * Topo, "Como funciona", metodologia e benefícios: texto da Líder Jr.
 * ⚠️ Ainda provisório: o `cta`. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const gestaoDeEstoques: Servico = {
  slug: "gestao-de-estoques",
  grupoId: "otimizacao-de-processos",
  titulo: "Gestão de Estoques",
  chamada: "Mais controle para comprar melhor e reduzir excessos e faltas!",
  descricao:
    "Analisamos o comportamento do estoque e estruturamos métodos de controle para reduzir excessos, faltas e perdas, apoiando decisões mais seguras de compra e reposição.",
  tags: ["Estoque", "Controle", "Reposição"],
  icone: "estrela",
  // No protótipo esta imagem eram figurinhas do Mario. Ver PENDENCIAS.md.
  imagem: imagens.corredorDeEstoque,

  detalhe: {
    metadados: {
      titulo: "Gestão de Estoques",
      descricao:
        "Analisamos seu estoque e estruturamos métodos de controle para reduzir excessos, faltas e perdas e apoiar decisões mais seguras de compra e reposição.",
    },

    descricaoDoTopo:
      "Analisamos seu estoque e estruturamos métodos de controle para reduzir excessos, faltas e perdas e apoiar decisões mais seguras de compra e reposição.",

    imagemDeFundo: comoFundo(imagens.corredorDeEstoque),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Tenha mais controle sobre seu estoque",
      paragrafos: [
        "Analisamos como os produtos se comportam no estoque, considerando consumo, giro e criticidade para identificar os principais problemas da operação.",
        "A partir disso, estruturamos métodos e parâmetros de controle que ajudam sua empresa a tomar decisões mais seguras de compra e reposição.",
      ],
      imagem: imagens.corredorDeEstoque,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da nossa gestão de estoques",
      etapas: [
        {
          numero: "01",
          titulo: "Diagnóstico",
          descricao:
            "Entendemos como o estoque é controlado atualmente e quais dificuldades a empresa enfrenta.",
        },
        {
          numero: "02",
          titulo: "Análise dos dados",
          descricao:
            "Organizamos os dados disponíveis e avaliamos consumo, giro e criticidade dos produtos.",
        },
        {
          numero: "03",
          titulo: "Definição dos parâmetros",
          descricao:
            "Estruturamos critérios e métodos de controle adequados à realidade da empresa.",
        },
        {
          numero: "04",
          titulo: "Acompanhamento",
          descricao:
            "Desenvolvemos ferramentas para facilitar o monitoramento e apoiar as decisões de estoque.",
        },
      ],
    },

    resultados: {
      titulo: "Por que melhorar a gestão de estoques?",
      itens: [
        {
          icone: "caixa",
          titulo: "Redução de excessos",
          descricao:
            "Evite recursos parados em produtos que permanecem por muito tempo no estoque.",
        },
        {
          icone: "escudo",
          titulo: "Menos faltas",
          descricao: "Tenha critérios mais claros para planejar compras e reposições.",
        },
        {
          icone: "barras",
          titulo: "Decisões mais seguras",
          descricao: "Use dados do estoque para definir quando e quanto comprar.",
        },
      ],
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Quanto do seu caixa está parado na prateleira?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Curva ABC dos itens em estoque",
          "Lote econômico de compra por item relevante",
          "Ponto de pedido e estoque de segurança definidos",
          "Política de reposição documentada e treinada",
        ],
      },
    },
  },
};
