import { ImageResponse } from "next/og";
import { site } from "@/content/site";

/**
 * Imagem exibida quando o site é compartilhado no WhatsApp, LinkedIn etc.
 * É gerada no build a partir do conteúdo — se o nome da empresa mudar em
 * src/content/site.ts, a imagem acompanha.
 *
 * TODO: quando houver identidade visual definitiva, esta imagem pode virar um
 * arquivo estático em public/. Ver PENDENCIAS.md.
 */
export const alt = `${site.nomeCompleto} — ${site.descricao}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

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

export default function ImagemDeCompartilhamento() {
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
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            background: COR.marca,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 34,
            fontWeight: 700,
            color: COR.texto,
          }}
        >
          L
        </div>
        <div style={{ fontSize: 40, fontWeight: 700, color: COR.texto }}>
          {site.nome}
        </div>
      </div>

      <div
        style={{
          marginTop: 48,
          fontSize: 62,
          fontWeight: 700,
          color: COR.texto,
          lineHeight: 1.15,
          maxWidth: 940,
        }}
      >
        {site.tituloPadrao}
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
        {site.descricao}
      </div>
    </div>,
    size,
  );
}
