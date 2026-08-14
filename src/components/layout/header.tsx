"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { LinkDeNavegacao } from "@/types/site";
import { Logo } from "./logo";

export interface HeaderProps {
  nome: string;
  navegacao: LinkDeNavegacao[];
  ctaDoMenu: LinkDeNavegacao;
  /** Submenus indexados pelo href do item que os abre, ex.: { "/servicos": [...] }. */
  submenus?: Record<string, LinkDeNavegacao[]>;
}

function estaAtivo(pathname: string, href: string): boolean {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Header({ nome, navegacao, ctaDoMenu, submenus = {} }: HeaderProps) {
  const pathname = usePathname();
  const [menuAberto, setMenuAberto] = useState(false);

  // Fecha o menu mobile ao navegar. Ajustar o estado durante o render é o padrão
  // recomendado pelo React para reagir a uma mudança de prop — um useEffect aqui
  // provocaria um render em cascata.
  const [pathnameAnterior, setPathnameAnterior] = useState(pathname);
  if (pathname !== pathnameAnterior) {
    setPathnameAnterior(pathname);
    setMenuAberto(false);
  }

  // Trava o scroll do body enquanto o menu mobile está aberto.
  useEffect(() => {
    if (!menuAberto) return;
    const anterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = anterior;
    };
  }, [menuAberto]);

  return (
    <header className="on-dark bg-surface-dark/95 border-border-on-dark fixed inset-x-0 top-0 z-50 h-16 border-b backdrop-blur">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        <Logo nome={nome} />

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navegacao.map((item) => {
              const submenu = submenus[item.href];
              return (
                <li key={item.href}>
                  {submenu && submenu.length > 0 ? (
                    <ItemComSubmenu
                      item={item}
                      submenu={submenu}
                      ativo={estaAtivo(pathname, item.href)}
                    />
                  ) : (
                    <NavLink item={item} ativo={estaAtivo(pathname, item.href)} />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink
            href={ctaDoMenu.href}
            variant="primary"
            size="sm"
            className="hidden sm:inline-flex"
          >
            {ctaDoMenu.label}
          </ButtonLink>

          <button
            type="button"
            onClick={() => setMenuAberto((aberto) => !aberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            className="text-on-dark hover:bg-surface-dark-3 rounded-sm p-2 transition-colors lg:hidden"
          >
            {menuAberto ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {menuAberto ? (
        <MenuMobile
          id="menu-mobile"
          navegacao={navegacao}
          ctaDoMenu={ctaDoMenu}
          submenus={submenus}
          pathname={pathname}
          onFechar={() => setMenuAberto(false)}
        />
      ) : null}
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/* Desktop                                                                     */
/* -------------------------------------------------------------------------- */

function NavLink({ item, ativo }: { item: LinkDeNavegacao; ativo: boolean }) {
  return (
    <Link
      href={item.href}
      aria-current={ativo ? "page" : undefined}
      className={cn(
        "font-body block rounded-sm px-3 py-2 text-sm font-semibold transition-colors",
        ativo
          ? "text-brand"
          : "text-on-dark-muted hover:text-on-dark hover:bg-surface-dark-3",
      )}
    >
      {item.label}
    </Link>
  );
}

/**
 * No protótipo este dropdown abria só por `group-hover` em CSS — quem navega
 * por teclado não conseguia alcançá-lo. Aqui ele abre por hover E por clique,
 * anuncia o estado com `aria-expanded` e fecha com Escape ou clique fora.
 */
function ItemComSubmenu({
  item,
  submenu,
  ativo,
}: {
  item: LinkDeNavegacao;
  submenu: LinkDeNavegacao[];
  ativo: boolean;
}) {
  const [aberto, setAberto] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const idSubmenu = `submenu-${item.href.replace(/\W/g, "-")}`;

  const fechar = useCallback(() => setAberto(false), []);

  useEffect(() => {
    if (!aberto) return;

    function aoClicarFora(evento: MouseEvent) {
      if (!containerRef.current?.contains(evento.target as Node)) fechar();
    }
    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === "Escape") fechar();
    }

    document.addEventListener("mousedown", aoClicarFora);
    document.addEventListener("keydown", aoTeclar);
    return () => {
      document.removeEventListener("mousedown", aoClicarFora);
      document.removeEventListener("keydown", aoTeclar);
    };
  }, [aberto, fechar]);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setAberto(true)}
      onMouseLeave={fechar}
      onBlur={(evento) => {
        if (!evento.currentTarget.contains(evento.relatedTarget)) fechar();
      }}
    >
      <div className="flex items-center">
        <Link
          href={item.href}
          aria-current={ativo ? "page" : undefined}
          className={cn(
            "font-body rounded-sm py-2 pl-3 text-sm font-semibold transition-colors",
            ativo ? "text-brand" : "text-on-dark-muted hover:text-on-dark",
          )}
        >
          {item.label}
        </Link>
        <button
          type="button"
          onClick={() => setAberto((estava) => !estava)}
          aria-expanded={aberto}
          aria-controls={idSubmenu}
          aria-label={`${aberto ? "Fechar" : "Abrir"} submenu de ${item.label}`}
          className={cn(
            "rounded-sm py-2 pr-2 pl-1 transition-colors",
            ativo ? "text-brand" : "text-on-dark-muted hover:text-on-dark",
          )}
        >
          <ChevronDown
            size={14}
            aria-hidden="true"
            className={cn("transition-transform", aberto && "rotate-180")}
          />
        </button>
      </div>

      <ul
        id={idSubmenu}
        hidden={!aberto}
        className="bg-surface-dark border-border-on-dark absolute top-full left-0 w-72 rounded-md border py-2 shadow-lg"
      >
        {submenu.map((sub) => (
          <li key={sub.href}>
            <Link
              href={sub.href}
              className="font-body text-on-dark-muted hover:text-on-dark hover:bg-surface-dark-3 block px-4 py-2 text-sm transition-colors"
            >
              {sub.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Mobile                                                                      */
/* -------------------------------------------------------------------------- */

function MenuMobile({
  id,
  navegacao,
  ctaDoMenu,
  submenus,
  pathname,
  onFechar,
}: {
  id: string;
  navegacao: LinkDeNavegacao[];
  ctaDoMenu: LinkDeNavegacao;
  submenus: Record<string, LinkDeNavegacao[]>;
  pathname: string;
  onFechar: () => void;
}) {
  const [submenuAberto, setSubmenuAberto] = useState<string | null>(null);

  useEffect(() => {
    function aoTeclar(evento: KeyboardEvent) {
      if (evento.key === "Escape") onFechar();
    }
    document.addEventListener("keydown", aoTeclar);
    return () => document.removeEventListener("keydown", aoTeclar);
  }, [onFechar]);

  return (
    <div
      id={id}
      className="bg-surface-dark border-border-on-dark h-[calc(100dvh-4rem)] overflow-y-auto border-t lg:hidden"
    >
      <nav aria-label="Navegação principal (mobile)" className="px-6 py-6">
        <ul className="flex flex-col gap-1">
          {navegacao.map((item) => {
            const submenu = submenus[item.href];
            const ativo = estaAtivo(pathname, item.href);
            const expandido = submenuAberto === item.href;
            const idSubmenu = `submenu-mobile-${item.href.replace(/\W/g, "-")}`;

            return (
              <li key={item.href}>
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    aria-current={ativo ? "page" : undefined}
                    className={cn(
                      "font-body flex-1 rounded-sm px-3 py-3 font-semibold transition-colors",
                      ativo ? "text-brand" : "text-on-dark-muted hover:text-on-dark",
                    )}
                  >
                    {item.label}
                  </Link>

                  {submenu && submenu.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => setSubmenuAberto(expandido ? null : item.href)}
                      aria-expanded={expandido}
                      aria-controls={idSubmenu}
                      aria-label={`${expandido ? "Fechar" : "Abrir"} submenu de ${item.label}`}
                      className="text-on-dark-muted hover:text-on-dark rounded-sm p-3 transition-colors"
                    >
                      <ChevronDown
                        size={16}
                        aria-hidden="true"
                        className={cn(
                          "transition-transform",
                          expandido && "rotate-180",
                        )}
                      />
                    </button>
                  ) : null}
                </div>

                {submenu && submenu.length > 0 ? (
                  <ul id={idSubmenu} hidden={!expandido} className="pb-2 pl-4">
                    {submenu.map((sub) => (
                      <li key={sub.href}>
                        <Link
                          href={sub.href}
                          className="font-body text-on-dark-faint hover:text-on-dark block rounded-sm px-3 py-2 text-sm transition-colors"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>

        <ButtonLink
          href={ctaDoMenu.href}
          variant="primary"
          size="md"
          fullWidth
          className="mt-6"
        >
          {ctaDoMenu.label}
        </ButtonLink>
      </nav>
    </div>
  );
}
