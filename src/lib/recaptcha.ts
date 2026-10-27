/**
 * ============================================================================
 * reCAPTCHA v3 — LADO DO NAVEGADOR
 * ============================================================================
 * A versão invisível: ninguém clica em "não sou um robô". No envio, o Google
 * devolve um token; o servidor troca o token por uma nota de 0 a 1 (ver
 * recaptcha-servidor.ts) e recusa as notas baixas.
 *
 * Sem NEXT_PUBLIC_RECAPTCHA_SITE_KEY (ex.: em desenvolvimento) o script nem é
 * carregado e o envio segue sem token.
 * ============================================================================
 */

export const CHAVE_DO_SITE_DO_RECAPTCHA = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

/** O servidor confere se o token foi gerado para esta ação. */
export const ACAO_DO_RECAPTCHA = "contato";

/** O campo em que o token viaja até /api/contato. */
export const CAMPO_DO_RECAPTCHA = "recaptcha";

declare global {
  interface Window {
    grecaptcha?: {
      ready(callback: () => void): void;
      execute(chave: string, opcoes: { action: string }): Promise<string>;
    };
  }
}

/**
 * Um token novo a cada envio (cada um vale 2 minutos e uma única vez).
 * `undefined` quando não há chave ou o script foi bloqueado — o servidor
 * decide o que fazer.
 */
export function obterTokenDoRecaptcha(): Promise<string | undefined> {
  const chave = CHAVE_DO_SITE_DO_RECAPTCHA;
  const recaptcha = typeof window === "undefined" ? undefined : window.grecaptcha;
  if (!chave || !recaptcha) return Promise.resolve(undefined);

  return new Promise((resolve) => {
    recaptcha.ready(() => {
      recaptcha
        .execute(chave, { action: ACAO_DO_RECAPTCHA })
        .then(resolve, () => resolve(undefined));
    });
  });
}
