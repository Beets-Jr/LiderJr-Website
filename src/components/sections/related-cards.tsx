import {
  Badge,
  Card,
  Container,
  Heading,
  LinkEsticado,
  Section,
  Text,
} from "@/components/ui";

/** Um item do bloco "Conheça outros…". */
export interface ItemRelacionado {
  href: string;
  etiqueta: string;
  titulo: string;
  descricao: string;
}

/**
 * O bloco de três cards de navegação cruzada no fim das páginas de detalhe.
 * No protótipo existia duas vezes, com o mesmo markup e rótulos diferentes.
 */
export function RelatedCards({
  titulo,
  rotuloDoLink,
  itens,
}: {
  titulo: string;
  rotuloDoLink: string;
  itens: ItemRelacionado[];
}) {
  if (itens.length === 0) return null;

  return (
    <Section>
      <Container>
        <Heading as="h2" level="minor">
          {titulo}
        </Heading>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {itens.map((item) => (
            <li key={item.titulo} className="flex">
              <Card
                as="article"
                padding="sm"
                interactive
                className="group relative w-full"
              >
                <Badge tone="brand" className="uppercase">
                  {item.etiqueta}
                </Badge>

                <Heading
                  as="h3"
                  level="minor"
                  className="group-hover:text-brand mt-3 text-sm transition-colors"
                >
                  <LinkEsticado href={item.href}>{item.titulo}</LinkEsticado>
                </Heading>

                <Text size="xs" tone="muted" className="mt-1 line-clamp-2">
                  {item.descricao}
                </Text>

                <Text
                  as="span"
                  size="xs"
                  tone="brand"
                  weight="semibold"
                  className="mt-3 inline-block opacity-0 transition-opacity group-hover:opacity-100"
                >
                  {rotuloDoLink} →
                </Text>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
