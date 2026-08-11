import { TrendingUp, Lightbulb, BarChart3, Users, Target } from "lucide-react";
import type { Page } from "./types";

export type ServiceItem = {
  icon: typeof TrendingUp;
  title: string;
  tagline: string;
  desc: string;
  tags: string[];
  page: Page;
};

export const SERVICES: ServiceItem[] = [
  {
    icon: TrendingUp,
    title: "Otimização de Processos",
    tagline: "Mais eficiência, menos desperdício!",
    desc: "Mapeamos, analisamos e aperfeiçoamos os fluxos da sua operação para identificar gargalos e oportunidades de melhoria. O resultado é uma empresa mais produtiva, organizada e preparada para crescer sem perder qualidade.",
    tags: ["Lean", "BPMN", "VSM"],
    page: "mapeamento-processos",
  },
  {
    icon: Lightbulb,
    title: "Empreendedorismo",
    tagline: "Da ideia ao negócio com segurança!",
    desc: "Transforme ideias em negócios viáveis com estudos de mercado aprofundados, planejamento estruturado e análises que embasam cada decisão. Apoiamos o empreendedor desde a validação do conceito até o plano de ação.",
    tags: ["Startups", "Plano de Negócios", "Validação"],
    page: "estrategia-empresarial",
  },
  {
    icon: BarChart3,
    title: "Gestão Financeira",
    tagline: "Finanças sob controle, negócio mais forte!",
    desc: "Organize as finanças da sua empresa com planejamento, indicadores e análises que fortalecem a tomada de decisão. Identificamos oportunidades de redução de custos e desenvolvemos estratégias de precificação que protegem sua margem.",
    tags: ["Custos", "Precificação", "DRE"],
    page: "gestao-financeira",
  },
  {
    icon: Users,
    title: "Captação de Clientes",
    tagline: "Mais visibilidade, mais clientes!",
    desc: "Desenvolvemos estratégias para fortalecer sua marca, atrair novos clientes e ampliar sua presença no mercado. Com pesquisa de mercado e análise de público, as ações são desenhadas para gerar resultados reais e mensuráveis.",
    tags: ["Pesquisa", "Posicionamento", "Estratégia"],
    page: "captacao-clientes",
  },
  {
    icon: Target,
    title: "Empresas Juniores",
    tagline: "Impulsionando o Movimento Empresa Júnior!",
    desc: "Desenvolvemos projetos e soluções sob medida para potencializar os resultados de outras Empresas Juniores, aplicando as melhores práticas de mercado para alavancar seu crescimento no MEJ.",
    tags: ["MEJ", "Parcerias", "Gestão"],
    page: "empresas-juniores",
  },
];

/**
 * Imagens Unsplash associadas a cada serviço (por índice).
 * Reutiliza os IDs de foto já usados no blog para consistência visual.
 */
export const SERVICE_IMAGES = [
  "photo-1581091226825-a6a2a5aee158", // Otimização de Processos
  "photo-1454165804606-c3d57bc86b40", // Empreendedorismo
  "photo-1460925895917-afdab827c52f", // Gestão Financeira
  "photo-1552664730-d307ca884978",    // Marketing
  "photo-1551288049-bebda4e38f71",    // Gestão Empresarial
];
