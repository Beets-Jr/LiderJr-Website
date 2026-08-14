import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge, Foto, Heading, Text } from "@/components/ui";
import { getHrefDoCase } from "@/content/cases";
import { cn } from "@/lib/cn";
import type { Case } from "@/types/case";

/**
 * A lista em zigue-zague da página /cases: imagem de um lado, texto do outro,
 * alternando a cada item. O selo com o número de destaque flutua sobre a imagem.
 */
export function CaseList({
  cases,
  rotuloComPagina,
  rotuloSemPagina,
}: {
  cases: Case[];
  rotuloComPagina: string;
  rotuloSemPagina: string;
}) {
  return (
    <div className="flex flex-col gap-24">
      {cases.map((item, indice) => (
        <CaseRow
          key={item.slug}
          item={item}
          invertido={indice % 2 !== 0}
          rotuloComPagina={rotuloComPagina}
          rotuloSemPagina={rotuloSemPagina}
        />
      ))}
    </div>
  );
}

function CaseRow({
  item,
  invertido,
  rotuloComPagina,
  rotuloSemPagina,
}: {
  item: Case;
  invertido: boolean;
  rotuloComPagina: string;
  rotuloSemPagina: string;
}) {
  const href = getHrefDoCase(item);

  return (
    <article
      className={cn(
        "group relative flex flex-col items-center gap-12 lg:flex-row lg:gap-20",
        invertido && "lg:flex-row-reverse",
      )}
    >
      <div className="w-full lg:w-1/2">
        <div className="border-border group-hover:border-brand relative aspect-[4/3] overflow-hidden rounded-lg border shadow-sm transition-[box-shadow,border-color] duration-300 group-hover:shadow-lg">
          <Foto
            imagem={item.imagem}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="transition-transform duration-700 group-hover:scale-105"
          />

          <div className="bg-surface-dark/90 border-border-on-dark absolute bottom-6 left-6 rounded-lg border px-6 py-4 backdrop-blur-sm">
            <p className="font-heading text-brand text-3xl font-bold">
              {item.resultado}
            </p>
            <p className="font-body text-on-dark-muted text-xs tracking-wider uppercase">
              {item.metrica}
            </p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col justify-center lg:w-1/2">
        <Badge tone="brand" size="md" className="w-fit uppercase">
          {item.categoria}
        </Badge>

        <Heading
          as="h2"
          level="section"
          className="group-hover:text-brand mt-6 transition-colors"
        >
          {href ? (
            <Link href={href} className="rounded-sm after:absolute after:inset-0">
              {item.empresa}
            </Link>
          ) : (
            item.empresa
          )}
        </Heading>

        <Text size="lg" tone="muted" className="mt-4">
          {item.descricao}
        </Text>

        <ul className="mt-8 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <li key={tag}>
              <Badge size="md">{tag}</Badge>
            </li>
          ))}
        </ul>

        <p
          className={cn(
            "font-body mt-10 flex w-fit items-center gap-3 text-sm font-bold",
            href ? "text-brand" : "text-fg-muted",
          )}
        >
          <span
            className={cn(
              "border-b-2 border-transparent pb-0.5 transition-colors",
              href && "group-hover:border-current",
            )}
          >
            {href ? rotuloComPagina : rotuloSemPagina}
          </span>
          {href ? (
            <span className="bg-brand/10 group-hover:bg-brand group-hover:text-brand-fg flex h-8 w-8 items-center justify-center rounded-full transition-colors">
              <ArrowRight size={16} aria-hidden="true" />
            </span>
          ) : null}
        </p>
      </div>
    </article>
  );
}
