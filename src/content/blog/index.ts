import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import { montarImagem } from "@/lib/imagem";
import type { BlocoDePost, Post, PostComPagina } from "@/types/post";
import { paginaDoBlog } from "./pagina";

/**
 * ============================================================================
 * REGISTRY DO BLOG
 * ============================================================================
 * Os posts vêm dos arquivos em `content/blog/*.yaml`, escritos pelo CMS em
 * /keystatic. Este arquivo é o ADAPTER: lê as entradas e converte cada uma para
 * o tipo `Post` — que é o que a Home, a listagem e a página do post consomem.
 *
 * Nada além deste arquivo sabe que o conteúdo vem de YAML.
 *
 * Um post só vira página quando o campo "tem página própria" está marcado no
 * CMS. Sem ele, o post aparece como card na listagem e não leva a lugar nenhum
 * — que é o estado de cinco dos seis posts de hoje.
 * ============================================================================
 */

const leitor = createReader(process.cwd(), keystaticConfig);

/** Uma entrada do CMS, já lida. O tipo sai do próprio schema. */
type EntradaDePost = Awaited<ReturnType<typeof leitor.collections.posts.all>>[number];

/**
 * Converte os blocos do CMS para `BlocoDePost`. O formato do CMS separa o tipo
 * (`discriminant`) do conteúdo (`value`); o do site guarda os dois juntos em
 * `tipo`. É só essa a diferença.
 */
function montarCorpo(
  corpo: NonNullable<EntradaDePost["entry"]["artigo"]["value"]>["corpo"],
): BlocoDePost[] {
  return corpo.map((bloco): BlocoDePost => {
    switch (bloco.discriminant) {
      case "subtitulo":
        return { tipo: "subtitulo", texto: bloco.value };
      case "citacao":
        return {
          tipo: "citacao",
          texto: bloco.value.texto,
          autor: bloco.value.autor || undefined,
        };
      case "lista":
        return { tipo: "lista", itens: [...bloco.value] };
      case "listaNumerada":
        return { tipo: "listaNumerada", itens: bloco.value.map((i) => ({ ...i })) };
      case "imagem":
        return {
          tipo: "imagem",
          imagem: montarImagem(bloco.value.imagem.arquivo, bloco.value.imagem.alt),
          legenda: bloco.value.legenda || undefined,
        };
      default:
        return { tipo: "paragrafo", texto: bloco.value };
    }
  });
}

function montarPost({ slug, entry }: EntradaDePost): Post {
  const resumo: Post = {
    slug,
    titulo: entry.titulo,
    resumo: entry.resumo,
    data: entry.data,
    categoria: entry.categoria,
    imagem: montarImagem(entry.imagem.arquivo, entry.imagem.alt),
  };

  const artigo = entry.artigo.discriminant ? entry.artigo.value : null;
  if (!artigo) return resumo;

  return {
    ...resumo,
    detalhe: {
      // Sem título/descrição de SEO próprios, o post reaproveita os do card —
      // um campo a menos para preencher, sem página nenhuma ficar sem metadado.
      metadados: {
        titulo: artigo.tituloSeo || entry.titulo,
        descricao: artigo.descricaoSeo || entry.resumo,
      },
      corpo: montarCorpo(artigo.corpo),
      cta: {
        titulo: artigo.cta.titulo,
        descricao: artigo.cta.descricao,
        botaoPrimario: paginaDoBlog.botoesDoCta.primario,
        botaoSecundario: paginaDoBlog.botoesDoCta.secundario,
      },
    },
  };
}

/** Todos os posts, do mais recente para o mais antigo. */
export async function getTodosPosts(): Promise<Post[]> {
  const entradas = await leitor.collections.posts.all();
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

export async function getPostsComPagina(): Promise<PostComPagina[]> {
  const todos = await getTodosPosts();
  return todos.filter((p): p is PostComPagina => p.detalhe !== undefined);
}

export async function getPostPorSlug(slug: string): Promise<Post | undefined> {
  const entrada = await leitor.collections.posts.read(slug);
  return entrada ? montarPost({ slug, entry: entrada }) : undefined;
}
