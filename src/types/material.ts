/**
 * Material para download (e-books, planilhas, guias).
 *
 * O tipo é fechado: só existem os cinco formatos abaixo. Cada um tem ícone e
 * cor próprios definidos no componente — no protótipo isso vinha de um switch
 * que usava quatro famílias de cor fora da paleta da marca.
 */
/**
 * Os cinco formatos, em lista, porque o schema do CMS precisa iterar sobre eles
 * para montar o campo de seleção. O tipo abaixo deriva daqui — acrescentar um
 * formato é mexer em um lugar só.
 */
export const TIPOS_DE_MATERIAL = [
  "E-book",
  "Planilha",
  "Guia",
  "Template",
  "Webinar",
] as const;

export type TipoDeMaterial = (typeof TIPOS_DE_MATERIAL)[number];

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
