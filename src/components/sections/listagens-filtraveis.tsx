"use client";

import { useMemo, useState } from "react";
import { Container, Section } from "@/components/ui";
import { CATEGORIAS_DO_BLOG } from "@/content/blog/categorias";
import { grupos } from "@/content/servicos/grupos";
import { filtrarPorCategoria, montarCategorias } from "@/lib/categorias";
import type { Case } from "@/types/case";
import { TIPOS_DE_MATERIAL, type Material } from "@/types/material";
import type {
  ConteudoDeCases,
  ConteudoDeMateriais,
  ConteudoDoBlog,
} from "@/types/paginas";
import type { Post } from "@/types/post";
import { CaseList } from "./case-list";
import { BarraDeFiltros, CategoryFilter, EstadoVazio } from "./category-filter";
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
  ordem?: readonly string[],
): {
  categorias: string[];
  ativa: string;
  selecionar: (categoria: string) => void;
  filtrados: T[];
} {
  const [ativa, setAtiva] = useState(rotuloTodos);

  const categorias = useMemo(
    () => montarCategorias(itens, rotuloTodos, ordem),
    [itens, rotuloTodos, ordem],
  );

  const filtrados = useMemo(
    () => filtrarPorCategoria(itens, ativa, rotuloTodos),
    [itens, ativa, rotuloTodos],
  );

  return { categorias, ativa, selecionar: setAtiva, filtrados };
}

/** Sem nada publicado, não há o que filtrar: só a mensagem, sem a barra. */
function ListagemVazia(props: { titulo: string; descricao: string }) {
  return (
    <Section>
      <Container>
        <EstadoVazio {...props} />
      </Container>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

const ORDEM_DOS_GRUPOS = grupos.map((g) => g.titulo);
const ORDEM_DO_BLOG = CATEGORIAS_DO_BLOG.map((c) => c.titulo);

export function ListagemDeCases({
  cases,
  conteudo,
}: {
  cases: Case[];
  conteudo: ConteudoDeCases;
}) {
  // As categorias dos cases são os grupos de serviço: aparecem na mesma
  // ordem do menu e de /servicos.
  const { categorias, ativa, selecionar, filtrados } = useFiltro(
    cases,
    conteudo.filtro.rotuloTodos,
    ORDEM_DOS_GRUPOS,
  );

  if (cases.length === 0) return <ListagemVazia {...conteudo.filtro.semItens} />;

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
            <CaseList cases={filtrados} rotuloComPagina={conteudo.rotuloComPagina} />
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
  const { rotuloTodos } = conteudo.filtro;
  const [tipoAtivo, setTipoAtivo] = useState(rotuloTodos);
  const [categoriaAtiva, setCategoriaAtiva] = useState(rotuloTodos);

  // Só aparecem opções que têm algum material, na ordem fixa de cada lista —
  // a dos formatos e a dos grupos de serviço.
  const tipos = useMemo(
    () => [
      rotuloTodos,
      ...TIPOS_DE_MATERIAL.filter((t) => materiais.some((m) => m.tipo === t)),
    ],
    [materiais, rotuloTodos],
  );
  const categorias = useMemo(
    () => montarCategorias(materiais, rotuloTodos, ORDEM_DOS_GRUPOS),
    [materiais, rotuloTodos],
  );

  // Os dois filtros se somam: "Planilha" + "Gestão Financeira" mostra só as
  // planilhas de gestão financeira.
  const filtrados = useMemo(
    () =>
      filtrarPorCategoria(materiais, categoriaAtiva, rotuloTodos).filter(
        (m) => tipoAtivo === rotuloTodos || m.tipo === tipoAtivo,
      ),
    [materiais, tipoAtivo, categoriaAtiva, rotuloTodos],
  );

  if (materiais.length === 0) return <ListagemVazia {...conteudo.filtro.semItens} />;

  return (
    <>
      <BarraDeFiltros
        fileiras={[
          {
            ...conteudo.filtro.tipo,
            opcoes: tipos,
            ativa: tipoAtivo,
            onSelecionar: setTipoAtivo,
          },
          {
            ...conteudo.filtro.categoria,
            opcoes: categorias,
            ativa: categoriaAtiva,
            onSelecionar: setCategoriaAtiva,
          },
        ]}
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
  const {
    categorias,
    ativa,
    selecionar,
    filtrados: daCategoria,
  } = useFiltro(posts, conteudo.filtro.rotuloTodos, ORDEM_DO_BLOG);
  const [busca, setBusca] = useState("");

  // A busca se soma à categoria e olha só o título.
  const termo = normalizar(busca.trim());
  const filtrados = useMemo(
    () =>
      termo
        ? daCategoria.filter((p) => normalizar(p.titulo).includes(termo))
        : daCategoria,
    [daCategoria, termo],
  );

  // O post em destaque só aparece quando nenhum filtro está aplicado.
  const mostrarDestaque = ativa === conteudo.filtro.rotuloTodos && !termo;
  const [destaque, ...restantes] = filtrados;
  const naGrade = mostrarDestaque ? restantes : filtrados;

  if (posts.length === 0) return <ListagemVazia {...conteudo.filtro.semItens} />;

  return (
    <>
      <BarraDeFiltros
        fileiras={[
          {
            opcoes: categorias,
            ativa,
            onSelecionar: selecionar,
            rotuloAcessivel: conteudo.filtro.rotuloAcessivel,
          },
        ]}
        busca={{
          valor: busca,
          onMudar: setBusca,
          rotulo: conteudo.busca.rotulo,
          placeholder: conteudo.busca.placeholder,
        }}
      />

      <Section>
        <Container>
          {/* Quem usa leitor de tela não vê a grade mudar enquanto digita. */}
          <p role="status" className="sr-only">
            {termo
              ? `${filtrados.length} ${filtrados.length === 1 ? conteudo.busca.resultados.um : conteudo.busca.resultados.varios}`
              : ""}
          </p>

          {filtrados.length === 0 ? (
            <EstadoVazio {...(termo ? conteudo.busca.vazio : conteudo.filtro.vazio)} />
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

/** Minúsculas e sem acentos: "Gestão" acha "gestao" e vice-versa. */
function normalizar(texto: string): string {
  return texto
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}
