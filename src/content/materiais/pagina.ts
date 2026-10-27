import { comoFundo, imagens } from "@/content/imagens";
import type { ConteudoDeMateriais } from "@/types/paginas";

/** Textos da página /materiais. */
export const paginaDeMateriais: ConteudoDeMateriais = {
  metadados: {
    titulo: "Materiais",
    descricao:
      "Biblioteca gratuita de e-books, planilhas e checklists de gestão, processos e finanças para pequenas e médias empresas.",
  },

  hero: {
    eyebrow: "Biblioteca Gratuita",
    titulo: "Diretório de Materiais",
    descricao:
      "Conteúdos gratuitos e práticos para apoiar a gestão, organização e desenvolvimento do seu negócio.",
    imagemDeFundo: comoFundo(imagens.notebookComMaterial),
  },

  filtro: {
    rotuloTodos: "Todos",
    tipo: { rotulo: "Tipo", rotuloAcessivel: "Filtrar materiais por tipo" },
    categoria: {
      rotulo: "Categoria",
      rotuloAcessivel: "Filtrar materiais por categoria",
    },
    vazio: {
      titulo: "Nenhum material encontrado",
      descricao:
        "Ainda não liberamos materiais para esta combinação de filtros. Fique de olho!",
    },
  },

  rotuloDoBotao: "Baixar Material",
};
