import type { Case } from "@/types/case";
import type { Post } from "@/types/post";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * ENDEREÇOS DE PÁGINA
 * ============================================================================
 * Regra única do site: um conteúdo só vira link quando tem `detalhe`. Sem ele,
 * o card aparece na listagem mas não leva a lugar nenhum.
 *
 * Estas funções moram aqui, e não nos registries, porque são puras — recebem o
 * objeto já carregado e não tocam na fonte de dados. Assim um componente de
 * cliente pode pedir o href de um case sem arrastar o registry inteiro (e, com
 * a leitura de arquivos, o `fs`) para o bundle do navegador.
 * ============================================================================
 */

export function getHrefDoCase(item: Case): string | undefined {
  return item.detalhe ? `/cases/${item.slug}` : undefined;
}

export function getHrefDoPost(post: Post): string | undefined {
  return post.detalhe ? `/blog/${post.slug}` : undefined;
}

export function getHrefDoServico(servico: Servico): string | undefined {
  return servico.detalhe ? `/servicos/${servico.slug}` : undefined;
}
