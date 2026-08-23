import type { Metadata } from "next";
import { site } from "@/content/site";
import { fontVariables } from "./fonts";
import "./globals.css";

/**
 * Layout raiz — só o que TODA rota precisa: idioma, fontes e o CSS do sistema.
 *
 * O cabeçalho, o rodapé e o botão do WhatsApp não estão aqui: eles são o chrome
 * do site e vivem em `(site)/layout.tsx`. Assim a interface do CMS, em
 * /keystatic, abre sem o menu do site por cima dela.
 *
 * `(site)` é um grupo de rotas: os parênteses não aparecem no endereço, então
 * /blog continua sendo /blog.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.nomeCompleto} — ${site.tituloPadrao}`,
    template: `%s | ${site.nome}`,
  },
  description: site.descricao,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: site.nome,
    title: `${site.nomeCompleto} — ${site.tituloPadrao}`,
    description: site.descricao,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={fontVariables}>
      <body className="font-body">{children}</body>
    </html>
  );
}
