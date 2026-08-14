import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

/**
 * Todo botão e CTA do site.
 *
 * No protótipo havia 47 botões em 6 estilos, e só o sólido laranja aparecia em
 * 8 variações — 5 combinações de padding, 3 raios (`rounded` / `lg` / `xl`) e
 * dois pesos de fonte. Aqui existem 6 variantes × 3 tamanhos, e nada mais.
 */
export const buttonVariants = cva(
  [
    "font-body inline-flex items-center justify-center gap-2 rounded-md",
    "font-semibold whitespace-nowrap transition-colors",
    "disabled:pointer-events-none disabled:opacity-50",
  ],
  {
    variants: {
      variant: {
        /** CTA principal. */
        primary: "bg-brand text-brand-fg hover:bg-brand-hover active:bg-brand-hover",
        /** Ação secundária sobre fundo claro. */
        secondary: "bg-surface-muted text-fg hover:bg-brand hover:text-brand-fg",
        /** Contorno sobre fundo claro. */
        outline:
          "border border-border-strong text-fg hover:border-brand hover:text-brand",
        /** Contorno sobre superfície escura — o par do `primary` nas seções dark. */
        outlineOnDark:
          "border border-border-on-dark-strong text-on-dark hover:bg-surface-dark-3",
        /** Sem cromo, sobre fundo claro. */
        ghost: "text-fg hover:bg-surface-muted",
        /** Link textual laranja com seta. */
        link: "text-brand hover:text-brand-hover rounded-sm px-0 py-0 hover:underline underline-offset-4",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-sm",
        lg: "px-8 py-4 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    compoundVariants: [
      // A variante `link` não tem caixa, então ignora o padding do tamanho.
      { variant: "link", size: "sm", className: "px-0 py-0" },
      { variant: "link", size: "md", className: "px-0 py-0 text-sm" },
      { variant: "link", size: "lg", className: "px-0 py-0 text-base" },
    ],
    defaultVariants: { variant: "primary", size: "lg", fullWidth: false },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: ReactNode;
};

export type ButtonProps = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant,
  size,
  fullWidth,
  className,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size, fullWidth }), className)}
      {...props}
    >
      {children}
    </button>
  );
}

export type ButtonLinkProps = ButtonBaseProps & {
  href: string;
  /** Abre em nova aba e adiciona rel de segurança. */
  external?: boolean;
  "aria-label"?: string;
};

/**
 * Mesma aparência do `Button`, mas navega de verdade.
 * No protótipo toda navegação era `<button onClick>` — sem middle-click,
 * sem abrir em nova aba, invisível para buscadores.
 */
export function ButtonLink({
  href,
  external = false,
  variant,
  size,
  fullWidth,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  const classes = cn(buttonVariants({ variant, size, fullWidth }), className);

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
