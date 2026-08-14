"use client";

import { useState, type FormEvent } from "react";
import { Button, Card, Field, Heading, Input, Text, Textarea } from "@/components/ui";
import {
  enviarFormularioDeContato,
  pareceEmailValido,
  type DadosDoFormularioDeContato,
} from "@/lib/formulario-de-contato";
import type { CampoDoFormulario, ConteudoFaleConosco } from "@/types/paginas";

type Erros = Record<string, string>;
type Situacao = "parado" | "enviando" | "enviado";

const TIPO_HTML = {
  texto: "text",
  email: "email",
  telefone: "tel",
} as const;

/**
 * O formulário de contato.
 *
 * Valida no navegador e NÃO envia para lugar nenhum — todo o envio está isolado
 * em lib/formulario-de-contato.ts, o único arquivo a mudar quando houver
 * backend. Ver PENDENCIAS.md.
 */
export function ContactForm({
  conteudo,
}: {
  conteudo: ConteudoFaleConosco["formulario"];
}) {
  const [valores, setValores] = useState<DadosDoFormularioDeContato>({});
  const [erros, setErros] = useState<Erros>({});
  const [situacao, setSituacao] = useState<Situacao>("parado");

  function validar(): Erros {
    const encontrados: Erros = {};

    for (const campo of conteudo.campos) {
      const valor = (valores[campo.nome] ?? "").trim();

      if (campo.obrigatorio && valor === "") {
        encontrados[campo.nome] = campo.mensagemDeErro;
        continue;
      }
      if (campo.tipo === "email" && valor !== "" && !pareceEmailValido(valor)) {
        encontrados[campo.nome] = conteudo.emailInvalido;
      }
    }

    return encontrados;
  }

  async function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();

    const encontrados = validar();
    setErros(encontrados);
    if (Object.keys(encontrados).length > 0) return;

    setSituacao("enviando");
    await enviarFormularioDeContato(valores);
    setSituacao("enviado");
  }

  function alterar(nome: string, valor: string) {
    setValores((anteriores) => ({ ...anteriores, [nome]: valor }));
    // Some com o erro assim que a pessoa começa a corrigir o campo.
    setErros(({ [nome]: _removido, ...resto }) => resto);
  }

  return (
    <Card padding="lg">
      <Heading as="h2" level="subsection">
        {conteudo.titulo}
      </Heading>

      <form onSubmit={aoEnviar} noValidate className="mt-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {conteudo.campos.map((campo) => (
            <CampoDoContato
              key={campo.nome}
              campo={campo}
              valor={valores[campo.nome] ?? ""}
              erro={erros[campo.nome]}
              onChange={(valor) => alterar(campo.nome, valor)}
            />
          ))}
        </div>

        <Button
          type="submit"
          fullWidth
          disabled={situacao === "enviando"}
          className="mt-6"
        >
          {situacao === "enviando" ? conteudo.rotuloEnviando : conteudo.rotuloDoBotao}
        </Button>

        {/* A mensagem de resultado é anunciada por leitores de tela. */}
        <p role="status" aria-live="polite" className="mt-4">
          {situacao === "enviado" ? (
            <Text as="span" size="sm" weight="semibold" className="text-success">
              {conteudo.sucesso}
            </Text>
          ) : null}
        </p>

        {/* TODO: integração — remover este aviso quando o envio for real. */}
        <Text size="xs" tone="muted" className="mt-2">
          {conteudo.aviso}
        </Text>
      </form>
    </Card>
  );
}

function CampoDoContato({
  campo,
  valor,
  erro,
  onChange,
}: {
  campo: CampoDoFormulario;
  valor: string;
  erro?: string;
  onChange: (valor: string) => void;
}) {
  const id = `contato-${campo.nome}`;
  const comum = {
    id,
    name: campo.nome,
    placeholder: campo.placeholder,
    value: valor,
    invalid: Boolean(erro),
    required: campo.obrigatorio,
    onChange: (evento: { target: { value: string } }) => onChange(evento.target.value),
  };

  return (
    <Field
      id={id}
      label={campo.label}
      required={campo.obrigatorio}
      error={erro}
      className={campo.larguraTotal ? "md:col-span-2" : undefined}
    >
      {campo.tipo === "textarea" ? (
        <Textarea {...comum} rows={6} />
      ) : (
        <Input {...comum} type={TIPO_HTML[campo.tipo]} />
      )}
    </Field>
  );
}
