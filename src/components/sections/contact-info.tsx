import { Heading, Text } from "@/components/ui";
import { getIcone } from "@/lib/icones";
import type { ConteudoFaleConosco } from "@/types/paginas";
import type { ConteudoDoSite } from "@/types/site";
import { SectionHeader } from "./section-header";

/** A coluna de telefone e e-mail ao lado do formulário. */
export function ContactInfo({
  conteudo,
  contato,
}: {
  conteudo: ConteudoFaleConosco["informacoes"];
  contato: ConteudoDoSite["contato"];
}) {
  const itens = [contato.telefone, contato.email];

  return (
    <div>
      <SectionHeader conteudo={conteudo} />

      <ul className="mt-8 flex flex-col gap-6">
        {itens.map((item) => {
          const Icone = getIcone(item.icone);
          return (
            <li key={item.href} className="flex gap-4">
              <Icone
                size={22}
                aria-hidden="true"
                className="text-brand mt-0.5 shrink-0"
              />
              <div>
                <Heading as="h3" level="minor">
                  {item.rotulo}
                </Heading>
                <Text as="p" tone="muted" className="mt-1">
                  <a
                    href={item.href}
                    className="hover:text-brand rounded-sm transition-colors"
                  >
                    {item.texto}
                  </a>
                </Text>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
