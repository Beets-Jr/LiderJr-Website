import { BookOpen, Download, FileSpreadsheet, ListChecks } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Badge, Card, Foto, Heading, Text } from "@/components/ui";
import type { Material, TipoDeMaterial } from "@/types/material";

/**
 * Cada formato de material tem seu próprio ícone, na etiqueta sobre a foto.
 *
 * No protótipo a capa também mudava de COR por formato, usando emerald, blue,
 * purple e rose — quatro famílias inteiras da paleta default do Tailwind, fora
 * do sistema da marca. Aqui todas as capas usam o laranja da Líder Jr.; o que
 * distingue os formatos é o ícone e o rótulo.
 */
const ICONE_POR_TIPO: Record<TipoDeMaterial, LucideIcon> = {
  "E-book": BookOpen,
  Planilha: FileSpreadsheet,
  Checklist: ListChecks,
};

export function MaterialCard({
  material,
  rotuloDoBotao,
}: {
  material: Material;
  rotuloDoBotao: string;
}) {
  const Icone = ICONE_POR_TIPO[material.tipo];

  return (
    <Card
      as="article"
      padding="none"
      interactive
      className="group flex flex-col overflow-hidden"
    >
      <div className="relative h-48 shrink-0 overflow-hidden">
        <Foto
          imagem={material.imagem}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="transition-transform duration-500 group-hover:scale-105"
        />
        {/* O formato vai numa etiqueta sobre a foto: é o que a pessoa vai
            baixar, e a foto sozinha não diz. */}
        <span className="bg-surface text-brand font-body absolute top-4 left-4 flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold tracking-wider uppercase shadow-sm">
          <Icone size={14} aria-hidden="true" />
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
      </div>
    </Card>
  );
}
