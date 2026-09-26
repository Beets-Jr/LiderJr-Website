import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { RastreadorDeOrigem } from "@/components/layout/rastreador-de-origem";
import { SkipLink } from "@/components/layout/skip-link";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import {
  getColunasDeServicosParaRodape,
  getGruposDeServicosParaNavegacao,
  site,
} from "@/content/site";

/**
 * O chrome do site: pular para o conteúdo, cabeçalho, rodapé e o botão do
 * WhatsApp. Vale para todas as páginas públicas e para nenhuma outra — é por
 * isso que ele mora aqui, e não no layout raiz.
 */
export default function LayoutDoSite({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const colunasDeServicos = getColunasDeServicosParaRodape();
  const gruposDeServicos = getGruposDeServicosParaNavegacao();

  return (
    <>
      <SkipLink label={site.pularParaConteudo} />

      <Header
        nome={site.nome}
        navegacao={site.navegacao}
        ctaDoMenu={site.ctaDoMenu}
        submenus={{ "/servicos": gruposDeServicos }}
      />

      {/* pt-16 compensa a altura do header fixo. */}
      <main id="conteudo" className="pt-16">
        {children}
      </main>

      <Footer site={site} colunasDeServicos={colunasDeServicos} />
      <WhatsAppFab whatsapp={site.whatsapp} />
      <RastreadorDeOrigem />
    </>
  );
}
