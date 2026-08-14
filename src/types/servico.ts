import type {
  CabecalhoDeSecao,
  ChamadaParaAcao,
  Depoimento,
  Etapa,
  Imagem,
  ItemComIcone,
  Metadados,
  NomeDeIcone,
} from "./comum";

/**
 * ============================================================================
 * SERVIÇO — modelo de duas camadas
 * ============================================================================
 * RESUMO (obrigatório): alimenta os cards das listagens e o menu. Todo serviço
 * tem resumo, mesmo os que ainda não têm página própria.
 *
 * DETALHE (opcional): quando existe, a página /servicos/<slug> é gerada
 * automaticamente e os cards passam a linkar para ela.
 *
 * Criar uma página de serviço = preencher o campo `detalhe`. Nada mais.
 * ============================================================================
 */

/** A parte que aparece nos cards de listagem. */
export interface ResumoDeServico {
  /** Vira a URL: "mapeamento-de-processos" → /servicos/mapeamento-de-processos */
  slug: string;
  titulo: string;
  /** Frase de efeito curta, exibida em laranja abaixo do título. */
  chamada: string;
  descricao: string;
  /** Metodologias e siglas. Ex.: ["Lean", "BPMN", "VSM"]. */
  tags: string[];
  icone: NomeDeIcone;
  imagem: Imagem;
}

/** O conteúdo da página própria do serviço. */
export interface DetalheDeServico {
  metadados: Metadados;
  /** Imagem de fundo do topo da página. Título e descrição vêm do resumo. */
  imagemDeFundo: Imagem;

  /** Bloco "Como funciona": texto à esquerda, imagem à direita. */
  sobre: CabecalhoDeSecao & {
    paragrafos: string[];
    imagem: Imagem;
  };

  /** Linha do tempo com as etapas do serviço. */
  metodologia: CabecalhoDeSecao & {
    etapas: Etapa[];
  };

  /** Cards de "por que contratar". */
  resultados: CabecalhoDeSecao & {
    itens: ItemComIcone[];
  };

  depoimento?: Depoimento;

  /** CTA final, com a lista "O que você recebe" ao lado. */
  cta: ChamadaParaAcao & {
    checklist: { titulo: string; itens: string[] };
  };
}

export interface Servico extends ResumoDeServico {
  detalhe?: DetalheDeServico;
}

/** Um serviço que comprovadamente tem página. Usado por generateStaticParams. */
export type ServicoComPagina = Servico & { detalhe: DetalheDeServico };
