import { getHrefDoServico, getTodosServicos } from "@/content/servicos";
import type { ConteudoDoSite, LinkDeNavegacao } from "@/types/site";

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
      rotulo: "Telefone",
      texto: "(15) 99827-7936",
      href: "tel:+5515998277936",
    },
    email: {
      icone: "email",
      rotulo: "E-mail",
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
 * Links do submenu "Serviços" do menu e da coluna "Serviços" do rodapé.
 *
 * Vêm do registry de serviços — não há lista escrita à mão. Serviços que ainda
 * não têm página apontam para a listagem /servicos.
 */
export function getLinksDeServicos(): LinkDeNavegacao[] {
  return getTodosServicos().map((servico) => ({
    label: servico.titulo,
    href: getHrefDoServico(servico) ?? "/servicos",
  }));
}
