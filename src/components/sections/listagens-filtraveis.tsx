"use client";

import { useMemo, useState } from "react";
import { Container, Section } from "@/components/ui";
import { filtrarPorCategoria, montarCategorias } from "@/lib/categorias";
import type { Case } from "@/types/case";
import type { Material } from "@/types/material";
import type {
  ConteudoDeCases,
  ConteudoDeMateriais,
  ConteudoDoBlog,
} from "@/types/paginas";
import type { Post } from "@/types/post";
import { CaseList } from "./case-list";
import { CategoryFilter, EstadoVazio } from "./category-filter";
import { MaterialCard } from "./material-card";
import { FeaturedPost, PostCard } from "./post-card";

/**
 * As três listagens com filtro por categoria.
 *
 * São componentes de cliente porque o filtro é interativo — o resto do site
 * continua sendo renderizado no servidor. Elas recebem os itens e os textos por
 * props, vindos da página; nenhuma delas importa conteúdo.
 */

/** Hook compartilhado pelas três: monta as categorias e aplica o filtro. */
function useFiltro<T extends { categoria: string }>(
  itens: T[],
  rotuloTodos: string,
): {
  categorias: string[];
  ativa: string;
  selecionar: (categoria: string) => void;
  filtrados: T[];
} {
  const [ativa, setAtiva] = useState(rotuloTodos);

  const categorias = useMemo(
    () => montarCategorias(itens, rotuloTodos),
    [itens, rotuloTodos],
  );

  const filtrados = useMemo(
    () => filtrarPorCategoria(itens, ativa, rotuloTodos),
    [itens, ativa, rotuloTodos],
  );

  return { categorias, ativa, selecionar: setAtiva, filtrados };
}

/* -------------------------------------------------------------------------- */

export function ListagemDeCases({
  cases,
  conteudo,
}: {
  cases: Case[];
  conteudo: ConteudoDeCases;
}) {
  const { categorias, ativa, selecionar, filtrados } = useFiltro(
    cases,
    conteudo.filtro.rotuloTodos,
  );

  return (
    <>
      <CategoryFilter
        categorias={categorias}
        ativa={ativa}
        onSelecionar={selecionar}
        rotuloAcessivel={conteudo.filtro.rotuloAcessivel}
      />

      <Section>
        <Container>
          {filtrados.length > 0 ? (
            <CaseList
              cases={filtrados}
              rotuloComPagina={conteudo.rotuloComPagina}
              rotuloSemPagina={conteudo.rotuloSemPagina}
            />
          ) : (
            <EstadoVazio {...conteudo.filtro.vazio} />
          )}
        </Container>
      </Section>
    </>
  );
}

/* -------------------------------------------------------------------------- */

export function ListagemDeMateriais({
  materiais,
  conteudo,
}: {
  materiais: Material[];
  conteudo: ConteudoDeMateriais;
}) {
  const { categorias, ativa, selecionar, filtrados } = useFiltro(
    materiais,
    conteudo.filtro.rotuloTodos,
  );

  return (
    <>
      <CategoryFilter
        categorias={categorias}
        ativa={ativa}
        onSelecionar={selecionar}
        rotuloAcessivel={conteudo.filtro.rotuloAcessivel}
      />

      <Section>
        <Container>
          {filtrados.length > 0 ? (
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filtrados.map((material) => (
                <li key={material.slug} className="flex">
                  <MaterialCard
                    material={material}
                    rotuloDoBotao={conteudo.rotuloDoBotao}
                    rotuloIndisponivel={conteudo.rotuloIndisponivel}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <EstadoVazio {...conteudo.filtro.vazio} />
          )}
        </Container>
      </Section>
    </>
  );
}

/* -------------------------------------------------------------------------- */

export function ListagemDoBlog({
  posts,
  conteudo,
}: {
  posts: Post[];
  conteudo: ConteudoDoBlog;
}) {
  const { categorias, ativa, selecionar, filtrados } = useFiltro(
    posts,
    conteudo.filtro.rotuloTodos,
  );

  // O post em destaque só aparece quando nenhum filtro está aplicado.
  const mostrarDestaque = ativa === conteudo.filtro.rotuloTodos;
  const [destaque, ...restantes] = filtrados;
  const naGrade = mostrarDestaque ? restantes : filtrados;

  return (
    <>
      <CategoryFilter
        categorias={categorias}
        ativa={ativa}
        onSelecionar={selecionar}
        rotuloAcessivel={conteudo.filtro.rotuloAcessivel}
      />

      <Section>
        <Container>
          {filtrados.length === 0 ? (
            <EstadoVazio {...conteudo.filtro.vazio} />
          ) : (
            <>
              {mostrarDestaque && destaque ? (
                <div className="mb-12">
                  <FeaturedPost post={destaque} rotuloDoLink={conteudo.rotuloDoLink} />
                </div>
              ) : null}

              <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {naGrade.map((post) => (
                  <li key={post.slug} className="flex">
                    <PostCard post={post} nivelSemantico="h2" />
                  </li>
                ))}
              </ul>
            </>
          )}
        </Container>
      </Section>
    </>
  );
}
