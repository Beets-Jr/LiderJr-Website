import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Fonte única de verdade do texto corrido.
 * No protótipo havia 120 parágrafos com 71 strings de classe distintas, e a cor
 * alternava entre três valores sem regra.
 */
const textVariants = cva("", {
  variants: {
    size: {
      xs: "text-xs leading-relaxed",
      sm: "text-sm leading-relaxed",
      base: "text-base leading-relaxed",
      lg: "text-lg leading-relaxed",
    },
    tone: {
      default: "text-fg",
      muted: "text-fg-muted",
      brand: "text-brand",
      onDark: "text-on-dark",
      onDarkMuted: "text-on-dark-muted",
      onDarkFaint: "text-on-dark-faint",
      inherit: "",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    /** Citações e depoimentos usam a serifada (DM Serif Display). */
    family: {
      body: "font-body",
      serif: "font-serif",
      heading: "font-heading",
    },
  },
  defaultVariants: {
    size: "base",
    tone: "default",
    weight: "normal",
    family: "body",
  },
});

export interface TextProps extends VariantProps<typeof textVariants> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Text({
  as: Tag = "p",
  size,
  tone,
  weight,
  family,
  className,
  children,
}: TextProps) {
  return (
    <Tag className={cn(textVariants({ size, tone, weight, family }), className)}>
      {children}
    </Tag>
  );
}

/**
 * O rótulo pequeno em caixa-alta acima dos títulos de seção.
 * No protótipo aparecia 29× em 4 ordenações diferentes das mesmas classes.
 */
export function Eyebrow({
  tone = "brand",
  className,
  children,
}: {
  tone?: "brand" | "onDarkFaint";
  className?: string;
  children: ReactNode;
}) {
  return (
    <p
      className={cn(
        "font-body text-xs font-semibold tracking-widest uppercase",
        tone === "brand" ? "text-brand" : "text-on-dark-faint",
        className,
      )}
    >
      {children}
    </p>
  );
}
