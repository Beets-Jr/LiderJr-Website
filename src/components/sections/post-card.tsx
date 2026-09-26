import { Tag } from "lucide-react";
import { Badge, Card, Foto, Heading, LinkEsticado, Text } from "@/components/ui";
import { formatarData } from "@/lib/datas";
import { getHrefDoPost } from "@/lib/hrefs";
import type { Post } from "@/types/post";

/** Categoria, a linha de metadados de todo card de post. */
function MetaDoPost({ post }: { post: Post }) {
  return (
    <div className="flex items-center gap-3">
      <Badge tone="brand">
        <Tag size={10} aria-hidden="true" />
        {post.categoria}
      </Badge>
    </div>
  );
}

function DataDoPost({ post, className }: { post: Post; className?: string }) {
  return (
    <time dateTime={post.data} className={className}>
      {formatarData(post.data)}
    </time>
  );
}

/* -------------------------------------------------------------------------- */

/**
 * @param nivelSemantico h2 na listagem /blog, onde cada post é item de primeiro
 * nível; h3 na Home, onde os cards ficam sob o h2 da seção "Últimas do blog".
 */
export function PostCard({
  post,
  nivelSemantico = "h3",
}: {
  post: Post;
  nivelSemantico?: "h2" | "h3";
}) {
  const href = getHrefDoPost(post);

  return (
    <Card
      as="article"
      padding="none"
      interactive={Boolean(href)}
      className="group relative flex flex-col overflow-hidden"
    >
      <div className="relative h-52 shrink-0 overflow-hidden">
        <Foto
          imagem={post.imagem}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <MetaDoPost post={post} />

        <Heading
          as={nivelSemantico}
          level="card"
          className="group-hover:text-brand mt-4 transition-colors"
        >
          <LinkEsticado href={href}>{post.titulo}</LinkEsticado>
        </Heading>

        <Text size="sm" tone="muted" className="mt-3 flex-1">
          {post.resumo}
        </Text>

        <div className="border-border mt-6 border-t pt-4">
          <Text as="p" size="sm" tone="muted" weight="medium">
            <DataDoPost post={post} />
          </Text>
        </div>
      </div>
    </Card>
  );
}

/* -------------------------------------------------------------------------- */

/** O post em destaque no topo do blog: imagem à esquerda, texto à direita. */
export function FeaturedPost({
  post,
  rotuloDoLink,
}: {
  post: Post;
  rotuloDoLink: string;
}) {
  const href = getHrefDoPost(post);

  return (
    <Card
      as="article"
      padding="none"
      interactive={Boolean(href)}
      className="group relative grid grid-cols-1 overflow-hidden lg:grid-cols-2"
    >
      <div className="relative min-h-80 overflow-hidden">
        <Foto
          imagem={post.imagem}
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
          className="transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-col justify-center p-8 lg:p-10">
        <MetaDoPost post={post} />

        <Heading
          as="h2"
          level="section"
          className="group-hover:text-brand mt-5 transition-colors"
        >
          <LinkEsticado href={href}>{post.titulo}</LinkEsticado>
        </Heading>

        <Text size="lg" tone="muted" className="mt-4">
          {post.resumo}
        </Text>

        <div className="mt-8 flex items-center justify-between">
          <Text as="p" size="sm" tone="muted" weight="medium">
            <DataDoPost post={post} />
          </Text>
          {href ? (
            <span className="text-brand font-body text-sm font-bold">
              {rotuloDoLink}
            </span>
          ) : null}
        </div>
      </div>
    </Card>
  );
}
