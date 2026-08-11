import { ArrowRight, CheckCircle2, TrendingUp, BarChart3, LineChart, Target, PieChart, Activity } from "lucide-react";
import { HEADING, BODY } from "./types";
import type { Page } from "./types";

export function GestaoFinanceiraPage({
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
              "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&h=700&fit=crop&auto=format)",
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
            Gestão Financeira
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: HEADING }}
          >
            Mais clareza e controle para as decisões do seu negócio.
          </h1>
          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Apoiamos sua empresa a compreender resultados reais, organizar o fluxo de movimentações e
            conhecer a fundo os custos e despesas para garantir um crescimento seguro e rentável.
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

      {/* ── Introdução ── */}
      <section className="bg-background py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-foreground/80 text-xl leading-relaxed"
            style={{ fontFamily: BODY }}
          >
            Uma boa gestão financeira começa pelo entendimento dos números. Com as ferramentas certas, sua empresa pode compreender seus resultados, organizar suas movimentações e tomar decisões mais conscientes sobre custos e preços.
          </p>
        </div>
      </section>

      {/* ── Seção Principal: Soluções ── */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-foreground"
              style={{ fontFamily: HEADING }}
            >
              Conheça nossas soluções em Gestão Financeira
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            {/* Serviço 1: DRE (Imagem Esquerda, Texto Direita) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=700&h=500&fit=crop&auto=format"
                  alt="Demonstração do Resultado do Exercício"
                  className="w-full rounded-2xl object-cover shadow-xl"
                  style={{ height: 420 }}
                />
              </div>
              <div>
                <p
                  className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ fontFamily: BODY }}
                >
                  DRE
                </p>
                <h3
                  className="text-3xl font-bold text-foreground mb-4"
                  style={{ fontFamily: HEADING }}
                >
                  Entenda a saúde financeira da sua empresa.
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: BODY }}
                >
                  Com foco gerencial e administrativo, nossa estruturação da Demonstração do Resultado do Exercício (DRE) 
                  ajuda você a entender exatamente para onde o dinheiro está indo. Analisamos receitas, custos, despesas, 
                  lucros e margens para propor planos de ação que melhorem a rentabilidade.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Compreensão clara da situação financeira",
                    "Análise detalhada de custos e despesas operacionais",
                    "Avaliação de resultados e margens de lucro",
                    "Apoio ao planejamento estratégico e tomada de decisão",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span className="text-sm text-foreground font-medium" style={{ fontFamily: BODY }}>{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setPage("contato")}
                  className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors"
                  style={{ fontFamily: BODY }}
                >
                  Conhecer serviço <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Serviço 2: Fluxo de Caixa (Texto Esquerda, Imagem Direita) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-last lg:order-first">
                <p
                  className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ fontFamily: BODY }}
                >
                  Gestão de Fluxo de Caixa
                </p>
                <h3
                  className="text-3xl font-bold text-foreground mb-4"
                  style={{ fontFamily: HEADING }}
                >
                  Tenha mais controle sobre suas entradas e saídas.
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: BODY }}
                >
                  Organizamos e estruturamos as movimentações financeiras da sua empresa. Com a gestão de fluxo de caixa, 
                  você ganha previsibilidade, acompanha ciclos financeiros, analisa o capital de giro necessário e estabelece 
                  prazos que protegem a saúde do seu negócio.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Organização e registro de receitas e despesas",
                    "Maior controle financeiro e previsibilidade",
                    "Análise profunda do capital de giro",
                    "Melhor planejamento do caixa a curto e médio prazo",
                    "Redução de gastos desnecessários",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span className="text-sm text-foreground font-medium" style={{ fontFamily: BODY }}>{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setPage("contato")}
                  className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors"
                  style={{ fontFamily: BODY }}
                >
                  Conhecer serviço <ArrowRight size={16} />
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&h=500&fit=crop&auto=format"
                  alt="Gestão de Fluxo de Caixa"
                  className="w-full rounded-2xl object-cover shadow-xl"
                  style={{ height: 420 }}
                />
              </div>
            </div>

            {/* Serviço 3: Análise de Custos (Imagem Esquerda, Texto Direita) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=500&fit=crop&auto=format"
                  alt="Análise de Custos e Precificação"
                  className="w-full rounded-2xl object-cover shadow-xl"
                  style={{ height: 420 }}
                />
              </div>
              <div>
                <p
                  className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ fontFamily: BODY }}
                >
                  Análise de Custos
                </p>
                <h3
                  className="text-3xl font-bold text-foreground mb-4"
                  style={{ fontFamily: HEADING }}
                >
                  Conheça seus custos e encontre o preço ideal.
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: BODY }}
                >
                  Utilizamos metodologias avançadas de custeio para mapear e classificar cada custo e despesa da sua operação. 
                  Com esses dados em mãos — aliados a pesquisas de mercado e concorrência — ajudamos você a definir preços 
                  de venda que garantam rentabilidade sem perder competitividade.
                </p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Identificação clara dos custos fixos e variáveis",
                    "Compreensão e classificação das despesas operacionais",
                    "Identificação de oportunidades de redução",
                    "Apoio técnico à precificação de produtos e serviços",
                    "Melhor análise geral da rentabilidade",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-accent shrink-0" />
                      <span className="text-sm text-foreground font-medium" style={{ fontFamily: BODY }}>{item}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => setPage("contato")}
                  className="inline-flex items-center gap-2 text-accent font-bold hover:text-primary transition-colors"
                  style={{ fontFamily: BODY }}
                >
                  Conhecer serviço <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seção Comparativa ── */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: HEADING }}
            >
              Qual destas soluções é para você?
            </h2>
            <p
              className="text-muted-foreground text-lg"
              style={{ fontFamily: BODY }}
            >
              Encontre o serviço ideal baseado no desafio atual da sua empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                needs: "Entender o resultado financeiro da empresa",
                service: "DRE",
                icon: BarChart3,
              },
              {
                needs: "Organizar entradas, saídas e controlar o caixa",
                service: "Gestão de Fluxo de Caixa",
                icon: Activity,
              },
              {
                needs: "Conhecer seus custos e melhorar a precificação",
                service: "Análise de Custos",
                icon: PieChart,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-accent" />
                </div>
                <p
                  className="text-sm text-muted-foreground mb-3 font-medium"
                  style={{ fontFamily: BODY }}
                >
                  Se você precisa...
                </p>
                <h3
                  className="text-xl font-bold text-foreground mb-6"
                  style={{ fontFamily: BODY }}
                >
                  {item.needs}
                </h3>
                <div className="mt-auto pt-6 border-t border-border">
                  <p
                    className="text-xs text-accent uppercase tracking-wider font-bold"
                    style={{ fontFamily: BODY }}
                  >
                    Solução indicada
                  </p>
                  <p
                    className="text-lg font-bold text-foreground mt-1"
                    style={{ fontFamily: HEADING }}
                  >
                    {item.service}
                  </p>
                </div>
              </div>
            ))}
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
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-white max-w-3xl mx-auto"
              style={{ fontFamily: HEADING }}
            >
              Uma gestão financeira mais estruturada ajuda sua empresa a:
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: LineChart, text: "Tomar decisões baseadas em dados" },
              { icon: Target, text: "Compreender melhor seus resultados" },
              { icon: Activity, text: "Controlar recursos financeiros com eficiência" },
              { icon: TrendingUp, text: "Identificar oportunidades de redução de custos" },
              { icon: PieChart, text: "Melhorar e embasar a precificação" },
              { icon: CheckCircle2, text: "Planejar os próximos passos com mais segurança" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                  <item.icon size={20} className="text-accent" />
                </div>
                <p className="text-white font-medium text-sm" style={{ fontFamily: BODY }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="bg-background py-28 text-center px-6">
        <h2
          className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
          style={{ fontFamily: HEADING }}
        >
          Qual solução financeira sua empresa precisa?
        </h2>
        <p
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
          style={{ fontFamily: BODY }}
        >
          Nossa equipe pode entender o cenário do seu negócio e indicar a solução 
          mais adequada para suas necessidades.
        </p>
        <button
          onClick={() => setPage("contato")}
          className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent text-white font-bold rounded-xl hover:bg-[#f26821] transition-all"
          style={{ fontFamily: BODY }}
        >
          Solicitar diagnóstico
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </section>
    </div>
  );
}
