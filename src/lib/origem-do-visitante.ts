/**
 * ============================================================================
 * ORIGEM DO VISITANTE
 * ============================================================================
 * De onde a pessoa veio antes de chegar ao formulário de contato. Vai junto
 * com o envio, num campo que ela não vê nem preenche, para a equipe saber se o
 * lead chegou direto no Fale Conosco ou saiu da página de um serviço.
 *
 * O `document.referrer` sozinho não basta: a navegação interna do Next não
 * recarrega a página, então ele continua apontando para o site de onde a
 * pessoa entrou. Por isso o `RastreadorDeOrigem`, no layout, anota a página
 * anterior a cada troca de rota. Fica na sessionStorage — some quando a aba
 * fecha e nunca sai do navegador, a não ser dentro do envio do formulário.
 * ============================================================================
 */

const CHAVE_ATUAL = "origem:paginaAtual";
const CHAVE_ANTERIOR = "origem:paginaAnterior";

/** A sessionStorage pode lançar erro (aba anônima, cookies bloqueados). */
function ler(chave: string): string | null {
  try {
    return sessionStorage.getItem(chave);
  } catch {
    return null;
  }
}

function gravar(chave: string, valor: string) {
  try {
    sessionStorage.setItem(chave, valor);
  } catch {
    // Sem armazenamento, a origem cai para o referrer — ver `getOrigemDoVisitante`.
  }
}

/** Chamado a cada troca de rota. Recarregar a mesma página não conta. */
export function registrarPagina(caminho: string) {
  const atual = ler(CHAVE_ATUAL);
  if (atual === caminho) return;

  if (atual) gravar(CHAVE_ANTERIOR, atual);
  gravar(CHAVE_ATUAL, caminho);
}

/**
 * A página anterior dentro do site (ex.: "/servicos/dre"). Se o formulário foi
 * a primeira página da visita: o site externo de onde a pessoa veio
 * (ex.: "externo: www.google.com") ou "acesso direto".
 */
export function getOrigemDoVisitante(): string {
  const anterior = ler(CHAVE_ANTERIOR);
  if (anterior) return anterior;

  try {
    const referrer = new URL(document.referrer);
    if (referrer.host !== location.host) return `externo: ${referrer.host}`;
  } catch {
    // Referrer vazio ou inválido.
  }

  return "acesso direto";
}
