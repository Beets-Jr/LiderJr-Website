import { createReader } from "@keystatic/core/reader";
import { montarCorpoDeTexto } from "@/lib/corpo-de-texto";
import { montarImagem } from "@/lib/imagem";
import type { Post } from "@/types/post";
import keystaticConfig from "../../../keystatic.config";
import { CATEGORIAS_DO_BLOG } from "./categorias";

/**
 * ============================================================================
 * REGISTRY DO BLOG
 * ============================================================================
 * Os posts vêm dos arquivos em `content/blog/*.mdoc`, escritos pelo CMS em
 * /keystatic. Este arquivo é o ADAPTER: lê as entradas e converte cada uma para
 * o tipo `Post` — que é o que a Home, a listagem e a página do post consomem.
 *
 * Cada arquivo traz os campos do card no topo e o texto do artigo embaixo.
 * Nada além deste arquivo sabe disso.
 * ============================================================================
 */

const leitor = createReader(process.cwd(), keystaticConfig);

/** Uma entrada do CMS, já lida — com o corpo do artigo carregado. */
type EntradaDePost = Awaited<
  ReturnType<typeof leitor.collections.posts.all<[{ resolveLinkedFiles: true }]>>
>[number];

function montarPost({ slug, entry }: EntradaDePost): Post {
  // O CMS grava o id; o site mostra o nome. Um id desconhecido é uma categoria
  // apagada de categorias.ts — melhor o build falhar do que um card sem ela.
  const categoria = CATEGORIAS_DO_BLOG.find((c) => c.id === entry.categoria);
  if (!categoria) {
    throw new Error(`Post "${slug}": categoria "${entry.categoria}" não existe.`);
  }

  return {
    slug,
    titulo: entry.titulo,
    resumo: entry.resumo,
    data: entry.data,
    categoria: categoria.titulo,
    imagem: montarImagem(entry.imagem.arquivo, entry.titulo),
    detalhe: {
      // Título e descrição para o Google são os do próprio post — não há
      // campo separado para isso no CMS.
      metadados: { titulo: entry.titulo, descricao: entry.resumo },
      corpo: montarCorpoDeTexto(entry.corpo.node, {
        origem: `Post "${slug}"`,
        altPadrao: entry.titulo,
      }),
      cta: { titulo: entry.cta.titulo, descricao: entry.cta.descricao },
    },
  };
}

/** Todos os posts, do mais recente para o mais antigo. */
export async function getTodosPosts(): Promise<Post[]> {
  const entradas = await leitor.collections.posts.all({ resolveLinkedFiles: true });
  return entradas.map(montarPost).sort((a, b) => b.data.localeCompare(a.data));
}

/**
 * Os posts mais recentes, para a prévia da Home.
 *
 * A seleção é automática por decisão de projeto: "Últimas do blog" precisa
 * mostrar o que saiu por último, sem ninguém lembrar de atualizar a Home a cada
 * publicação. Publicou, entrou. (Os cases da Home seguem a regra oposta — lá a
 * escolha é editorial; ver `getCasesEmDestaque`.)
 */
export async function getUltimosPosts(quantidade: number): Promise<Post[]> {
  const todos = await getTodosPosts();
  return todos.slice(0, quantidade);
}

export async function getPostPorSlug(slug: string): Promise<Post | undefined> {
  const entrada = await leitor.collections.posts.read(slug, {
    resolveLinkedFiles: true,
  });
  return entrada ? montarPost({ slug, entry: entrada }) : undefined;
}
