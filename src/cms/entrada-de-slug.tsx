"use client";

import { Flex } from "@keystar/ui/layout";
import { Switch } from "@keystar/ui/switch";
import { TextField } from "@keystar/ui/text-field";
import { Text } from "@keystar/ui/typography";
import type { FormFieldInputProps } from "@keystatic/core";
import { useState, type ReactElement } from "react";

export type ValorDeSlug = { name: string; slug: string };

type Props = FormFieldInputProps<ValorDeSlug> & {
  /** O valor inicial de uma entrada nova — o mesmo objeto que o Keystatic usa. */
  padrao: ValorDeSlug;
  gerar: (nome: string) => string;
  rotuloDoNome: string;
  descricaoDoNome?: string;
  /** Ex.: "/blog/". Só para mostrar o endereço final a quem edita. */
  prefixoDoEndereco?: string;
  /** O campo original do Keystatic: título + slug + "Regenerate". */
  CampoCompleto: (props: FormFieldInputProps<ValorDeSlug>) => ReactElement | null;
};

/**
 * Título com o slug escondido atrás de um interruptor "Editar URL".
 * Na tela, "slug" vira "URL": quem usa o CMS não é técnico.
 *
 * Desligado: só o título aparece, e o slug acompanha o título enquanto a
 * entrada é nova — o mesmo comportamento do campo original. Numa entrada já
 * salva, trocar o título NÃO troca o slug, para não quebrar links publicados.
 *
 * Ligado: aparece o campo original do Keystatic, com a checagem de slug
 * repetido e o botão de gerar de novo. Não reescrevemos nada disso.
 *
 * Se o salvamento falhar por validação, o editor abre sozinho: um slug
 * repetido só mostra o erro dentro do campo original, e escondido ninguém o
 * encontraria.
 */
export function EntradaDeSlug({
  padrao,
  gerar,
  rotuloDoNome,
  descricaoDoNome,
  prefixoDoEndereco,
  CampoCompleto,
  ...props
}: Props) {
  const { value, onChange, autoFocus, forceValidation } = props;
  const [editando, setEditando] = useState(false);
  const [entradaNova] = useState(value === padrao);

  // Abre o editor quando o Keystatic pede para mostrar os erros. Ajustado no
  // render (e não num efeito) como a documentação do React recomenda.
  const [validacaoAnterior, setValidacaoAnterior] = useState(forceValidation);
  if (forceValidation !== validacaoAnterior) {
    setValidacaoAnterior(forceValidation);
    if (forceValidation) setEditando(true);
  }

  const interruptor = (
    <Switch isSelected={editando} onChange={setEditando}>
      Editar URL
    </Switch>
  );

  if (editando) {
    return (
      <Flex direction="column" gap="large">
        <CampoCompleto {...props} />
        {interruptor}
      </Flex>
    );
  }

  return (
    <Flex direction="column" gap="large">
      <TextField
        label={rotuloDoNome}
        description={descricaoDoNome}
        isRequired
        autoFocus={autoFocus}
        value={value.name}
        onChange={(name) => {
          // Segue o título só enquanto ninguém mexeu no slug à mão.
          const acompanha = entradaNova && value.slug === gerar(value.name);
          onChange({ name, slug: acompanha ? gerar(name) : value.slug });
        }}
      />
      <Flex direction="column" gap="regular">
        {interruptor}
        {prefixoDoEndereco && value.slug && (
          <Text size="small" color="neutralTertiary">
            URL: {prefixoDoEndereco}
            {value.slug}
          </Text>
        )}
      </Flex>
    </Flex>
  );
}
