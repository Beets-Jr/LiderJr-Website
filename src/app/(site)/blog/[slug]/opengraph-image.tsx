import { notFound } from "next/navigation";
import { getPostPorSlug } from "@/content/blog";
import { paginaDoBlog } from "@/content/blog/pagina";
import {
  desenharImagemDeCompartilhamento,
  TAMANHO,
} from "@/lib/imagem-de-compartilhamento";

/**
 * A prévia de compartilhamento de cada post com página própria, gerada a
 * partir do título e do resumo. Ver lib/imagem-de-compartilhamento.tsx.
 */
export async function generateImageMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostPorSlug(params.slug);
  return [
    {
      id: "capa",
      alt: post?.titulo ?? paginaDoBlog.metadados.titulo,
      size: TAMANHO,
      contentType: "image/png",
    },
  ];
}

export default async function Imagem({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostPorSlug(slug);
  if (!post) notFound();

  return desenharImagemDeCompartilhamento({
    rotulo: `${paginaDoBlog.metadados.titulo} · ${post.categoria}`,
    titulo: post.titulo,
    descricao: post.detalhe.metadados.descricao,
  });
}
