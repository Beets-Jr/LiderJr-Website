import { Box } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Logo da Líder Jr.
 *
 * TODO: o protótipo não tinha arquivo de logo — usava o ícone `Box` do lucide
 * dentro de um quadrado laranja. Quando a marca entregar o SVG oficial, troque
 * o conteúdo deste componente. Nada mais no site precisa mudar.
 * Ver PENDENCIAS.md.
 */
export function Logo({
  nome,
  tone = "onDark",
  className,
}: {
  nome: string;
  tone?: "onDark" | "light";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2 rounded-sm", className)}
      aria-label={`${nome} — página inicial`}
    >
      <span className="bg-brand text-brand-fg flex h-9 w-9 items-center justify-center rounded-sm">
        <Box size={22} strokeWidth={1.6} aria-hidden="true" />
      </span>
      <span
        className={cn(
          "font-heading text-xl font-bold",
          tone === "onDark" ? "text-on-dark" : "text-fg",
        )}
      >
        {nome}
      </span>
    </Link>
  );
}
