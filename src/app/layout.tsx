import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SkipLink } from "@/components/layout/skip-link";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { getLinksDeServicos, site } from "@/content/site";
import { fontVariables } from "./fonts";
import "./globals.css";

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
  const linksDeServicos = getLinksDeServicos();

  return (
    <html lang="pt-BR" className={fontVariables}>
      <body className="font-body">
        <SkipLink label={site.pularParaConteudo} />

        <Header
          nome={site.nome}
          navegacao={site.navegacao}
          ctaDoMenu={site.ctaDoMenu}
          submenus={{ "/servicos": linksDeServicos }}
        />

        {/* pt-16 compensa a altura do header fixo. */}
        <main id="conteudo" className="pt-16">
          {children}
        </main>

        <Footer site={site} servicos={linksDeServicos} />
        <WhatsAppFab whatsapp={site.whatsapp} />
      </body>
    </html>
  );
}
