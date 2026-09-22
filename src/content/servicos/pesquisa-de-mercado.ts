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
        "Toda pesquisa começa pela pergunta certa: o que a empresa precisa decidir? Lançar um produto, entrar em uma nova região, ajustar o preço ou entender por que o cliente não volta.",
        "A partir dessa pergunta definimos o método — questionários, entrevistas em profundidade ou análise de concorrência — coletamos os dados e entregamos a leitura deles, não a planilha crua.",
      ],
      imagem: imagens.equipeReuniaoMesa,
    },

    metodologia: {
      eyebrow: "Metodologia",
      titulo: "As etapas da pesquisa",
      etapas: [
        {
          numero: "01",
          titulo: "Escopo",
          descricao:
            "Definição da pergunta de pesquisa, do público a ser ouvido e da decisão que os dados precisam sustentar.",
        },
        {
          numero: "02",
          titulo: "Instrumento",
          descricao:
            "Construção do questionário ou do roteiro de entrevista, com teste piloto antes de ir a campo.",
        },
        {
          numero: "03",
          titulo: "Campo",
          descricao:
            "Coleta junto ao público definido, acompanhando a amostra para que ela represente o mercado estudado.",
        },
        {
          numero: "04",
          titulo: "Análise",
          descricao:
            "Tratamento dos dados e relatório com as conclusões e as recomendações práticas para a decisão.",
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
