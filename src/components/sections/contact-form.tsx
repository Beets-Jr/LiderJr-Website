"use client";

import Script from "next/script";
import { useId, useState, type FormEvent } from "react";
import { Button, Card, Field, Heading, Input, Text, Textarea } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  CAMPO_ARMADILHA,
  enviarFormularioDeContato,
  formatarTelefone,
  pareceEmailValido,
  type DadosDoFormularioDeContato,
} from "@/lib/formulario-de-contato";
import { getOrigemDoVisitante } from "@/lib/origem-do-visitante";
import {
  CAMPO_DO_RECAPTCHA,
  CHAVE_DO_SITE_DO_RECAPTCHA,
  obterTokenDoRecaptcha,
} from "@/lib/recaptcha";
import type { CampoDoFormulario, ConteudoFaleConosco } from "@/types/paginas";

type Erros = Record<string, string>;
type Situacao = "parado" | "enviando" | "enviado" | "erro";

const TIPO_HTML = {
  texto: "text",
  email: "email",
  telefone: "tel",
} as const;

/**
 * Onde o formulário está, para a nota do ActiveCampaign. Sem ela, é o do Fale
 * Conosco, e a página de origem é a anterior (ver lib/origem-do-visitante.ts).
 */
export interface OrigemDoFormulario {
  /** Ex.: 'Case "Comércio varejista"'. Aparece no topo da nota. */
  formulario: string;
  /** O endereço da página onde o formulário está. Ex.: "/cases/comercio-varejista". */
  pagina: string;
}

type Formato = "vertical" | "horizontal";

/** O formulário de contato do Fale Conosco, no cartão branco com título. */
export function ContactForm({
  conteudo,
}: {
  conteudo: ConteudoFaleConosco["formulario"];
}) {
  return (
    <Card padding="lg">
      <Heading as="h2" level="subsection">
        {conteudo.titulo}
      </Heading>

      <FormularioDeContato conteudo={conteudo} formato="vertical" className="mt-8" />
    </Card>
  );
}

/**
 * O formulário em si, sem cartão nem título.
 *
 * Valida no navegador e envia por lib/formulario-de-contato.ts, que passa por
 * /api/contato até o ActiveCampaign. Contra robôs: um campo-armadilha
 * escondido e o reCAPTCHA v3, invisível (ver lib/recaptcha.ts).
 *
 * `horizontal` é o do fim dos cases e posts: campos curtos lado a lado e a
 * mensagem embaixo.
 */
