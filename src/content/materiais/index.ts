import { createReader } from "@keystatic/core/reader";
import { grupos } from "@/content/servicos/grupos";
import { montarImagem } from "@/lib/imagem";
import type { Material } from "@/types/material";
import keystaticConfig from "../../../keystatic.config";

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
 * PARA ADICIONAR UM MATERIAL: use a interface em /keystatic. O arquivo para
 * download é obrigatório — o CMS não salva um material sem ele.
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

  return entradas.map(({ slug, entry }) => {
    // O CMS grava o id do grupo; o site mostra o nome. Um id desconhecido é um
    // grupo apagado de grupos.ts — melhor o build falhar do que um card sem
    // categoria.
    const grupo = grupos.find((g) => g.id === entry.categoria);
    if (!grupo) {
      throw new Error(`Material "${slug}": categoria "${entry.categoria}" não existe.`);
    }

    return {
      slug,
      titulo: entry.titulo,
      resumo: entry.resumo,
      tipo: entry.tipo,
      categoria: grupo.titulo,
      arquivo: entry.arquivo,
      // Mesmo esquema de cases e posts: o alt é o título do material.
      imagem: montarImagem(entry.imagem.arquivo, entry.titulo),
    };
  });
}

export { paginaDeMateriais } from "./pagina";
