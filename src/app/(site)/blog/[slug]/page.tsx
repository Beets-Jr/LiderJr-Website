import { Calendar } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/sections/back-link";
import { CTAPanel } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { PostBody } from "@/components/sections/post-body";
import { RelatedCards } from "@/components/sections/related-cards";
import { Text } from "@/components/ui";
import { getPostPorSlug, getPostsComPagina, getTodosPosts } from "@/content/blog";
import { paginaDoBlog } from "@/content/blog/pagina";
import { formatarData } from "@/lib/datas";
import { getHrefDoPost } from "@/lib/hrefs";
import { montarMetadata } from "@/lib/metadados";

/**
 * ============================================================================
 * TEMPLATE DE PÁGINA DE POST
 * ============================================================================
 * Uma rota por post com o campo `detalhe` preenchido. O corpo do artigo é
 * montado a partir dos blocos tipados do conteúdo. Ver CONTEUDO.md.
 * ============================================================================
 */

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getPostsComPagina()).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostPorSlug(slug);
  if (!post?.detalhe) return {};

  return montarMetadata(post.detalhe.metadados, {
    imagem: post.imagem,
    publicadoEm: post.data,
  });
}

export default async function PaginaDePost({ params }: Props) {
  const { slug } = await params;
  const post = await getPostPorSlug(slug);

  if (!post?.detalhe) notFound();

  const { detalhe } = post;
  const { navegacaoDeDetalhe } = paginaDoBlog;

  const relacionados = (await getTodosPosts())
    .filter((outro) => outro.slug !== post.slug)
    .slice(0, 3)
    .map((outro) => ({
      href: getHrefDoPost(outro) ?? "/blog",
      etiqueta: outro.categoria,
      titulo: outro.titulo,
      descricao: outro.resumo,
    }));

  return (
    <>
      <PageHero
        conteudo={{
          eyebrow: `${paginaDoBlog.rotuloDoArtigo} • ${post.categoria}`,
          titulo: post.titulo,
          descricao: "",
          imagemDeFundo: { ...post.imagem, alt: "" },
        }}
      >
        {/* Data de publicação — vinda do conteúdo, a mesma do card na listagem. */}
        <div className="mt-8 flex justify-center">
          <Text
            as="span"
            size="sm"
            tone="onDarkMuted"
            className="flex items-center gap-1.5"
          >
            <Calendar size={14} aria-hidden="true" />
            <time dateTime={post.data}>{formatarData(post.data)}</time>
          </Text>
        </div>
      </PageHero>

      <BackLink link={navegacaoDeDetalhe.voltar} />

      <article>
        <PostBody blocos={detalhe.corpo} resumo={post.resumo} />
      </article>

      <CTAPanel chamada={detalhe.cta} />

      <RelatedCards
        titulo={navegacaoDeDetalhe.relacionados.titulo}
        rotuloDoLink={navegacaoDeDetalhe.relacionados.rotuloDoLink}
        itens={relacionados}
      />
    </>
  );
}
