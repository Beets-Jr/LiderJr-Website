import type { RenderableTreeNodes } from "@markdoc/markdoc";
import type { ConviteDoFormulario, Imagem, Metadados } from "./comum";

/**
 * ============================================================================
 * CASE DE SUCESSO — mesmo modelo de duas camadas do serviço.
 * Preencher `detalhe` cria a página /cases/<slug> automaticamente.
 * ============================================================================
 */

export interface ResumoDeCase {
  slug: string;
  /** Quem é o cliente. Ex.: "Indústria metalúrgica". */
  empresa: string;
  descricao: string;
  /**
   * O grupo do serviço feito no projeto ("Otimização de Processos"). É a
   * etiqueta em destaque e alimenta o filtro da listagem.
   */
  categoria: string;
  /** O serviço feito no projeto. */
  servico: { titulo: string; href?: string };
  /** O ramo da empresa. Ex.: "Indústria". */
  segmento: string;
  imagem: Imagem;
}

export interface DetalheDeCase {
  metadados: Metadados;
  imagemDeFundo: Imagem;

  /**
   * O texto do case, escrito livremente no editor do CMS e já transformado
   * pelo Markdoc (ver src/lib/corpo-de-texto.ts). O formato recomendado é
   * "O Desafio", "A Solução" e "Os Resultados" como subtítulos.
   */
  corpo: RenderableTreeNodes;

  cta: ConviteDoFormulario;
}

/** Todo case tem página própria: `detalhe` é obrigatório. */
export interface Case extends ResumoDeCase {
  detalhe: DetalheDeCase;
}
