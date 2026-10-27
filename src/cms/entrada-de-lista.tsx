"use client";

import { Item, Picker } from "@keystar/ui/picker";
import type { FormFieldInputProps } from "@keystatic/core";

type Props = FormFieldInputProps<string> & {
  rotulo: string;
  descricao?: string;
  opcoes: readonly { label: string; value: string }[];
};

/** A lista de opções do `campoDeLista`, na largura inteira do formulário. */
export function EntradaDeLista({
  rotulo,
  descricao,
  opcoes,
  value,
  onChange,
  autoFocus,
}: Props) {
  return (
    <Picker
      label={rotulo}
      description={descricao}
      items={opcoes}
      selectedKey={value}
      onSelectionChange={(chave) => {
        if (chave !== null) onChange(String(chave));
      }}
      autoFocus={autoFocus}
      width="auto"
    >
      {(item) => <Item key={item.value}>{item.label}</Item>}
    </Picker>
  );
}
