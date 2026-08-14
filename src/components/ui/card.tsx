import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * A superfície elevada de todo o site.
 *
 * No protótipo o mesmo objeto semântico aparecia com 3 raios diferentes
 * (`rounded-xl`, `rounded-2xl`, `rounded-3xl`), 5 degraus de sombra e 4 receitas
 * de hover. Aqui há um raio, três tons e um comportamento de hover.
 */
const cardVariants = cva("rounded-lg", {
  variants: {
    tone: {
      /** Padrão sobre fundo claro. */
      default: "bg-surface border border-border shadow-sm",
      /** Sobre fundo `surface-muted`, para não sumir. */
      raised: "bg-surface border border-border shadow-md",
      /** Sobre superfície escura. */
      onDark: "on-dark bg-surface-dark-2 border border-border-on-dark text-on-dark",
      /** Painel escuro dentro de uma seção clara (CTA em card). */
      invertido: "on-dark bg-surface-dark text-on-dark",
    },
    padding: {
      none: "",
      sm: "p-5",
      md: "p-6",
      lg: "p-8",
      xl: "p-8 sm:p-12",
    },
    /** Eleva e destaca a borda no hover. Use em cards clicáveis. */
    interactive: {
      true: "transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:shadow-lg",
      false: "",
    },
  },
  compoundVariants: [
    { interactive: true, tone: "default", className: "hover:border-brand" },
    { interactive: true, tone: "raised", className: "hover:border-brand" },
    {
      interactive: true,
      tone: "onDark",
      className: "hover:border-border-on-dark-strong",
    },
  ],
  defaultVariants: { tone: "default", padding: "lg", interactive: false },
});

export interface CardProps extends VariantProps<typeof cardVariants> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Card({
  as: Tag = "div",
  tone,
  padding,
  interactive,
  className,
  children,
}: CardProps) {
  return (
    <Tag className={cn(cardVariants({ tone, padding, interactive }), className)}>
      {children}
    </Tag>
  );
}
