/**
 * Monta a lista de categorias de um filtro a partir dos próprios itens.
 *
 * Existe para que a lista nunca fique fora de sincronia com o conteúdo. No
 * protótipo as três listas de filtro eram escritas à mão, e todas incluíam uma
 * categoria "Inovação" que não correspondia a nenhum item — clicar nela sempre
 * levava a uma tela vazia.
 *
 * @param itens qualquer lista cujos objetos tenham um campo `categoria`
 * @param rotuloTodos o nome da opção que mostra tudo, ex.: "Todos"
 * @param ordem opcional: a ordem em que as categorias devem aparecer. As que
 *   não estiverem nela vêm no fim, na ordem dos itens.
 */
export function montarCategorias<T extends { categoria: string }>(
  itens: readonly T[],
  rotuloTodos: string,
  ordem: readonly string[] = [],
): string[] {
  const unicas = [...new Set(itens.map((item) => item.categoria))];
  const posicao = (categoria: string) => {
    const i = ordem.indexOf(categoria);
    return i === -1 ? ordem.length : i;
  };
  return [rotuloTodos, ...unicas.sort((a, b) => posicao(a) - posicao(b))];
}

/** Filtra os itens pela categoria escolhida. `rotuloTodos` devolve a lista inteira. */
export function filtrarPorCategoria<T extends { categoria: string }>(
  itens: readonly T[],
  categoriaAtiva: string,
  rotuloTodos: string,
): T[] {
  if (categoriaAtiva === rotuloTodos) return [...itens];
  return itens.filter((item) => item.categoria === categoriaAtiva);
}
