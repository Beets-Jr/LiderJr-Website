import {
  ArrowRight,
  CheckCircle2,
  Users,
  TrendingUp,
  Target,
  BarChart3,
  Lightbulb,
  ShieldCheck,
  Layers,
  Zap,
  Compass,
  LineChart,
} from "lucide-react";
import { HEADING, BODY } from "./types";
import type { Page } from "./types";

export function EstrategiaEmpresarialPage({
  setPage,
}: {
  setPage: (p: Page) => void;
}) {
  return (
    <div className="pt-16">

      {/* ── Hero ── */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&h=700&fit=crop&auto=format)",
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
            Estratégia Empresarial
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: HEADING }}
          >
            Estratégia que transforma empresas em referências
          </h1>
          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Reunimos planejamento, análise e projeções em uma solução integrada
            para apoiar decisões estratégicas com dados reais e metodologia
            comprovada.
          </p>
          <button
            onClick={() => setPage("contato")}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-[#f26821] transition-all"
            style={{ fontFamily: BODY }}
          >
            Solicitar Diagnóstico
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* ── Introdução – 3 perguntas ── */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: BODY }}
            >
              Por onde começar
            </p>
            <h2
              className="text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: HEADING }}
            >
              Toda empresa precisa responder três perguntas
            </h2>
            <p
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
              style={{ fontFamily: BODY }}
            >
              Antes de agir, é preciso entender onde você está, definir onde quer
              chegar e traçar o caminho. Nossas soluções são desenhadas para
              responder exatamente isso.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                question: "Onde estamos?",
                desc: "Diagnóstico do cenário atual, análise de mercado e mapeamento das forças, fraquezas, oportunidades e ameaças do negócio.",
                icon: Compass,
              },
              {
                num: "02",
                question: "Para onde queremos ir?",
                desc: "Definição de objetivos estratégicos, metas de crescimento e a visão de futuro que guiará todas as decisões da empresa.",
                icon: Target,
              },
              {
                num: "03",
                question: "Como chegaremos lá?",
                desc: "Construção de um plano de ação integrado com indicadores, projeções financeiras e mecanismos de acompanhamento contínuo.",
                icon: LineChart,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative group bg-card border border-border rounded-2xl p-8 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div
                  className="absolute top-6 right-6 text-6xl font-bold text-foreground/5 leading-none select-none"
                  style={{ fontFamily: HEADING }}
                >
                  {item.num}
                </div>
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                  <item.icon
                    size={22}
                    className="text-accent group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3
                  className="text-xl font-bold text-foreground mb-3"
                  style={{ fontFamily: HEADING }}
                >
                  {item.question}
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed text-sm"
                  style={{ fontFamily: BODY }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Solução 01 – Planejamento Estratégico ── */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-8xl font-bold text-accent/10 leading-none select-none"
                  style={{ fontFamily: HEADING }}
                >
                  01
                </span>
                <div>
                  <p
                    className="text-accent text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: BODY }}
                  >
                    Solução
                  </p>
                  <h2
                    className="text-3xl lg:text-4xl font-bold text-foreground"
                    style={{ fontFamily: HEADING }}
                  >
                    Planejamento Estratégico
                  </h2>
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Target size={22} className="text-white" />
              </div>

              <p
                className="text-muted-foreground leading-relaxed mb-4"
                style={{ fontFamily: BODY }}
              >
                Construímos junto com sua empresa um mapa claro do futuro:
                análise do cenário atual, definição de objetivos e criação de um
                plano robusto para alcançá-los.
              </p>
              <p
                className="text-muted-foreground leading-relaxed mb-8"
                style={{ fontFamily: BODY }}
              >
                Com ferramentas como SWOT, BSC e OKR, transformamos intenções em
                ações mensuráveis, com indicadores e rituais de acompanhamento
                que mantêm o time alinhado.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Análise do cenário interno e externo (SWOT)",
                  "Definição de objetivos e metas (OKR / BSC)",
                  "Construção do plano estratégico",
                  "Indicadores de desempenho (KPIs)",
                  "Rituais de acompanhamento e revisão",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span
                      className="text-sm text-foreground"
                      style={{ fontFamily: BODY }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["SWOT", "OKR", "BSC", "KPI", "PDCA"].map((t) => (
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

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop&auto=format"
                alt="Planejamento Estratégico"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ height: 420 }}
              />
              <div className="absolute -bottom-5 -left-5 bg-accent rounded-xl px-6 py-4 hidden lg:block shadow-xl">
                <p
                  className="text-white font-bold text-2xl"
                  style={{ fontFamily: HEADING }}
                >
                  OKR
                </p>
                <p className="text-white/80 text-xs" style={{ fontFamily: BODY }}>
                  Metas mensuráveis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solução 02 – Plano de Negócios ── */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-last lg:order-first">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop&auto=format"
                alt="Plano de Negócios"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ height: 420 }}
              />
              <div className="absolute -bottom-5 -right-5 bg-primary rounded-xl px-6 py-4 hidden lg:block shadow-xl border border-white/10">
                <p
                  className="text-accent font-bold text-2xl"
                  style={{ fontFamily: HEADING }}
                >
                  MVP
                </p>
                <p className="text-white/80 text-xs" style={{ fontFamily: BODY }}>
                  Validação de ideia
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-8xl font-bold text-accent/10 leading-none select-none"
                  style={{ fontFamily: HEADING }}
                >
                  02
                </span>
                <div>
                  <p
                    className="text-accent text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: BODY }}
                  >
                    Solução
                  </p>
                  <h2
                    className="text-3xl lg:text-4xl font-bold text-foreground"
                    style={{ fontFamily: HEADING }}
                  >
                    Plano de Negócios
                  </h2>
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <Lightbulb size={22} className="text-white" />
              </div>

              <p
                className="text-muted-foreground leading-relaxed mb-4"
                style={{ fontFamily: BODY }}
              >
                Seja para uma nova empresa ou para expandir o que já existe,
                estruturamos o plano que valida a ideia, analisa o mercado e
                projeta os resultados financeiros com precisão.
              </p>
              <p
                className="text-muted-foreground leading-relaxed mb-8"
                style={{ fontFamily: BODY }}
              >
                Um plano de negócios bem feito reduz riscos, atrai investidores e
                dá segurança para crescer com inteligência — e não no improviso.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Validação da ideia e modelo de negócio",
                  "Análise de mercado e concorrência",
                  "Projeção financeira e análise de viabilidade",
                  "Estudo de público-alvo e posicionamento",
                  "Estratégia de marketing e canais de venda",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span
                      className="text-sm text-foreground"
                      style={{ fontFamily: BODY }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["Canvas", "Viabilidade", "Mercado", "Finanças", "Pitch"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                      style={{ fontFamily: BODY }}
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Solução 03 – Previsão de Demanda ── */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <span
                  className="text-8xl font-bold text-accent/10 leading-none select-none"
                  style={{ fontFamily: HEADING }}
                >
                  03
                </span>
                <div>
                  <p
                    className="text-accent text-xs font-semibold uppercase tracking-widest"
                    style={{ fontFamily: BODY }}
                  >
                    Solução
                  </p>
                  <h2
                    className="text-3xl lg:text-4xl font-bold text-foreground"
                    style={{ fontFamily: HEADING }}
                  >
                    Previsão de Demanda
                  </h2>
                </div>
              </div>

              <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-6">
                <BarChart3 size={22} className="text-white" />
              </div>

              <p
                className="text-muted-foreground leading-relaxed mb-4"
                style={{ fontFamily: BODY }}
              >
                Utilizamos análise de dados históricos e técnicas estatísticas
                para projetar a demanda futura da sua empresa — reduzindo
                desperdícios, otimizando o estoque e apoiando a produção.
              </p>
              <p
                className="text-muted-foreground leading-relaxed mb-8"
                style={{ fontFamily: BODY }}
              >
                Antecipar a demanda é antecipar o futuro. Com projeções precisas,
                sua empresa toma decisões de compra, produção e contratação com
                muito mais confiança.
              </p>

              <div className="flex flex-col gap-3 mb-8">
                {[
                  "Análise e tratamento de dados históricos",
                  "Projeções com modelos estatísticos",
                  "Redução de desperdícios e excessos de estoque",
                  "Apoio ao planejamento de produção",
                  "Apoio a contratações e compras",
                  "Relatórios para tomada de decisão",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-accent shrink-0" />
                    <span
                      className="text-sm text-foreground"
                      style={{ fontFamily: BODY }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2">
                {["Estatística", "Séries temporais", "Forecast", "Estoque", "Data"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium"
                      style={{ fontFamily: BODY }}
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&auto=format"
                alt="Previsão de Demanda"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ height: 420 }}
              />
              <div className="absolute -bottom-5 -left-5 bg-accent rounded-xl px-6 py-4 hidden lg:block shadow-xl">
                <p
                  className="text-white font-bold text-2xl"
                  style={{ fontFamily: HEADING }}
                >
                  -30%
                </p>
                <p className="text-white/80 text-xs" style={{ fontFamily: BODY }}>
                  Redução de perdas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Benefícios Gerais ── */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #ff751f, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: BODY }}
            >
              Resultados
            </p>
            <h2
              className="text-4xl font-bold text-white mb-4"
              style={{ fontFamily: HEADING }}
            >
              O que sua empresa ganha
            </h2>
            <p
              className="text-white/60 max-w-xl mx-auto"
              style={{ fontFamily: BODY }}
            >
              As três soluções trabalham em conjunto para gerar resultados
              concretos e sustentáveis para o seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Target, title: "Decisões assertivas", desc: "Baseadas em dados, não em achismo." },
              { icon: TrendingUp, title: "Crescimento sustentável", desc: "Com estratégia sólida e projeções confiáveis." },
              { icon: ShieldCheck, title: "Redução de riscos", desc: "Antecipe cenários antes que eles aconteçam." },
              { icon: Layers, title: "Melhor uso dos recursos", desc: "Estoque, time e capital no lugar certo." },
              { icon: Compass, title: "Visão estratégica", desc: "Do operacional ao longo prazo, com clareza." },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 hover:-translate-y-1 cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-5 group-hover:bg-accent transition-colors duration-300">
                  <item.icon
                    size={20}
                    className="text-accent group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3
                  className="font-bold text-white mb-2 text-sm"
                  style={{ fontFamily: HEADING }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-white/50 text-xs leading-relaxed"
                  style={{ fontFamily: BODY }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Diferenciais Líder Jr. ── */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: BODY }}
              >
                Por que a Líder Jr.
              </p>
              <h2
                className="text-4xl font-bold text-foreground mb-6"
                style={{ fontFamily: HEADING }}
              >
                Diferenciais que fazem a diferença
              </h2>
              <p
                className="text-muted-foreground leading-relaxed mb-10"
                style={{ fontFamily: BODY }}
              >
                Mais do que entregar relatórios, trabalhamos lado a lado com sua
                equipe do diagnóstico à implementação — com supervisão acadêmica
                e foco em resultados reais.
              </p>

              <div className="flex flex-col gap-7">
                {[
                  { icon: Layers, title: "Metodologia estruturada", desc: "Processos validados com base em ferramentas reconhecidas pelo mercado e pela academia." },
                  { icon: Users, title: "Equipe multidisciplinar", desc: "Estudantes de Engenharia de Produção com visão sistêmica e supervisão de professores especialistas." },
                  { icon: Target, title: "Soluções personalizadas", desc: "Nenhum projeto é genérico. Cada entrega é adaptada ao contexto e ao segmento do cliente." },
                  { icon: Zap, title: "Acompanhamento próximo", desc: "Comunicação frequente, checkpoints e relatórios de progresso ao longo de todo o projeto." },
                  { icon: TrendingUp, title: "Foco em resultados", desc: "Métricas definidas no início e acompanhadas até a entrega para garantir o impacto prometido." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon size={18} className="text-accent" />
                    </div>
                    <div>
                      <h3
                        className="font-bold text-foreground mb-1"
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
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=600&fit=crop&auto=format"
                alt="Equipe Líder Jr. em reunião estratégica"
                className="w-full rounded-2xl object-cover shadow-xl"
                style={{ height: 540 }}
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-primary/90 backdrop-blur-sm border border-white/10 rounded-xl p-5">
                <p
                  className="text-white/60 text-xs mb-1"
                  style={{ fontFamily: BODY }}
                >
                  Diagnóstico inicial
                </p>
                <p className="text-white font-bold" style={{ fontFamily: HEADING }}>
                  100% gratuito e sem compromisso
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #ff751f, transparent 55%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Próximo passo
          </p>
          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: HEADING }}
          >
            Vamos construir o futuro da sua empresa?
          </h2>
          <p
            className="text-white/60 text-lg max-w-2xl mx-auto leading-8 mb-10"
            style={{ fontFamily: BODY }}
          >
            Agende um diagnóstico gratuito com nossa equipe e descubra quais
            soluções estratégicas podem acelerar o crescimento do seu negócio.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setPage("contato")}
              className="group flex items-center gap-2 px-10 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-[#f26821] transition-all"
              style={{ fontFamily: BODY }}
            >
              Solicitar Diagnóstico
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button
              onClick={() => setPage("servicos")}
              className="px-10 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-all"
              style={{ fontFamily: BODY }}
            >
              Ver outros serviços
            </button>
          </div>
          <p
            className="text-white/40 text-sm mt-8"
            style={{ fontFamily: BODY }}
          >
            Gratuito, sem compromisso. Retorno em até 24 horas úteis.
          </p>
        </div>
      </section>
    </div>
  );
}
