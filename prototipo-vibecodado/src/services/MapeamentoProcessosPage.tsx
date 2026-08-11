import { CheckCircle2, Star, ArrowRight } from "lucide-react";
import { SERVICES } from "./data";
import { HEADING, SERIF, BODY } from "./types";
import type { Page } from "./types";

export function MapeamentoProcessosPage({
  setPage,
}: {
  setPage: (p: Page) => void;
}) {
  const service = SERVICES[0];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&h=700&fit=crop&auto=format)",
          }}
        />
        <div className="absolute inset-0 bg-primary/75" />
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #ff751f 0%, transparent 55%)",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Serviço
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: HEADING }}
          >
            Otimização de Processos
          </h1>
          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            {service.desc}
          </p>
          <button
            onClick={() => setPage("contato")}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-[#f26821] transition-all"
            style={{ fontFamily: BODY }}
          >
            Solicitar diagnóstico
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: BODY }}
            >
              Como funciona
            </p>
            <h2
              className="text-4xl font-bold text-foreground mb-6"
              style={{ fontFamily: HEADING }}
            >
              Enxergue sua operação com clareza
            </h2>
            <p
              className="text-muted-foreground leading-relaxed mb-4"
              style={{ fontFamily: BODY }}
            >
              Levantamos, documentamos e analisamos os processos da sua empresa
              para identificar gargalos, retrabalho e pontos de melhoria —
              antes de propor qualquer mudança.
            </p>
            <p
              className="text-muted-foreground leading-relaxed"
              style={{ fontFamily: BODY }}
            >
              Usamos metodologias consolidadas como BPMN, fluxogramas e Value
              Stream Mapping (VSM) para transformar processos informais em
              fluxos claros e mensuráveis.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {service.tags.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                  style={{ fontFamily: BODY }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1664575602276-acd073f104c1?w=700&h=500&fit=crop&auto=format"
            alt="Mapeamento de processos industriais"
            className="w-full rounded-2xl object-cover"
            style={{ height: 380 }}
          />
        </div>
      </section>

      {/* Etapas */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: BODY }}
            >
              Metodologia
            </p>
            <h2
              className="text-4xl font-bold text-foreground"
              style={{ fontFamily: HEADING }}
            >
              Etapas do mapeamento
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Levantamento",
                desc: "Entrevistas e observação in loco para entender o processo como ele realmente acontece.",
              },
              {
                step: "02",
                title: "Modelagem",
                desc: "Construção do fluxo atual (AS IS) em notação BPMN, deixando visível cada etapa e responsável.",
              },
              {
                step: "03",
                title: "Diagnóstico",
                desc: "Identificação de gargalos, desperdícios e retrabalho ao longo do fluxo mapeado.",
              },
              {
                step: "04",
                title: "Redesenho",
                desc: "Proposta do processo futuro (TO BE), com melhorias validadas junto à equipe.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                  <span
                    className="text-white text-xs font-bold"
                    style={{ fontFamily: BODY }}
                  >
                    {item.step}
                  </span>
                </div>
                <h3
                  className="font-bold text-foreground mb-2"
                  style={{ fontFamily: HEADING }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: BODY }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimento */}
      <section className="bg-background py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-accent fill-accent" />
            ))}
          </div>
          <p
            className="text-foreground text-2xl lg:text-3xl leading-relaxed mb-8"
            style={{ fontFamily: SERIF }}
          >
            "O mapeamento mostrou gargalos que a gente nem enxergava mais de
            tão acostumados com a rotina. Em poucas semanas reduzimos o tempo
            de produção reorganizando o fluxo de ponta a ponta."
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-11 h-11 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
              <span
                className="text-accent font-bold text-sm"
                style={{ fontFamily: HEADING }}
              >
                RM
              </span>
            </div>
            <div className="text-left">
              <p
                className="font-semibold text-foreground text-sm"
                style={{ fontFamily: BODY }}
              >
                Roberto Martins
              </p>
              <p
                className="text-muted-foreground text-xs"
                style={{ fontFamily: BODY }}
              >
                Gerente de Produção, Indústria Metalúrgica
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #ff751f, transparent 60%)",
          }}
        />
        <div className="relative max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: BODY }}
            >
              Vamos conversar
            </p>
            <h2
              className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: HEADING }}
            >
              Quer mapear os processos da sua empresa?
            </h2>
            <p
              className="text-white/70 text-lg leading-8 mb-10"
              style={{ fontFamily: BODY }}
            >
              Fale com a nossa equipe e entenda como podemos ajudar a identificar
              oportunidades de melhoria no seu negócio, com um diagnóstico
              inicial sem custo.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => setPage("contato")}
                className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-[#f26821] transition-colors"
                style={{ fontFamily: BODY }}
              >
                Fale Conosco
              </button>
              <button
                onClick={() => setPage("servicos")}
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors"
                style={{ fontFamily: BODY }}
              >
                Ver outros serviços
              </button>
            </div>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p
              className="text-white font-semibold mb-6"
              style={{ fontFamily: HEADING }}
            >
              O que você recebe
            </p>
            <div className="flex flex-col gap-4">
              {[
                "Diagnóstico inicial sem custo",
                "Mapeamento do fluxo atual (AS IS) em BPMN",
                "Relatório com gargalos e oportunidades de melhoria",
                "Proposta de processo futuro (TO BE)",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-accent shrink-0 mt-0.5"
                  />
                  <span
                    className="text-white/80 text-sm"
                    style={{ fontFamily: BODY }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
