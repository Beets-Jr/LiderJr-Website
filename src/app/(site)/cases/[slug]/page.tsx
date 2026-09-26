import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/sections/back-link";
import { CorpoDoCase } from "@/components/sections/case-detalhe";
import { CTAPanel } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { RelatedCards } from "@/components/sections/related-cards";
import { getCasePorSlug, getCasesComPagina, getTodosCases } from "@/content/cases";
import { paginaDeCases } from "@/content/cases/pagina";
import { getHrefDoCase } from "@/lib/hrefs";
import { montarMetadata } from "@/lib/metadados";

/**
 * ============================================================================
 * TEMPLATE DE PÁGINA DE CASE
 * ============================================================================
 * Uma rota por case com o campo `detalhe` preenchido. Ver CONTEUDO.md.
 * ============================================================================
 */

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getCasesComPagina()).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = await getCasePorSlug(slug);
  if (!item?.detalhe) return {};

  return montarMetadata(item.detalhe.metadados, `/cases/${item.slug}`, {
    tipo: "article",
    imagem: item.imagem,
  });
}

export default async function PaginaDeCase({ params }: Props) {
  const { slug } = await params;
  const item = await getCasePorSlug(slug);

  if (!item?.detalhe) notFound();

  const { detalhe } = item;
  const { navegacaoDeDetalhe } = paginaDeCases;

  // Os três outros cases mais recentes, independentemente de terem página.
  const relacionados = (await getTodosCases())
    .filter((outro) => outro.slug !== item.slug)
    .slice(0, 3)
    .map((outro) => ({
      href: getHrefDoCase(outro) ?? "/cases",
      etiqueta: outro.categoria,
      titulo: outro.empresa,
      descricao: outro.descricao,
    }));

  return (
    <>
      <PageHero
        conteudo={{
          eyebrow: `${paginaDeCases.hero.eyebrow} • ${item.categoria}`,
          titulo: item.empresa,
          descricao: item.descricao,
          imagemDeFundo: detalhe.imagemDeFundo,
        }}
      />

      <BackLink link={navegacaoDeDetalhe.voltar} />
      <CorpoDoCase detalhe={detalhe} />
      <CTAPanel chamada={detalhe.cta} />

      <RelatedCards
        titulo={navegacaoDeDetalhe.relacionados.titulo}
        rotuloDoLink={navegacaoDeDetalhe.relacionados.rotuloDoLink}
        itens={relacionados}
      />
    </>
  );
}
