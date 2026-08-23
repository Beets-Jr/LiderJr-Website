import { readFileSync } from "node:fs";
import { join } from "node:path";
import { imageSize } from "image-size";
import type { Imagem } from "@/types/comum";

/**
 * ============================================================================
 * DIMENSÕES DE IMAGEM NO BUILD
 * ============================================================================
 * O `next/image` precisa saber largura e altura antes de renderizar, para
 * reservar o espaço e não empurrar o texto quando a foto carrega. Quando o
 * conteúdo era escrito à mão, esses números eram digitados em imagens.ts.
 *
 * O CMS não tem como saber a dimensão do arquivo que a pessoa enviou — e pedir
 * para ela medir seria um convite ao erro. Então medimos aqui, lendo o arquivo
 * em public/ durante o build. Roda só no servidor, nunca no navegador.
 *
 * Se o arquivo não existir ou não for uma imagem, a função lança: é melhor o
 * build falhar do que publicar uma página com o layout quebrado.
 * ============================================================================
 */
export function montarImagem(src: string, alt: string): Imagem {
  const caminho = join(process.cwd(), "public", src.replace(/^\//, ""));

  let dimensoes;
  try {
    dimensoes = imageSize(readFileSync(caminho));
  } catch (erro) {
    throw new Error(
      `Não consegui medir a imagem "${src}". Confira se o arquivo existe em public/. Detalhe: ${
        erro instanceof Error ? erro.message : String(erro)
      }`,
    );
  }

  return { src, alt, largura: dimensoes.width, altura: dimensoes.height };
}
