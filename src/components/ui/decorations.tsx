import { cva, type VariantProps } from "class-variance-authority";
import { Star, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Peças pequenas e repetitivas que apareciam copiadas por todo o protótipo.
 */

/* -------------------------------------------------------------------------- */
/* IconTile — o quadrado laranja claro com ícone dentro                        */
/* -------------------------------------------------------------------------- */

const iconTileVariants = cva("inline-flex shrink-0 items-center justify-center", {
  variants: {
    tone: {
      brandSoft: "bg-brand/10 text-brand",
      brandSolid: "bg-brand text-brand-fg",
      onDark: "bg-surface-dark-3 text-brand",
    },
    size: {
      sm: "h-9 w-9 rounded-sm",
      md: "h-12 w-12 rounded-md",
      lg: "h-14 w-14 rounded-md",
    },
  },
  defaultVariants: { tone: "brandSoft", size: "lg" },
});

const ICON_PX = { sm: 16, md: 22, lg: 26 } as const;

export interface IconTileProps extends VariantProps<typeof iconTileVariants> {
  icon: LucideIcon;
  className?: string;
}

export function IconTile({ icon: Icon, tone, size, className }: IconTileProps) {
  return (
    <span className={cn(iconTileVariants({ tone, size }), className)}>
      <Icon size={ICON_PX[size ?? "lg"]} aria-hidden="true" />
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Avatar — círculo com iniciais (não há fotos de pessoas no conteúdo)         */
/* -------------------------------------------------------------------------- */

const avatarVariants = cva(
  "font-heading inline-flex shrink-0 items-center justify-center rounded-full font-bold",
  {
    variants: {
      tone: {
        brandSoft: "bg-brand/10 text-brand",
        brandSolid: "bg-brand text-brand-fg",
      },
      size: {
        sm: "h-8 w-8 text-xs",
        md: "h-11 w-11 text-sm",
      },
    },
    defaultVariants: { tone: "brandSoft", size: "md" },
  },
);

export interface AvatarProps extends VariantProps<typeof avatarVariants> {
  /** Iniciais, ex.: "RM". */
  iniciais: string;
  className?: string;
}

export function Avatar({ iniciais, tone, size, className }: AvatarProps) {
  return (
    <span aria-hidden="true" className={cn(avatarVariants({ tone, size }), className)}>
      {iniciais}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* StepMarker — o círculo numerado das timelines de processo                   */
/* -------------------------------------------------------------------------- */

export function StepMarker({
  numero,
  className,
}: {
  numero: string;
  className?: string;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "font-heading inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full",
        "bg-surface border-surface-muted text-fg border-4 text-sm font-bold shadow-md",
        "group-hover:border-brand group-hover:bg-brand group-hover:text-brand-fg transition-colors",
        className,
      )}
    >
      {numero}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/* Estrelas — a nota 5 de 5 acima dos depoimentos                              */
/* -------------------------------------------------------------------------- */

/**
 * `role="img"` faz o leitor de tela anunciar o conjunto como uma imagem só,
 * lendo o `aria-label`. Numa <div> sem papel, o rótulo era ignorado.
 */
export function Estrelas({
  tamanho = 16,
  className,
}: {
  tamanho?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("flex gap-1", className)}
      role="img"
      aria-label="Avaliação: 5 de 5 estrelas"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={tamanho}
          className="text-brand fill-brand"
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
