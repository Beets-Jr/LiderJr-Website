import { comoFundo, imagens } from "@/content/imagens";
import type { ConteudoDeMateriais } from "@/types/paginas";

/** Textos da página /materiais. */
export const paginaDeMateriais: ConteudoDeMateriais = {
  metadados: {
    titulo: "Materiais",
    descricao:
      "Biblioteca gratuita de e-books, guias, planilhas e templates de gestão, processos, qualidade e finanças para pequenas e médias empresas.",
  },

  hero: {
    eyebrow: "Biblioteca Gratuita",
    titulo: "Diretório de Materiais",
    descricao:
      "Acesse e-books, guias, planilhas e templates práticos. Ferramentas reais estruturadas para impulsionar a gestão do seu negócio.",
    imagemDeFundo: comoFundo(imagens.analiseDeFluxoEmPapel),
  },

  filtro: {
    rotuloTodos: "Todos",
    rotuloAcessivel: "Filtrar materiais por categoria",
    vazio: {
      titulo: "Nenhum material encontrado",
      descricao: "Ainda não liberamos recursos para esta categoria. Fique de olho!",
    },
  },

  rotuloDoBotao: "Baixar Material",
  rotuloIndisponivel: "Em breve",
};
