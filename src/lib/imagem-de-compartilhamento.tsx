import { ImageResponse } from "next/og";
import { PROPORCAO_DO_CUBO, SVG_DO_CUBO } from "@/components/layout/cubo-da-marca";
import { site } from "@/content/site";

/**
 * ============================================================================
 * IMAGEM DE COMPARTILHAMENTO
 * ============================================================================
 * A prévia que aparece quando um link do site é colado no WhatsApp, LinkedIn,
 * Facebook ou X. Desenhada a partir do conteúdo, em 1200×630 — a proporção
 * (1,91:1) que todas essas plataformas usam, sem corte. A padrão sai pronta do
 * build; a de cada serviço, case e post é gerada no primeiro acesso ao link e
 * daí em diante servida do cache.
 *
 * É um cartão só de texto sobre o fundo da marca, e não a foto do post, de
 * propósito: o PNG fica com ~60 KB (o WhatsApp descarta prévias pesadas; as
 * fotos têm até 540 KB), o título da página aparece legível na prévia, e toda
 * publicação nova ganha a sua sem ninguém precisar produzir uma imagem.
 *
 * Usada pela imagem padrão do site (src/app/opengraph-image.tsx) e pelas das
 * páginas de serviço, case e post (opengraph-image.tsx de cada [slug]).

 * ============================================================================
 */

export const TAMANHO = { width: 1200, height: 630 } as const;

/**
 * As cores da marca, repetidas de globals.css: a ImageResponse desenha a
 * imagem sem acesso ao CSS do site, então os tokens não chegam até aqui.
 */
const COR = {
  marca: "#ff751f",
  fundo: "#000000",
  texto: "#ffffff",
  textoSuave: "rgba(255,255,255,0.72)",
} as const;

/** Corta num limite de caracteres sem partir palavra, com reticências. */
function encurtar(texto: string, limite: number): string {
  const limpo = texto.replace(/\s+/g, " ").trim();
  if (limpo.length <= limite) return limpo;
  return `${limpo.slice(0, limite).replace(/\s+\S*$/, "")}…`;
}

/** Títulos longos descem de tamanho para caber em até três linhas. */
function tamanhoDoTitulo(titulo: string): number {
  if (titulo.length <= 40) return 62;
  if (titulo.length <= 70) return 54;
  return 46;
}

export function desenharImagemDeCompartilhamento({
  rotulo,
  titulo,
  descricao,
}: {
  /** Linha pequena em laranja acima do título. Ex.: "Blog · Processos". */
  rotulo?: string;
  titulo: string;
  descricao: string;
}): ImageResponse {
  const tituloCurto = encurtar(titulo, 110);

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: COR.fundo,
        padding: "80px",
        position: "relative",
      }}
    >
      {/* Faixa laranja da marca na borda esquerda. */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: 18,
          background: COR.marca,
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- a ImageResponse não usa o <Image> do Next */}
        <img
          alt=""
          src={`data:image/svg+xml;utf8,${encodeURIComponent(SVG_DO_CUBO)}`}
          width={Math.round(72 * PROPORCAO_DO_CUBO)}
          height={72}
        />
        <div style={{ fontSize: 40, fontWeight: 700, color: COR.texto }}>
          {site.nome}
        </div>
      </div>

      {rotulo ? (
        <div
          style={{
            marginTop: 44,
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: COR.marca,
          }}
        >
          {encurtar(rotulo, 60)}
        </div>
      ) : null}

      <div
        style={{
          marginTop: rotulo ? 16 : 48,
          fontSize: rotulo ? tamanhoDoTitulo(tituloCurto) : 62,
          fontWeight: 700,
          color: COR.texto,
          lineHeight: 1.15,
          maxWidth: 1000,
        }}
      >
        {tituloCurto}
      </div>

      <div
        style={{
          marginTop: 28,
          fontSize: 28,
          color: COR.textoSuave,
          maxWidth: 900,
          lineHeight: 1.4,
        }}
      >
        {encurtar(descricao, 150)}
      </div>
    </div>,
    TAMANHO,
  );
}
