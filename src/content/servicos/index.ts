import type { GrupoDeServico, Servico, ServicoComPagina } from "@/types/servico";
import { analiseDeCustos } from "./analise-de-custos";
import { cronoanalise } from "./cronoanalise";
import { dre } from "./dre";
import { gestaoDeEstoques } from "./gestao-de-estoques";
import { gestaoDeFluxoDeCaixa } from "./gestao-de-fluxo-de-caixa";
import { grupos } from "./grupos";
import { mapeamentoDeProcessos } from "./mapeamento-de-processos";
import { pesquisaDeMercado } from "./pesquisa-de-mercado";
import { planejamentoEstrategico } from "./planejamento-estrategico";
import { planoDeMarketing } from "./plano-de-marketing";
import { planoDeNegocios } from "./plano-de-negocios";
import { previsaoDeDemanda } from "./previsao-de-demanda";

/**
 * ============================================================================
 * REGISTRY DE SERVIÇOS
 * ============================================================================
 * A lista abaixo é a ÚNICA fonte de verdade dos serviços. Ela alimenta:
 *   · a página /servicos          · o submenu "Serviços" do menu (por grupo)
 *   · a coluna "Serviços" do rodapé
 *   · as páginas /servicos/<slug> (só para quem tem `detalhe`)
 *
 * PARA ADICIONAR UM SERVIÇO NOVO:
 *   1. crie o arquivo de conteúdo (copie mapeamento-de-processos.ts)
 *   2. importe aqui em cima
 *   3. acrescente na lista `servicos`, com o `grupoId` do grupo certo
 * A página nasce sozinha. Ver CONTEUDO.md.
 *
 * Os onze serviços têm página. O texto de dez delas é PROVISÓRIO e está
 * marcado no topo de cada arquivo — precisa da revisão da Líder Jr. antes de
 * publicar. Ver PENDENCIAS.md.
 *
 * Os grupos (Otimização de Processos, Empreendedorismo, Gestão Financeira,
 * Captação de Clientes) vêm de ./grupos.ts e não têm página própria — servem
 * só para organizar o menu e a página /servicos. Ver getServicosAgrupados().
 * ============================================================================
 */
export const servicos: Servico[] = [
  // Otimização de Processos
  mapeamentoDeProcessos,
  gestaoDeEstoques,
  cronoanalise,
  // Empreendedorismo
  planoDeNegocios,
  previsaoDeDemanda,
  planejamentoEstrategico,
  // Gestão Financeira
  dre,
  gestaoDeFluxoDeCaixa,
  analiseDeCustos,
  // Captação de Clientes
  planoDeMarketing,
  pesquisaDeMercado,
];

/** Todos os serviços, incluindo os que ainda não têm página. */
export function getTodosServicos(): Servico[] {
  return servicos;
}

/** Só os serviços que têm página própria. Usado por generateStaticParams. */
export function getServicosComPagina(): ServicoComPagina[] {
  return servicos.filter((s): s is ServicoComPagina => s.detalhe !== undefined);
}

/** Busca um serviço pelo slug. Devolve undefined se não existir. */
export function getServicoPorSlug(slug: string): Servico | undefined {
  return servicos.find((s) => s.slug === slug);
}

export interface GrupoComServicos {
  grupo: GrupoDeServico;
  servicos: Servico[];
}

/** Os serviços particionados nos 4 grupos, na ordem definida em grupos.ts. */
export function getServicosAgrupados(): GrupoComServicos[] {
  return grupos.map((grupo) => ({
    grupo,
    servicos: servicos.filter((s) => s.grupoId === grupo.id),
  }));
}
