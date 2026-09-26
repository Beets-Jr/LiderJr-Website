import { site } from "@/content/site";
import {
  desenharImagemDeCompartilhamento,
  TAMANHO,
} from "@/lib/imagem-de-compartilhamento";
import { IMAGEM_DE_COMPARTILHAMENTO } from "@/lib/metadados";

/**
 * A imagem de compartilhamento padrão: Home, listagens e demais páginas sem
 * imagem própria. Serviços, cases e posts têm a sua, no [slug] de cada um.
 * Ver lib/imagem-de-compartilhamento.tsx.
 */
export const alt = IMAGEM_DE_COMPARTILHAMENTO.alt;
export const size = TAMANHO;
export const contentType = "image/png";

export default function ImagemDeCompartilhamento() {
  return desenharImagemDeCompartilhamento({
    titulo: site.tituloPadrao,
    descricao: site.descricao,
  });
}
