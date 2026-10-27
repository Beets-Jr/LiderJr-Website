import type { Imagem } from "./comum";

/**
 * Material para download (e-books, planilhas, checklists).
 *
 * O tipo é fechado: só existem os três formatos abaixo. Cada um tem ícone e
 * cor próprios definidos no componente — no protótipo isso vinha de um switch
 * que usava quatro famílias de cor fora da paleta da marca.
 */
/**
 * Os três formatos, em lista, porque o schema do CMS precisa iterar sobre eles
 * para montar o campo de seleção. O tipo abaixo deriva daqui — acrescentar um
 * formato é mexer em um lugar só.
 */
export const TIPOS_DE_MATERIAL = ["E-book", "Planilha", "Checklist"] as const;

export type TipoDeMaterial = (typeof TIPOS_DE_MATERIAL)[number];

export interface Material {
  slug: string;
  titulo: string;
  resumo: string;
  tipo: TipoDeMaterial;
  /**
   * O grupo de serviço a que o material se refere ("Gestão Financeira"). Um
   * dos dois filtros da listagem — o outro é o `tipo`.
   */
  categoria: string;
  /**
   * Caminho do arquivo a partir de public/, gravado pelo CMS.
   * Ex.: "/materiais/guia-lean/arquivo.pdf". Obrigatório: todo material tem
   * o que baixar.
   */
  arquivo: string;
  /** A foto do topo do card. */
  imagem: Imagem;
}
