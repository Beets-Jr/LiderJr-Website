import type { GrupoDeServico } from "@/types/servico";

/**
 * Os 4 grupos que organizam os serviços no menu e em /servicos, nesta ordem.
 * Sem página própria — ver `grupoId` em cada arquivo de serviço.
 */
export const grupos: GrupoDeServico[] = [
  { id: "otimizacao-de-processos", titulo: "Otimização de Processos" },
  { id: "empreendedorismo", titulo: "Empreendedorismo" },
  { id: "gestao-financeira", titulo: "Gestão Financeira" },
  { id: "captacao-de-clientes", titulo: "Captação de Clientes" },
];
