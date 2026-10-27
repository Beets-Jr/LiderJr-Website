import { comoFundo, imagens } from "@/content/imagens";
import type { ConteudoDeServicos } from "@/types/paginas";

/**
 * Textos da PÁGINA DE LISTAGEM /servicos.
 * Os serviços em si vivem em src/content/servicos/ (um arquivo por serviço).
 */
export const paginaDeServicos: ConteudoDeServicos = {
  metadados: {
    titulo: "Serviços",
    descricao:
      "Otimização de processos, empreendedorismo, gestão financeira e captação de clientes. Soluções em Engenharia de Produção para PMEs.",
  },

  hero: {
    eyebrow: "O que oferecemos",
    titulo: "Nossos Serviços",
    descricao:
      "Soluções em Engenharia de Produção desenvolvidas para organizar processos, apoiar decisões e melhorar os resultados da sua empresa.",
    imagemDeFundo: comoFundo(imagens.consultoresComNotebookECalculadora),
  },

  rotuloDoCard: "Conhecer a solução",
  botaoSemPagina: { label: "Fale conosco", href: "/fale-conosco" },

  processo: {
    eyebrow: "Do primeiro contato à entrega",
    titulo: "Nosso processo",
    descricao:
      "Desenvolvemos cada projeto de forma personalizada, seguindo quatro etapas estruturadas — do entendimento da necessidade à entrega da solução.",
    etapas: [
      {
        numero: "01",
        icone: "lupa",
        titulo: "Diagnóstico",
        descricao:
          "Entendemos o contexto da empresa, seus desafios e necessidades para identificar as principais oportunidades e definir o direcionamento do projeto.",
      },
      {
        numero: "02",
        icone: "documento",
        titulo: "Proposta",
        descricao:
          "Estruturamos uma solução personalizada, com escopo, etapas, entregáveis, prazo e investimento alinhados às necessidades identificadas.",
      },
      {
        numero: "03",
        icone: "pessoas",
        titulo: "Execução",
        descricao:
          "Desenvolvemos o projeto aplicando as metodologias e ferramentas adequadas a cada serviço, com acompanhamento contínuo ao longo das etapas.",
      },
      {
        numero: "04",
        icone: "check",
        titulo: "Entrega",
        descricao:
          "Consolidamos as análises e resultados do projeto, apresentamos as recomendações e entregamos os materiais desenvolvidos para apoiar a aplicação das melhorias.",
      },
    ],
  },
};
