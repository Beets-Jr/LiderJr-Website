import type { Case } from "@/types/case";
import type { Post } from "@/types/post";
import type { Servico } from "@/types/servico";

/**
 * ============================================================================
 * ENDEREÇOS DE PÁGINA
 * ============================================================================
 * Cases e posts sempre têm página. Serviços só viram link quando têm
 * `detalhe`; sem ele, o card aparece na listagem mas não leva a lugar nenhum.
 *
 * Estas funções moram aqui, e não nos registries, porque são puras — recebem o
 * objeto já carregado e não tocam na fonte de dados. Assim um componente de
 * cliente pode pedir o href de um case sem arrastar o registry inteiro (e, com
 * a leitura de arquivos, o `fs`) para o bundle do navegador.
 * ============================================================================
 */

export function getHrefDoCase(item: Case): string {
  return `/cases/${item.slug}`;
}

export function getHrefDoPost(post: Post): string {
  return `/blog/${post.slug}`;
}

export function getHrefDoServico(servico: Servico): string | undefined {
  return servico.detalhe ? `/servicos/${servico.slug}` : undefined;
}
