import { Calendar, Clock } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BackLink } from "@/components/sections/back-link";
import { CTAPanel } from "@/components/sections/cta";
import { PageHero } from "@/components/sections/page-hero";
import { PostBody } from "@/components/sections/post-body";
import { RelatedCards } from "@/components/sections/related-cards";
import { Avatar, Text } from "@/components/ui";
import { getPostPorSlug, getPostsComPagina, getTodosPosts } from "@/content/blog";
import { paginaDoBlog } from "@/content/blog/pagina";
import { formatarData } from "@/lib/datas";

/**
 * ============================================================================
 * TEMPLATE DE PÁGINA DE POST
 * ============================================================================
 * Uma rota por post com o campo `detalhe` preenchido. O corpo do artigo é
 * montado a partir dos blocos tipados do conteúdo. Ver CONTEUDO.md.
 * ============================================================================
 */

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getPostsComPagina().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostPorSlug(slug);
  if (!post?.detalhe) return {};

  const { metadados } = post.detalhe;
  return {
    title: metadados.titulo,
    description: metadados.descricao,
    openGraph: {
      type: "article",
      title: metadados.titulo,
      description: metadados.descricao,
      publishedTime: post.data,
      authors: [post.detalhe.autor.nome],
      images: [{ url: post.imagem.src, alt: post.imagem.alt }],
    },
  };
}

export default async function PaginaDePost({ params }: Props) {
  const { slug } = await params;
  const post = getPostPorSlug(slug);

  if (!post?.detalhe) notFound();

  const { detalhe } = post;
  const { navegacaoDeDetalhe } = paginaDoBlog;

  const relacionados = getTodosPosts()
    .filter((outro) => outro.slug !== post.slug)
    .slice(0, 3)
    .map((outro) => ({
      href: outro.detalhe ? `/blog/${outro.slug}` : "/blog",
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
        {/* Assinatura, data e tempo de leitura — todos vindos do conteúdo.
            No protótipo a data e o tempo eram digitados de novo aqui e
            discordavam do card na listagem. */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Avatar iniciais={detalhe.autor.iniciais} tone="brandSolid" size="sm" />
          <Text as="span" size="sm" tone="onDark">
            {`${paginaDoBlog.prefixoDoAutor} ${detalhe.autor.nome}`}
          </Text>

          <span aria-hidden="true" className="text-on-dark-faint">
            •
          </span>

          <Text
            as="span"
            size="sm"
            tone="onDarkMuted"
            className="flex items-center gap-1.5"
          >
            <Calendar size={14} aria-hidden="true" />
            <time dateTime={post.data}>{formatarData(post.data)}</time>
          </Text>

          <span aria-hidden="true" className="text-on-dark-faint">
            •
          </span>

          <Text
            as="span"
            size="sm"
            tone="onDarkMuted"
            className="flex items-center gap-1.5"
          >
            <Clock size={14} aria-hidden="true" />
            {post.tempoDeLeitura}
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
