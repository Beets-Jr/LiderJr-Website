import type { Servico, ServicoComPagina } from "@/types/servico";
import { consultoriaEmEstoque } from "./consultoria-em-estoque";
import { custosEPrecificacao } from "./custos-e-precificacao";
import { gestaoDaQualidade } from "./gestao-da-qualidade";
import { mapeamentoDeProcessos } from "./mapeamento-de-processos";
import { pesquisaDeMercado } from "./pesquisa-de-mercado";
import { planejamentoEstrategico } from "./planejamento-estrategico";

/**
 * ============================================================================
 * REGISTRY DE SERVIÇOS
 * ============================================================================
 * A lista abaixo é a ÚNICA fonte de verdade dos serviços. Ela alimenta:
 *   · a página /servicos          · o submenu "Serviços" do menu
 *   · a coluna "Serviços" do rodapé
 *   · as páginas /servicos/<slug> (só para quem tem `detalhe`)
 *
 * PARA ADICIONAR UM SERVIÇO NOVO:
 *   1. crie o arquivo de conteúdo (copie mapeamento-de-processos.ts)
 *   2. importe aqui em cima
 *   3. acrescente na lista `servicos`
 * A página nasce sozinha. Ver CONTEUDO.md.
 *
 * Os seis serviços têm página. O texto de cinco delas é PROVISÓRIO e está
 * marcado no topo de cada arquivo — precisa da revisão da Líder Jr. antes de
 * publicar. Ver PENDENCIAS.md.
 * ============================================================================
 */
export const servicos: Servico[] = [
  mapeamentoDeProcessos,
  gestaoDaQualidade,
  pesquisaDeMercado,
  planejamentoEstrategico,
  custosEPrecificacao,
  consultoriaEmEstoque,
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
