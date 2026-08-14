import type { Imagem } from "@/types/comum";

/**
 * ============================================================================
 * BANCO DE IMAGENS
 * ============================================================================
 * Cada imagem do site é declarada UMA vez aqui, com sua descrição (alt) e suas
 * dimensões. Os arquivos ficam em public/imagens/.
 *
 * PARA TROCAR UMA IMAGEM:
 *   1. coloque o arquivo novo em public/imagens/
 *   2. mude o `src` e o `alt` aqui embaixo
 *   3. ajuste `largura` e `altura` para as dimensões reais do arquivo
 * Todas as páginas que usam a imagem acompanham sozinhas.
 *
 * SOBRE O `alt`: descreve o que se vê, para quem usa leitor de tela.
 * Quando a imagem é só um fundo decorativo atrás de um texto, use a função
 * `comoFundo()` — ela zera o alt, que é o correto nesse caso.
 *
 * ATENÇÃO: todas as imagens abaixo são PROVISÓRIAS (banco de imagens), herdadas
 * do protótipo. Precisam ser trocadas por fotos reais da Líder Jr.
 * Ver PENDENCIAS.md.
 * ============================================================================
 */
export const imagens = {
  engenheiraLinhaMontagem: {
    src: "/imagens/engenheira-linha-montagem.jpg",
    alt: "Engenheira trabalhando em um notebook ao lado de uma linha de montagem industrial",
    largura: 1920,
    altura: 1281,
  },

  equipeReuniaoMesa: {
    src: "/imagens/equipe-reuniao-mesa.jpg",
    alt: "Equipe reunida em volta de uma mesa, cada pessoa trabalhando em seu notebook",
    largura: 1920,
    altura: 1281,
  },

  apresentacaoParaEquipe: {
    src: "/imagens/apresentacao-para-equipe.jpg",
    alt: "Profissional apresentando resultados para uma equipe sentada em uma sala de reunião",
    largura: 1920,
    altura: 1080,
  },

  workshopPostIts: {
    src: "/imagens/workshop-post-its.jpg",
    alt: "Facilitadora organizando post-its coloridos em uma parede durante um workshop de mapeamento",
    largura: 1920,
    altura: 1280,
  },

  dashboardIndicadores: {
    src: "/imagens/dashboard-indicadores.jpg",
    alt: "Tela de notebook exibindo um painel com gráficos de indicadores de desempenho",
    largura: 1920,
    altura: 1280,
  },

  analiseDeFluxoEmPapel: {
    src: "/imagens/analise-de-fluxo-em-papel.jpg",
    alt: "Duas pessoas analisando um fluxo de processo desenhado à mão sobre a mesa, ao lado de notebooks",
    largura: 1920,
    altura: 1281,
  },

  painelDeGestao: {
    src: "/imagens/painel-de-gestao.jpg",
    alt: "Notebook aberto sobre uma mesa exibindo um painel de gestão com gráficos e métricas",
    largura: 1920,
    altura: 1368,
  },
} as const satisfies Record<string, Imagem>;

/**
 * Devolve a mesma imagem sem descrição, para uso como fundo decorativo.
 * Um fundo atrás de um título não deve ser anunciado por leitores de tela —
 * o texto por cima já diz tudo.
 */
export function comoFundo(imagem: Imagem): Imagem {
  return { ...imagem, alt: "" };
}

/**
 * Logos das instituições às quais a Líder Jr. é filiada.
 * TODO: são placeholders. Os logos reais precisam ser fornecidos pela empresa —
 * os do protótipo eram hotlink do site de OUTRA empresa júnior. Ver PENDENCIAS.md.
 */
export const logosDeFiliacao = {
  ufscar: {
    src: "/imagens/filiacoes/ufscar.svg",
    alt: "Logo da UFSCar (placeholder)",
    largura: 208,
    altura: 144,
  },
  nuca: {
    src: "/imagens/filiacoes/nuca.svg",
    alt: "Logo do Núcleo Campinas de Empresas Juniores (placeholder)",
    largura: 208,
    altura: 144,
  },
  fejesp: {
    src: "/imagens/filiacoes/fejesp.svg",
    alt: "Logo da FEJESP (placeholder)",
    largura: 208,
    altura: 144,
  },
  brasilJunior: {
    src: "/imagens/filiacoes/brasil-junior.svg",
    alt: "Logo da Brasil Júnior (placeholder)",
    largura: 208,
    altura: 144,
  },
} as const satisfies Record<string, Imagem>;
