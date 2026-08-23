import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Eyebrow, Heading, Text } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { CabecalhoDeSecao } from "@/types/comum";

/**
 * O cabeçalho de qualquer seção: rótulo, título, texto e link opcional.
 * No protótipo esse conjunto aparecia em ~20 lugares, sempre remontado à mão —
 * com oito receitas diferentes só para o título.
 */
export interface SectionHeaderProps {
  conteudo: CabecalhoDeSecao;
  tone?: "light" | "onDark";
  alinhamento?: "esquerda" | "centro";
  /** Tag do título. Ajuste para manter a hierarquia da página correta. */
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeader({
  conteudo,
  tone = "light",
  alinhamento = "esquerda",
  as = "h2",
  className,
}: SectionHeaderProps) {
  const centro = alinhamento === "centro";
  const escuro = tone === "onDark";

  return (
    <div
      className={cn(
        "flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between",
        centro && "sm:flex-col sm:items-center",
        className,
      )}
    >
      <div className={cn("max-w-2xl", centro && "text-center")}>
        {/* O eyebrow é laranja também sobre o escuro — é assim no hero das
            páginas internas e no painel de impacto do case. Sobre o preto o
            laranja dá 7,82:1, bem acima do mínimo do WCAG AA. */}
        {conteudo.eyebrow ? (
          <Eyebrow className="mb-3">{conteudo.eyebrow}</Eyebrow>
        ) : null}

        <Heading as={as} level="section" tone={escuro ? "onDark" : "default"}>
          {conteudo.titulo}
        </Heading>

        {conteudo.descricao ? (
          <Text size="lg" tone={escuro ? "onDarkMuted" : "muted"} className="mt-4">
            {conteudo.descricao}
          </Text>
        ) : null}
      </div>

      {conteudo.link ? (
        <Link
          href={conteudo.link.href}
          className={cn(
            "font-body inline-flex shrink-0 items-center gap-1.5 rounded-sm text-sm font-semibold transition-colors",
            escuro
              ? "text-brand hover:text-brand-hover"
              : "text-brand hover:text-brand-hover hover:underline",
          )}
        >
          {conteudo.link.label}
          <ChevronRight size={16} aria-hidden="true" />
        </Link>
      ) : null}
    </div>
  );
}
