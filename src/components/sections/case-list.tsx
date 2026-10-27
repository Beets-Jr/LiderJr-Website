import { ArrowRight } from "lucide-react";
import { Badge, Foto, Heading, LinkEsticado, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import { getHrefDoCase } from "@/lib/hrefs";
import type { Case } from "@/types/case";

/**
 * A lista em zigue-zague da página /cases: imagem de um lado, texto do outro,
 * alternando a cada item. O selo com o número de destaque flutua sobre a imagem.
 */
export function CaseList({
  cases,
  rotuloComPagina,
}: {
  cases: Case[];
  rotuloComPagina: string;
}) {
  return (
    <div className="flex flex-col gap-24">
      {cases.map((item, indice) => (
        <CaseRow
          key={item.slug}
          item={item}
          invertido={indice % 2 !== 0}
          rotuloComPagina={rotuloComPagina}
        />
      ))}
    </div>
  );
}

function CaseRow({
  item,
  invertido,
  rotuloComPagina,
}: {
  item: Case;
  invertido: boolean;
  rotuloComPagina: string;
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
          <LinkEsticado href={href}>{item.empresa}</LinkEsticado>
        </Heading>

        <Text size="lg" tone="muted" className="mt-4">
          {item.descricao}
        </Text>

        <ul className="mt-8 flex flex-wrap gap-2">
          {[item.servico.titulo, item.segmento].map((tag) => (
            <li key={tag}>
              <Badge size="md">{tag}</Badge>
            </li>
          ))}
        </ul>

        <p className="font-body text-brand mt-10 flex w-fit items-center gap-3 text-sm font-bold">
          <span className="border-b-2 border-transparent pb-0.5 transition-colors group-hover:border-current">
            {rotuloComPagina}
          </span>
          <span className="bg-brand/10 group-hover:bg-brand group-hover:text-brand-fg flex h-8 w-8 items-center justify-center rounded-full transition-colors">
            <ArrowRight size={16} aria-hidden="true" />
          </span>
        </p>
      </div>
    </article>
  );
}
