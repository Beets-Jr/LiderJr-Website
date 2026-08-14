"use client";

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
    <div className="bg-surface border-border sticky top-16 z-40 border-b py-6">
      <Container>
        <div
          role="group"
          aria-label={rotuloAcessivel}
          className="scrollbar-hide flex items-center gap-2 overflow-x-auto pb-1"
        >
          {categorias.map((categoria) => {
            const selecionada = categoria === ativa;
            return (
              <button
                key={categoria}
                type="button"
                onClick={() => onSelecionar(categoria)}
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
                {categoria}
              </button>
            );
          })}
        </div>
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
