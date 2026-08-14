import type { ConteudoDoSite } from "@/types/site";

/**
 * ============================================================================
 * DADOS GLOBAIS DO SITE
 * ============================================================================
 * Tudo que aparece em MAIS DE UMA página mora aqui: nome da empresa, telefone,
 * e-mail, redes sociais, menu e rodapé.
 *
 * Mudou o telefone? Troque numa linha só, aqui embaixo. O site inteiro
 * acompanha — menu, rodapé, botão do WhatsApp e página de contato.
 *
 * Ver CONTEUDO.md para o passo a passo.
 * ============================================================================
 */
export const site: ConteudoDoSite = {
  nome: "Líder Jr.",
  nomeCompleto: "Líder Junior",
  descricao:
    "Empresa júnior de Engenharia de Produção. Consultoria em processos, qualidade, estratégia e custos para pequenas e médias empresas.",

  // TODO: trocar pelo domínio real antes de publicar.
  url: "https://www.liderjr.com.br",

  contato: {
    telefone: {
      icone: "telefone",
      texto: "(15) 99827-7936",
      href: "tel:+5515998277936",
    },
    email: {
      icone: "email",
      texto: "contato@liderjr.com",
      href: "mailto:contato@liderjr.com",
    },
  },

  whatsapp: {
    numero: "5515998277936",
    mensagem: "Olá! Gostaria de saber mais sobre os serviços da Líder Jr.",
    rotulo: "Falar com a Líder Jr. pelo WhatsApp",
  },

  // TODO: substituir os "#" pelos perfis reais. No protótipo os três já eram "#".
  redes: [
    { label: "LinkedIn", href: "#", icone: "linkedin" },
    { label: "Instagram", href: "#", icone: "instagram" },
    { label: "Facebook", href: "#", icone: "facebook" },
  ],

  navegacao: [
    { label: "Home", href: "/" },
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Serviços", href: "/servicos" },
    { label: "Cases", href: "/cases" },
    { label: "Materiais", href: "/materiais" },
    { label: "Blog", href: "/blog" },
  ],

  ctaDoMenu: { label: "Fale Conosco", href: "/fale-conosco" },

  rodape: {
    colunas: [
      {
        titulo: "Navegação",
        links: [
          { label: "Home", href: "/" },
          { label: "Quem Somos", href: "/quem-somos" },
          { label: "Serviços", href: "/servicos" },
          { label: "Cases", href: "/cases" },
          { label: "Materiais", href: "/materiais" },
          { label: "Blog", href: "/blog" },
          { label: "Fale Conosco", href: "/fale-conosco" },
        ],
      },
    ],
    // A coluna de serviços é montada a partir do registry de serviços —
    // no protótipo ela era "Lorem Ipsum / Dolor Sit / Amet Consectetur".
    tituloColunaServicos: "Serviços",
    linkVerTodosServicos: { label: "Ver todos", href: "/servicos" },
    tituloContato: "Contato",
    copyright: "© 2026 Líder Jr. Todos os direitos reservados.",
    selo: "Empresa Júnior certificada pela Brasil Júnior",
  },

  pularParaConteudo: "Pular para o conteúdo",
};

/**
 * TEMPORÁRIO — Fase 1.
 * Alimenta o submenu "Serviços" do menu e a coluna "Serviços" do rodapé.
 * Na Fase 2 este array é substituído por `getTodosServicos()` do registry
 * (src/content/servicos/index.ts) e apagado daqui.
 */
export const navegacaoDeServicos = [
  { label: "Mapeamento de Processos", href: "/servicos/mapeamento-de-processos" },
  { label: "Gestão da Qualidade", href: "/servicos/gestao-da-qualidade" },
  { label: "Pesquisa de Mercado", href: "/servicos/pesquisa-de-mercado" },
  { label: "Planejamento Estratégico", href: "/servicos/planejamento-estrategico" },
  { label: "Custos e Precificação", href: "/servicos/custos-e-precificacao" },
  { label: "Consultoria em Estoque", href: "/servicos/consultoria-em-estoque" },
];
