import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type HeadingTag = "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";

/**
 * Fonte única de verdade da escala tipográfica de títulos.
 * No protótipo havia 8 receitas competindo só para "título de seção".
 *
 * `level` controla a APARÊNCIA. `as` controla a TAG — para que a hierarquia
 * semântica de headings possa ser correta mesmo quando o visual não segue a
 * ordem (requisito de acessibilidade).
 */
const headingVariants = cva("font-heading text-balance", {
  variants: {
    level: {
      /** H1 de hero. */
      display: "text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl",
      /** Título de seção. */
      section: "text-3xl leading-tight font-bold lg:text-4xl",
      /** Título de sub-bloco / título de card grande. */
      subsection: "text-2xl leading-snug font-bold",
      /** Título de card. */
      card: "text-xl leading-snug font-bold",
      /** Título miúdo: cross-links, rodapé. */
      minor: "text-base leading-snug font-bold",
    },
    tone: {
      default: "text-fg",
      brand: "text-brand",
      onDark: "text-on-dark",
      inherit: "",
    },
  },
  defaultVariants: { level: "section", tone: "default" },
});

export interface HeadingProps extends VariantProps<typeof headingVariants> {
  as?: HeadingTag;
  className?: string;
  id?: string;
  children: ReactNode;
}

export function Heading({
  as: Tag = "h2",
  level,
  tone,
  className,
  id,
  children,
}: HeadingProps) {
  return (
    <Tag id={id} className={cn(headingVariants({ level, tone }), className)}>
      {children}
    </Tag>
  );
}
