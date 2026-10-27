import { comoFundo, imagens } from "@/content/imagens";
import type { ConteudoDeCases } from "@/types/paginas";

/**
 * Textos da PÁGINA DE LISTAGEM /cases.
 * Os cases em si vivem em src/content/cases/ (um arquivo por case).
 * As opções do filtro saem sozinhas do grupo do serviço de cada case.
 */
export const paginaDeCases: ConteudoDeCases = {
  metadados: {
    titulo: "Cases",
    descricao:
      "Projetos reais de consultoria em Engenharia de Produção e o impacto que geraram na produtividade, na qualidade e no faturamento dos nossos clientes.",
  },

  hero: {
    eyebrow: "Resultados na prática",
    titulo: "Nossos Cases",
    descricao:
      "Conheça projetos desenvolvidos pela Líder Jr. e os resultados alcançados a partir de soluções aplicadas para atender às necessidades de nossos clientes.",
    imagemDeFundo: comoFundo(imagens.apertoDeMaosComCliente),
  },

  filtro: {
    rotuloTodos: "Todos",
    rotuloAcessivel: "Filtrar cases por categoria",
    vazio: {
      titulo: "Nenhum case nesta categoria",
      descricao: "Nenhum projeto encontrado nesta categoria no momento.",
    },
  },

  rotuloComPagina: "Ver case completo",

  // Textos que aparecem nas páginas individuais de case.
  navegacaoDeDetalhe: {
    voltar: { label: "Voltar aos Cases", href: "/cases" },
    relacionados: {
      titulo: "Conheça outros resultados de sucesso",
      rotuloDoLink: "Ver case",
    },
  },
};