export function FormularioDeContato({
  conteudo,
  formato,
  origem,
  className,
}: {
  conteudo: ConteudoFaleConosco["formulario"];
  formato: Formato;
  origem?: OrigemDoFormulario;
  className?: string;
}) {
  const horizontal = formato === "horizontal";

  const [valores, setValores] = useState<DadosDoFormularioDeContato>({});
  const [erros, setErros] = useState<Erros>({});
  const [situacao, setSituacao] = useState<Situacao>("parado");
  const [mensagemDeErro, setMensagemDeErro] = useState("");
  const [armadilha, setArmadilha] = useState("");
  // Ids únicos por formulário, para as labels não colidirem se houver dois na página.
  const prefixo = `contato${useId().replace(/:/g, "")}`;

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
    const resultado = await enviarFormularioDeContato(
      {
        ...valores,
        // Campos que a pessoa não vê: onde está o formulário e de que página
        // veio o envio, a armadilha para robôs e o token do reCAPTCHA.
        formulario: origem?.formulario ?? "Fale Conosco",
        paginaDeOrigem: origem?.pagina ?? getOrigemDoVisitante(),
        [CAMPO_ARMADILHA]: armadilha,
        [CAMPO_DO_RECAPTCHA]: (await obterTokenDoRecaptcha()) ?? "",
      },
      conteudo.erroNoEnvio,
    );
    if (resultado.situacao === "sucesso") {
      setSituacao("enviado");
      setValores({});
    } else {
      setSituacao("erro");
      setMensagemDeErro(resultado.mensagem);
    }
  }

  function alterar(nome: string, valor: string) {
    setValores((anteriores) => ({ ...anteriores, [nome]: valor }));
    // Some com o erro assim que a pessoa começa a corrigir o campo.
    setErros(({ [nome]: _removido, ...resto }) => resto);
  }

  return (
    <form onSubmit={aoEnviar} noValidate className={cn("relative", className)}>
      {CHAVE_DO_SITE_DO_RECAPTCHA && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${CHAVE_DO_SITE_DO_RECAPTCHA}`}
        />
      )}

      <div
        className={cn(
          "grid grid-cols-1 gap-5",
          horizontal ? "md:grid-cols-3" : "md:grid-cols-2",
        )}
      >
        {conteudo.campos.map((campo) => (
          <CampoDoContato
            key={campo.nome}
            campo={campo}
            formato={formato}
            prefixo={prefixo}
            valor={valores[campo.nome] ?? ""}
            erro={erros[campo.nome]}
            onChange={(valor) => alterar(campo.nome, valor)}
          />
        ))}
      </div>

      {/* Armadilha para robôs. Fora da tela (e não display:none, que alguns
            robôs reconhecem), fora do Tab e escondida de leitores de tela. */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] h-px w-px overflow-hidden"
      >
        <label htmlFor={`${prefixo}-${CAMPO_ARMADILHA}`}>Não preencha este campo</label>
        <input
          id={`${prefixo}-${CAMPO_ARMADILHA}`}
          name={CAMPO_ARMADILHA}
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={armadilha}
          onChange={(e) => setArmadilha(e.target.value)}
        />
      </div>

      <Button
        type="submit"
        fullWidth={!horizontal}
        disabled={situacao === "enviando"}
        className={cn("mt-6", horizontal && "w-full md:w-auto")}
      >
        {situacao === "enviando" ? conteudo.rotuloEnviando : conteudo.rotuloDoBotao}
      </Button>

      {/* A mensagem de resultado é anunciada por leitores de tela. */}
      <p role="status" aria-live="polite" className="mt-4">
        {situacao === "enviado" ? (
          <Text as="span" size="sm" weight="semibold" className="text-success">
            {conteudo.sucesso}
          </Text>
        ) : situacao === "erro" ? (
          <Text as="span" size="sm" weight="semibold" className="text-danger">
            {mensagemDeErro}
          </Text>
        ) : null}
      </p>

      {/* O selo flutuante do reCAPTCHA fica escondido (globals.css); o
            Google exige este aviso no lugar dele. */}
      {CHAVE_DO_SITE_DO_RECAPTCHA && (
        <Text size="xs" tone="muted" className="mt-2">
          Protegido pelo reCAPTCHA. Valem a{" "}
          <a href="https://policies.google.com/privacy" className="underline">
            Política de Privacidade
          </a>{" "}
          e os{" "}
          <a href="https://policies.google.com/terms" className="underline">
            Termos de Serviço
          </a>{" "}
          do Google.
        </Text>
      )}
    </form>
  );
}

function CampoDoContato({
  campo,
  formato,
  prefixo,
  valor,
  erro,
  onChange,
}: {
  campo: CampoDoFormulario;
  formato: Formato;
  prefixo: string;
  valor: string;
  erro?: string;
  onChange: (valor: string) => void;
}) {
  const id = `${prefixo}-${campo.nome}`;
  const horizontal = formato === "horizontal";
  // No horizontal, só a mensagem ocupa a linha inteira; os campos curtos
  // dividem a primeira linha, ignorando `larguraTotal`.
  const larguraTotal = horizontal ? campo.tipo === "textarea" : campo.larguraTotal;
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
      className={
        larguraTotal ? (horizontal ? "md:col-span-3" : "md:col-span-2") : undefined
      }
    >
      {campo.tipo === "textarea" ? (
        <Textarea {...comum} rows={horizontal ? 4 : 6} />
      ) : (
        <Input
          {...comum}
          type={TIPO_HTML[campo.tipo]}
          {...(campo.tipo === "telefone" && {
            inputMode: "tel",
            autoComplete: "tel",
            onChange: (evento: { target: { value: string } }) =>
              onChange(formatarTelefone(evento.target.value)),
          })}
        />
      )}
    </Field>
  );
}
