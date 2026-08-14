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
 */
export function montarCategorias<T extends { categoria: string }>(
  itens: readonly T[],
  rotuloTodos: string,
): string[] {
  const unicas = [...new Set(itens.map((item) => item.categoria))];
  return [rotuloTodos, ...unicas];
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
