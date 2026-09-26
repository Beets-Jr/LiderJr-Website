"use client";

import { ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { GrupoDeLinks, LinkDeNavegacao } from "@/types/site";
import { LinkDaMesmaPagina } from "./link-da-mesma-pagina";
import { Logo } from "./logo";

export interface HeaderProps {
  nome: string;
  navegacao: LinkDeNavegacao[];
  ctaDoMenu: LinkDeNavegacao;
  /**
   * Submenus indexados pelo href do item que os abre, ex.: { "/servicos": [...] }.
   * Cada entrada é um grupo com seus próprios links — passar o mouse no item
   * abre os grupos, passar o mouse num grupo abre os links dele ao lado.
   */
  submenus?: Record<string, GrupoDeLinks[]>;
}

/**
 * O CTA do cabeçalho é mais quadrado que o botão padrão do sistema (`rounded-md`,
 * 12px): aqui ele usa o degrau `rounded-sm`, de 8px. É o único botão do site com
 * esse raio — pedido do cliente para o header.
 */
const raioDoCta = "rounded-sm";

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
    <header className="on-dark bg-surface-dark border-border-on-dark fixed inset-x-0 top-0 z-50 h-16 border-b">
      <Container className="flex h-full items-center justify-between">
        <Logo nome={nome} tone="brand" />

        {/* Navegação e CTA formam um bloco único encostado à direita — o
            `justify-between` acima só separa a logo desse bloco. */}
        <div className="flex items-center gap-4">
          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-3">
              {navegacao.map((item) => {
                const grupos = submenus[item.href];
                return (
                  <li key={item.href}>
                    {grupos && grupos.length > 0 ? (
                      <ItemComSubmenu
                        item={item}
                        grupos={grupos}
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

          {/* Usa as classes do botão do sistema em vez do <ButtonLink> para
              poder levar ao topo quando já estamos em /fale-conosco. */}
          <LinkDaMesmaPagina
            href={ctaDoMenu.href}
            className={cn(
              buttonVariants({ variant: "primary", size: "sm" }),
              "hidden sm:inline-flex",
              raioDoCta,
            )}
          >
            {ctaDoMenu.label}
          </LinkDaMesmaPagina>

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
      </Container>

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
    <LinkDaMesmaPagina
      href={item.href}
      aria-current={ativo ? "page" : undefined}
      className={cn(
        // `transition-colors` no Tailwind v4 inclui `outline-color`: o anel de
        // foco nascia na cor do texto e só virava branco 200ms depois. Aqui a
        // transição cobre só o que precisa, e o anel já aparece branco.
        "font-body block rounded-sm px-3 py-2 text-sm font-semibold transition-[color,background-color]",
        // O item ativo carrega a mesma placa do hover, sempre acesa: a cor da
        // marca sozinha era discreta demais para marcar a página atual.
        ativo
          ? "text-brand bg-surface-dark-3"
          : "text-on-dark-muted hover:text-on-dark hover:bg-surface-dark-3",
      )}
    >
      {item.label}
    </LinkDaMesmaPagina>
  );
}

/**
 * No protótipo este dropdown abria só por `group-hover` em CSS — quem navega
 * por teclado não conseguia alcançá-lo. Aqui ele abre por hover E por clique,
 * anuncia o estado com `aria-expanded` e fecha com Escape ou clique fora.
 *
 * Tem dois níveis: o primeiro lista os GRUPOS de serviços (sem página própria,
 * por isso cada grupo é um botão que só abre/fecha, nunca um link); passar o
 * mouse ou ativar um grupo abre o segundo nível, com os serviços dele, ao lado.
 */
function ItemComSubmenu({
  item,
  grupos,
  ativo,
}: {
  item: LinkDeNavegacao;
  grupos: GrupoDeLinks[];
  ativo: boolean;
}) {
  const [aberto, setAberto] = useState(false);
  const [grupoAberto, setGrupoAberto] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const idSubmenu = `submenu-${item.href.replace(/\W/g, "-")}`;

  const fechar = useCallback(() => {
    setAberto(false);
    setGrupoAberto(null);
  }, []);
  const fecharGrupo = useCallback(() => setGrupoAberto(null), []);

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
      {/* Link e seta são dois alvos de clique, mas uma peça só na tela: a placa
          de hover fica no container e os filhos reagem por `group-hover`, para
          que o item se acenda inteiro como qualquer outro link da navegação.

          O anel de foco segue a mesma lógica: quem recebe o teclado é o link ou
          o botão, mas o anel é desenhado aqui, em volta dos dois — senão ele
          cerca só o texto e deixa a seta de fora. Branco porque o cabeçalho é
          superfície escura, igual à regra `.on-dark :focus-visible` do
          globals.css, que não alcança este container por ele não ser focável. */}
      <div
        className={cn(
          "group flex items-center rounded-sm transition-[color,background-color]",
          "has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-white",
          ativo ? "bg-surface-dark-3" : "hover:bg-surface-dark-3",
        )}
      >
        <LinkDaMesmaPagina
          href={item.href}
          aria-current={ativo ? "page" : undefined}
          className={cn(
            "font-body rounded-sm py-2 pl-3 text-sm font-semibold transition-[color,background-color] focus-visible:outline-none",
            ativo ? "text-brand" : "text-on-dark-muted group-hover:text-on-dark",
          )}
        >
          {item.label}
        </LinkDaMesmaPagina>
        <button
          type="button"
          onClick={() => setAberto((estava) => !estava)}
          aria-expanded={aberto}
          aria-controls={idSubmenu}
          aria-label={`${aberto ? "Fechar" : "Abrir"} submenu de ${item.label}`}
          className={cn(
            "rounded-sm py-2 pr-3 pl-1 transition-[color,background-color] focus-visible:outline-none",
            ativo ? "text-brand" : "text-on-dark-muted group-hover:text-on-dark",
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
        {grupos.map((grupo, indice) => (
          <ItemDeGrupo
            key={grupo.titulo}
            grupo={grupo}
            id={`${idSubmenu}-grupo-${indice}`}
            aberto={grupoAberto === grupo.titulo}
            onAbrir={() => setGrupoAberto(grupo.titulo)}
            onFecharGrupo={fecharGrupo}
            onClicarServico={fechar}
          />
        ))}
      </ul>
    </div>
  );
}

/**
 * Um grupo dentro do submenu de "Serviços". Sem página própria — o botão só
 * abre/fecha o segundo nível (os serviços do grupo), nunca navega.
 */
function ItemDeGrupo({
  grupo,
  id,
  aberto,
  onAbrir,
  onFecharGrupo,
  onClicarServico,
}: {
  grupo: GrupoDeLinks;
  id: string;
  aberto: boolean;
  onAbrir: () => void;
  onFecharGrupo: () => void;
  onClicarServico: () => void;
}) {
  return (
    <li className="relative" onMouseEnter={onAbrir}>
      <button
        type="button"
        onClick={() => (aberto ? onFecharGrupo() : onAbrir())}
        aria-expanded={aberto}
        aria-controls={id}
        aria-label={`${aberto ? "Fechar" : "Abrir"} submenu de ${grupo.titulo}`}
        className="font-body text-on-dark-muted hover:text-on-dark hover:bg-surface-dark-3 flex w-full items-center justify-between gap-2 px-4 py-2 text-left text-sm transition-colors focus-visible:outline-none"
      >
        {grupo.titulo}
        <ChevronRight size={14} aria-hidden="true" />
      </button>

      {/* Abre ao lado (`left-full`), não embaixo — é o segundo nível do flyout. */}
      <ul
        id={id}
        hidden={!aberto}
        className="bg-surface-dark border-border-on-dark absolute top-0 left-full ml-1 w-72 rounded-md border py-2 shadow-lg"
      >
        {grupo.links.map((link) => (
          <li key={link.label}>
            <LinkDaMesmaPagina
              href={link.href}
              // Clicar no serviço fecha os dois níveis — sem isto o dropdown
              // ficaria aberto enquanto a página rola para o topo.
              onClick={onClicarServico}
              className="font-body text-on-dark-muted hover:text-on-dark hover:bg-surface-dark-3 block px-4 py-2 text-sm transition-colors"
            >
              {link.label}
            </LinkDaMesmaPagina>
          </li>
        ))}
      </ul>
    </li>
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
  submenus: Record<string, GrupoDeLinks[]>;
  pathname: string;
  onFechar: () => void;
}) {
  const [submenuAberto, setSubmenuAberto] = useState<string | null>(null);
  const [grupoMobileAberto, setGrupoMobileAberto] = useState<string | null>(null);

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
            const grupos = submenus[item.href];
            const ativo = estaAtivo(pathname, item.href);
            const expandido = submenuAberto === item.href;
            const idSubmenu = `submenu-mobile-${item.href.replace(/\W/g, "-")}`;

            return (
              <li key={item.href}>
                <div
                  className={cn(
                    "flex items-center justify-between rounded-sm",
                    ativo && "bg-surface-dark-3",
                  )}
                >
                  <LinkDaMesmaPagina
                    href={item.href}
                    aria-current={ativo ? "page" : undefined}
                    // Clicar na página atual não navega, e é a navegação que
                    // fecha o menu — então aqui o fechamento é explícito.
                    onClick={onFechar}
                    className={cn(
                      "font-body flex-1 rounded-sm px-3 py-3 font-semibold transition-colors",
                      ativo ? "text-brand" : "text-on-dark-muted hover:text-on-dark",
                    )}
                  >
                    {item.label}
                  </LinkDaMesmaPagina>

                  {grupos && grupos.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => {
                        setSubmenuAberto(expandido ? null : item.href);
                        // Reabrir "Serviços" nunca deve mostrar um grupo que
                        // ficou expandido da vez anterior.
                        setGrupoMobileAberto(null);
                      }}
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

                {grupos && grupos.length > 0 ? (
                  <ul id={idSubmenu} hidden={!expandido} className="pb-2 pl-4">
                    {grupos.map((grupo, indice) => {
                      const idGrupo = `${idSubmenu}-grupo-${indice}`;
                      const chaveDoGrupo = `${item.href}-${indice}`;
                      const grupoExpandido = grupoMobileAberto === chaveDoGrupo;

                      return (
                        <li key={grupo.titulo}>
                          {/* Sem página própria: o grupo é só um botão que
                              abre/fecha os serviços dele, nunca um link. */}
                          <button
                            type="button"
                            onClick={() =>
                              setGrupoMobileAberto(grupoExpandido ? null : chaveDoGrupo)
                            }
                            aria-expanded={grupoExpandido}
                            aria-controls={idGrupo}
                            aria-label={`${grupoExpandido ? "Fechar" : "Abrir"} submenu de ${grupo.titulo}`}
                            className="font-body text-on-dark-faint hover:text-on-dark flex w-full items-center justify-between gap-2 rounded-sm px-3 py-2 text-sm font-semibold transition-colors"
                          >
                            {grupo.titulo}
                            <ChevronDown
                              size={14}
                              aria-hidden="true"
                              className={cn(
                                "transition-transform",
                                grupoExpandido && "rotate-180",
                              )}
                            />
                          </button>

                          <ul
                            id={idGrupo}
                            hidden={!grupoExpandido}
                            className="pb-2 pl-4"
                          >
                            {grupo.links.map((link) => (
                              <li key={link.label}>
                                <LinkDaMesmaPagina
                                  href={link.href}
                                  onClick={onFechar}
                                  className="font-body text-on-dark-faint hover:text-on-dark block rounded-sm px-3 py-2 text-sm transition-colors"
                                >
                                  {link.label}
                                </LinkDaMesmaPagina>
                              </li>
                            ))}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>

        <LinkDaMesmaPagina
          href={ctaDoMenu.href}
          onClick={onFechar}
          className={cn(
            buttonVariants({ variant: "primary", size: "md", fullWidth: true }),
            "mt-6",
            raioDoCta,
          )}
        >
          {ctaDoMenu.label}
        </LinkDaMesmaPagina>
      </nav>
    </div>
  );
}
