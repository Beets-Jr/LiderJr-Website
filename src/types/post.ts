import type { RenderableTreeNodes } from "@markdoc/markdoc";
import type { ConviteDoFormulario, Imagem, Metadados } from "./comum";

/**
 * ============================================================================
 * POST DO BLOG
 * ============================================================================
 * O corpo do artigo é escrito no CMS como texto contínuo (Markdoc) e chega aqui
 * já convertido numa árvore de elementos, que corpo-de-texto.tsx desenha com
 * os estilos do site. Ver src/cms/corpo-de-texto.tsx.
 * ============================================================================
 */

export interface ResumoDePost {
  slug: string;
  titulo: string;
  /** O parágrafo de abertura. Aparece no card e no início do artigo. */
  resumo: string;
  /**
   * Data no formato AAAA-MM-DD. Sempre esta forma.
   * O site formata para "15 jun 2026" sozinho — no protótipo a data era
   * escrita à mão em dois lugares e os dois discordavam.
   */
  data: string;
  /**
   * Um dos grupos de serviço ou "Atualidades" (ver
   * src/content/blog/categorias.ts). Alimenta o filtro da listagem.
   */
  categoria: string;
  imagem: Imagem;
}

export interface DetalheDePost {
  metadados: Metadados;
  /**
   * O texto do artigo, já transformado pelo Markdoc. Os nomes dos elementos
   * (Paragrafo, Subtitulo, ImagemComLegenda…) são os componentes de
   * post-body.tsx.
   */
  corpo: RenderableTreeNodes;
  cta: ConviteDoFormulario;
}

/** Todo post tem página própria: `detalhe` é obrigatório. */
export interface Post extends ResumoDePost {
  detalhe: DetalheDePost;
}
