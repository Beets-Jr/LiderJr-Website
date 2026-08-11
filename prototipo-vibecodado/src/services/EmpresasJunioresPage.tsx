import { ArrowRight, CheckCircle2, Target, BarChart3, Users, Zap, Briefcase, Lightbulb, TrendingUp } from "lucide-react";
import { HEADING, BODY } from "./types";
import type { Page } from "./types";

export function EmpresasJunioresPage({
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
              "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&h=700&fit=crop&auto=format)",
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
            Soluções para o MEJ
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: HEADING }}
          >
            Soluções para Empresas Juniores
          </h1>
          <h2
            className="text-2xl font-medium text-white/90 mb-6 max-w-3xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Fortaleça sua EJ com estratégia, organização e resultados.
          </h2>
          <p
            className="text-white/60 text-lg leading-relaxed mb-10 max-w-3xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            A Líder Jr. desenvolve soluções personalizadas para Empresas Juniores, ajudando na 
            estruturação estratégica e financeira para que sua EJ possa evoluir de forma mais 
            organizada e sustentável.
          </p>
          <button
            onClick={() => setPage("contato")}
            className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-[#f26821] transition-all"
            style={{ fontFamily: BODY }}
          >
            Agendar diagnóstico
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </section>

      {/* ── Introdução ── */}
      <section className="bg-background py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-bold text-foreground mb-6"
            style={{ fontFamily: HEADING }}
          >
            Como podemos ajudar sua EJ?
          </h2>
          <p
            className="text-foreground/80 text-xl leading-relaxed"
            style={{ fontFamily: BODY }}
          >
            Entendemos os desafios específicos das Empresas Juniores e oferecemos soluções desenvolvidas 
            para apoiar sua organização, gestão e tomada de decisão. Trabalhamos alinhados ao propósito 
            do Movimento Empresa Júnior, entregando projetos que respeitam a sua realidade.
          </p>
        </div>
      </section>

      {/* ── Seção Principal: Soluções ── */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-24">
            
            {/* Serviço 1: Planilha de Precificação (Imagem Esquerda, Texto Direita) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=700&h=500&fit=crop&auto=format"
                  alt="Planilha de Precificação"
                  className="w-full rounded-2xl object-cover shadow-xl"
                  style={{ height: 420 }}
                />
              </div>
              <div>
                <p
                  className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ fontFamily: BODY }}
                >
                  Planilha de Precificação
                </p>
                <h3
                  className="text-3xl font-bold text-foreground mb-4"
                  style={{ fontFamily: HEADING }}
                >
                  Precifique os serviços da sua EJ com mais segurança.
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: BODY }}
                >
                  Uma ferramenta desenvolvida para ajudar sua Empresa Júnior a considerar os diferentes fatores 
                  envolvidos na formação dos preços dos serviços, tornando a precificação mais organizada e padronizada. 
                  Entenda os custos da mão de obra e garanta a saúde financeira da sua EJ em cada projeto.
                </p>
                
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Precificação estruturada e embasada",
                    "Padronização dos valores cobrados",
                    "Maior controle de todos os custos",
                    "Compreensão clara da margem de lucro dos projetos",
                    "Apoio direto à saúde financeira da EJ",
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
                  Conhecer a solução <ArrowRight size={16} />
                </button>
              </div>
            </div>

            {/* Serviço 2: Planejamento Estratégico (Texto Esquerda, Imagem Direita) */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-last lg:order-first">
                <p
                  className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ fontFamily: BODY }}
                >
                  Planejamento Estratégico
                </p>
                <h3
                  className="text-3xl font-bold text-foreground mb-4"
                  style={{ fontFamily: HEADING }}
                >
                  Defina o rumo da sua EJ e acompanhe seus resultados.
                </h3>
                <p
                  className="text-muted-foreground leading-relaxed mb-6"
                  style={{ fontFamily: BODY }}
                >
                  Estruture os objetivos da sua Empresa Júnior, defina metas e ações e acompanhe 
                  seu desenvolvimento para direcionar esforços e recursos para o que realmente importa. 
                  Monitore o desempenho e evite desperdícios financeiros ou de esforço da sua equipe.
                </p>
                
                <div className="flex flex-col gap-3 mb-8">
                  {[
                    "Definição clara e objetiva de metas",
                    "Direcionamento estratégico para a equipe",
                    "Acompanhamento constante de resultados",
                    "Melhor utilização e otimização de recursos",
                    "Maior alinhamento e engajamento da equipe",
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
                  Conhecer a solução <ArrowRight size={16} />
                </button>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=700&h=500&fit=crop&auto=format"
                  alt="Planejamento Estratégico"
                  className="w-full rounded-2xl object-cover shadow-xl"
                  style={{ height: 420 }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seção: Nossa experiência ── */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Nossa experiência
          </p>
          <h2
            className="text-4xl font-bold text-foreground mb-16"
            style={{ fontFamily: HEADING }}
          >
            Empresas Juniores que confiam em nós
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            {/* Precificação */}
            <div>
              <h3
                className="text-2xl font-bold text-foreground mb-8"
                style={{ fontFamily: HEADING }}
              >
                Planilha de Precificação
              </h3>
              <div className="grid grid-cols-2 gap-6 opacity-70 hover:opacity-100 transition-opacity">
                {/* Placeholders visuais para as EJs */}
                <div className="bg-muted rounded-xl h-24 flex items-center justify-center font-bold text-muted-foreground" style={{ fontFamily: BODY }}>EJ Parceira 1</div>
                <div className="bg-muted rounded-xl h-24 flex items-center justify-center font-bold text-muted-foreground" style={{ fontFamily: BODY }}>EJ Parceira 2</div>
                <div className="bg-muted rounded-xl h-24 flex items-center justify-center font-bold text-muted-foreground" style={{ fontFamily: BODY }}>EJ Parceira 3</div>
                <div className="bg-muted rounded-xl h-24 flex items-center justify-center font-bold text-muted-foreground" style={{ fontFamily: BODY }}>EJ Parceira 4</div>
              </div>
            </div>

            {/* Planejamento Estratégico */}
            <div>
              <h3
                className="text-2xl font-bold text-foreground mb-8"
                style={{ fontFamily: HEADING }}
              >
                Planejamento Estratégico
              </h3>
              <div className="grid grid-cols-2 gap-6 opacity-70 hover:opacity-100 transition-opacity">
                <div className="bg-muted rounded-xl h-24 flex items-center justify-center font-bold text-muted-foreground" style={{ fontFamily: BODY }}>EJ Parceira 5</div>
                <div className="bg-muted rounded-xl h-24 flex items-center justify-center font-bold text-muted-foreground" style={{ fontFamily: BODY }}>EJ Parceira 6</div>
                <div className="bg-muted rounded-xl h-24 flex items-center justify-center font-bold text-muted-foreground" style={{ fontFamily: BODY }}>EJ Parceira 7</div>
                <div className="bg-muted rounded-xl h-24 flex items-center justify-center font-bold text-muted-foreground" style={{ fontFamily: BODY }}>EJ Parceira 8</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Seção: Por que escolher a Líder Jr.? ── */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-4xl font-bold text-foreground"
              style={{ fontFamily: HEADING }}
            >
              Por que escolher a Líder Jr.?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Briefcase,
                title: "Experiência Comprovada",
                desc: "Vasta experiência desenvolvendo soluções exclusivas e de alto impacto para diversas Empresas Juniores do país.",
              },
              {
                icon: Target,
                title: "Soluções Personalizadas",
                desc: "Projetos totalmente adaptados às necessidades, à realidade e à maturidade atual da sua EJ.",
              },
              {
                icon: Lightbulb,
                title: "Conhecimento Técnico",
                desc: "Soluções estruturadas com forte embasamento teórico em gestão e Engenharia de Produção, orientadas por professores.",
              },
              {
                icon: Users,
                title: "Conexão com o MEJ",
                desc: "Nossa atuação é profundamente alinhada ao propósito, aos valores e à realidade única do Movimento Empresa Júnior.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-2xl p-6 hover:border-accent/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                  <item.icon size={22} className="text-accent" />
                </div>
                <h3
                  className="text-lg font-bold text-foreground mb-3"
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

      {/* ── Seção de Identificação ── */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #ff751f, transparent 60%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white mb-12"
            style={{ fontFamily: HEADING }}
          >
            Sua EJ está pronta para dar o próximo passo?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-12">
            {[
              "Dificuldade para definir os preços ideais dos projetos?",
              "Falta de padronização na hora da precificação?",
              "Dificuldade para acompanhar metas e resultados?",
              "Falta de um direcionamento estratégico claro?",
              "Recursos e esforços sendo direcionados sem clareza?",
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-start bg-white/5 border border-white/10 rounded-xl p-5">
                <Target size={20} className="text-accent shrink-0 mt-0.5" />
                <p className="text-white font-medium text-sm leading-relaxed" style={{ fontFamily: BODY }}>
                  {text}
                </p>
              </div>
            ))}
          </div>

          <p className="text-white/80 text-lg max-w-2xl mx-auto" style={{ fontFamily: BODY }}>
            Se a sua Empresa Júnior se identifica com algum desses desafios, nós temos as ferramentas certas 
            para estruturar e potencializar seus resultados.
          </p>
        </div>
      </section>

      {/* ── CTA Final ── */}
      <section className="bg-background py-28 text-center px-6">
        <h2
          className="text-4xl lg:text-5xl font-bold text-foreground mb-6"
          style={{ fontFamily: HEADING }}
        >
          Vamos fortalecer sua Empresa Júnior?
        </h2>
        <p
          className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10"
          style={{ fontFamily: BODY }}
        >
          Conte para a nossa equipe quais são os desafios atuais da sua EJ e descubra 
          como podemos ajudar você a superá-los.
        </p>
        <button
          onClick={() => setPage("contato")}
          className="group inline-flex items-center justify-center gap-2 px-10 py-4 bg-accent text-white font-bold rounded-xl hover:bg-[#f26821] transition-all"
          style={{ fontFamily: BODY }}
        >
          Agendar diagnóstico
          <ArrowRight
            size={18}
            className="group-hover:translate-x-1 transition-transform"
          />
        </button>
      </section>
    </div>
  );
}
