import type { Metadata } from "next";
import {
  Avatar,
  Badge,
  Button,
  ButtonLink,
  Card,
  Container,
  Divider,
  Eyebrow,
  Field,
  Heading,
  IconTile,
  Input,
  Section,
  StepMarker,
  Text,
  Textarea,
} from "@/components/ui";
import { ICONES } from "@/lib/icones";

/**
 * ============================================================================
 * SHOWCASE DO DESIGN SYSTEM — PÁGINA TEMPORÁRIA
 * ============================================================================
 * Rota: /dev/ui — existe só para revisão visual. É removida na Fase 5.
 * (O plano falava em /_dev/ui, mas pastas iniciadas por "_" são privadas no App
 * Router do Next e não geram rota.)
 *
 * Esta é a ÚNICA página do site onde texto pode ficar escrito direto no .tsx:
 * ela não é conteúdo do site, é um catálogo de componentes.
 * ============================================================================
 */

export const metadata: Metadata = {
  title: "Showcase do Design System",
  robots: { index: false, follow: false },
};

export default function PaginaShowcase() {
  return (
    <>
      <Section tone="dark" spacing="tight">
        <Container>
          <Eyebrow>Uso interno · removida na Fase 5</Eyebrow>
          <Heading as="h1" level="display" tone="onDark" className="mt-4">
            Design System
          </Heading>
          <Text size="lg" tone="onDarkMuted" className="mt-4 max-w-2xl">
            Todos os tokens e primitivos, com todas as variantes e estados.
          </Text>
        </Container>
      </Section>

      <Cores />
      <Tipografia />
      <Botoes />
      <BadgesECards />
      <Formulario />
      <Decoracoes />
      <Espacamento />
    </>
  );
}

/* -------------------------------------------------------------------------- */

function Bloco({
  titulo,
  descricao,
  children,
  tone = "light",
}: {
  titulo: string;
  descricao?: string;
  children: React.ReactNode;
  tone?: "light" | "muted" | "dark";
}) {
  return (
    <Section tone={tone} spacing="default">
      <Container>
        <Heading as="h2" level="section" tone={tone === "dark" ? "onDark" : "default"}>
          {titulo}
        </Heading>
        {descricao ? (
          <Text
            tone={tone === "dark" ? "onDarkMuted" : "muted"}
            className="mt-3 max-w-2xl"
          >
            {descricao}
          </Text>
        ) : null}
        <div className="mt-10">{children}</div>
      </Container>
    </Section>
  );
}

