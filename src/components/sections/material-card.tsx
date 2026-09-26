import { BookOpen, Box, CheckCircle2, Download, TrendingUp, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge, Card, Heading, Text } from "@/components/ui";
import type { Material, TipoDeMaterial } from "@/types/material";

/**
 * Cada formato de material tem seu próprio ícone na capa.
 *
 * No protótipo a capa também mudava de COR por formato, usando emerald, blue,
 * purple e rose — quatro famílias inteiras da paleta default do Tailwind, fora
 * do sistema da marca. Aqui todas as capas usam o laranja da Líder Jr.; o que
 * distingue os formatos é o ícone e o rótulo.
 */
const ICONE_POR_TIPO: Record<TipoDeMaterial, LucideIcon> = {
  "E-book": BookOpen,
  Planilha: TrendingUp,
  Guia: CheckCircle2,
  Template: Box,
  Webinar: Users,
};

export function MaterialCard({
  material,
  rotuloDoBotao,
  rotuloIndisponivel,
}: {
  material: Material;
  rotuloDoBotao: string;
  rotuloIndisponivel: string;
}) {
  const Icone = ICONE_POR_TIPO[material.tipo];
  const disponivel = Boolean(material.arquivo);

  return (
    <Card
      as="article"
      padding="none"
      interactive
      className="group flex flex-col overflow-hidden"
    >
      <div className="bg-brand/10 border-border flex h-48 flex-col items-center justify-center border-b">
        <span className="bg-surface text-brand mb-3 flex h-16 w-16 items-center justify-center rounded-lg shadow-sm transition-transform duration-500 group-hover:scale-110">
          <Icone size={32} aria-hidden="true" />
        </span>
        <span className="font-body text-brand text-xs font-bold tracking-widest uppercase">
          {material.tipo}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <Badge className="w-fit">{material.categoria}</Badge>

        {/* h2: cada material é um item de primeiro nível da página /materiais. */}
        <Heading
          as="h2"
          level="card"
          className="group-hover:text-brand mt-3 transition-colors"
        >
          {material.titulo}
        </Heading>

        <Text size="sm" tone="muted" className="mt-3 flex-1">
          {material.resumo}
        </Text>

        {/*
          TODO: integração — quando os arquivos existirem, envie-os no campo
          "Arquivo para download" do material em /keystatic e o botão vira link
          de download. Sem arquivo, ele aparece desabilitado. No protótipo o botão
          parecia ativo e não fazia nada. Ver PENDENCIAS.md.
        */}
        {disponivel ? (
          <a
            href={material.arquivo}
            download
            /* O card inteiro pinta o botão de laranja; o ponteiro sobre o
               próprio botão escurece mais um degrau. */
            className="bg-surface-muted text-fg group-hover:bg-brand group-hover:text-brand-fg hover:bg-brand-hover hover:text-brand-fg font-body mt-6 flex w-full items-center justify-center gap-2 rounded-md py-3.5 text-sm font-bold transition-colors"
          >
            <Download size={16} aria-hidden="true" />
            {rotuloDoBotao}
          </a>
        ) : (
          <p className="bg-surface-muted text-fg-muted font-body mt-6 flex w-full items-center justify-center gap-2 rounded-md py-3.5 text-sm font-bold">
            {rotuloIndisponivel}
          </p>
        )}
      </div>
    </Card>
  );
}
