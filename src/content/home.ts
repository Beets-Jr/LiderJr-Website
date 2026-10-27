import { imagens, logosDeClientes } from "@/content/imagens";
import type { ConteudoDaHome } from "@/types/paginas";

/**
 * ============================================================================
 * PÁGINA INICIAL
 * ============================================================================
 * Os cards de serviços, cases e blog que aparecem aqui NÃO são escritos neste
 * arquivo — eles vêm dos registries (src/content/servicos, /cases, /blog).
 * Aqui ficam só os textos que envolvem essas listas.
 * ============================================================================
 */
export const home: ConteudoDaHome = {
  metadados: {
    titulo: "Líder Junior — Consultoria em Engenharia de Produção",
    descricao:
      "Empresa júnior de Engenharia de Produção. Mapeamento de processos, gestão da qualidade, planejamento estratégico e custos para pequenas e médias empresas.",
  },

  hero: {
    // Esta primeira parte sai em laranja, destacada do resto do título.
    tituloDestaque: "Líder Jr.",
    titulo: "Consultoria Empresarial",
    descricao: "A solução que você precisa, com a qualidade que só um Líder tem!",
    botaoPrimario: { label: "Agendar diagnóstico gratuito", href: "/fale-conosco" },
    botaoSecundario: { label: "Conheça nossos serviços", href: "/servicos" },
    imagem: imagens.equipeComBandeiraEmEvento,
  },

  estatisticas: [
    { valor: "+130", rotulo: "Projetos entregues" },
    { valor: "17", rotulo: "Anos de experiência" },
    { valor: "97", rotulo: "Net Promoter Score" },
    { valor: "2º", rotulo: "Melhor Eng. de Produção do Brasil" },
  ],

  servicos: {
    eyebrow: "O que fazemos",
    titulo: "Nossas áreas de atuação",
    link: { label: "Ver todos", href: "/servicos" },
  },

  sobre: {
    eyebrow: "Sobre nós",
    titulo: "Conhecimento acadêmico aplicado aos desafios da sua empresa",
    paragrafos: [
      "Fundada em 2008 por estudantes de Engenharia de Produção da UFSCar Sorocaba, a Líder Jr. nasceu para aproximar o conhecimento acadêmico dos desafios reais enfrentados pelas empresas.",
      "Desde então, desenvolvemos projetos de consultoria em diferentes áreas da Engenharia de Produção, unindo aprendizado, metodologias de gestão e acompanhamento especializado para gerar valor aos nossos clientes.",
    ],
    checklist: {
      itens: [
        "Projetos personalizados para cada negócio",
        "Equipe acompanhada por especialistas",
        "Metodologias consolidadas e soluções aplicáveis",
      ],
    },
    link: { label: "Conheça a Líder Jr.", href: "/quem-somos" },
    imagem: imagens.equipeReunidaAoArLivre,
    selo: { valor: "+130", rotulo: "Projetos entregues" },
  },

  clientes: {
    eyebrow: "Confiança",
    titulo: "Nossos Clientes",
    rotulo: "Empresas que já trabalharam com a Líder Jr.",
    // Logos em public/imagens/clientes/, declarados em src/content/imagens.ts.
    // Cliente sem logo: deixe só `nome` — aparece o nome escrito no lugar.
    linhaSuperior: [
      { nome: "Gerdau", logo: logosDeClientes.gerdau },
      { nome: "Allnova", logo: logosDeClientes.allnova },
      { nome: "Grupo Curae Saluti", logo: logosDeClientes.grupoCuraeSaluti },
      { nome: "Leal Dutra", logo: logosDeClientes.lealDutra },
      { nome: "Interativa", logo: logosDeClientes.interativa },
      { nome: "Leak Inspection", logo: logosDeClientes.leakInspection },
      { nome: "Neri", logo: logosDeClientes.neri },
      { nome: "Röti Gastronomia", logo: logosDeClientes.rotiGastronomia },
    ],
    linhaInferior: [
      { nome: "Laticrete", logo: logosDeClientes.laticrete },
      { nome: "Casa do Motoqueiro", logo: logosDeClientes.casaDoMotoqueiro },
      { nome: "Falcon Tecnologia", logo: logosDeClientes.falconTecnologia },
      { nome: "Flash", logo: logosDeClientes.flash },
      { nome: "Galbilec", logo: logosDeClientes.galbilec },
      { nome: "Insight Consultoria", logo: logosDeClientes.insightConsultoria },
      { nome: "Dalata", logo: logosDeClientes.dalata },
      { nome: "TWE Automação Industrial", logo: logosDeClientes.tweAutomacao },
    ],
  },

  cases: {
    eyebrow: "Cases em destaque",
    titulo: "Resultados que geram confiança",
    descricao:
      "Conheça projetos desenvolvidos pela Líder Jr. e os resultados alcançados por nossos clientes.",
    link: { label: "Ver todos", href: "/cases" },
    carrossel: {
      anterior: "Case anterior",
      proximo: "Próximo case",
      regiao: "Carrossel de cases em destaque",
      rotuloComPagina: "Ver case",
    },
  },

  blog: {
    eyebrow: "Conteúdo",
    titulo: "Últimas do blog",
    link: { label: "Ver todos os artigos", href: "/blog" },
  },

  ctaFinal: {
    depoimento: {
      texto:
        "Trabalho realizado com muito empenho e profissionalismo! Projeto fundamental para decisões em nosso mercado de trabalho",
      autor: "Laticrete",
      iniciais: "LA",
    },
    chamada: {
      eyebrow: "O próximo case pode ser o seu",
      titulo: "O próximo resultado pode ser o da sua empresa.",
      descricao:
        "Conte para nossa equipe quais desafios sua empresa enfrenta. A partir de um diagnóstico inicial, podemos entender seu cenário e identificar como a Líder Jr. pode ajudar.",
      botaoPrimario: { label: "Fale com nossa equipe", href: "/fale-conosco" },
      botaoSecundario: { label: "Conheça outros cases", href: "/cases" },
    },
  },
};
