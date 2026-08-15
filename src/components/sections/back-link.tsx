import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { Container, Section } from "@/components/ui";
import type { LinkDeNavegacao } from "@/types/comum";

/**
 * A faixa "Voltar para…" logo abaixo do hero das páginas de detalhe.
 * No protótipo estava copiada na página de case e na de post.
 */
export function BackLink({ link }: { link: LinkDeNavegacao }) {
  return (
    <Section spacing="none" className="pt-10">
      <Container>
        <Link
          href={link.href}
          className="text-fg hover:text-brand font-body inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold transition-colors"
        >
          <ChevronLeft size={16} aria-hidden="true" />
          {link.label}
        </Link>
      </Container>
    </Section>
  );
}
