import { grupos } from "@/content/servicos/grupos";

/**
 * As categorias do blog, nesta ordem: os 4 grupos de serviço e "Atualidades",
 * para o que não se encaixa em nenhum deles. Lista fechada — é o campo
 * "Categoria" do post no CMS e a ordem dos botões do filtro em /blog.
 *
 * O CMS grava o `id`; o site mostra o `titulo`.
 */
export const CATEGORIAS_DO_BLOG = [
  ...grupos.map(({ id, titulo }) => ({ id, titulo })),
  { id: "atualidades", titulo: "Atualidades" },
] as const;
