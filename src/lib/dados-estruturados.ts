import { site } from "@/content/site";
import type { Case } from "@/types/case";
import type { LinkDeNavegacao } from "@/types/comum";
import type { Post } from "@/types/post";
import type { ServicoComPagina } from "@/types/servico";

/**
 * ============================================================================
 * DADOS ESTRUTURADOS (JSON-LD / schema.org)
 * ============================================================================
 * Descrevem a página para o Google em formato de máquina: quem é a empresa,
 * que um post é um artigo com data, que um serviço é oferecido pela Líder Jr.
 * É o que habilita os resultados enriquecidos (trilha de navegação, data do
 * artigo, painel da empresa). Renderizados por <DadosEstruturados>.
 *
 * Tudo sai do conteúdo que o site já tem — nada é escrito à mão aqui.
 *
 * Validar em https://search.google.com/test/rich-results depois de publicar.

 * ============================================================================
 */

export type NoDeDados = Record<string, unknown>;

const ID_DA_ORGANIZACAO = `${site.url}/#organizacao`;

function absoluta(caminho: string): string {
  return caminho.startsWith("http") ? caminho : `${site.url}${caminho}`;
}

/** Títulos de serviço podem ter `\n` para quebrar linha no card. */
function semQuebras(texto: string): string {
  return texto.replace(/\s+/g, " ").trim();
}

/** Referência curta à organização, para usar como autor, editora, fornecedor. */
const referenciaAOrganizacao = {
  "@type": "Organization",
  "@id": ID_DA_ORGANIZACAO,
  name: site.nomeCompleto,
};

export function dadosDaOrganizacao(): NoDeDados {
  return {
    "@type": "Organization",
    "@id": ID_DA_ORGANIZACAO,
    name: site.nomeCompleto,
    alternateName: site.nome,
    url: site.url,
    // O cubo da marca em PNG quadrado (512×512) — o Google pede no mínimo
    // 112×112 e não aceita SVG aqui. Ver components/layout/cubo-da-marca.tsx.
    logo: absoluta("/imagens/marca/logo.png"),
    description: site.descricao,
    email: site.contato.email.texto,
    telephone: site.contato.telefone.href.replace(/^tel:/, ""),
    sameAs: site.redes.map((rede) => rede.href),
  };
}

export function dadosDoSite(): NoDeDados {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#site`,
    name: site.nomeCompleto,
    url: site.url,
    inLanguage: "pt-BR",
    publisher: { "@id": ID_DA_ORGANIZACAO },
  };
}

/**
 * A trilha "Home › Seção › Página" que o Google mostra no lugar da URL.
 * O primeiro degrau é o item "/" do menu do site.
 */
export function dadosDaTrilha(...links: LinkDeNavegacao[]): NoDeDados {
  const inicio = site.navegacao.find((link) => link.href === "/");
  const degraus = inicio ? [inicio, ...links] : links;

  return {
    "@type": "BreadcrumbList",
    itemListElement: degraus.map((link, indice) => ({
      "@type": "ListItem",
      position: indice + 1,
      name: semQuebras(link.label),
      item: absoluta(link.href),
    })),
  };
}

export function dadosDoPost(post: Post): NoDeDados {
  const url = absoluta(`/blog/${post.slug}`);
  return {
    "@type": "BlogPosting",
    "@id": `${url}#artigo`,
    headline: post.titulo,
    description: post.detalhe.metadados.descricao,
    image: [absoluta(post.imagem.src)],
    datePublished: post.data,
    inLanguage: "pt-BR",
    url,
    mainEntityOfPage: url,
    author: referenciaAOrganizacao,
    publisher: referenciaAOrganizacao,
  };
}

export function dadosDoServico(servico: ServicoComPagina): NoDeDados {
  const url = absoluta(`/servicos/${servico.slug}`);
  return {
    "@type": "Service",
    "@id": `${url}#servico`,
    name: semQuebras(servico.titulo),
    serviceType: semQuebras(servico.titulo),
    description: servico.detalhe.metadados.descricao,
    image: absoluta(servico.imagem.src),
    url,
    provider: referenciaAOrganizacao,
  };
}

export function dadosDoCase(item: Case): NoDeDados {
  const url = absoluta(`/cases/${item.slug}`);
  return {
    "@type": "Article",
    "@id": `${url}#case`,
    headline: item.detalhe.metadados.titulo,
    description: item.detalhe.metadados.descricao,
    image: [absoluta(item.imagem.src)],
    inLanguage: "pt-BR",
    url,
    mainEntityOfPage: url,
    author: referenciaAOrganizacao,
    publisher: referenciaAOrganizacao,
  };
}
