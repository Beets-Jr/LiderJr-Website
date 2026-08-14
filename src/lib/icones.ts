import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  Download,
  Facebook,
  Instagram,
  Lightbulb,
  Linkedin,
  Mail,
  Phone,
  ShieldCheck,
  Star,
  Tag,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { NomeDeIcone } from "@/types/site";

/**
 * Mapa de nome-em-português → componente do lucide-react.
 *
 * Existe para que os arquivos de conteúdo escrevam `icone: "tendencia"` em vez
 * de importar um componente React. Quem edita conteúdo nunca toca em código.
 */
export const ICONES: Record<NomeDeIcone, LucideIcon> = {
  alvo: Target,
  award: Award,
  calendario: Calendar,
  check: CheckCircle2,
  download: Download,
  escudo: ShieldCheck,
  estrela: Star,
  facebook: Facebook,
  grafico: TrendingUp,
  instagram: Instagram,
  lampada: Lightbulb,
  linkedin: Linkedin,
  livro: BookOpen,
  email: Mail,
  pessoas: Users,
  quedaGrafico: TrendingDown,
  relogio: Clock,
  tag: Tag,
  telefone: Phone,
  tendencia: TrendingUp,
};

export function getIcone(nome: NomeDeIcone): LucideIcon {
  return ICONES[nome];
}
