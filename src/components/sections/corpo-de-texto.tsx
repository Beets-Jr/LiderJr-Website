import Markdoc, { type RenderableTreeNodes } from "@markdoc/markdoc";
import React, { type ReactNode } from "react";
import { Foto, Heading, Text } from "@/components/ui";
import type { Imagem } from "@/types/comum";

/**
 * Desenha um corpo de texto escrito no editor do CMS — o artigo de um post ou
 * a história de um case —, já transformado em src/lib/corpo-de-texto.ts.
 *
 * Cada parte do texto chega com o nome de um dos componentes abaixo (ver
 * `render` em src/lib/corpo-de-texto.ts). Negrito e itálico saem como
 * <strong> e <em>. A largura fica por conta de quem usa.
 */
export function CorpoDeTexto({ corpo }: { corpo: RenderableTreeNodes }) {
  return <>{Markdoc.renderers.react(corpo, React, { components: COMPONENTES })}</>;
}

type ComFilhos = { children?: ReactNode };

function Subtitulo({ children }: ComFilhos) {
  return (
    <Heading as="h2" level="subsection" className="mt-10 mb-4">
      {children}
    </Heading>
  );
}

function Paragrafo({ children }: ComFilhos) {
  return <Text className="mb-6">{children}</Text>;
}

/** O parágrafo de dentro da citação ganha a letra maior e serifada. */
function Citacao({ children }: ComFilhos) {
  return (
    <blockquote className="border-brand mb-10 border-l-4 pl-6 font-serif [&_p]:mb-3 [&_p]:font-serif [&_p]:text-xl [&_p:last-child]:mb-0">
      {children}
    </blockquote>
  );
}

function Lista({ ordered, children }: ComFilhos & { ordered?: boolean }) {
  const classes =
    "text-fg font-body mb-10 flex flex-col gap-3 pl-6 text-sm leading-relaxed";
  return ordered ? (
    <ol className={`${classes} marker:text-brand list-decimal marker:font-bold`}>
      {children}
    </ol>
  ) : (
    <ul className={`${classes} marker:text-brand list-disc`}>{children}</ul>
  );
}

/** Em lista "solta" (itens separados por linha em branco) o item traz parágrafos. */
function ItemDeLista({ children }: ComFilhos) {
  return <li className="pl-1 [&_p]:mb-0">{children}</li>;
}

function Link({ href, title, children }: ComFilhos & { href: string; title?: string }) {
  const externo = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      title={title}
      className="text-brand hover:text-brand-hover underline underline-offset-2 transition-colors"
      {...(externo && { target: "_blank", rel: "noopener noreferrer" })}
    >
      {children}
    </a>
  );
}

/** Bloco próprio do editor. A imagem já vem medida e com `alt` do adapter. */
function ImagemComLegenda({ imagem, legenda }: { imagem: Imagem; legenda?: string }) {
  return (
    <figure className="mb-10">
      <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
        <Foto imagem={imagem} sizes="(min-width: 768px) 768px, 100vw" />
      </div>
      {legenda ? (
        <figcaption>
          <Text size="sm" tone="muted" className="mt-3 text-center">
            {legenda}
          </Text>
        </figcaption>
      ) : null}
    </figure>
  );
}

/** Bloco próprio do editor: itens numerados com título e descrição. */
function ListaNumerada({ itens }: { itens: { titulo: string; descricao: string }[] }) {
  return (
    <ol className="mb-10 flex flex-col gap-4">
      {itens.map((item, indice) => (
        <li key={item.titulo} className="flex items-start gap-4">
          <span
            aria-hidden="true"
            className="bg-brand/10 text-brand font-heading flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold"
          >
            {indice + 1}
          </span>
          <div>
            <Text weight="semibold" family="heading" className="mb-0.5">
              {item.titulo}
            </Text>
            <Text size="sm" tone="muted">
              {item.descricao}
            </Text>
          </div>
        </li>
      ))}
    </ol>
  );
}

const COMPONENTES = {
  Subtitulo,
  Paragrafo,
  Citacao,
  Lista,
  ItemDeLista,
  Link,
  ImagemComLegenda,
  ListaNumerada,
};
