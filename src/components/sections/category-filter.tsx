"use client";

import { Search } from "lucide-react";
import { Card, Container, Heading, Text } from "@/components/ui";
import { badgeVariants } from "@/components/ui/badge";
import { cn } from "@/lib/cn";

/**
 * A barra de categorias que fica grudada abaixo do menu.
 * No protótipo este bloco estava copiado nas páginas de Cases, Materiais e
 * Blog, e as três listavam uma categoria "Inovação" que não batia com nenhum
 * item. Aqui as opções vêm do próprio conteúdo (lib/categorias.ts).
 */
export function CategoryFilter({
  categorias,
  ativa,
  onSelecionar,
  rotuloAcessivel,
}: {
  categorias: string[];
  ativa: string;
  onSelecionar: (categoria: string) => void;
  rotuloAcessivel: string;
}) {
  return (
    <BarraDeFiltros
      fileiras={[{ opcoes: categorias, ativa, onSelecionar, rotuloAcessivel }]}
    />
  );
}

export interface CampoDeBusca {
  valor: string;
  onMudar: (valor: string) => void;
  rotulo: string;
  placeholder: string;
}

export interface FileiraDeFiltro {
  /** Nome visível à esquerda dos botões. Ex.: "Tipo". Opcional. */
  rotulo?: string;
  opcoes: string[];
  ativa: string;
  onSelecionar: (opcao: string) => void;
  rotuloAcessivel: string;
}

/**
 * A barra grudada abaixo do menu, com uma fileira de botões por filtro.
 * Uma fileira só (Cases, Blog) é o `CategoryFilter`; Materiais usa duas —
 * tipo e categoria —, que se combinam.
 *
 * Com `busca`, ganha um campo de texto: à direita das fileiras a partir de
 * `md`, embaixo delas no mobile.
 */
export function BarraDeFiltros({
  fileiras,
  busca,
}: {
  fileiras: FileiraDeFiltro[];
  busca?: CampoDeBusca;
}) {
  return (
    <div className="bg-surface border-border sticky top-16 z-40 border-b py-6">
      <Container className="flex flex-col gap-3 md:flex-row md:items-center md:gap-6">
        <div className="flex min-w-0 flex-1 flex-col gap-3">
          {fileiras.map((fileira) => (
            <div key={fileira.rotuloAcessivel} className="flex items-center gap-3">
              {fileira.rotulo ? (
                <span
                  aria-hidden="true"
                  className="font-body text-fg-muted w-20 shrink-0 text-xs font-bold tracking-wider uppercase"
                >
                  {fileira.rotulo}
                </span>
              ) : null}

              <div
                role="group"
                aria-label={fileira.rotuloAcessivel}
                className="scrollbar-hide flex min-w-0 items-center gap-2 overflow-x-auto pb-1"
              >
                {fileira.opcoes.map((opcao) => {
                  const selecionada = opcao === fileira.ativa;
                  return (
                    <button
                      key={opcao}
                      type="button"
                      onClick={() => fileira.onSelecionar(opcao)}
                      aria-pressed={selecionada}
                      className={cn(
                        badgeVariants({
                          tone: selecionada ? "brandSolid" : "neutral",
                          size: "md",
                        }),
                        "shrink-0 font-semibold transition-colors",
                        !selecionada && "hover:bg-brand/10 hover:border-brand/20",
                      )}
                    >
                      {opcao}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {busca ? (
          <div className="relative shrink-0 md:w-72">
            <Search
              size={16}
              aria-hidden="true"
              className="text-fg-muted pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2"
            />
            <input
              type="search"
              value={busca.valor}
              onChange={(evento) => busca.onMudar(evento.target.value)}
              aria-label={busca.rotulo}
              placeholder={busca.placeholder}
              className="font-body bg-surface-subtle border-border text-fg placeholder:text-fg-muted focus:border-brand w-full rounded-md border py-2.5 pr-4 pl-10 text-sm transition-colors"
            />
          </div>
        ) : null}
      </Container>
    </div>
  );
}

/** Mensagem exibida quando o filtro não encontra nada. */
export function EstadoVazio({
  titulo,
  descricao,
}: {
  titulo: string;
  descricao: string;
}) {
  return (
    <Card className="py-20 text-center">
      <Heading as="p" level="card">
        {titulo}
      </Heading>
      <Text tone="muted" className="mt-2">
        {descricao}
      </Text>
    </Card>
  );
}
