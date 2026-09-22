import { getServicosAgrupados } from "@/content/servicos";
import { getHrefDoServico } from "@/lib/hrefs";
import type { ConteudoDoSite, GrupoDeLinks, LinkDeNavegacao } from "@/types/site";

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
  tituloPadrao: "Consultoria em Engenharia de Produção",
  descricao:
    "Empresa júnior de Engenharia de Produção. Consultoria em processos, qualidade, estratégia e custos para pequenas e médias empresas.",

  url: "https://www.liderjr.com",

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

  redes: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/liderempresajr/", icone: "linkedin" },
    { label: "Instagram", href: "https://www.instagram.com/lider.jr/", icone: "instagram" },
    { label: "Facebook", href: "https://www.facebook.com/liderempresajr/", icone: "facebook" },
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

  naoEncontrado: {
    codigo: "404",
    titulo: "Página não encontrada",
    descricao:
      "O endereço que você tentou acessar não existe ou foi movido. Use o menu acima ou volte para a página inicial.",
    botao: { label: "Voltar para a Home", href: "/" },
  },
};

/**
 * Links da coluna "Serviços" do rodapé, divididos em duas colunas mais curtas:
 * os dois primeiros grupos numa, os dois últimos na outra. Sem subtítulo de
 * grupo dentro de cada coluna — é só uma divisão visual da mesma lista.
 *
 * Vêm do registry de serviços — não há lista escrita à mão. Serviços que ainda
 * não têm página apontam para a listagem /servicos.
 */
export function getColunasDeServicosParaRodape(): [LinkDeNavegacao[], LinkDeNavegacao[]] {
  const grupos = getServicosAgrupados();
  const metade = Math.ceil(grupos.length / 2);

  const paraLinks = (grupos: ReturnType<typeof getServicosAgrupados>): LinkDeNavegacao[] =>
    grupos.flatMap(({ servicos }) =>
      servicos.map((servico) => ({
        label: servico.titulo,
        href: getHrefDoServico(servico) ?? "/servicos",
      })),
    );

  return [paraLinks(grupos.slice(0, metade)), paraLinks(grupos.slice(metade))];
}

/**
 * Grupos de links do submenu "Serviços" do menu: passar o mouse em "Serviços"
 * mostra os 4 grupos, e passar o mouse num grupo mostra os serviços dele.
 *
 * Vêm do registry de serviços — não há lista escrita à mão.
 */
export function getGruposDeServicosParaNavegacao(): GrupoDeLinks[] {
  return getServicosAgrupados().map(({ grupo, servicos }) => ({
    titulo: grupo.titulo,
    links: servicos.map((servico) => ({
      label: servico.titulo,
      href: getHrefDoServico(servico) ?? "/servicos",
    })),
  }));
}
