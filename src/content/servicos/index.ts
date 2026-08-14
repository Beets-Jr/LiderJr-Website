import { imagens } from "@/content/imagens";
import type { Servico, ServicoComPagina } from "@/types/servico";
import { mapeamentoDeProcessos } from "./mapeamento-de-processos";

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
 * ============================================================================
 */
export const servicos: Servico[] = [
  mapeamentoDeProcessos,

  // Os serviços abaixo ainda não têm página própria — aparecem só nas
  // listagens. Para criar a página de qualquer um deles, mova-o para um
  // arquivo próprio e preencha o campo `detalhe`.
  {
    slug: "gestao-da-qualidade",
    titulo: "Gestão da Qualidade",
    chamada: "Eleve o padrão e conquiste a confiança do mercado!",
    descricao:
      "Implementamos ferramentas de controle de qualidade como PDCA, 5S e FMEA para elevar o padrão dos seus processos e produtos.",
    tags: ["PDCA", "5S", "FMEA"],
    icone: "award",
    imagem: imagens.analiseDeFluxoEmPapel,
  },
  {
    slug: "pesquisa-de-mercado",
    titulo: "Pesquisa de Mercado",
    chamada: "Decisões certeiras com dados reais do seu setor!",
    descricao:
      "Realizamos pesquisas quantitativas e qualitativas para embasar decisões estratégicas com dados reais do seu segmento.",
    tags: ["Dados", "Análise", "Estratégia"],
    icone: "pessoas",
    imagem: imagens.painelDeGestao,
  },
  {
    slug: "planejamento-estrategico",
    titulo: "Planejamento Estratégico",
    chamada: "Trace o caminho para um crescimento sólido!",
    descricao:
      "Desenvolvemos planos de negócios e diagnósticos organizacionais com foco em crescimento sustentável e competitividade.",
    tags: ["OKR", "BSC", "Swot"],
    icone: "livro",
    imagem: imagens.workshopPostIts,
  },
  {
    slug: "custos-e-precificacao",
    titulo: "Custos e Precificação",
    chamada: "Precifique com inteligência e proteja sua margem!",
    descricao:
      "Analisamos sua estrutura de custos e desenvolvemos estratégias de precificação alinhadas ao mercado e à margem desejada.",
    tags: ["Custos", "Precificação", "Margem"],
    icone: "check",
    imagem: imagens.dashboardIndicadores,
  },
  {
    slug: "consultoria-em-estoque",
    titulo: "Consultoria em Estoque",
    chamada: "Estoque enxuto, operação mais ágil!",
    descricao:
      "Otimizamos a gestão de estoques com modelos de lote econômico, curva ABC e sistemas de reabastecimento inteligente.",
    tags: ["ABC", "EOQ", "Kanban"],
    icone: "estrela",
    // No protótipo esta imagem eram figurinhas do Mario. Ver PENDENCIAS.md.
    imagem: imagens.dashboardIndicadores,
  },
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

/** O caminho da página de um serviço, ou undefined se ele não tiver página. */
export function getHrefDoServico(servico: Servico): string | undefined {
  return servico.detalhe ? `/servicos/${servico.slug}` : undefined;
}
