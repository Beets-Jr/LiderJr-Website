import type { ChamadaParaAcao, Imagem, Metadados } from "./comum";

/**
 * ============================================================================
 * POST DO BLOG
 * ============================================================================
 * O corpo do artigo é uma lista de BLOCOS, na ordem em que devem aparecer.
 * Isso permite montar artigos com estruturas diferentes sem escrever HTML.
 * Ver CONTEUDO.md para exemplos de cada bloco.
 * ============================================================================
 */

export type BlocoDePost =
  /** Um parágrafo de texto. */
  | { tipo: "paragrafo"; texto: string }
  /** Um subtítulo dentro do artigo (vira <h2>). */
  | { tipo: "subtitulo"; texto: string }
  /** Uma citação em destaque, com barra laranja à esquerda. */
  | { tipo: "citacao"; texto: string; autor?: string }
  /** Lista de marcadores simples. */
  | { tipo: "lista"; itens: string[] }
  /** Lista numerada em que cada item tem título e explicação. */
  | { tipo: "listaNumerada"; itens: { titulo: string; descricao: string }[] }
  /** Uma imagem no meio do texto, com legenda opcional. */
  | { tipo: "imagem"; imagem: Imagem; legenda?: string };

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
  /** Usada no filtro da listagem. As opções do filtro saem daqui. */
  categoria: string;
  imagem: Imagem;
}

export interface DetalheDePost {
  metadados: Metadados;
  corpo: BlocoDePost[];
  cta: ChamadaParaAcao;
}

export interface Post extends ResumoDePost {
  detalhe?: DetalheDePost;
}

export type PostComPagina = Post & { detalhe: DetalheDePost };
