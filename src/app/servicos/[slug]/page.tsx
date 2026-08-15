import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import {
  CTAComChecklist,
  DepoimentoCentrado,
  MetodologiaDoServico,
  ResultadosDoServico,
  SobreOServico,
} from "@/components/sections/servico-detalhe";
import { getServicoPorSlug, getServicosComPagina } from "@/content/servicos";
import { paginaDeServicos } from "@/content/servicos/pagina";

/**
 * ============================================================================
 * TEMPLATE DE PÁGINA DE SERVIÇO
 * ============================================================================
 * Uma rota é gerada para cada serviço que tenha o campo `detalhe` preenchido.
 * Este arquivo NÃO muda quando um serviço novo é criado — basta acrescentar o
 * conteúdo em src/content/servicos/. Ver CONTEUDO.md.
 * ============================================================================
 */

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getServicosComPagina().map((servico) => ({ slug: servico.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const servico = getServicoPorSlug(slug);
  if (!servico?.detalhe) return {};

  const { metadados } = servico.detalhe;
  return {
    title: metadados.titulo,
    description: metadados.descricao,
    openGraph: {
      type: "article",
      title: metadados.titulo,
      description: metadados.descricao,
      images: [{ url: servico.imagem.src, alt: servico.imagem.alt }],
    },
  };
}

export default async function PaginaDeServico({ params }: Props) {
  const { slug } = await params;
  const servico = getServicoPorSlug(slug);

  // Serviços sem `detalhe` existem nas listagens mas não têm página.
  if (!servico?.detalhe) notFound();

  const { detalhe } = servico;

  return (
    <>
      <PageHero
        conteudo={{
          eyebrow: paginaDeServicos.hero.eyebrow,
          titulo: servico.titulo,
          descricao: servico.descricao,
          imagemDeFundo: detalhe.imagemDeFundo,
        }}
      />

      <SobreOServico conteudo={detalhe.sobre} tags={servico.tags} />
      <MetodologiaDoServico conteudo={detalhe.metodologia} />
      <ResultadosDoServico conteudo={detalhe.resultados} />

      {detalhe.depoimento ? (
        <DepoimentoCentrado depoimento={detalhe.depoimento} />
      ) : null}

      <CTAComChecklist conteudo={detalhe.cta} />
    </>
  );
}
