import Link from "next/link";
import type { ReactNode } from "react";

/**
 * O link do título de um card, esticado por cima do card inteiro com
 * `after:absolute` — o card precisa ter `relative`. Assim o card todo é
 * clicável, mas existe um link só, com o título como texto.
 *
 * Sem `href` (conteúdo sem página própria), o título aparece como texto puro.
 */
export function LinkEsticado({
  href,
  tabIndex,
  children,
}: {
  href: string | undefined;
  /** -1 tira o link da ordem do teclado (ex.: cópias escondidas do carrossel). */
  tabIndex?: number;
  children: ReactNode;
}) {
  if (!href) return children;

  return (
    <Link
      href={href}
      tabIndex={tabIndex}
      className="rounded-sm after:absolute after:inset-0"
    >
      {children}
    </Link>
  );
}
