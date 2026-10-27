import { fields } from "@keystatic/core";
import { EntradaDeLista } from "./entrada-de-lista";

type ArgsDaLista = Parameters<typeof fields.select>[0];

/**
 * `fields.select` do Keystatic na largura inteira do formulário.
 *
 * O original fixa a lista na largura de uma linha curta. Na tela de case, que
 * ocupa a largura toda, ela ficava pequena no canto, longe dos campos de texto
 * esticados ao redor.
 *
 * Só a tela muda. Leitura, gravação e validação são as do campo original.
 */
export function campoDeLista(args: ArgsDaLista) {
  const original = fields.select(args);

  return {
    ...original,
    Input(props: Parameters<typeof original.Input>[0]) {
      return (
        <EntradaDeLista
          {...props}
          rotulo={args.label}
          descricao={args.description}
          opcoes={args.options}
        />
      );
    },
  };
}
