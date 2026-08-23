"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ComponentProps } from "react";

/**
 * Link de navegação que também funciona quando aponta para a página atual.
 *
 * O Next não navega para a rota em que já se está: o clique simplesmente não
 * faz nada. Quem clica em "Serviços" estando em /servicos espera ir para o
 * começo da página — que é o que uma navegação de verdade faria. Aqui o clique
 * na própria página vira uma rolagem até o topo.
 *
 * O salto é instantâneo de propósito: é o mesmo comportamento de ir para
 * qualquer outra página do site.
 *
 * Aceita as mesmas props do `next/link` e repassa todas — inclusive as de
 * acessibilidade, como `aria-label` e `aria-current`.
 */
export function LinkDaMesmaPagina({
  href,
  onClick,
  children,
  ...resto
}: ComponentProps<typeof Link>) {
  const pathname = usePathname();
  const jaEstaAqui = typeof href === "string" && pathname === href;

  return (
    <Link
      href={href}
      onClick={(evento) => {
        if (jaEstaAqui) {
          evento.preventDefault();
          window.scrollTo({ top: 0 });
        }
        // Roda nos dois casos: é por aqui que o menu mobile se fecha, inclusive
        // quando o clique não gera navegação nenhuma.
        onClick?.(evento);
      }}
      {...resto}
    >
      {children}
    </Link>
  );
}
