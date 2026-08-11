import { ArrowRight, CheckCircle2, Target, Lightbulb, Search, BarChart3, Users, Zap } from "lucide-react";
import { HEADING, BODY } from "./types";
import type { Page } from "./types";

export function CaptacaoClientesPage({
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
              "url(https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&h=700&fit=crop&auto=format)",
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
            Marketing
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: HEADING }}
          >
            Entenda seu mercado. Conecte-se com seus clientes.
          </h1>
          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Transforme informações sobre o mercado e seu público em estratégias mais assertivas para 
            posicionar sua empresa, atrair clientes e encontrar novas oportunidades.
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
            Conhecer o mercado é essencial para tomar boas decisões. Entender quem são seus clientes, 
            concorrentes e oportunidades permite desenvolver estratégias de marketing mais alinhadas 
            aos objetivos do negócio.
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
              Conheça nossas soluções em Marketing
            </h2>
          </div>

          <div className="flex flex-col gap-24">
            {/* Serviço 1: Pesquisa de Mercado (Imagem Esquerda, Texto Direita) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500&fit=crop&auto=format"
                  alt="Pesquisa de Mercado"
                  className="w-full rounded-2xl object-cover shadow-xl"
                  style={{ height: 420 }}
                />
              </div>
              <div>
                <p
                  className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ fontFamily: BODY }}
                >
                  Pesquisa de Mercado
                </p>
                <h3
                  className="text-3xl font-bold text-foreground mb-4"
                  style={{ fontFamily: HEADING }}
                >
                  Conheça seu mercado para tomar decisões mais estratégicas.
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: BODY }}
                >
                  A Pesquisa de Mercado consiste na coleta e análise de informações para compreender melhor 
                  o mercado em que a empresa está inserida, seu público, concorrentes e oportunidades.
                  Fornecemos dados assertivos para apoiar suas decisões e direcionar estratégias de negócios.
                </p>
                
                <p className="text-sm font-bold text-foreground mb-3" style={{ fontFamily: BODY }}>Principais aplicações:</p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Análise de mercado e concorrência",
                    "Pesquisa de tendências e preços",
                    "Segmentação de mercado",
                    "Compreensão profunda do público-alvo",
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
                  Conhecer o serviço <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Serviço 2: Plano de Marketing (Texto Esquerda, Imagem Direita) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-last lg:order-first">
                <p
                  className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ fontFamily: BODY }}
                >
                  Plano de Marketing
                </p>
                <h3
                  className="text-3xl font-bold text-foreground mb-4"
                  style={{ fontFamily: HEADING }}
                >
                  Crie estratégias para alcançar os clientes certos.
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: BODY }}
                >
                  O Plano de Marketing busca conectar a empresa com seus clientes através da análise 
                  do mercado, transformando essas informações em estratégias direcionadas de divulgação, 
                  posicionamento e conexão, utilizando ferramentas como análise SWOT e os 4 Ps.
                </p>
                
                <p className="text-sm font-bold text-foreground mb-3" style={{ fontFamily: BODY }}>Principais benefícios:</p>
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Estratégias mais assertivas baseadas em dados",
                    "Melhor compreensão do posicionamento da empresa",
                    "Maior atratividade perante o mercado e concorrência",
                    "Melhor direcionamento para atração e fidelização de clientes",
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
                  Conhecer o serviço <ArrowRight size={16} />
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop&auto=format"
                  alt="Plano de Marketing"
                  className="w-full rounded-2xl object-cover shadow-xl"
                  style={{ height: 420 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seção Comparativa: Qual é o seu desafio? ── */}
      <section className="bg-background py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2
              className="text-4xl font-bold text-foreground mb-4"
              style={{ fontFamily: HEADING }}
            >
              Qual é o seu desafio?
            </h2>
            <p
              className="text-muted-foreground text-lg"
              style={{ fontFamily: BODY }}
            >
              Identifique a solução mais alinhada com as necessidades atuais do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Search size={22} className="text-accent" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: HEADING }}
              >
                Quero entender melhor meu mercado
              </h3>
              <p
                className="text-muted-foreground leading-relaxed mb-8 flex-1"
                style={{ fontFamily: BODY }}
              >
                Se você precisa conhecer seu público, concorrentes, tendências, preços ou oportunidades, a 
                <strong> Pesquisa de Mercado</strong> fornece informações valiosas para apoiar suas decisões.
              </p>
              <button
                onClick={() => setPage("contato")}
                className="w-full py-3 border border-border rounded-xl text-foreground font-semibold hover:bg-accent hover:text-white hover:border-accent transition-colors"
                style={{ fontFamily: BODY }}
              >
                Conhecer Pesquisa de Mercado
              </button>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:border-accent/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Target size={22} className="text-accent" />
              </div>
              <h3
                className="text-2xl font-bold text-foreground mb-4"
                style={{ fontFamily: HEADING }}
              >
                Quero melhorar minhas estratégias
              </h3>
              <p
                className="text-muted-foreground leading-relaxed mb-8 flex-1"
                style={{ fontFamily: BODY }}
              >
                Se você busca estruturar suas ações de marketing, definir estratégias de divulgação e 
                se conectar melhor com seus clientes, o <strong>Plano de Marketing</strong> é a solução adequada.
              </p>
              <button
                onClick={() => setPage("contato")}
                className="w-full py-3 border border-border rounded-xl text-foreground font-semibold hover:bg-accent hover:text-white hover:border-accent transition-colors"
                style={{ fontFamily: BODY }}
              >
                Conhecer Plano de Marketing
              </button>
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
          <div className="text-center mb-16">
            <h2
              className="text-3xl lg:text-4xl font-bold text-white max-w-3xl mx-auto"
              style={{ fontFamily: HEADING }}
            >
              Marketing mais estratégico começa com informação
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: BarChart3, text: "Decisões baseadas em dados" },
              { icon: Lightbulb, text: "Maior conhecimento do mercado" },
              { icon: Users, text: "Melhor compreensão dos clientes" },
              { icon: Search, text: "Identificação de novas oportunidades" },
              { icon: Target, text: "Estratégias mais direcionadas" },
              { icon: Zap, text: "Maior capacidade de posicionamento" },
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
          Pronto para entender melhor o seu mercado?
        </h2>
        <p
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
          style={{ fontFamily: BODY }}
        >
          Descubra qual solução pode ajudar sua empresa a tomar decisões 
          mais estratégicas e se conectar com os clientes certos.
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
