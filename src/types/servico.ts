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

/**
 * Os 4 grupos organizacionais do menu "Serviços" e da página /servicos.
 * Sem página própria — servem só para agrupar. Ver src/content/servicos/grupos.ts.
 */
export type IdDeGrupo =
  | "otimizacao-de-processos"
  | "empreendedorismo"
  | "gestao-financeira"
  | "captacao-de-clientes";

/** Um grupo de serviços: o `titulo` vira o cabeçalho da seção em /servicos. */
export interface GrupoDeServico extends CabecalhoDeSecao {
  id: IdDeGrupo;
}

/** A parte que aparece nos cards de listagem. */
export interface ResumoDeServico {
  /** Vira a URL: "mapeamento-de-processos" → /servicos/mapeamento-de-processos */
  slug: string;
  /** Em qual dos 4 grupos este serviço aparece no menu e em /servicos. */
  grupoId: IdDeGrupo;
  /**
   * O nome do serviço.
   *
   * Um `\n` aqui força a quebra de linha no card grande de /servicos, que é o
   * único lugar que preserva a quebra (`whitespace-pre-line`). Em todos os
   * outros — menu, rodapé, card da Home, título da página — o `\n` vira um
   * espaço comum, como qualquer quebra em HTML.
   */
  titulo: string;
  /** Frase de efeito curta, exibida em laranja abaixo do título. */
  chamada: string;
  /** Texto dos cards de /servicos (e do topo da página, sem `descricaoDoTopo`). */
  descricao: string;
  /**
   * Texto do card na Home ("Nossas áreas de atuação"). Opcional: sem ele, o
   * card da Home usa a `descricao`.
   */
  descricaoNaHome?: string;
  /** Metodologias e siglas. Ex.: ["Lean", "BPMN", "VSM"]. */
  tags: string[];
  icone: NomeDeIcone;
  imagem: Imagem;
}

/** O conteúdo da página própria do serviço. */
export interface DetalheDeServico {
  metadados: Metadados;
  /**
   * Texto do topo da página. Opcional: sem ele, o topo usa a `descricao` do
   * resumo — a mesma dos cards de /servicos.
   */
  descricaoDoTopo?: string;
  /**
   * Tags do bloco "Como funciona". Opcional: sem elas, valem as `tags` do
   * resumo — as mesmas do card.
   */
  tagsDaPagina?: string[];
  /** Imagem de fundo do topo da página. O título vem do resumo. */
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
