import { cva, type VariantProps } from "class-variance-authority";
import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Largura máxima e padding horizontal do site inteiro.
 * Nenhuma página define isso por conta própria.
 */
const containerVariants = cva("mx-auto w-full px-6", {
  variants: {
    width: {
      /** Prosa de artigo — respeita a medida de leitura (~75 caracteres). */
      prose: "max-w-3xl",
      /** Blocos centrados: CTA, depoimento, formulário. */
      narrow: "max-w-5xl",
      /** Padrão do site. */
      default: "max-w-7xl",
    },
  },
  defaultVariants: { width: "default" },
});

export interface ContainerProps extends VariantProps<typeof containerVariants> {
  as?: ElementType;
  className?: string;
  children: ReactNode;
}

export function Container({
  as: Tag = "div",
  width,
  className,
  children,
}: ContainerProps) {
  return <Tag className={cn(containerVariants({ width }), className)}>{children}</Tag>;
}
