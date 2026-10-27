import { notFound } from "next/navigation";
import { getCasePorSlug } from "@/content/cases";
import { paginaDeCases } from "@/content/cases/pagina";
import {
  desenharImagemDeCompartilhamento,
  TAMANHO,
} from "@/lib/imagem-de-compartilhamento";

/**
 * A prévia de compartilhamento de cada case com página própria, gerada a
 * partir do título de SEO e da descrição. Ver
 * lib/imagem-de-compartilhamento.tsx.
 */
export async function generateImageMetadata({ params }: { params: { slug: string } }) {
  const item = await getCasePorSlug(params.slug);
  return [
    {
      id: "capa",
      alt: item?.detalhe.metadados.titulo ?? paginaDeCases.metadados.titulo,
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
  const item = await getCasePorSlug(slug);
  if (!item) notFound();

  return desenharImagemDeCompartilhamento({
    rotulo: `${paginaDeCases.metadados.titulo} · ${item.categoria}`,
    titulo: item.detalhe.metadados.titulo,
    descricao: item.detalhe.metadados.descricao,
  });
}
