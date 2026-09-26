import type { Metadata } from "next";
import type { Imagem, Metadados } from "@/types/comum";

/**
 * Converte os `metadados` do conteúdo no objeto de metadata do Next.
 *
 * O título e a descrição vão para o <title>, a meta description e as tags do
 * Open Graph (a prévia ao compartilhar o link). As páginas de detalhe — serviço,
 * case, post — passam também a imagem do card, e viram `og:type` "article".
 */
export function montarMetadata(
  metadados: Metadados,
  artigo?: { imagem: Imagem; publicadoEm?: string },
): Metadata {
  const { titulo, descricao } = metadados;

  if (!artigo) {
    return {
      title: titulo,
      description: descricao,
      openGraph: { title: titulo, description: descricao },
    };
  }

  return {
    title: titulo,
    description: descricao,
    openGraph: {
      type: "article",
      title: titulo,
      description: descricao,
      publishedTime: artigo.publicadoEm,
      images: [{ url: artigo.imagem.src, alt: artigo.imagem.alt }],
    },
  };
}
