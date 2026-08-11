import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SERVICES, SERVICE_IMAGES } from "./data";
import { HEADING, BODY } from "./types";
import type { Page } from "./types";

function formatTitle(title: string) {
  switch (title) {
    case "Otimização de Processos":
      return (
        <>
          OTIMIZAÇÃO DE
          <br />
          PROCESSOS
        </>
      );
    case "Gestão Financeira":
      return (
        <>
          GESTÃO
          <br />
          FINANCEIRA
        </>
      );
    case "Empresas Juniores":
      return (
        <>
          EMPRESAS
          <br />
          JUNIORES
        </>
      );
    case "Captação de Clientes":
      return (
        <>
          CAPTAÇÃO DE
          <br />
          CLIENTES
        </>
      );
    default:
      return title.toUpperCase();
  }
}

type ServiceCardProps = {
  service: (typeof SERVICES)[0];
  imageId: string;
  setPage: (p: Page) => void;
};

function ServiceCard({ service: s, imageId, setPage }: ServiceCardProps) {
  return (
    <div
      className="group relative flex flex-col bg-card border border-border rounded-2xl overflow-hidden shadow-sm cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-accent/30"
      style={{ minHeight: 530 }}
      onClick={() => setPage(s.page)}
    >
      {/* Imagem com corte diagonal */}
      <div
        className="relative flex-shrink-0 overflow-hidden"
        style={{
          height: 260,
          clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 85%)",
        }}
      >
        <img
          src={`https://images.unsplash.com/${imageId}?w=600&h=400&fit=crop&auto=format`}
          alt={s.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/40" />
      </div>

      {/* Conteúdo do card */}
      <div className="flex flex-col flex-1 px-6 pb-6 -mt-20 relative z-10">
        <h3
          className="text-2xl font-extrabold leading-tight mb-3 text-right ml-auto text-accent flex items-end justify-end"
          style={{
            fontFamily: HEADING,
            maxWidth: "80%",
            minHeight: "4rem",
          }}
        >
          {formatTitle(s.title)}
        </h3>

        <p
          className="text-sm font-bold text-accent mb-4"
          style={{ fontFamily: BODY }}
        >
          {s.tagline}
        </p>

        <p
          className="text-sm text-foreground leading-relaxed flex-1 mb-8"
          style={{ fontFamily: BODY, lineHeight: 1.75 }}
        >
          {s.desc}
        </p>

        <div className="flex justify-end mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setPage(s.page);
            }}
            className="flex items-center gap-2 bg-accent hover:bg-primary text-white text-sm font-semibold rounded-lg px-5 py-2.5 transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ fontFamily: BODY }}
          >
            Conhecer a solução
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function ServicosPage({
  setPage,
}: {
  setPage: (p: Page) => void;
}) {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=600&fit=crop&auto=format)",
          }}
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            O que oferecemos
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: HEADING }}
          >
            Nossos Serviços
          </h1>
          <p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Soluções completas em Engenharia de Produção para empresas que
            querem crescer com inteligência e eficiência.
          </p>
        </div>
      </section>

      {/* Services grid – layout 2+3 para 5 cards */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Linha 1: 2 cards centralizados */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 max-w-4xl mx-auto">
            {SERVICES.slice(0, 2).map((s, i) => (
              <ServiceCard
                key={i}
                service={s}
                imageId={SERVICE_IMAGES[i]}
                setPage={setPage}
              />
            ))}
          </div>

          {/* Linha 2: 3 cards em largura total */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {SERVICES.slice(2, 5).map((s, idx) => (
              <ServiceCard
                key={idx + 2}
                service={s}
                imageId={SERVICE_IMAGES[idx + 2]}
                setPage={setPage}
              />
            ))}
          </div>

          {/* Nosso processo */}
          <div className="bg-primary rounded-2xl p-12">
            <div className="text-center mb-12">
              <p
                className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: BODY }}
              >
                Como trabalhamos
              </p>
              <h2
                className="text-4xl font-bold text-white"
                style={{ fontFamily: HEADING }}
              >
                Nosso processo
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Diagnóstico",
                  desc: "Entendemos a fundo seu negócio, identificando dores, objetivos e oportunidades de melhoria.",
                },
                {
                  step: "02",
                  title: "Proposta",
                  desc: "Elaboramos uma proposta detalhada com escopo, metodologia, prazos e investimento necessário.",
                },
                {
                  step: "03",
                  title: "Execução",
                  desc: "Executamos o projeto com rigor técnico, comunicação contínua e supervisão de professores.",
                },
                {
                  step: "04",
                  title: "Entrega",
                  desc: "Apresentamos resultados concretos, com relatório completo e plano de implementação.",
                },
              ].map((item, i) => (
                <div key={i} className="relative">
                  <div
                    className="text-6xl font-bold text-white/5 absolute -top-2 -left-2"
                    style={{ fontFamily: HEADING }}
                  >
                    {item.step}
                  </div>
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center mb-4">
                      <span
                        className="text-white text-xs font-bold"
                        style={{ fontFamily: BODY }}
                      >
                        {item.step}
                      </span>
                    </div>
                    <h3
                      className="font-bold text-white mb-2"
                      style={{ fontFamily: HEADING }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="text-sm text-white/60 leading-relaxed"
                      style={{ fontFamily: BODY }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
