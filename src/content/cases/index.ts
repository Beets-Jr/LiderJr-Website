import { createReader } from "@keystatic/core/reader";
import { montarImagem } from "@/lib/imagem";
import type { Case, CaseComPagina } from "@/types/case";
import keystaticConfig from "../../../keystatic.config";
import { paginaDeCases } from "./pagina";

/**
 * ============================================================================
 * REGISTRY DE CASES
 * ============================================================================
 * Os cases vêm dos arquivos em `content/cases/*.yaml`, escritos pelo CMS em
 * /keystatic. Este arquivo é o ADAPTER: lê as entradas e converte cada uma para
 * o tipo `Case` — que é o que a Home, a listagem e a página do case consomem.
 *
 * Um case só vira página quando o campo "tem página própria" está marcado no
 * CMS. Sem ele, aparece como card na listagem e não leva a lugar nenhum.
 * ============================================================================
 */

const leitor = createReader(process.cwd(), keystaticConfig);

type EntradaDeCase = Awaited<ReturnType<typeof leitor.collections.cases.all>>[number];

function montarCase({ slug, entry }: EntradaDeCase): Case {
  const resumo: Case = {
    slug,
    empresa: entry.empresa,
    resultado: entry.resultado,
    metrica: entry.metrica,
    descricao: entry.descricao,
    tags: [...entry.tags],
    categoria: entry.categoria,
    imagem: montarImagem(entry.imagem.arquivo, entry.imagem.alt),
  };

  const historia = entry.historia.discriminant ? entry.historia.value : null;
  if (!historia) return resumo;

  const depoimento = historia.depoimento.discriminant
    ? historia.depoimento.value
    : null;

  return {
    ...resumo,
    detalhe: {
      metadados: {
        titulo: historia.tituloSeo || entry.empresa,
        descricao: historia.descricaoSeo || entry.descricao,
      },
      // A mesma imagem do card, com o alt zerado: no topo da página ela é fundo
      // decorativo atrás do título, e o texto por cima já informa o conteúdo.
      imagemDeFundo: montarImagem(entry.imagem.arquivo, ""),
      secoes: historia.secoes.map((s) => ({
        titulo: s.titulo,
        paragrafos: [...s.paragrafos],
      })),
      depoimento: depoimento ? { ...depoimento } : undefined,
      // Sem números cadastrados, o painel de impacto simplesmente não aparece.
      impacto:
        historia.numerosDeImpacto.length > 0
          ? {
              eyebrow: paginaDeCases.impacto.eyebrow,
              titulo: paginaDeCases.impacto.titulo,
              numeros: historia.numerosDeImpacto.map((n) => ({ ...n })),
            }
          : undefined,
      cta: {
        titulo: historia.cta.titulo,
        descricao: historia.cta.descricao,
        botaoPrimario: paginaDeCases.botoesDoCta.primario,
        botaoSecundario: {
          label: paginaDeCases.botoesDoCta.rotuloDoServico,
          href: historia.cta.servicoRelacionado || "/servicos",
        },
      },
    },
  };
}

export async function getTodosCases(): Promise<Case[]> {
  const entradas = await leitor.collections.cases.all();
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

export async function getCasesComPagina(): Promise<CaseComPagina[]> {
  const todos = await getTodosCases();
  return todos.filter((c): c is CaseComPagina => c.detalhe !== undefined);
}

export async function getCasePorSlug(slug: string): Promise<Case | undefined> {
  const entrada = await leitor.collections.cases.read(slug);
  return entrada ? montarCase({ slug, entry: entrada }) : undefined;
}