function Rotulo({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-fg-muted mb-3 font-mono text-xs">{children}</p>;
}

/* -------------------------------------------------------------------------- */

const AMOSTRAS_DE_COR = [
  { nome: "brand", classe: "bg-brand", hex: "#ff751f" },
  { nome: "brand-hover", classe: "bg-brand-hover", hex: "#f26821" },
  { nome: "surface", classe: "bg-surface border border-border", hex: "#ffffff" },
  { nome: "surface-muted", classe: "bg-surface-muted", hex: "#f4f4f5" },
  { nome: "surface-subtle", classe: "bg-surface-subtle", hex: "#fafafa" },
  { nome: "surface-dark", classe: "bg-surface-dark", hex: "#0b0b0c" },
  { nome: "surface-dark-2", classe: "bg-surface-dark-2", hex: "#141416" },
  { nome: "surface-dark-3", classe: "bg-surface-dark-3", hex: "#1c1c1f" },
  { nome: "fg", classe: "bg-fg", hex: "#0b0b0c" },
  { nome: "fg-muted", classe: "bg-fg-muted", hex: "#52525b" },
  { nome: "danger", classe: "bg-danger", hex: "#c8102e" },
  { nome: "success", classe: "bg-success", hex: "#0f7a58" },
];

function Cores() {
  return (
    <Bloco
      titulo="Cor"
      descricao="A paleta default do Tailwind foi removida. Só existem estes tokens — nenhuma classe como bg-blue-500 compila."
    >
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {AMOSTRAS_DE_COR.map((cor) => (
          <div key={cor.nome}>
            <div className={`h-20 rounded-md ${cor.classe}`} />
            <p className="font-body text-fg mt-2 text-sm font-semibold">{cor.nome}</p>
            <p className="font-body text-fg-muted font-mono text-xs">{cor.hex}</p>
          </div>
        ))}
      </div>

      <Divider className="my-12" />

      <Rotulo>
        Texto sobre superfície escura — os três níveis aprovados no WCAG AA
      </Rotulo>
      <div className="bg-surface-dark on-dark space-y-2 rounded-lg p-8">
        <Text tone="onDark">on-dark — 100% · contraste 19,7:1</Text>
        <Text tone="onDarkMuted">on-dark-muted — 72% · contraste 11,8:1</Text>
        <Text tone="onDarkFaint">on-dark-faint — 56% · contraste 6,1:1</Text>
      </div>
    </Bloco>
  );
}

/* -------------------------------------------------------------------------- */

function Tipografia() {
  return (
    <Bloco
      titulo="Tipografia"
      tone="muted"
      descricao="League Spartan nos títulos, Raleway no corpo, DM Serif Display nas citações. Nível controla a aparência; a tag HTML é escolhida separadamente para manter a hierarquia semântica correta."
    >
      <div className="space-y-8">
        <div>
          <Rotulo>level=&quot;display&quot; — H1 de hero</Rotulo>
          <Heading as="p" level="display">
            Transforme eficiência em vantagem competitiva
          </Heading>
        </div>
        <div>
          <Rotulo>level=&quot;section&quot; — título de seção</Rotulo>
          <Heading as="p" level="section">
            Enxergue sua operação com clareza
          </Heading>
        </div>
        <div>
          <Rotulo>level=&quot;subsection&quot;</Rotulo>
          <Heading as="p" level="subsection">
            Os 5 princípios do Lean
          </Heading>
        </div>
        <div>
          <Rotulo>level=&quot;card&quot;</Rotulo>
          <Heading as="p" level="card">
            Mapeamento de Processos
          </Heading>
        </div>
        <div>
          <Rotulo>level=&quot;minor&quot;</Rotulo>
          <Heading as="p" level="minor">
            Conheça outros artigos
          </Heading>
        </div>

        <Divider />

        <div>
          <Rotulo>Eyebrow</Rotulo>
          <Eyebrow>Como funciona</Eyebrow>
        </div>

        <Divider />

        <div className="space-y-3">
          <Rotulo>Text — tamanhos e tons</Rotulo>
          <Text size="lg">
            size=&quot;lg&quot; — usado nos parágrafos de abertura de seção.
          </Text>
          <Text size="base">size=&quot;base&quot; — o corpo padrão do site.</Text>
          <Text size="sm" tone="muted">
            size=&quot;sm&quot; tone=&quot;muted&quot; — descrições de card e legendas.
          </Text>
          <Text size="xs" tone="muted">
            size=&quot;xs&quot; — metadados: data, tempo de leitura.
          </Text>
          <Text size="lg" family="serif">
            family=&quot;serif&quot; — reservado para citações e depoimentos.
          </Text>
        </div>
      </div>
    </Bloco>
  );
}

/* -------------------------------------------------------------------------- */

const VARIANTES_CLARAS = ["primary", "secondary", "outline", "ghost", "link"] as const;
const TAMANHOS = ["sm", "md", "lg"] as const;

function Botoes() {
  return (
    <>
      <Bloco
        titulo="Botões"
        descricao="No protótipo eram 47 botões em 6 estilos, com o sólido laranja aparecendo em 8 variações. Aqui: 6 variantes × 3 tamanhos."
      >
        <div className="space-y-10">
          {VARIANTES_CLARAS.map((variant) => (
            <div key={variant}>
              <Rotulo>variant=&quot;{variant}&quot;</Rotulo>
              <div className="flex flex-wrap items-center gap-4">
                {TAMANHOS.map((size) => (
                  <Button key={size} variant={variant} size={size}>
                    {`Botão ${size}`}
                  </Button>
                ))}
                <Button variant={variant} disabled>
                  Desabilitado
                </Button>
              </div>
            </div>
          ))}

          <Divider />

          <div>
            <Rotulo>fullWidth — usado no mobile</Rotulo>
            <Button fullWidth>Solicitar um orçamento</Button>
          </div>

          <div>
            <Rotulo>
              ButtonLink — mesma aparência, navega de verdade (interno e externo)
            </Rotulo>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href="/">Link interno</ButtonLink>
              <ButtonLink href="https://brasiljunior.org.br" external variant="outline">
                Link externo
              </ButtonLink>
            </div>
          </div>
        </div>
      </Bloco>

      <Bloco
        titulo="Botões sobre superfície escura"
        tone="dark"
        descricao="O par primary + outlineOnDark é o padrão de toda seção de CTA."
      >
        <div className="flex flex-wrap items-center gap-4">
          {TAMANHOS.map((size) => (
            <Button key={size} variant="primary" size={size}>
              Solicitar orçamento
            </Button>
          ))}
          {TAMANHOS.map((size) => (
            <Button key={size} variant="outlineOnDark" size={size}>
              Conhecer serviços
            </Button>
          ))}
          <Button variant="outlineOnDark" disabled>
            Desabilitado
          </Button>
        </div>
      </Bloco>
    </>
  );
}

/* -------------------------------------------------------------------------- */

function BadgesECards() {
  return (
    <>
      <Bloco titulo="Badges" tone="muted">
        <div className="space-y-6">
          <div>
            <Rotulo>size=&quot;sm&quot;</Rotulo>
            <div className="flex flex-wrap gap-3">
              <Badge tone="neutral">Lean</Badge>
              <Badge tone="brand">E-book</Badge>
              <Badge tone="brandSolid">Todos</Badge>
            </div>
          </div>
          <div>
            <Rotulo>size=&quot;md&quot; — filtros de categoria</Rotulo>
            <div className="flex flex-wrap gap-3">
              <Badge tone="brandSolid" size="md">
                Todos
              </Badge>
              <Badge tone="neutral" size="md">
                Processos
              </Badge>
              <Badge tone="neutral" size="md">
                Qualidade
              </Badge>
            </div>
          </div>
          <div className="bg-surface-dark on-dark rounded-lg p-6">
            <Rotulo>
              <span className="text-on-dark-faint">tone=&quot;onDark&quot;</span>
            </Rotulo>
            <Badge tone="onDark">BPMN</Badge>
          </div>
        </div>
      </Bloco>

      <Bloco
        titulo="Cards"
        descricao="Um raio (16px), três tons, um comportamento de hover. Passe o mouse nos dois primeiros."
      >
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <Card interactive>
            <IconTile icon={ICONES.tendencia} />
            <Heading as="h3" level="card" className="mt-6">
              tone=&quot;default&quot;
            </Heading>
            <Text size="sm" tone="muted" className="mt-3">
              A superfície padrão sobre fundo claro. Com interactive, eleva e destaca a
              borda no hover.
            </Text>
          </Card>

          <Card tone="raised" interactive>
            <IconTile icon={ICONES.escudo} />
            <Heading as="h3" level="card" className="mt-6">
              tone=&quot;raised&quot;
            </Heading>
            <Text size="sm" tone="muted" className="mt-3">
              Sombra mais forte, para quando o card fica sobre surface-muted e precisa
              se destacar.
            </Text>
          </Card>

          <Card tone="onDark">
            <IconTile icon={ICONES.lampada} tone="onDark" />
            <Heading as="h3" level="card" tone="onDark" className="mt-6">
              tone=&quot;onDark&quot;
            </Heading>
            <Text size="sm" tone="onDarkMuted" className="mt-3">
              Para cards dentro de uma seção escura. Substitui os antigos bg-white/5 e
              bg-white/10.
            </Text>
          </Card>
        </div>

        <div className="mt-6">
          <Card tone="invertido" padding="xl" className="text-center">
            <Heading as="h3" level="subsection" tone="onDark">
              tone=&quot;invertido&quot;
            </Heading>
            <Text tone="onDarkMuted" className="mx-auto mt-3 max-w-xl">
              O painel escuro que aparece dentro de uma seção clara — usado nos CTAs das
              páginas de case e de post.
            </Text>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button size="md">Fale Conosco</Button>
              <Button variant="outlineOnDark" size="md">
                Ver outros artigos
              </Button>
            </div>
          </Card>
        </div>
      </Bloco>
    </>
  );
}

/* -------------------------------------------------------------------------- */

function Formulario() {
  return (
    <>
      <Bloco
        titulo="Campos de formulário"
        tone="muted"
        descricao="Todo campo tem label associada, marcação de obrigatório e estado de erro anunciado por leitor de tela. No protótipo havia só placeholders."
      >
        <div className="grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="demo-nome" label="Nome" required>
            <Input id="demo-nome" name="nome" placeholder="Seu nome completo" />
          </Field>

          <Field id="demo-empresa" label="Empresa">
            <Input id="demo-empresa" name="empresa" placeholder="Nome da empresa" />
          </Field>

          <Field
            id="demo-email"
            label="E-mail"
            required
            error="Informe um e-mail válido."
          >
            <Input
              id="demo-email"
              name="email"
              type="email"
              invalid
              defaultValue="email-invalido"
            />
          </Field>

          <Field id="demo-desabilitado" label="Campo desabilitado">
            <Input
              id="demo-desabilitado"
              name="desabilitado"
              disabled
              value=""
              readOnly
            />
          </Field>

          <Field id="demo-mensagem" label="Mensagem" required className="sm:col-span-2">
            <Textarea
              id="demo-mensagem"
              name="mensagem"
              placeholder="Conte-nos sobre o desafio da sua empresa"
            />
          </Field>
        </div>
      </Bloco>

      <Bloco
        titulo="Campos sobre superfície escura"
        tone="dark"
        descricao="Mesma estrutura, tone='onDark'."
      >
        <div className="grid max-w-xl grid-cols-1 gap-6 sm:grid-cols-2">
          <Field id="demo-nome-dark" label="Nome" tone="onDark" required>
            <Input
              id="demo-nome-dark"
              name="nome-dark"
              tone="onDark"
              placeholder="Seu nome"
            />
          </Field>
          <Field id="demo-whats-dark" label="WhatsApp" tone="onDark" required>
            <Input
              id="demo-whats-dark"
              name="whats-dark"
              tone="onDark"
              placeholder="(00) 00000-0000"
            />
          </Field>
        </div>
      </Bloco>
    </>
  );
}

/* -------------------------------------------------------------------------- */

function Decoracoes() {
  return (
    <Bloco
      titulo="Peças pequenas"
      descricao="Elementos repetitivos que estavam copiados por todo o protótipo."
    >
      <div className="space-y-10">
        <div>
          <Rotulo>IconTile — tons e tamanhos</Rotulo>
          <div className="flex flex-wrap items-center gap-4">
            <IconTile icon={ICONES.tendencia} size="sm" />
            <IconTile icon={ICONES.tendencia} size="md" />
            <IconTile icon={ICONES.tendencia} size="lg" />
            <IconTile icon={ICONES.alvo} tone="brandSolid" size="lg" />
            <div className="bg-surface-dark rounded-md p-3">
              <IconTile icon={ICONES.alvo} tone="onDark" size="lg" />
            </div>
          </div>
        </div>

        <div>
          <Rotulo>Avatar — iniciais</Rotulo>
          <div className="flex flex-wrap items-center gap-4">
            <Avatar iniciais="RM" size="sm" />
            <Avatar iniciais="RM" size="md" />
            <Avatar iniciais="LJ" tone="brandSolid" size="md" />
          </div>
        </div>

        <div>
          <Rotulo>StepMarker — timelines de processo (passe o mouse)</Rotulo>
          <div className="flex flex-wrap items-center gap-6">
            {["01", "02", "03", "04"].map((n) => (
              <div key={n} className="group">
                <StepMarker numero={n} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <Rotulo>Divider</Rotulo>
          <Divider />
        </div>
      </div>
    </Bloco>
  );
}

/* -------------------------------------------------------------------------- */

function Espacamento() {
  return (
    <Bloco
      titulo="Ritmo e largura"
      tone="muted"
      descricao="Section define o espaçamento vertical (responsivo). Container define a largura máxima. Nenhuma página define isso por conta própria."
    >
      <div className="space-y-4">
        {[
          ['spacing="tight"', "py-12 lg:py-16"],
          ['spacing="default"', "py-16 lg:py-24"],
          ['spacing="hero"', "py-20 lg:py-28"],
        ].map(([nome, valor]) => (
          <div
            key={nome}
            className="bg-surface border-border flex items-center justify-between rounded-md border px-6 py-4"
          >
            <Text size="sm" weight="semibold">
              {nome}
            </Text>
            <Text size="sm" tone="muted" className="font-mono">
              {valor}
            </Text>
          </div>
        ))}

        <Divider className="my-8" />

        {[
          ['width="prose"', "max-w-3xl — prosa de artigo"],
          ['width="narrow"', "max-w-5xl — CTA, depoimento, formulário"],
          ['width="default"', "max-w-7xl — padrão do site"],
        ].map(([nome, valor]) => (
          <div
            key={nome}
            className="bg-surface border-border flex items-center justify-between rounded-md border px-6 py-4"
          >
            <Text size="sm" weight="semibold">
              {nome}
            </Text>
            <Text size="sm" tone="muted" className="font-mono">
              {valor}
            </Text>
          </div>
        ))}
      </div>
    </Bloco>
  );
}
