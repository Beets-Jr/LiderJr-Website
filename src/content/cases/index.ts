import { createReader } from "@keystatic/core/reader";
import { getServicoPorSlug } from "@/content/servicos";
import { grupos } from "@/content/servicos/grupos";
import { montarCorpoDeTexto } from "@/lib/corpo-de-texto";
import { getHrefDoServico } from "@/lib/hrefs";
import { montarImagem } from "@/lib/imagem";
import type { Case } from "@/types/case";
import keystaticConfig from "../../../keystatic.config";

/**
 * ============================================================================
 * REGISTRY DE CASES
 * ============================================================================
 * Os cases vêm dos arquivos em `content/cases/*.mdoc`, escritos pelo CMS em
 * /keystatic. Este arquivo é o ADAPTER: lê as entradas e converte cada uma para
 * o tipo `Case` — que é o que a Home, a listagem e a página do case consomem.
 *
 * Um case só vira página quando o campo "tem página própria" está marcado no
 * CMS. Sem ele, aparece como card na listagem e não leva a lugar nenhum.
 * ============================================================================
 */

const leitor = createReader(process.cwd(), keystaticConfig);

type EntradaDeCase = Awaited<
  ReturnType<typeof leitor.collections.cases.all<[{ resolveLinkedFiles: true }]>>
>[number];

function montarCase({ slug, entry }: EntradaDeCase): Case {
  // O CMS só oferece serviços que existem; um slug desconhecido aqui é um
  // serviço apagado do registry. Melhor o build falhar do que um case sem grupo.
  const servico = getServicoPorSlug(entry.servico);
  const grupo = grupos.find((g) => g.id === servico?.grupoId);
  if (!servico || !grupo) {
    throw new Error(`Case "${slug}": serviço "${entry.servico}" não existe.`);
  }
  const hrefDoServico = getHrefDoServico(servico);

  return {
    slug,
    empresa: entry.empresa,
    descricao: entry.descricao,
    categoria: grupo.titulo,
    servico: {
      titulo: servico.titulo.replace(/\s*\n\s*/g, " "),
      href: hrefDoServico,
    },
    segmento: entry.segmento.trim(),
    imagem: montarImagem(entry.imagem.arquivo, entry.empresa),
    detalhe: {
      // Título e descrição para o Google são os do próprio case — não há
      // campo separado para isso no CMS.
      metadados: { titulo: entry.empresa, descricao: entry.descricao },
      // A mesma imagem do card, com o alt zerado: no topo da página ela é fundo
      // decorativo atrás do título, e o texto por cima já informa o conteúdo.
      imagemDeFundo: montarImagem(entry.imagem.arquivo, ""),
      corpo: montarCorpoDeTexto(entry.corpo.node, {
        origem: `Case "${slug}"`,
        altPadrao: entry.empresa,
      }),
      cta: { titulo: entry.cta.titulo, descricao: entry.cta.descricao },
    },
  };
}

export async function getTodosCases(): Promise<Case[]> {
  const entradas = await leitor.collections.cases.all({ resolveLinkedFiles: true });
  return entradas.map(montarCase);
}

/**
 * Os cases do carrossel da Home, na ordem escolhida em /keystatic →
 * "Home — cases em destaque".
 *
 * A seleção é MANUAL por decisão de projeto: a Home é vitrine, e publicar um
 * case novo não pode trocar a vitrine sozinho. É o oposto de "Últimas do blog"
 * (ver `getUltimosPosts`), onde o automático é justamente o que se espera.
 *
 * Se um case escolhido não existir mais, o build para com o nome dele. Preferir
 * o erro a mostrar a Home com dois cards: assim quem apagou o case descobre na
 * hora, e não pelo site no ar.
 */
export async function getCasesEmDestaque(): Promise<Case[]> {
  const escolha = await leitor.singletons.casesEmDestaque.read();
  const todos = await getTodosCases();

  return (escolha?.cases ?? []).map((slug) => {
    const item = todos.find((c) => c.slug === slug);
    if (!item) {
      throw new Error(
        `A Home está com o case "${slug}" em destaque, mas ele não existe mais. ` +
          `Abra /keystatic → "Home — cases em destaque" e escolha outro.`,
      );
    }
    return item;
  });
}

export async function getCasePorSlug(slug: string): Promise<Case | undefined> {
  const entrada = await leitor.collections.cases.read(slug, {
    resolveLinkedFiles: true,
  });
  return entrada ? montarCase({ slug, entry: entrada }) : undefined;
}
