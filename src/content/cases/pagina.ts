import { comoFundo, imagens } from "@/content/imagens";
import type { ConteudoDeCases } from "@/types/paginas";

/**
 * Textos da PÁGINA DE LISTAGEM /cases.
 * Os cases em si vivem em src/content/cases/ (um arquivo por case).
 * As opções do filtro saem sozinhas do campo `categoria` de cada case.
 */
export const paginaDeCases: ConteudoDeCases = {
  metadados: {
    titulo: "Cases",
    descricao:
      "Projetos reais de consultoria em Engenharia de Produção e o impacto que geraram na produtividade, na qualidade e no faturamento dos nossos clientes.",
  },

  hero: {
    eyebrow: "Resultados Comprovados",
    titulo: "Nossos Cases",
    descricao:
      "Conheça os projetos desenvolvidos pela Líder Jr. e o impacto real que a Engenharia de Produção gerou na produtividade e no faturamento dos nossos clientes.",
    imagemDeFundo: comoFundo(imagens.dashboardIndicadores),
  },

  filtro: {
    rotuloTodos: "Todos",
    rotuloAcessivel: "Filtrar cases por categoria",
    vazio: {
      titulo: "Nenhum case nesta categoria",
      descricao: "Nenhum projeto encontrado nesta categoria no momento.",
    },
  },

  rotuloComPagina: "Ver resultados completos",
  rotuloSemPagina: "Case em breve",

  impacto: {
    eyebrow: "Impacto do Projeto",
    titulo: "Resultados em números",
  },

  botoesDoCta: {
    primario: { label: "Fale Conosco", href: "/fale-conosco" },
    rotuloDoServico: "Conhecer o serviço",
  },

  // Textos que aparecem nas páginas individuais de case.
  navegacaoDeDetalhe: {
    voltar: { label: "Voltar aos Cases", href: "/cases" },
    relacionados: {
      titulo: "Conheça outros resultados de sucesso",
      rotuloDoLink: "Ver case",
    },
  },
};
