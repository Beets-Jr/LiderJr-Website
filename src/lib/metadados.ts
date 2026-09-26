import type { Metadata } from "next";
import { site } from "@/content/site";
import type { Imagem, Metadados } from "@/types/comum";

/**
 * A imagem de compartilhamento padrão, gerada por src/app/opengraph-image.tsx.
 * Vale para toda página que não tem imagem própria (Home e listagens).
 */
export const IMAGEM_DE_COMPARTILHAMENTO = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: `${site.nomeCompleto} — ${site.descricao}`,
} as const;

export interface OpcoesDeMetadata {
  /** "article" para posts e cases; o resto do site é "website". */
  tipo?: "website" | "article";
  /** A imagem do card. Sem ela, entra a imagem de compartilhamento padrão. */
  imagem?: Imagem;
  /** Data AAAA-MM-DD de publicação, para posts. */
  publicadoEm?: string;
  /**
   * Usa o título como está, sem o " | Líder Jr." do template do layout. Para
   * a Home, cujo título já começa com o nome da empresa.
   */
  tituloCompleto?: boolean;
}

/**
 * Converte os `metadados` do conteúdo no objeto de metadata do Next.
 *
 * Existe porque o Next NÃO mescla o `openGraph` da página com o do layout: se
 * a página declara `openGraph`, o do layout some inteiro — e com ele o nome do
 * site, o idioma e a imagem de compartilhamento. Por isso cada página monta o
 * bloco completo aqui, sempre igual.
 *
 * @param caminho a rota da página, ex.: "/servicos/dre". Vira a URL canônica
 * e o `og:url` (o `metadataBase` do layout completa o domínio).
 */
export function montarMetadata(
  metadados: Metadados,
  caminho: string,
  opcoes: OpcoesDeMetadata = {},
): Metadata {
  const { titulo, descricao } = metadados;
  const { tipo = "website", imagem, publicadoEm, tituloCompleto = false } = opcoes;

  const imagens = imagem
    ? [
        {
          url: imagem.src,
          width: imagem.largura,
          height: imagem.altura,
          alt: imagem.alt,
        },
      ]
    : [IMAGEM_DE_COMPARTILHAMENTO];

  return {
    title: tituloCompleto ? { absolute: titulo } : titulo,
    description: descricao,
    alternates: { canonical: caminho },
    openGraph: {
      type: tipo,
      locale: "pt_BR",
      siteName: site.nome,
      url: caminho,
      title: titulo,
      description: descricao,
      images: imagens,
      ...(tipo === "article" && publicadoEm ? { publishedTime: publicadoEm } : {}),
    },
    twitter: { card: "summary_large_image" },
  };
}
