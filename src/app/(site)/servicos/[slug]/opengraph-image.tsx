import { notFound } from "next/navigation";
import { getServicoPorSlug } from "@/content/servicos";
import { paginaDeServicos } from "@/content/servicos/pagina";
import {
  desenharImagemDeCompartilhamento,
  TAMANHO,
} from "@/lib/imagem-de-compartilhamento";

/**
 * A prévia de compartilhamento de cada serviço com página própria, gerada a
 * partir do nome e da descrição. Ver lib/imagem-de-compartilhamento.tsx.
 */
export function generateImageMetadata({ params }: { params: { slug: string } }) {
  const servico = getServicoPorSlug(params.slug);
  return [
    {
      id: "capa",
      alt: servico?.titulo.replace(/\s+/g, " ") ?? paginaDeServicos.metadados.titulo,
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
  const servico = getServicoPorSlug(slug);
  if (!servico?.detalhe) notFound();

  return desenharImagemDeCompartilhamento({
    rotulo: paginaDeServicos.metadados.titulo,
    titulo: servico.titulo,
    descricao: servico.detalhe.metadados.descricao,
  });
}
