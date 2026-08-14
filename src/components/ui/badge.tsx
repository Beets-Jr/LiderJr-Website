import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Pílulas de categoria, tags e rótulos de tipo.
 * O protótipo tinha 6 receitas concorrentes, incluindo quatro famílias inteiras
 * da paleta default do Tailwind (emerald, blue, purple, rose) só nos Materiais.
 */
const badgeVariants = cva(
  "font-body inline-flex items-center gap-1.5 rounded-full font-medium whitespace-nowrap",
  {
    variants: {
      tone: {
        /** Neutra sobre fundo claro. */
        neutral: "bg-surface-muted text-fg border border-border",
        /** Destaque da marca. */
        brand: "bg-brand/10 text-brand border border-brand/20",
        /** Sólida — categoria ativa num filtro. */
        brandSolid: "bg-brand text-brand-fg border border-brand",
        /** Sobre superfície escura. */
        onDark: "bg-surface-dark-3 text-on-dark border border-border-on-dark",
      },
      size: {
        sm: "px-2.5 py-1 text-xs",
        md: "px-4 py-1.5 text-sm",
      },
    },
    defaultVariants: { tone: "neutral", size: "sm" },
  },
);

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  children: ReactNode;
}

export function Badge({ tone, size, className, children }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ tone, size }), className)}>{children}</span>
  );
}

export { badgeVariants };
