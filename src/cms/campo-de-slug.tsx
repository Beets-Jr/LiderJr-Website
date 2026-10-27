import { fields } from "@keystatic/core";
import slugify from "@sindresorhus/slugify";
import { EntradaDeSlug } from "./entrada-de-slug";

type ArgsDoSlug = Parameters<typeof fields.slug>[0];

/**
 * `fields.slug` do Keystatic com o slug escondido atrás de um interruptor
 * "Editar URL" (ver entrada-de-slug.tsx). Quem usa o CMS não é técnico: o
 * slug quase nunca precisa ser mexido, e à mostra ele só gera dúvida.
 *
 * Só a tela muda. Leitura, gravação e validação (inclusive a de slug
 * repetido) continuam sendo as do campo original — os YAML não mudam.
 *
 * `slugify` é a mesma biblioteca que o Keystatic usa por padrão; passamos
 * explicitamente para que as duas telas gerem exatamente o mesmo slug.
 *
 * AO ATUALIZAR O KEYSTATIC: `@keystar/ui` está fixo no package.json na mesma
 * versão que o `@keystatic/core` usa (ver o package.json dele). Suba os dois
 * juntos e abra /keystatic → Blog → um post para conferir o interruptor.
 */
export function campoDeSlug(args: ArgsDoSlug & { prefixoDoEndereco?: string }) {
  const { prefixoDoEndereco, ...argsDoKeystatic } = args;
  const gerar = argsDoKeystatic.slug?.generate ?? ((nome: string) => slugify(nome));
  const original = fields.slug({
    ...argsDoKeystatic,
    slug: { ...argsDoKeystatic.slug, generate: gerar },
  });

  return {
    ...original,
    Input(props: Parameters<typeof original.Input>[0]) {
      return (
        <EntradaDeSlug
          {...props}
          padrao={original.defaultValue()}
          gerar={gerar}
          rotuloDoNome={args.name.label}
          descricaoDoNome={args.name.description}
          prefixoDoEndereco={prefixoDoEndereco}
          CampoCompleto={original.Input}
        />
      );
    },
  };
}
