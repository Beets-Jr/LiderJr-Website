import { imagens } from "@/content/imagens";
import type { Post, PostComPagina } from "@/types/post";
import { leanManufacturing } from "./lean-manufacturing";

/**
 * ============================================================================
 * REGISTRY DO BLOG
 * ============================================================================
 * Alimenta a página /blog, a prévia na Home, o filtro de categorias e as
 * páginas /blog/<slug>.
 *
 * PARA PUBLICAR UM POST NOVO:
 *   1. crie o arquivo de conteúdo (copie lean-manufacturing.ts)
 *   2. importe aqui em cima
 *   3. acrescente na lista `posts`
 *
 * A ORDEM DA LISTA NÃO IMPORTA: os posts são ordenados por data, do mais novo
 * para o mais antigo, automaticamente.
 * ============================================================================
 */
const posts: Post[] = [
  leanManufacturing,

  {
    slug: "indicadores-de-desempenho-para-pmes",
    titulo: "5 indicadores de desempenho essenciais para PMEs",
    resumo:
      "KPIs bem definidos são o termômetro da saúde do seu negócio. Saiba quais métricas acompanhar para tomar decisões mais assertivas.",
    data: "2026-06-08",
    categoria: "Gestão",
    tempoDeLeitura: "5 min",
    imagem: imagens.dashboardIndicadores,
  },
  {
    slug: "gestao-de-estoques",
    titulo: "Gestão de estoques: quando o excesso vira prejuízo",
    resumo:
      "Manter estoque além do necessário tem custo. Entenda como a curva ABC e o ponto de pedido podem equilibrar oferta e demanda.",
    data: "2026-06-01",
    categoria: "Logística",
    tempoDeLeitura: "7 min",
    // No protótipo esta imagem eram figurinhas do Mario. Ver PENDENCIAS.md.
    imagem: imagens.dashboardIndicadores,
  },
  {
    slug: "planejamento-estrategico-do-papel-a-execucao",
    titulo: "Planejamento estratégico: do papel à execução",
    resumo:
      "Muitas empresas elaboram planos que nunca saem do PowerPoint. Veja como estruturar um planejamento que realmente se transforma em ação.",
    data: "2026-05-22",
    categoria: "Estratégia",
    tempoDeLeitura: "8 min",
    imagem: imagens.workshopPostIts,
  },
  {
    slug: "ferramentas-da-qualidade",
    titulo: "Ferramentas da qualidade: um guia prático para iniciantes",
    resumo:
      "Do diagrama de Ishikawa ao Controle Estatístico de Processo, este guia apresenta as sete ferramentas da qualidade de forma acessível.",
    data: "2026-05-14",
    categoria: "Qualidade",
    tempoDeLeitura: "9 min",
    imagem: imagens.analiseDeFluxoEmPapel,
  },
  {
    slug: "por-que-fazer-pesquisa-de-mercado",
    titulo: "Por que sua empresa precisa de uma pesquisa de mercado agora",
    resumo:
      "Em um cenário competitivo, decidir sem dados é apostar no escuro. Saiba como uma pesquisa bem conduzida pode mudar o rumo do seu negócio.",
    data: "2026-05-05",
    categoria: "Mercado",
    tempoDeLeitura: "6 min",
    imagem: imagens.painelDeGestao,
  },
];

/** Todos os posts, do mais recente para o mais antigo. */
export function getTodosPosts(): Post[] {
  return [...posts].sort((a, b) => b.data.localeCompare(a.data));
}

export function getPostsComPagina(): PostComPagina[] {
  return getTodosPosts().filter((p): p is PostComPagina => p.detalhe !== undefined);
}

export function getPostPorSlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getHrefDoPost(post: Post): string | undefined {
  return post.detalhe ? `/blog/${post.slug}` : undefined;
}
