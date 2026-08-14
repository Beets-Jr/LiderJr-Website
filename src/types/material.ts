/**
 * Material para download (e-books, planilhas, guias).
 *
 * O tipo é fechado: só existem os cinco formatos abaixo. Cada um tem ícone e
 * cor próprios definidos no componente — no protótipo isso vinha de um switch
 * que usava quatro famílias de cor fora da paleta da marca.
 */
export type TipoDeMaterial = "E-book" | "Planilha" | "Guia" | "Template" | "Webinar";

export interface Material {
  slug: string;
  titulo: string;
  resumo: string;
  tipo: TipoDeMaterial;
  /** Usada no filtro da listagem. As opções do filtro saem daqui. */
  categoria: string;
  /**
   * Caminho do arquivo a partir de public/. Ex.: "/materiais/guia-lean.pdf".
   * Sem isso, o botão de download aparece desabilitado.
   * TODO: nenhum arquivo foi entregue ainda — ver PENDENCIAS.md.
   */
  arquivo?: string;
}
