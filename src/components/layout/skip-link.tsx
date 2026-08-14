/**
 * Link que só aparece ao receber foco pelo teclado e pula o menu inteiro.
 * Primeiro elemento focável da página — requisito de acessibilidade.
 */
export function SkipLink({ label }: { label: string }) {
  return (
    <a
      href="#conteudo"
      className="bg-brand text-brand-fg font-body sr-only rounded-md px-4 py-3 text-sm font-semibold focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
    >
      {label}
    </a>
  );
}
