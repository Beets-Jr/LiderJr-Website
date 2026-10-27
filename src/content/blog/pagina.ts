import { comoFundo, imagens } from "@/content/imagens";
import type { ConteudoDoBlog } from "@/types/paginas";

/**
 * Textos da PÁGINA DE LISTAGEM /blog.
 * Os posts em si vivem em src/content/blog/ (um arquivo por post).
 * As opções do filtro saem sozinhas do campo `categoria` de cada post.
 */
export const paginaDoBlog: ConteudoDoBlog = {
  metadados: {
    titulo: "Blog",
    descricao:
      "Conteúdo prático sobre Engenharia de Produção, gestão de processos, qualidade, estoque e estratégia para pequenas e médias empresas.",
  },

  hero: {
    eyebrow: "Conhecimento",
    titulo: "Blog Líder Jr.",
    descricao:
      "Conteúdos práticos sobre gestão, processos e negócios para apoiar decisões e melhorias na sua empresa.",
    imagemDeFundo: comoFundo(imagens.notebookComPostDoBlog),
  },

  filtro: {
    rotuloTodos: "Todos",
    rotuloAcessivel: "Filtrar artigos por categoria",
    vazio: {
      titulo: "Nenhum artigo nesta categoria",
      descricao: "Nenhum artigo encontrado nesta categoria no momento.",
    },
  },

  // Busca só pelo título, ignorando maiúsculas e acentos.
  busca: {
    rotulo: "Buscar artigos pelo título",
    placeholder: "Buscar pelo título…",
    resultados: { um: "artigo encontrado", varios: "artigos encontrados" },
    vazio: {
      titulo: "Nenhum artigo encontrado",
      descricao: "Nenhum título corresponde à sua busca. Tente outra palavra.",
    },
  },

  rotuloDoLink: "Ler artigo",
  rotuloDoArtigo: "Artigo",

  // Textos que aparecem nas páginas individuais de post.
  navegacaoDeDetalhe: {
    voltar: { label: "Voltar para o Blog", href: "/blog" },
    relacionados: {
      titulo: "Conheça outros artigos do blog",
      rotuloDoLink: "Ler artigo",
    },
  },
};
