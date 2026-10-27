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
 * Fotos reais da Líder Jr., extraídas e tratadas a partir do PDF
 * "Fotos para o site".
 * ============================================================================
 */
export const imagens = {
  equipeComBandeiraEmEvento: {
    src: "/imagens/equipe-com-bandeira-em-evento.jpg",
    alt: "Equipe da Líder Jr. reunida com a bandeira laranja da empresa em frente ao painel de um evento",
    largura: 1920,
    altura: 1280,
  },

  equipeReunidaAoArLivre: {
    src: "/imagens/equipe-reunida-ao-ar-livre.jpg",
    alt: "Membros da Líder Jr., de camiseta preta, reunidos para uma foto em grupo ao ar livre",
    largura: 1280,
    altura: 960,
  },

  equipeComBandeiraEmSala: {
    src: "/imagens/equipe-com-bandeira-em-sala.jpg",
    alt: "Membros da Líder Jr. reunidos em uma sala de aula, segurando a bandeira laranja da empresa",
    largura: 960,
    altura: 1280,
  },

  equipeEmEscritorio: {
    src: "/imagens/equipe-em-escritorio.jpg",
    alt: "Grupo de membros da Líder Jr. posando juntos em um escritório",
    largura: 1600,
    altura: 1200,
  },

  consultoresComNotebookECalculadora: {
    src: "/imagens/consultores-com-notebook-e-calculadora.jpg",
    alt: "Consultores analisando uma planilha no notebook, com calculadoras e anotações sobre a mesa",
    largura: 1448,
    altura: 1086,
  },

  consultoresDesenhandoProcesso: {
    src: "/imagens/consultores-desenhando-processo.jpg",
    alt: "Consultores da Líder Jr. desenhando um fluxo de processo em papel sobre a mesa",
    largura: 1448,
    altura: 1086,
  },

  corredorDeEstoque: {
    src: "/imagens/corredor-de-estoque.jpg",
    alt: "Corredor de um armazém com prateleiras altas cheias de caixas",
    largura: 1440,
    altura: 1920,
  },

  cronometroNaMao: {
    src: "/imagens/cronometro-na-mao.jpg",
    alt: "Mão segurando um cronômetro de bolso",
    largura: 327,
    altura: 581,
  },

  relatorioComGraficos: {
    src: "/imagens/relatorio-com-graficos.jpg",
    alt: "Pessoa segurando um relatório impresso com gráficos e indicadores",
    largura: 422,
    altura: 750,
  },

  graficosSobreAMesa: {
    src: "/imagens/graficos-sobre-a-mesa.jpg",
    alt: "Folhas com gráficos espalhadas sobre a mesa enquanto uma pessoa faz anotações",
    largura: 500,
    altura: 750,
  },

  consultorComPlanilhaNoNotebook: {
    src: "/imagens/consultor-com-planilha-no-notebook.jpg",
    alt: "Consultor da Líder Jr. trabalhando em uma planilha financeira no notebook",
    largura: 1448,
    altura: 1086,
  },

  consultorAnalisandoPlanilha: {
    src: "/imagens/consultor-analisando-planilha.jpg",
    alt: "Consultor da Líder Jr. analisando dados de uma planilha no notebook",
    largura: 1448,
    altura: 1086,
  },

  calculadoraEGraficos: {
    src: "/imagens/calculadora-e-graficos.jpg",
    alt: "Calculadora sobre folhas impressas com gráficos de barras",
    largura: 500,
    altura: 334,
  },

  planoDeMarketingComPostIts: {
    src: "/imagens/plano-de-marketing-com-post-its.jpg",
    alt: "Consultora segurando uma folha de plano de marketing com post-its amarelos",
    largura: 1448,
    altura: 1086,
  },

  dashboardNoNotebook: {
    src: "/imagens/dashboard-no-notebook.jpg",
    alt: "Consultor analisando um painel com gráficos no notebook",
    largura: 1448,
    altura: 1086,
  },

  apertoDeMaosComCliente: {
    src: "/imagens/aperto-de-maos-com-cliente.jpg",
    alt: "Consultora e consultor da Líder Jr. trocando um aperto de mãos em frente a uma apresentação",
    largura: 1448,
    altura: 1086,
  },

  notebookComMaterial: {
    src: "/imagens/notebook-com-material.jpg",
    alt: "Pessoa usando um notebook que exibe um material da Líder Jr.",
    largura: 1448,
    altura: 1086,
  },

  notebookComPostDoBlog: {
    src: "/imagens/notebook-com-post-do-blog.jpg",
    alt: "Pessoa lendo um post do blog da Líder Jr. no notebook",
    largura: 1448,
    altura: 1086,
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
 * Logos das instituições às quais a Líder Jr. é filiada. Extraídos dos SVGs
 * da página Quem Somos da Beets Jr. (beetsjr.com.br), com as margens recortadas.
 */
export const logosDeFiliacao = {
  ufscar: {
    src: "/imagens/filiacoes/ufscar.png",
    alt: "Logo da UFSCar",
    largura: 414,
    altura: 288,
  },
  nuca: {
    src: "/imagens/filiacoes/nuca.png",
    alt: "Logo do Núcleo Campinas de Empresas Juniores",
    largura: 264,
    altura: 94,
  },
  fejesp: {
    src: "/imagens/filiacoes/fejesp.png",
    alt: "Logo da FEJESP",
    largura: 991,
    altura: 184,
  },
  brasilJunior: {
    src: "/imagens/filiacoes/brasil-junior.png",
    alt: "Logo da Brasil Júnior",
    largura: 381,
    altura: 288,
  },
} as const satisfies Record<string, Imagem>;

/**
 * Logos dos clientes, baixados da seção "Alguns de nossos clientes" do site
 * antigo (liderjr.com). Margens recortadas e, quando o fundo era branco, fundo
 * transparente — para assentarem na faixa cinza da Home.
 */
export const logosDeClientes = {
  gerdau: {
    src: "/imagens/clientes/gerdau.png",
    alt: "Logo da Gerdau",
    largura: 211,
    altura: 146,
  },
  allnova: {
    src: "/imagens/clientes/allnova.png",
    alt: "Logo da Allnova",
    largura: 612,
    altura: 140,
  },
  grupoCuraeSaluti: {
    src: "/imagens/clientes/grupo-curae-saluti.png",
    alt: "Logo da Grupo Curae Saluti",
    largura: 408,
    altura: 160,
  },
  lealDutra: {
    src: "/imagens/clientes/leal-dutra.png",
    alt: "Logo da Leal Dutra",
    largura: 500,
    altura: 152,
  },
  interativa: {
    src: "/imagens/clientes/interativa.png",
    alt: "Logo da Interativa",
    largura: 160,
    altura: 160,
  },
  leakInspection: {
    src: "/imagens/clientes/leak-inspection.png",
    alt: "Logo da Leak Inspection",
    largura: 222,
    altura: 160,
  },
  neri: {
    src: "/imagens/clientes/neri.png",
    alt: "Logo da Neri",
    largura: 185,
    altura: 160,
  },
  rotiGastronomia: {
    src: "/imagens/clientes/roti-gastronomia.png",
    alt: "Logo da Röti Gastronomia",
    largura: 163,
    altura: 160,
  },
  laticrete: {
    src: "/imagens/clientes/laticrete.png",
    alt: "Logo da Laticrete",
    largura: 221,
    altura: 160,
  },
  casaDoMotoqueiro: {
    src: "/imagens/clientes/casa-do-motoqueiro.png",
    alt: "Logo da Casa do Motoqueiro",
    largura: 171,
    altura: 160,
  },
  falconTecnologia: {
    src: "/imagens/clientes/falcon-tecnologia.png",
    alt: "Logo da Falcon Tecnologia",
    largura: 137,
    altura: 96,
  },
  flash: {
    src: "/imagens/clientes/flash.png",
    alt: "Logo da Flash",
    largura: 196,
    altura: 40,
  },
  galbilec: {
    src: "/imagens/clientes/galbilec.png",
    alt: "Logo da Galbilec",
    largura: 208,
    altura: 160,
  },
  insightConsultoria: {
    src: "/imagens/clientes/insight-consultoria.png",
    alt: "Logo da Insight Consultoria",
    largura: 259,
    altura: 160,
  },
  dalata: {
    src: "/imagens/clientes/dalata.png",
    alt: "Logo da Dalata",
    largura: 316,
    altura: 145,
  },
  tweAutomacao: {
    src: "/imagens/clientes/twe-automacao.png",
    alt: "Logo da TWE Automação Industrial",
    largura: 462,
    altura: 160,
  },
} as const satisfies Record<string, Imagem>;

/**
 * Logos dos parceiros (seção "Conexões que fortalecem a Líder Jr." do Quem
 * Somos). Visagio e Ambev vieram do site antigo; Bain e XP Inc. do Wikimedia
 * Commons; EloGroup, AGV Gestão e PEERS do site de cada empresa. Os que eram
 * brancos (para fundo escuro) foram passados para cinza-escuro.
 */
export const logosDeParceiros = {
  visagio: {
    src: "/imagens/parceiros/visagio.png",
    alt: "Logo da Visagio",
    largura: 198,
    altura: 48,
  },
  bain: {
    src: "/imagens/parceiros/bain.png",
    alt: "Logo da Bain & Company",
    largura: 1162,
    altura: 128,
  },
  xpInc: {
    src: "/imagens/parceiros/xp-inc.png",
    alt: "Logo da XP Inc.",
    largura: 410,
    altura: 87,
  },
  elogroup: {
    src: "/imagens/parceiros/elogroup.png",
    alt: "Logo da EloGroup",
    largura: 751,
    altura: 105,
  },
  ambev: {
    src: "/imagens/parceiros/ambev.png",
    alt: "Logo da Ambev",
    largura: 411,
    altura: 160,
  },
  agvGestao: {
    src: "/imagens/parceiros/agv-gestao.png",
    alt: "Logo da AGV Gestão",
    largura: 417,
    altura: 160,
  },
  peers: {
    src: "/imagens/parceiros/peers.png",
    alt: "Logo da PEERS",
    largura: 355,
    altura: 52,
  },
} as const satisfies Record<string, Imagem>;
