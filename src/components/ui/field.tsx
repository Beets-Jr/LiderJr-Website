import { cva, type VariantProps } from "class-variance-authority";
import type { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

/**
 * Campos de formulário.
 *
 * No protótipo os inputs usavam placeholder no lugar de `<label>`, não tinham
 * atributo `name`, não tinham validação e o único `focus:` do arquivo inteiro
 * estava no formulário escuro. Aqui todo campo tem label associada, estado de
 * erro anunciado por `aria-describedby` e foco visível.
 */
const controlVariants = cva(
  [
    "font-body w-full rounded-md border px-4 py-3 text-sm transition-colors",
    "disabled:cursor-not-allowed disabled:opacity-60",
  ],
  {
    variants: {
      tone: {
        light:
          "bg-surface-subtle border-border text-fg placeholder:text-fg-muted focus:border-brand",
        onDark:
          "bg-surface-dark-2 border-border-on-dark text-on-dark placeholder:text-on-dark-faint focus:border-brand",
      },
      invalid: {
        true: "border-danger focus:border-danger",
        false: "",
      },
    },
    defaultVariants: { tone: "light", invalid: false },
  },
);

type FieldTone = "light" | "onDark";

export interface FieldProps {
  /** Usado como `id` do controle e `for` da label. */
  id: string;
  label: string;
  tone?: FieldTone;
  required?: boolean;
  error?: string;
  className?: string;
  children: ReactNode;
}

/** Envelope com label e mensagem de erro. Sempre use em volta de Input/Textarea. */
export function Field({
  id,
  label,
  tone = "light",
  required = false,
  error,
  className,
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className={cn(
          "font-body text-sm font-semibold",
          tone === "light" ? "text-fg" : "text-on-dark",
        )}
      >
        {label}
        {required ? (
          <span aria-hidden="true" className="text-brand">
            {" *"}
          </span>
        ) : null}
      </label>
      {children}
      {error ? (
        <p
          id={`${id}-erro`}
          role="alert"
          className={cn(
            "font-body text-xs font-medium",
            tone === "light" ? "text-danger" : "text-brand",
          )}
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}

type ControlOwnProps = VariantProps<typeof controlVariants> & {
  id: string;
  className?: string;
};

export type InputProps = ControlOwnProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "className" | "id">;

export function Input({ id, tone, invalid, className, ...props }: InputProps) {
  return (
    <input
      id={id}
      aria-invalid={invalid ? true : undefined}
      aria-describedby={invalid ? `${id}-erro` : undefined}
      className={cn(controlVariants({ tone, invalid }), className)}
      {...props}
    />
  );
}

export type TextareaProps = ControlOwnProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "className" | "id">;

export function Textarea({
  id,
  tone,
  invalid,
  className,
  rows = 5,
  ...props
}: TextareaProps) {
  return (
    <textarea
      id={id}
      rows={rows}
      aria-invalid={invalid ? true : undefined}
      aria-describedby={invalid ? `${id}-erro` : undefined}
      className={cn(controlVariants({ tone, invalid }), "resize-y", className)}
      {...props}
    />
  );
}
