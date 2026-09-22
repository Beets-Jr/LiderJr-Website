import { imagens } from "@/content/imagens";
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
    botaoPrimario: { label: "Solicitar orçamento", href: "/fale-conosco" },
    botaoSecundario: { label: "Conheça nossos serviços", href: "/servicos" },
    imagem: imagens.engenheiraLinhaMontagem,
  },

  estatisticas: [
    { valor: "+100", rotulo: "Projetos entregues" },
    { valor: "17", rotulo: "Anos de atuação" },
    { valor: "97%", rotulo: "Satisfação dos clientes" },
    { valor: "+50", rotulo: "Clientes atendidos" },
  ],

  servicos: {
    eyebrow: "O que fazemos",
    titulo: "Nossas áreas de atuação",
    link: { label: "Ver todos", href: "/servicos" },
  },

  sobre: {
    eyebrow: "Sobre nós",
    titulo: "Conhecimento acadêmico aplicado aos desafios da sua empresa",
    paragrafo:
      "A Líder Jr. conecta conhecimento acadêmico, inovação e supervisão especializada para desenvolver projetos que geram resultados reais para empresas de diferentes segmentos.",
    checklist: {
      itens: [
        "Projetos personalizados para cada negócio",
        "Equipe supervisionada por especialistas",
        "Soluções acessíveis com alto impacto",
      ],
    },
    link: { label: "Conheça a Líder Jr.", href: "/quem-somos" },
    imagem: imagens.equipeReuniaoMesa,
    selo: { valor: "+100", rotulo: "Projetos entregues" },
  },

  clientes: {
    eyebrow: "Confiança",
    titulo: "Nossos Clientes",
    rotulo: "Empresas que já trabalharam com a Líder Jr.",
    // TODO: nomes fictícios herdados do protótipo. Substituir pelos clientes
    // reais (ou remover a seção) quando a lista for definida. Ver PENDENCIAS.md.
    //
    // PARA COLOCAR O LOGO: declare a imagem em src/content/imagens.ts (arquivo
    // em public/imagens/clientes/, PNG ou SVG) e acrescente `logo:` ao item —
    // ex.: { nome: "TechSul", logo: logosDeClientes.techSul }. Quem tiver logo
    // mostra a imagem; quem não tiver continua mostrando o nome escrito.
    linhaSuperior: [
      { nome: "Empresa Alpha" },
      { nome: "Grupo Nova" },
      { nome: "TechSul" },
      { nome: "Metalúrgica Vitória" },
      { nome: "AgroPrime" },
      { nome: "Comércio Estrela" },
    ],
    linhaInferior: [
      { nome: "Indústria Confiança" },
      { nome: "GrupoMax" },
      { nome: "Vertex Solutions" },
      { nome: "Prime Foods" },
      { nome: "Construtora Horizonte" },
      { nome: "LogTech" },
    ],
  },

  cases: {
    eyebrow: "Cases em destaque",
    titulo: "Resultados que geram confiança",
    descricao:
      "Conheça alguns projetos desenvolvidos pela Líder Jr. e o impacto que nossas soluções proporcionaram para diferentes empresas.",
    link: { label: "Ver todos", href: "/cases" },
    carrossel: {
      anterior: "Case anterior",
      proximo: "Próximo case",
      regiao: "Carrossel de cases em destaque",
      rotuloComPagina: "Ver case",
      // Os cases sem página própria (ver PENDENCIAS.md) mostram este aviso no
      // lugar do link, como já acontece na listagem de /cases.
      rotuloSemPagina: "Case em breve",
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
        "A Líder Jr. reorganizou nosso processo produtivo em poucas semanas. O nível de profissionalismo superou nossa expectativa para uma consultoria júnior.",
      autor: "Marcos Andrade",
      cargo: "Diretor de Operações, Indústria Metalúrgica",
      iniciais: "MA",
    },
    chamada: {
      titulo: "Seu próximo resultado pode começar com uma conversa.",
      descricao:
        "Conte-nos os desafios da sua empresa. Nossa equipe irá entender sua necessidade e propor uma solução personalizada.",
      botaoPrimario: { label: "Solicitar um orçamento", href: "/fale-conosco" },
      botaoSecundario: { label: "Conhecer nossos serviços", href: "/servicos" },
    },
  },
};

/**
 * ----------------------------------------------------------------------------
 * CONTEÚDO DO CTA EM COLUNAS — em uso na Home
 * ----------------------------------------------------------------------------
 * O cliente escolheu o formato em duas colunas (depoimento à esquerda, chamada
 * à direita), usado com <CTATestimonialColumns>. `ctaFinal` acima (depoimento
 * em cima, chamada embaixo) fica mantido no código, sem uso. Ver PENDENCIAS.md
 * 2.1.
 * ----------------------------------------------------------------------------
 */
export const ctaFinalEmColunas: ConteudoDaHome["ctaFinal"] = {
  depoimento: home.ctaFinal.depoimento,
  chamada: {
    eyebrow: "O próximo case pode ser o seu",
    titulo: "Para ter um resultado parecido, basta entrar em contato.",
    descricao:
      "Assim como fizemos por essa empresa, nossa equipe pode entender os desafios do seu negócio e propor uma solução personalizada — sem custo no diagnóstico inicial.",
    botaoPrimario: { label: "Quero um resultado assim", href: "/fale-conosco" },
    botaoSecundario: { label: "Ver outros cases", href: "/cases" },
  },
};
