import { ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import {
  Badge,
  Card,
  Foto,
  Heading,
  IconTile,
  LinkEsticado,
  Text,
} from "@/components/ui";
import { cn } from "@/lib/cn";
import { getHrefDoServico } from "@/lib/hrefs";
import { getIcone } from "@/lib/icones";
import type { Servico } from "@/types/servico";
import type { LinkDeNavegacao } from "@/types/site";

/**
 * Os dois formatos de card de serviço do protótipo.
 * O compacto é a prévia da Home; o completo é a listagem /servicos.
 *
 * Em ambos, o card inteiro é clicável mas existe UM só link — o do título,
 * esticado por cima do card com `after:absolute`. No protótipo o card era uma
 * <div onClick>, invisível para o teclado e para buscadores.
 */

/* -------------------------------------------------------------------------- */

export function ServiceCardCompacto({
  servico,
  rotuloDoLink,
}: {
  servico: Servico;
  rotuloDoLink: string;
}) {
  const href = getHrefDoServico(servico);
  const Icone = getIcone(servico.icone);

  return (
    <Card
      as="article"
      interactive={Boolean(href)}
      className="group relative flex flex-col"
    >
      {/* No hover do card o tile inverte: fundo laranja sólido, traço branco. */}
      <IconTile
        icon={Icone}
        className="group-hover:bg-brand group-hover:text-brand-fg transition-colors"
      />

      <Heading as="h3" level="card" className="mt-6">
        <LinkEsticado href={href}>{servico.titulo}</LinkEsticado>
      </Heading>

      <Text size="base" tone="muted" className="mt-3">
        {servico.descricao}
      </Text>

      <ul className="mt-6 flex flex-wrap gap-1.5">
        {servico.tags.map((tag) => (
          <li key={tag}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>

      {href ? (
        <p className="text-brand group-hover:text-brand-hover font-body mt-6 flex items-center gap-2 text-sm font-semibold transition-colors">
          {rotuloDoLink}
          <ChevronRight
            size={16}
            aria-hidden="true"
            className="transition-transform group-hover:translate-x-1"
          />
        </p>
      ) : null}
    </Card>
  );
}

/* -------------------------------------------------------------------------- */

/**
 * O botão no rodapé do card grande. Os dois estados usam exatamente as mesmas
 * classes para a fileira de cards terminar alinhada; o que muda é o destino.
 */
const BOTAO_DO_CARD =
  "bg-brand text-brand-fg font-body group-hover:bg-brand-hover mt-8 ml-auto flex w-fit items-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-[background-color,box-shadow]";

/**
 * Acréscimo do botão que é link de verdade: além de escurecer junto com o card,
 * ele ganha sombra quando o ponteiro está sobre ele próprio. É o que separa
 * "estou em algum lugar do card" de "estou no botão".
 */
const HOVER_DO_BOTAO = "hover:bg-brand-hover hover:shadow-md";

export function ServiceCardCompleto({
  servico,
  rotuloDoLink,
  botaoSemPagina,
  nivelDeTitulo = "h2",
}: {
  servico: Servico;
  rotuloDoLink: string;
  /** Para onde vai o card do serviço que ainda não tem página própria. */
  botaoSemPagina: LinkDeNavegacao;
  /** "h3" quando o card fica sob o h2 de um grupo (ver /servicos). */
  nivelDeTitulo?: "h2" | "h3";
}) {
  const href = getHrefDoServico(servico);

  return (
    <Card
      as="article"
      padding="none"
      interactive={Boolean(href)}
      className="group relative flex flex-col overflow-hidden"
    >
      {/* Capa com o corte diagonal característico do protótipo. */}
      <div
        className="relative h-64 shrink-0 overflow-hidden"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 85%)" }}
      >
        <Foto
          imagem={servico.imagem}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        <div className="bg-surface-dark/40 absolute inset-0" />
      </div>

      {/* O conteúdo sobe para ocupar o espaço aberto pelo corte. */}
      <div className="relative z-10 -mt-20 flex flex-1 flex-col px-6 pb-6">
        {/* h2 por padrão: cada card é um item de primeiro nível, logo abaixo
            do h1 da página. Vira h3 quando a listagem agrupa os cards sob um
            h2 de grupo (ver /servicos) — mesma lógica do card compacto da
            Home, que usa h3 por ficar sob o h2 de "Nossas áreas de atuação". */}
        {/* min-h reserva o espaço de 2 linhas: título e chamada variam de 1 a
            2 linhas conforme o serviço, e sem essa reserva cada card do grupo
            começa o texto em uma altura diferente, desnivelando a fileira. */}
        <Heading
          as={nivelDeTitulo}
          level="card"
          tone="brand"
          className="ml-auto min-h-[4.125rem] max-w-[80%] text-right text-2xl whitespace-pre-line uppercase"
        >
          <LinkEsticado href={href}>{servico.titulo}</LinkEsticado>
        </Heading>

        <Text size="sm" tone="brand" weight="bold" className="mt-3 min-h-[2.875rem]">
          {servico.chamada}
        </Text>

        <Text size="sm" tone="muted" className="mt-4 flex-1">
          {servico.descricao}
        </Text>

        {/* Com página, o botão é decorativo: quem clica é o link do título,
            esticado sobre o card inteiro. Sem página, o botão é o único link
            do card e leva ao contato — por isso é <Link> de verdade aqui. */}
        {href ? (
          <p className={BOTAO_DO_CARD}>
            {rotuloDoLink}
            <ArrowRight size={14} aria-hidden="true" />
          </p>
        ) : (
          <Link
            href={botaoSemPagina.href}
            className={cn(BOTAO_DO_CARD, HOVER_DO_BOTAO)}
          >
            {botaoSemPagina.label}
            <ArrowRight size={14} aria-hidden="true" />
          </Link>
        )}
      </div>
    </Card>
  );
}
