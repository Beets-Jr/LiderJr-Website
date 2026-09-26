import { comoFundo, imagens } from "@/content/imagens";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * SERVIÇO: PESQUISA DE MERCADO
 * ============================================================================
 * ⚠️ CONTEÚDO PROVISÓRIO — escrito para dar corpo à página e mostrar o layout
 * funcionando. Precisa de revisão da Líder Jr. antes de publicar.
 * Ver PENDENCIAS.md. O `depoimento` também é FORJADO: pessoa e fala inventadas,
 * a pedido, só para a seção existir enquanto não há uma citação real.
 * ============================================================================
 */
export const pesquisaDeMercado: Servico = {
  slug: "pesquisa-de-mercado",
  grupoId: "captacao-de-clientes",
  titulo: "Pesquisa de\nMercado",
  chamada: "Decisões certeiras com dados reais do seu setor!",
  descricao:
    "Realizamos pesquisas quantitativas e qualitativas para embasar decisões estratégicas com dados reais do seu segmento.",
  tags: ["Dados", "Análise", "Estratégia"],
  icone: "pessoas",
  imagem: imagens.painelDeGestao,

  detalhe: {
    metadados: {
      titulo: "Pesquisa de Mercado",
      descricao:
        "Pesquisas quantitativas e qualitativas para entender clientes, concorrência e potencial de demanda antes de investir em um novo produto ou praça.",
    },

    imagemDeFundo: comoFundo(imagens.painelDeGestao),

    sobre: {
      eyebrow: "Como funciona",
      titulo: "Decida com dados, não com achismo",
      paragrafos: [
        "A pesquisa de mercado ajuda a empresa a conhecer melhor o público em que está inserida — suas necessidades, preferências, comportamentos e percepções sobre produtos ou serviços. Esse conhecimento reduz incertezas na tomada de decisão e serve de base para estratégias de marketing e de negócio.",
        "Um exemplo de aplicação já realizado pela Líder foi uma pesquisa de público-alvo para uma empresa do setor de massas de pizza: definimos a região de interesse, estruturamos o instrumento de pesquisa, coletamos as respostas e fizemos uma análise detalhada para entender características e hábitos do público consumidor.",
      ],
      imagem: imagens.equipeReuniaoMesa,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da pesquisa",
      etapas: [
        {
          numero: "01",
          titulo: "Objetivo",
          descricao:
            "Definição do objetivo da pesquisa: a decisão que os dados precisam sustentar.",
        },
        {
          numero: "02",
          titulo: "Público e Região",
          descricao: "Definição do público a ser ouvido e da região de estudo.",
        },
        {
          numero: "03",
          titulo: "Instrumento",
          descricao: "Estruturação do questionário e da metodologia da pesquisa.",
        },
        {
          numero: "04",
          titulo: "Coleta",
          descricao: "Coleta das respostas junto ao público e à região definidos.",
        },
        {
          numero: "05",
          titulo: "Tratamento",
          descricao: "Organização e tratamento dos dados coletados em campo.",
        },
        {
          numero: "06",
          titulo: "Análise",
          descricao:
            "Análise dos resultados para entender o comportamento do público pesquisado.",
        },
        {
          numero: "07",
          titulo: "Insights",
          descricao:
            "Identificação de insights e oportunidades a partir do que a pesquisa revelou.",
        },
        {
          numero: "08",
          titulo: "Conclusões",
          descricao:
            "Apresentação das conclusões e recomendações práticas para a decisão da empresa.",
        },
      ],
    },

    resultados: {
      titulo: "Por que pesquisar antes de decidir?",
      descricao:
        "Pesquisa é o investimento que evita o investimento errado — custa uma fração do que custa lançar um produto que o mercado não queria.",
      itens: [
        {
          icone: "alvo",
          titulo: "Risco Reduzido",
          descricao:
            "Você testa a hipótese com o mercado antes de comprometer capital em estoque, estrutura ou campanha.",
        },
        {
          icone: "pessoas",
          titulo: "Cliente Compreendido",
          descricao:
            "Descobrimos o que pesa na decisão de compra do seu público — que raramente é o que a empresa imagina.",
        },
        {
          icone: "bussola",
          titulo: "Direção Clara",
          descricao:
            "O relatório termina em recomendações objetivas, ligadas à decisão que motivou a pesquisa.",
        },
      ],
    },

    // ⚠️ DEPOIMENTO FORJADO — pessoa e fala inventadas, a pedido, só para a
    // seção aparecer enquanto não há depoimento real. TROCAR ANTES DE PUBLICAR.
    depoimento: {
      texto:
        "Íamos abrir a segunda loja em outro bairro por intuição. A pesquisa mostrou que o público que compra de nós estava do outro lado da cidade. Mudamos o endereço antes de assinar o contrato.",
      autor: "Diego Ramalho",
      cargo: "Sócio-proprietário, Varejo de Materiais de Construção",
      iniciais: "DR",
    },

    cta: {
      eyebrow: "Vamos conversar",
      titulo: "Qual decisão você precisa tomar?",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Ver outros serviços", href: "/servicos" },
      checklist: {
        titulo: "O que você recebe",
        itens: [
          "Escopo com a pergunta de pesquisa e o público definidos",
          "Questionário ou roteiro de entrevista validado",
          "Base de respostas tratada e organizada",
          "Relatório com conclusões e recomendações",
        ],
      },
    },
  },
};
