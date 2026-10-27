import { cn } from "@/lib/cn";
import { CuboDaMarca, VIEWBOX_DO_LOGO } from "./cubo-da-marca";
import { LinkDaMesmaPagina } from "./link-da-mesma-pagina";

/**
 * Logo da Líder Jr.: o cubo da marca, um traço vertical e o nome — a mesma
 * composição do logo do site antigo. O cubo vem de cubo-da-marca.tsx; o nome é
 * texto, para continuar nítido e acompanhar a cor de cada fundo.
 */
const tonesDoNome = {
  onDark: "text-on-dark",
  light: "text-fg",
  brand: "text-brand",
} as const;

export function Logo({
  nome,
  tone = "onDark",
  className,
}: {
  nome: string;
  /** `brand` pinta o nome de laranja — usado no cabeçalho. */
  tone?: keyof typeof tonesDoNome;
  className?: string;
}) {
  return (
    /* Na própria Home o clique no logo leva ao topo, em vez de não fazer nada
       — mesma regra dos links do rodapé. Ver LinkDaMesmaPagina. */
    <LinkDaMesmaPagina
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 rounded-sm",
        tonesDoNome[tone],
        className,
      )}
      aria-label={`${nome} — página inicial`}
    >
      {/* Tamanho fixo, casado com VIEWBOX_DO_LOGO: é o que deixa as arestas
          nítidas. Mudou o tamanho, refaça o enquadramento. */}
      <CuboDaMarca viewBox={VIEWBOX_DO_LOGO} className="h-9 w-[33px] shrink-0" />
      <span aria-hidden="true" className="h-7 w-px bg-current opacity-25" />
      <span className={cn("font-heading text-xl font-bold", tonesDoNome[tone])}>
        {nome}
      </span>
    </LinkDaMesmaPagina>
  );
}
