import { createReader } from "@keystatic/core/reader";
import keystaticConfig from "../../../keystatic.config";
import type { Material } from "@/types/material";

/**
 * ============================================================================
 * MATERIAIS
 * ============================================================================
 * A lista vem dos arquivos em `content/materiais/*.yaml`, escritos pelo CMS em
 * /keystatic. Este arquivo é o ADAPTER: lê as entradas e converte cada uma para
 * o tipo `Material`, que é o que o site inteiro consome.
 *
 * Nada além deste arquivo sabe que o conteúdo vem de YAML — trocar a fonte de
 * dados de novo, um dia, é reescrever só a função abaixo.
 *
 * PARA ADICIONAR UM MATERIAL: use a interface em /keystatic. Para liberar o
 * download, envie o arquivo no campo correspondente; sem ele o botão do card
 * aparece desabilitado, escrito "Em breve".
 * ============================================================================
 */

const leitor = createReader(process.cwd(), keystaticConfig);

export async function getTodosMateriais(): Promise<Material[]> {
  const entradas = await leitor.collections.materiais.all();

  // O leitor devolve na ordem do nome do arquivo. Ordenamos por título porque
  // ordem de arquivo não é uma decisão editorial — é acaso de como o slug foi
  // escrito. Se um dia a ordem precisar ser escolhida à mão, o caminho é um
  // campo de data no schema e ordenar por ele, como o blog faz.
  entradas.sort((a, b) => a.entry.titulo.localeCompare(b.entry.titulo, "pt-BR"));

  return entradas.map(({ slug, entry }) => ({
    slug,
    titulo: entry.titulo,
    resumo: entry.resumo,
    tipo: entry.tipo,
    categoria: entry.categoria,
    // O campo é opcional no CMS; `null` (sem arquivo) vira `undefined`, que é
    // o que o tipo `Material` usa para dizer "download ainda não liberado".
    arquivo: entry.arquivo ?? undefined,
  }));
}

export { paginaDeMateriais } from "./pagina";
