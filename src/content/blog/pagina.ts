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
      "Conteúdo prático e acessível sobre Engenharia de Produção, gestão empresarial e inovação para empreendedores e estudantes.",
    imagemDeFundo: comoFundo(imagens.painelDeGestao),
  },

  filtro: {
    rotuloTodos: "Todos",
    rotuloAcessivel: "Filtrar artigos por categoria",
    vazio: {
      titulo: "Nenhum artigo nesta categoria",
      descricao: "Nenhum artigo encontrado nesta categoria no momento.",
    },
  },

  rotuloDoLink: "Ler artigo",
  rotuloDoArtigo: "Artigo",
  prefixoDoAutor: "Por",

  // Textos que aparecem nas páginas individuais de post.
  navegacaoDeDetalhe: {
    voltar: { label: "Voltar para o Blog", href: "/blog" },
    relacionados: {
      titulo: "Conheça outros artigos do blog",
      rotuloDoLink: "Ler artigo",
    },
  },
};
