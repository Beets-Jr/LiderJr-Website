import { Box } from "lucide-react";
import { cn } from "@/lib/cn";
import { LinkDaMesmaPagina } from "./link-da-mesma-pagina";

/**
 * Logo da Líder Jr.
 *
 * TODO: o protótipo não tinha arquivo de logo — usava o ícone `Box` do lucide
 * dentro de um quadrado laranja. Quando a marca entregar o SVG oficial, troque
 * o conteúdo deste componente. Nada mais no site precisa mudar.
 * Ver PENDENCIAS.md.
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
      className={cn("group inline-flex items-center gap-2 rounded-sm", className)}
      aria-label={`${nome} — página inicial`}
    >
      <span className="bg-brand text-brand-fg flex h-9 w-9 items-center justify-center rounded-sm">
        <Box size={22} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span className={cn("font-heading text-xl font-bold", tonesDoNome[tone])}>
        {nome}
      </span>
    </LinkDaMesmaPagina>
  );
}
