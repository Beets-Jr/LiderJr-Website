import { Container, Text } from "@/components/ui";
import { getIcone } from "@/lib/icones";
import type { ConteudoDoSite, LinkDeNavegacao } from "@/types/site";
import { LinkDaMesmaPagina } from "./link-da-mesma-pagina";
import { Logo } from "./logo";

export interface FooterProps {
  site: ConteudoDoSite;
  /**
   * As duas colunas de links de "Serviços", vindas do registry de serviços —
   * divididas para não deixar uma coluna muito mais alta que as outras.
   * No protótipo esta coluna era lorem ipsum com botões sem ação.
   */
  colunasDeServicos: [LinkDeNavegacao[], LinkDeNavegacao[]];
}

export function Footer({ site, colunasDeServicos }: FooterProps) {
  const { rodape, contato, redes, nome, descricao } = site;
  const itensDeContato = [contato.telefone, contato.email];

  return (
    <footer className="on-dark bg-surface-dark text-on-dark">
      <Container className="grid grid-cols-1 gap-10 py-16 md:grid-cols-2 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <Logo nome={nome} />
          <Text size="sm" tone="onDarkMuted" className="mt-5 max-w-xs">
            {descricao}
          </Text>
        </div>

        {rodape.colunas.map((coluna) => (
          <ColunaDoRodape key={coluna.titulo} titulo={coluna.titulo}>
            {coluna.links.map((link) => (
              <LinkDoRodape key={link.label} link={link} />
            ))}
          </ColunaDoRodape>
        ))}

        <ColunaDeServicos
          titulo={rodape.tituloColunaServicos}
          colunas={colunasDeServicos}
          linkVerTodos={rodape.linkVerTodosServicos}
        />

        <div>
          <TituloDeColuna>{rodape.tituloContato}</TituloDeColuna>
          <ul className="mb-6 flex flex-col gap-3">
            {itensDeContato.map((item) => {
              const Icone = getIcone(item.icone);
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="font-body text-on-dark-muted hover:text-on-dark flex items-start gap-2 rounded-sm text-sm transition-colors"
                  >
                    <Icone
                      size={14}
                      aria-hidden="true"
                      className="text-brand mt-0.5 shrink-0"
                    />
                    {item.texto}
                  </a>
                </li>
              );
            })}
          </ul>

          <ul className="flex gap-3">
            {redes.map((rede) => {
              const Icone = getIcone(rede.icone);
              return (
                <li key={rede.label}>
                  <a
                    href={rede.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${nome} no ${rede.label}`}
                    className="bg-surface-dark-3 text-on-dark hover:bg-brand flex h-9 w-9 items-center justify-center rounded-sm transition-colors"
                  >
                    <Icone size={16} aria-hidden="true" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>

      <div className="border-border-on-dark border-t">
        <Container className="flex flex-col items-center justify-between gap-2 py-5 sm:flex-row">
          <Text size="xs" tone="onDarkFaint">
            {rodape.copyright}
          </Text>
          <Text size="xs" tone="onDarkFaint">
            {rodape.selo}
          </Text>
        </Container>
      </div>
    </footer>
  );
}

function TituloDeColuna({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-body text-brand mb-4 text-xs font-semibold tracking-widest uppercase">
      {children}
    </p>
  );
}

/**
 * Igual a `ColunaDoRodape`, mas com os links divididos em duas colunas lado a
 * lado — a lista de serviços é longa demais para ficar tão mais alta que as
 * outras colunas do rodapé. O "Ver todos" entra na última coluna, para as
 * duas ficarem com a mesma altura.
 */
function ColunaDeServicos({
  titulo,
  colunas,
  linkVerTodos,
}: {
  titulo: string;
  colunas: readonly LinkDeNavegacao[][];
  linkVerTodos: LinkDeNavegacao;
}) {
  return (
    <div className="lg:col-span-2">
      <TituloDeColuna>{titulo}</TituloDeColuna>
      <div className="grid grid-cols-2 gap-x-6">
        {colunas.map((links, indice) => (
          <ul key={indice} className="flex flex-col gap-2">
            {links.map((link) => (
              <LinkDoRodape key={link.label} link={link} />
            ))}
            {indice === colunas.length - 1 ? (
              <LinkDoRodape link={linkVerTodos} />
            ) : null}
          </ul>
        ))}
      </div>
    </div>
  );
}

function ColunaDoRodape({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <TituloDeColuna>{titulo}</TituloDeColuna>
      <ul className="flex flex-col gap-2">{children}</ul>
    </div>
  );
}

function LinkDoRodape({ link }: { link: LinkDeNavegacao }) {
  return (
    <li>
      {/* Clicar no link da página em que já se está leva ao topo — ver
          LinkDaMesmaPagina. */}
      <LinkDaMesmaPagina
        href={link.href}
        className="font-body text-on-dark-muted hover:text-on-dark rounded-sm text-sm transition-colors"
      >
        {link.label}
      </LinkDaMesmaPagina>
    </li>
  );
}
