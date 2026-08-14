import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Ritmo vertical e tom de fundo de toda seção do site.
 *
 * Diferença em relação ao protótipo: lá o padding era fixo (py-24 / py-28) em
 * qualquer viewport — 96px de respiro numa tela de 375px. Aqui ele é responsivo.
 */
const sectionVariants = cva("relative", {
  variants: {
    tone: {
      light: "bg-surface text-fg",
      muted: "bg-surface-muted text-fg",
      /** A classe `on-dark` ajusta a cor do anel de foco (ver globals.css). */
      dark: "on-dark bg-surface-dark text-on-dark",
    },
    spacing: {
      none: "",
      tight: "py-12 lg:py-16",
      default: "py-16 lg:py-24",
      hero: "py-20 lg:py-28",
    },
  },
  defaultVariants: { tone: "light", spacing: "default" },
});

export interface SectionProps extends VariantProps<typeof sectionVariants> {
  as?: ElementType;
  className?: string;
  id?: string;
  /** Aplica o brilho radial laranja usado nas seções escuras de CTA. */
  glow?: boolean;
  children: ReactNode;
}

export function Section({
  as: Tag = "section",
  tone,
  spacing,
  glow = false,
  className,
  id,
  children,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        sectionVariants({ tone, spacing }),
        glow && "overflow-hidden",
        className,
      )}
    >
      {glow ? (
        <div className="glow-brand pointer-events-none absolute inset-0 opacity-10" />
      ) : null}
      {glow ? <div className="relative">{children}</div> : children}
    </Tag>
  );
}
