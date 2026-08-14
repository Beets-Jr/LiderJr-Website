import { imagens } from "@/content/imagens";
import type { Case, CaseComPagina } from "@/types/case";
import { industriaMetalurgica } from "./industria-metalurgica";

/**
 * ============================================================================
 * REGISTRY DE CASES
 * ============================================================================
 * Alimenta a página /cases, o filtro de categorias e as páginas /cases/<slug>.
 *
 * PARA ADICIONAR UM CASE NOVO:
 *   1. crie o arquivo de conteúdo (copie industria-metalurgica.ts)
 *   2. importe aqui em cima
 *   3. acrescente na lista `cases`
 *
 * As opções do filtro saem automaticamente do campo `categoria` de cada case —
 * não existe lista de categorias escrita à mão. No protótipo existia, e ela
 * tinha uma categoria "Inovação" que não batia com nenhum case, resultando
 * sempre em tela vazia.
 * ============================================================================
 */
export const cases: Case[] = [
  {
    slug: "setor-alimenticio",
    empresa: "Empresa do setor alimentício",
    resultado: "+28%",
    metrica: "Produtividade",
    descricao:
      "Reestruturamos os processos produtivos reduzindo desperdícios e aumentando a eficiência operacional.",
    tags: ["Lean", "Processos"],
    categoria: "Processos",
    imagem: imagens.engenheiraLinhaMontagem,
  },

  industriaMetalurgica,

  {
    slug: "comercio-varejista",
    empresa: "Comércio varejista",
    resultado: "+18%",
    metrica: "Faturamento",
    descricao:
      "Diagnóstico estratégico e implantação de melhorias que impulsionaram os resultados da empresa.",
    tags: ["Estratégia", "Gestão"],
    categoria: "Estratégia",
    imagem: imagens.workshopPostIts,
  },
  {
    slug: "cooperativa-agricola",
    empresa: "Cooperativa agrícola",
    resultado: "-22%",
    metrica: "Perdas na colheita",
    descricao:
      "Implantamos controles de processo e logística interna que reduziram perdas e melhoraram o aproveitamento da produção.",
    tags: ["Agronegócio", "Lean"],
    categoria: "Agronegócio",
    imagem: imagens.dashboardIndicadores,
  },
  {
    slug: "rede-de-clinicas",
    empresa: "Rede de clínicas",
    resultado: "+31%",
    metrica: "Satisfação dos pacientes",
    descricao:
      "Redesenhamos o fluxo de atendimento e implantamos indicadores de qualidade para elevar a experiência do paciente.",
    tags: ["Qualidade", "Serviços"],
    categoria: "Serviços",
    imagem: imagens.apresentacaoParaEquipe,
  },
  {
    slug: "distribuidora-logistica",
    empresa: "Distribuidora logística",
    resultado: "-40%",
    metrica: "Tempo de entrega",
    descricao:
      "Otimizamos rotas e a gestão de estoque, reduzindo prazos de entrega e custos operacionais.",
    tags: ["Logística", "Processos"],
    categoria: "Logística",
    // No protótipo esta imagem eram figurinhas do Mario. Ver PENDENCIAS.md.
    imagem: imagens.analiseDeFluxoEmPapel,
  },
];

export function getTodosCases(): Case[] {
  return cases;
}

export function getCasesComPagina(): CaseComPagina[] {
  return cases.filter((c): c is CaseComPagina => c.detalhe !== undefined);
}

export function getCasePorSlug(slug: string): Case | undefined {
  return cases.find((c) => c.slug === slug);
}

export function getHrefDoCase(item: Case): string | undefined {
  return item.detalhe ? `/cases/${item.slug}` : undefined;
}
