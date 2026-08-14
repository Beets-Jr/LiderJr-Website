import type {
  ChamadaParaAcao,
  Depoimento,
  Imagem,
  Metadados,
  NomeDeIcone,
} from "./comum";

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
  /** O número de destaque. Ex.: "-35%". */
  resultado: string;
  /** O que o número mede. Ex.: "Tempo de produção". */
  metrica: string;
  descricao: string;
  tags: string[];
  /** Usada no filtro da listagem. As opções do filtro saem daqui. */
  categoria: string;
  imagem: Imagem;
}

/** Um número de impacto exibido na barra lateral do case. */
export interface NumeroDeImpacto {
  icone: NomeDeIcone;
  valor: string;
  rotulo: string;
}

export interface DetalheDeCase {
  metadados: Metadados;
  imagemDeFundo: Imagem;

  /**
   * As seções em prosa do case, na ordem em que aparecem.
   * No exemplo migrado: "O Desafio", "A Solução", "Os Resultados".
   */
  secoes: { titulo: string; paragrafos: string[] }[];

  depoimento?: Depoimento;

  impacto?: {
    eyebrow: string;
    titulo: string;
    numeros: NumeroDeImpacto[];
  };

  cta: ChamadaParaAcao;
}

export interface Case extends ResumoDeCase {
  detalhe?: DetalheDeCase;
}

export type CaseComPagina = Case & { detalhe: DetalheDeCase };
