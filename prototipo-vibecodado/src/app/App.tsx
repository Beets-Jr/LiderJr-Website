import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Users,
  TrendingUp,
  Award,
  BookOpen,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  ExternalLink,
  Star,
  Clock,
  Tag,
  Box,
} from "lucide-react";

type Page =
  | "home"
  | "quem-somos"
  | "servicos"
  | "cases"
  | "materiais"
  | "blog"
  | "contato";

const HEADING = "'League Spartan', sans-serif";
const SERIF = "'DM Serif Display', serif";
const BODY = "'Raleway', sans-serif";

const NAV_LINKS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "Quem Somos", page: "quem-somos" },
  { label: "Serviços", page: "servicos" },
  { label: "Cases", page: "cases" },
  { label: "Materiais", page: "materiais" },
  { label: "Blog", page: "blog" },
  { label: "Fale Conosco", page: "contato" },
];

const SERVICES = [
  {
    icon: TrendingUp,
    title: "Mapeamento de Processos",
    desc: "Identificamos gargalos e ineficiências na sua operação, propondo melhorias sustentadas em metodologias como BPMN e fluxogramas.",
    tags: ["Lean", "BPMN", "VSM"],
  },
  {
    icon: Award,
    title: "Gestão da Qualidade",
    desc: "Implementamos ferramentas de controle de qualidade como PDCA, 5S e FMEA para elevar o padrão dos seus processos e produtos.",
    tags: ["PDCA", "5S", "FMEA"],
  },
  {
    icon: Users,
    title: "Pesquisa de Mercado",
    desc: "Realizamos pesquisas quantitativas e qualitativas para embasar decisões estratégicas com dados reais do seu segmento.",
    tags: ["Dados", "Análise", "Estratégia"],
  },
  {
    icon: BookOpen,
    title: "Planejamento Estratégico",
    desc: "Desenvolvemos planos de negócios e diagnósticos organizacionais com foco em crescimento sustentável e competitividade.",
    tags: ["OKR", "BSC", "Swot"],
  },
  {
    icon: CheckCircle2,
    title: "Custos e Precificação",
    desc: "Analisamos sua estrutura de custos e desenvolvemos estratégias de precificação alinhadas ao mercado e à margem desejada.",
    tags: ["Custos", "Precificação", "Margem"],
  },
  {
    icon: Star,
    title: "Consultoria em Estoque",
    desc: "Otimizamos a gestão de estoques com modelos de lote econômico, curva ABC e sistemas de reabastecimento inteligente.",
    tags: ["ABC", "EOQ", "Kanban"],
  },
];

const TEAM = [
  {
    name: "Ana Beatriz Costa",
    role: "Presidente",
    img: "photo-1573496359142-b8d87734a5a2",
  },
  {
    name: "Lucas Mendonça",
    role: "Diretor de Projetos",
    img: "photo-1519085360753-af0119f7cbe7",
  },
  {
    name: "Fernanda Lima",
    role: "Diretora de Marketing",
    img: "photo-1580489944761-15a19d654956",
  },
  {
    name: "Rafael Sousa",
    role: "Diretor Financeiro",
    img: "photo-1507003211169-0a1dd7228f2d",
  },
  {
    name: "Juliana Moraes",
    role: "Gerente de Qualidade",
    img: "photo-1438761681033-6461ffad8d80",
  },
  {
    name: "Pedro Alves",
    role: "Gerente de RH",
    img: "photo-1472099645785-5658abf4ff4e",
  },
];

const CASES = [
  {
    result: "+28%",
    metric: "Produtividade",
    company: "Empresa do setor alimentício",
    desc: "Reestruturamos os processos produtivos reduzindo desperdícios e aumentando a eficiência operacional.",
    tags: ["Lean", "Processos"],
  },
  {
    result: "-35%",
    metric: "Tempo de produção",
    company: "Indústria metalúrgica",
    desc: "Mapeamento e padronização dos processos resultando em entregas mais rápidas e organizadas.",
    tags: ["Mapeamento", "Qualidade"],
  },
  {
    result: "+18%",
    metric: "Faturamento",
    company: "Comércio varejista",
    desc: "Diagnóstico estratégico e implantação de melhorias que impulsionaram os resultados da empresa.",
    tags: ["Estratégia", "Gestão"],
  },
];

const BLOG_POSTS = [
  {
    title:
      "Como o Lean Manufacturing pode transformar sua pequena empresa",
    excerpt:
      "Conheça os princípios do Lean e como aplicá-los na redução de desperdícios e aumento da produtividade em negócios de pequeno porte.",
    date: "15 Jun 2026",
    category: "Processos",
    readTime: "6 min",
    img: "photo-1581091226825-a6a2a5aee158",
  },
  {
    title: "5 indicadores de desempenho essenciais para PMEs",
    excerpt:
      "KPIs bem definidos são o termômetro da saúde do seu negócio. Saiba quais métricas acompanhar para tomar decisões mais assertivas.",
    date: "08 Jun 2026",
    category: "Gestão",
    readTime: "5 min",
    img: "photo-1551288049-bebda4e38f71",
  },
  {
    title: "Gestão de estoques: quando o excesso vira prejuízo",
    excerpt:
      "Manter estoque além do necessário tem custo. Entenda como a curva ABC e o ponto de pedido podem equilibrar oferta e demanda.",
    date: "01 Jun 2026",
    category: "Logística",
    readTime: "7 min",
    img: "photo-1566576912321-d58ddd7a6088",
  },
  {
    title: "Planejamento estratégico: do papel à execução",
    excerpt:
      "Muitas empresas elaboram planos que nunca saem do PowerPoint. Veja como estruturar um planejamento que realmente se transforma em ação.",
    date: "22 Mai 2026",
    category: "Estratégia",
    readTime: "8 min",
    img: "photo-1552664730-d307ca884978",
  },
  {
    title:
      "Ferramentas da qualidade: um guia prático para iniciantes",
    excerpt:
      "Do diagrama de Ishikawa ao Controle Estatístico de Processo, este guia apresenta as sete ferramentas da qualidade de forma acessível.",
    date: "14 Mai 2026",
    category: "Qualidade",
    readTime: "9 min",
    img: "photo-1454165804606-c3d57bc86b40",
  },
  {
    title:
      "Por que sua empresa precisa de uma pesquisa de mercado agora",
    excerpt:
      "Em um cenário competitivo, decidir sem dados é apostas no escuro. Saiba como uma pesquisa bem conduzida pode mudar o rumo do seu negócio.",
    date: "05 Mai 2026",
    category: "Mercado",
    readTime: "6 min",
    img: "photo-1460925895917-afdab827c52f",
  },
];

const STATS = [
  { value: "+100", label: "Projetos entregues" },
  { value: "17", label: "Anos de atuação" },
  { value: "97%", label: "Satisfação dos clientes" },
  { value: "+50", label: "Clientes atendidos" },
];

const VALUES = [
  {
    title: "Inovação",
    desc: "Buscamos soluções criativas e atualizadas para cada desafio empresarial.",
  },
  {
    title: "Comprometimento",
    desc: "Entregamos o que prometemos, dentro do prazo e com excelência.",
  },
  {
    title: "Ética",
    desc: "Transparência e integridade norteiam todas as nossas relações.",
  },
  {
    title: "Aprendizado",
    desc: "Somos uma empresa que cresce junto com nossos membros e clientes.",
  },
];

const CLIENTS_ROW_1 = [
  "Empresa Alpha",
  "Grupo Nova",
  "TechSul",
  "Metalúrgica Vitória",
  "AgroPrime",
  "Comércio Estrela",
];

const CLIENTS_ROW_2 = [
  "Indústria Confiança",
  "GrupoMax",
  "Vertex Solutions",
  "Prime Foods",
  "Construtora Horizonte",
  "LogTech",
];

function CasesCarousel({ setPage }: { setPage: (p: Page) => void }) {
  const total = CASES.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((c) => c + 1);
  const prev = () => setCurrentIndex((c) => c - 1);

  const centerRealIndex = ((currentIndex % total) + total) % total;

  const cardBody = (c: (typeof CASES)[number], isCenter: boolean) => (
    <div
      className={`bg-card border rounded-2xl p-8 h-full ${
        isCenter ? "border-accent/40 shadow-2xl" : "border-border shadow-sm"
      }`}
    >
      <p
        className={`font-bold text-accent mb-1 transition-all duration-700 ${
          isCenter ? "text-5xl" : "text-4xl"
        }`}
        style={{ fontFamily: HEADING }}
      >
        {c.result}
      </p>
      <p className="font-semibold text-foreground mb-5" style={{ fontFamily: BODY }}>
        {c.metric}
      </p>
      <div className="w-12 h-px bg-border mb-5" />
      <h3 className="text-lg font-bold text-foreground mb-3" style={{ fontFamily: HEADING }}>
        {c.company}
      </h3>
      <p className="leading-7 text-sm mb-6 text-muted-foreground" style={{ fontFamily: BODY }}>
        {c.desc}
      </p>
      <div className="flex flex-wrap gap-2 mb-6">
        {c.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-full text-xs bg-background border border-border"
            style={{ fontFamily: BODY }}
          >
            {tag}
          </span>
        ))}
      </div>
      {isCenter && (
        <div className="flex items-center gap-2 text-accent font-semibold text-sm" style={{ fontFamily: BODY }}>
          Ver case <ArrowRight size={16} />
        </div>
      )}
    </div>
  );

  return (
    <div className="flex items-center justify-center gap-4 md:gap-6">
      <button
        onClick={prev}
        aria-label="Case anterior"
        className="shrink-0 w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-white transition-colors"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Desktop: para cada card, calculamos qual "trilha" (dup) está mais perto do
          centro no momento (dupCenter), e renderizamos ela + as duas vizinhas.
          Isso garante cobertura em qualquer valor de currentIndex, girando o
          quanto for, sem nunca faltar uma cópia posicionada corretamente. */}
      <div className="hidden md:block relative flex-1 max-w-5xl overflow-hidden" style={{ height: 500 }}>
        {CASES.map((c, i) => {
          const dupCenter = Math.round((currentIndex - i) / total);

          return [-1, 0, 1].map((d) => {
            const dup = dupCenter + d;
            const pos = i - currentIndex + dup * total;
            const isCenter = pos === 0;
            const visible = Math.abs(pos) <= 1;
            const scale = isCenter ? 1.05 : 0.85;
            const translateY = isCenter ? -24 : 12;
            const opacity = isCenter ? 1 : visible ? 0.55 : 0;

            return (
              <div
                key={`${c.company}-${dup}`}
                onClick={() =>
                  isCenter
                    ? setPage("cases")
                    : visible && setCurrentIndex((prev) => prev + pos)
                }
                className="absolute top-10 left-1/2 w-[340px] cursor-pointer transition-all duration-700 ease-out"
                style={{
                  transform: `translateX(calc(-50% + ${pos * 112}%)) translateY(${translateY}px) scale(${scale})`,
                  transformOrigin: "top center",
                  opacity,
                  zIndex: isCenter ? 10 : 5,
                  pointerEvents: visible ? "auto" : "none",
                }}
              >
                {cardBody(c, isCenter)}
              </div>
            );
          });
        })}
      </div>

      {/* Mobile: só o card central */}
      <div className="md:hidden flex-1 max-w-md">
        <div key={CASES[centerRealIndex].company} className="animate-[fadeIn_0.5s_ease-out]">
          {cardBody(CASES[centerRealIndex], true)}
        </div>
      </div>

      <button
        onClick={next}
        aria-label="Próximo case"
        className="shrink-0 w-11 h-11 rounded-full border border-border bg-card flex items-center justify-center text-foreground hover:bg-accent hover:border-accent hover:text-white transition-colors"
      >
        <ChevronRight size={20} />
      </button>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

function AnimatedStat({ value }: { value: string }) {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match?.[1] ?? "";
  const target = match ? parseInt(match[2], 10) : 0;
  const suffix = match?.[3] ?? "";

  const [count, setCount] = useState(0);

  useEffect(() => {
    let start: number | null = null;
    const duration = 2200; // um pouco mais longa = percebida como mais fluida
    let frame: number;

    // easeOutExpo: começa rápido e desacelera de forma bem suave e gradual
    const easeOutExpo = (t: number) =>
      t === 1 ? 1 : 1 - Math.pow(2, -10 * t);

    const step = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutExpo(progress);
      setCount(Math.round(eased * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  return (
    <>
      {prefix}
      {count}
      {suffix}
    </>
  );
}

function ClientsMarquee() {
  const row1 = [...CLIENTS_ROW_1, ...CLIENTS_ROW_1];
  const row2 = [...CLIENTS_ROW_2, ...CLIENTS_ROW_2];

  return (
    <section className="bg-background py-20 border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center mb-12">
        <p
          className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ fontFamily: BODY }}
        >
          Confiança
        </p>
        <h2
          className="text-4xl font-bold text-foreground"
          style={{ fontFamily: HEADING }}
        >
          Nossos clientes
        </h2>
      </div>

      <div className="flex flex-col gap-6">
        <div className="w-full overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee-left hover:[animation-play-state:paused]">
            {row1.map((name, i) => (
              <div
                key={i}
                className="shrink-0 px-8 py-5 rounded-xl bg-card border border-border flex items-center justify-center"
                style={{ minWidth: 200 }}
              >
                <span
                  className="text-lg font-bold text-muted-foreground"
                  style={{ fontFamily: HEADING }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <div className="flex gap-6 w-max animate-marquee-right hover:[animation-play-state:paused]">
            {row2.map((name, i) => (
              <div
                key={i}
                className="shrink-0 px-8 py-5 rounded-xl bg-card border border-border flex items-center justify-center"
                style={{ minWidth: 200 }}
              >
                <span
                  className="text-lg font-bold text-muted-foreground"
                  style={{ fontFamily: HEADING }}
                >
                  {name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee-left {
          animation: marquee-left 35s linear infinite;
        }
        .animate-marquee-right {
          animation: marquee-right 35s linear infinite;
        }
      `}</style>
    </section>
  );
}

function Navbar({
  page,
  setPage,
}: {
  page: Page;
  setPage: (p: Page) => void;
}) {
  const [open, setOpen] = useState(false);

  const mainLinks = NAV_LINKS.filter((l) => l.page !== "contato");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => {
            setPage("home");
            setOpen(false);
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-accent rounded flex items-center justify-center">
            <Box size={18} className="text-white" strokeWidth={1.8} />
          </div>
          <span
            className="text-white font-bold text-lg"
            style={{ fontFamily: HEADING }}
          >
            <span className="text-accent">Líder Jr.</span>
          </span>
        </button>

        {/* Nav desktop */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.page}
              onClick={() => setPage(l.page)}
              className={
                l.page === "contato"
                  ? "ml-4 px-5 py-2 bg-accent text-white text-sm font-semibold rounded hover:bg-[#f26821] transition-colors"
                  : `px-4 py-2 rounded text-sm font-medium transition-all duration-200 ${
                      page === l.page
                        ? "text-accent bg-white/10"
                        : "text-white/70 hover:text-white hover:bg-white/5"
                    }`
              }
              style={{ fontFamily: BODY }}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Fale Conosco + hambúrguer no mobile */}
        <div className="flex md:hidden items-center gap-3">
          <button
            onClick={() => {
              setPage("contato");
              setOpen(false);
            }}
            className="px-4 py-2 bg-accent text-white text-sm font-semibold rounded hover:bg-[#f26821] transition-colors"
            style={{ fontFamily: BODY }}
          >
            Fale Conosco
          </button>
          <button
            className="text-white p-1"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Menu mobile (sem Fale Conosco) */}
      {open && (
        <div className="md:hidden bg-primary border-t border-white/10 px-6 py-4 flex flex-col gap-2">
          {mainLinks.map((l) => (
            <button
              key={l.page}
              onClick={() => {
                setPage(l.page);
                setOpen(false);
              }}
              className={`text-left px-3 py-2 rounded text-sm font-medium transition-colors ${
                page === l.page ? "text-accent bg-white/10" : "text-white/70"
              }`}
              style={{ fontFamily: BODY }}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

function CTASectionDepoimento({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ff751f, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Depoimento */}
        <div className="text-center mb-14">
          <div className="flex justify-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} className="text-accent fill-accent" />
            ))}
          </div>
          <p
            className="text-white text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto mb-6"
            style={{ fontFamily: SERIF }}
          >
            "A Líder Jr. reorganizou nosso processo produtivo em poucas
            semanas. O nível de profissionalismo superou nossa expectativa
            para uma consultoria júnior."
          </p>
          <p
            className="text-white font-semibold"
            style={{ fontFamily: BODY }}
          >
            Marcos Andrade
          </p>
          <p className="text-white/50 text-sm" style={{ fontFamily: BODY }}>
            Diretor de Operações, Indústria Metalúrgica
          </p>
        </div>

        <div className="w-16 h-px bg-white/20 mx-auto mb-14" />

        {/* CTA */}
        <div className="text-center">
          <h2
            className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: HEADING }}
          >
            Seu próximo resultado pode começar com uma conversa.
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto leading-8 mb-10"
            style={{ fontFamily: BODY }}
          >
            Conte-nos os desafios da sua empresa. Nossa equipe irá entender
            sua necessidade e propor uma solução personalizada.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setPage("contato")}
              className="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-[#f26821] transition-colors"
              style={{ fontFamily: BODY }}
            >
              Solicitar um orçamento
            </button>
            <button
              onClick={() => setPage("servicos")}
              className="px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors"
              style={{ fontFamily: BODY }}
            >
              Conhecer nossos serviços
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASectionRapida({ setPage }: { setPage: (p: Page) => void }) {
  const [nome, setNome] = useState("");
  const [whats, setWhats] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Por enquanto só navega para Contato; a integração de envio real
    // (armazenar nome/whats) fica para quando o formulário tiver backend.
    setPage("contato");
  };

  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ff751f, transparent 60%)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Vamos conversar
          </p>
          <h2
            className="text-4xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: HEADING }}
          >
            Seu próximo resultado pode começar com uma conversa.
          </h2>
          <p
            className="text-white/70 text-lg leading-8"
            style={{ fontFamily: BODY }}
          >
            Deixe seu contato e nossa equipe retorna em até 24 horas úteis
            com o próximo passo — sem compromisso.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 flex flex-col gap-4"
        >
          <div>
            <label
              className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-2"
              style={{ fontFamily: BODY }}
            >
              Nome
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Como podemos te chamar?"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
              style={{ fontFamily: BODY }}
            />
          </div>
          <div>
            <label
              className="block text-xs font-semibold text-white/50 uppercase tracking-wide mb-2"
              style={{ fontFamily: BODY }}
            >
              WhatsApp
            </label>
            <input
              type="tel"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
              style={{ fontFamily: BODY }}
            />
          </div>
          <button
            type="submit"
            className="mt-2 w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-[#f26821] transition-colors"
            style={{ fontFamily: BODY }}
          >
            Quero receber um contato
          </button>
          <p
            className="text-xs text-white/40 text-center"
            style={{ fontFamily: BODY }}
          >
            Sem spam. Só falamos com você sobre o seu projeto.
          </p>
        </form>
      </div>
    </section>
  );
}

function Footer({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Logo */}
        <div className="lg:col-span-2">
          <p
            className="font-bold text-4xl mb-5 leading-none"
            style={{ fontFamily: HEADING }}
          >
            <span className="text-accent">Líder Jr.</span>
          </p>
          <div className="w-20 h-20 bg-accent rounded-xl flex items-center justify-center">
            <Box
              size={44}
              className="text-white"
              strokeWidth={1.4}
            />
          </div>
        </div>

        {/* Navegação */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4"
            style={{ fontFamily: BODY }}
          >
            Navegação
          </p>
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((l) => (
              <button
                key={l.page}
                onClick={() => setPage(l.page)}
                className="text-left text-sm text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: BODY }}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        {/* Serviços */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4"
            style={{ fontFamily: BODY }}
          >
            Serviços
          </p>

          <div className="flex flex-col gap-2">
            {[
              "Lorem Ipsum",
              "Dolor Sit",
              "Amet Consectetur",
              "Adipiscing Elit",
              "Ver todos",
            ].map((item) => (
              <button
                key={item}
                className="text-left text-sm text-white/60 hover:text-white transition-colors"
                style={{ fontFamily: BODY }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Contato + redes sociais */}
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest text-accent mb-4"
            style={{ fontFamily: BODY }}
          >
            Contato
          </p>
          <div className="flex flex-col gap-3 mb-6">
            {[
              { icon: Phone, text: "(15) 99827‑7936" },
              { icon: Mail, text: "contato@liderjr.com" },
            ].map(({ icon: Icon, text }, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-sm text-white/60"
              >
                <Icon
                  size={14}
                  className="mt-0.5 shrink-0 text-accent"
                />
                <span style={{ fontFamily: BODY }}>{text}</span>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            {([Linkedin, Instagram, Facebook] as const).map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded bg-white/10 hover:bg-accent flex items-center justify-center transition-colors"
                >
                  <Icon size={16} />
                </a>
              ),
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p
          className="text-xs text-white/40"
          style={{ fontFamily: BODY }}
        >
          © 2026 Líder Jr. Todos os direitos reservados.
        </p>
        <p
          className="text-xs text-white/40"
          style={{ fontFamily: BODY }}
        >
          Empresa Júnior certificada pela Brasil Júnior
        </p>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const phone = "5515998277936"; // código do país + DDD + número, sem espaços/símbolos
  const message = "Olá! Gostaria de saber mais sobre a consultoria da Líder Jr.";

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BD5A] rounded-full shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
    >
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="white"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
        <path d="M12.001 2C6.478 2 2 6.478 2 12c0 1.867.508 3.66 1.472 5.209L2 22l4.892-1.44A9.945 9.945 0 0 0 12.001 22C17.523 22 22 17.522 22 12S17.523 2 12.001 2zm0 18.15a8.14 8.14 0 0 1-4.152-1.138l-.298-.177-3.09.91.918-3.055-.194-.313A8.15 8.15 0 1 1 20.15 12a8.16 8.16 0 0 1-8.149 8.15z" />
      </svg>
    </a>
  );
}

function CTASectionDepoimentoColunas({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <section className="bg-primary py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 50%, #ff751f, transparent 60%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Coluna 1: Depoimento */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10">
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className="text-accent fill-accent"
                />
              ))}
            </div>

            <p
              className="text-white text-xl lg:text-2xl leading-relaxed mb-8"
              style={{ fontFamily: SERIF }}
            >
              "A Líder Jr. reorganizou nosso processo produtivo em poucas
              semanas. O nível de profissionalismo superou nossa
              expectativa para uma consultoria júnior."
            </p>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                <span
                  className="text-accent font-bold text-sm"
                  style={{ fontFamily: HEADING }}
                >
                  MA
                </span>
              </div>
              <div>
                <p
                  className="text-white font-semibold text-sm"
                  style={{ fontFamily: BODY }}
                >
                  Marcos Andrade
                </p>
                <p
                  className="text-white/50 text-xs"
                  style={{ fontFamily: BODY }}
                >
                  Diretor de Operações, Indústria Metalúrgica
                </p>
              </div>
            </div>
          </div>

          {/* Coluna 2: CTA */}
          <div>
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ fontFamily: BODY }}
            >
              O próximo case pode ser o seu
            </p>

            <h2
              className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: HEADING }}
            >
              Para ter um resultado parecido, basta entrar em contato.
            </h2>

            <p
              className="text-white/70 text-lg leading-8 mb-10"
              style={{ fontFamily: BODY }}
            >
              Assim como fizemos por essa empresa, nossa equipe pode
              entender os desafios do seu negócio e propor uma solução
              personalizada — sem custo no diagnóstico inicial.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                onClick={() => setPage("contato")}
                className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-[#f26821] transition-colors"
                style={{ fontFamily: BODY }}
              >
                Quero um resultado assim
              </button>

              <button
                onClick={() => setPage("cases")}
                className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors"
                style={{ fontFamily: BODY }}
              >
                Ver outros cases
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HomePage({ setPage }: { setPage: (p: Page) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen bg-primary flex items-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 50%, #ff751f 0%, transparent 60%)",
          }}
        />
        <div
          className="absolute top-0 right-0 w-1/2 h-full opacity-50"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&h=900&fit=crop&auto=format)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage:
              "linear-gradient(to left, rgba(0,0,0,.99), rgba(0,0,0,.3), transparent)",
            WebkitMaskImage:
              "linear-gradient(to left, rgba(0,0,0,0.8), transparent)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h1
              className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: HEADING }}
            >
              <span className="text-accent">Líder Jr.</span>{" "}
              Consultoria Empresarial
            </h1>

            <p
              className="text-white/60 text-lg leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: BODY }}
            >
              A solução que você precisa, com a qualidade que só
              um Líder tem!
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => setPage("contato")}
                className="group flex items-center gap-2 px-7 py-3.5 bg-accent text-white font-semibold rounded hover:bg-[#f26821] transition-all"
                style={{ fontFamily: BODY }}
              >
                Solicitar orçamento
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
              <button
                onClick={() => setPage("servicos")}
                className="flex items-center gap-2 px-7 py-3.5 border border-white/20 text-white font-semibold rounded hover:bg-white/10 transition-all"
                style={{ fontFamily: BODY }}
              >
                Conheça nossos serviços
              </button>
            </div>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-4">
            {STATS.map((s, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 ${i === 0 ? "bg-accent" : "bg-white/8 border border-white/10"}`}
              >
                <p
                  className="text-4xl font-bold text-white mb-1"
                  style={{ fontFamily: HEADING }}
                >
                  <AnimatedStat value={s.value} />
                </p>
                <p
                  className="text-sm text-white"
                  style={{ fontFamily: BODY }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats mobile */}
      <section className="lg:hidden bg-muted border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 gap-4">
          {STATS.map((s, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 shadow-sm ${
                i === 0
                  ? "bg-accent"
                  : "bg-card border border-border"
              }`}
            >
              <p
                className={`text-4xl font-bold mb-1 ${
                  i === 0 ? "text-white" : "text-foreground"
                }`}
                style={{ fontFamily: HEADING }}
              >
                <AnimatedStat value={s.value} />
              </p>

              <p
                className={`text-sm ${
                  i === 0
                    ? "text-white/80"
                    : "text-muted-foreground"
                }`}
                style={{ fontFamily: BODY }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p
                className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: BODY }}
              >
                O que fazemos
              </p>
              <h2
                className="text-4xl font-bold text-foreground"
                style={{ fontFamily: HEADING }}
              >
                Nossas áreas de atuação
              </h2>
            </div>
            <button
              onClick={() => setPage("servicos")}
              className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline shrink-0"
              style={{ fontFamily: BODY }}
            >
              Ver todos <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 3).map((s, i) => (
              <div
                key={i}
                className="group bg-card border border-border rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-xl hover:border-accent/30 transition-all duration-300 cursor-pointer"
                onClick={() => setPage("servicos")}
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                  <s.icon
                    size={24}
                    className="text-accent group-hover:text-white transition-colors"
                  />
                </div>
                <h3
                  className="text-xl font-bold text-foreground mb-3"
                  style={{ fontFamily: HEADING }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-base leading-7 mb-6"
                  style={{ fontFamily: BODY }}
                >
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground font-medium"
                      style={{ fontFamily: BODY }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2 text-accent font-semibold text-sm">
                  Saiba mais
                  <ChevronRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About strip */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=700&h=500&fit=crop&auto=format"
              alt="Equipe Líder Jr. em reunião de trabalho"
              className="w-full rounded-2xl object-cover"
              style={{ height: 400 }}
            />
            <div className="absolute -bottom-6 -right-6 bg-accent rounded-xl px-6 py-4 hidden lg:block">
              <p
                className="text-white font-bold text-2xl"
                style={{ fontFamily: HEADING }}
              >
                +100
              </p>
              <p
                className="text-white/80 text-xs"
                style={{ fontFamily: BODY }}
              >
                Projetos entregues
              </p>
            </div>
          </div>

          <div>
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: BODY }}
            >
              Sobre nós
            </p>
            <h2
              className="text-4xl font-bold text-foreground mb-6"
              style={{ fontFamily: HEADING }}
            >
              Conhecimento acadêmico aplicado aos desafios da
              sua empresa
            </h2>
            <p
              className="text-base leading-7 mb-6"
              style={{ fontFamily: BODY }}
            >
              A Lider Jr. conecta conhecimento acadêmico,
              inovação e supervisão especializada para
              desenvolver projetos que geram resultados reais
              para empresas de diferentes segmentos.
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                "Projetos personalizados para cada negócio",
                "Equipe supervisionada por especialistas",
                "Soluções acessíveis com alto impacto",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-base text-sm"
                  style={{ fontFamily: BODY }}
                >
                  <CheckCircle2
                    size={16}
                    className="text-accent mt-0.5 shrink-0"
                  />
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setPage("quem-somos")}
              className="group flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
              style={{ fontFamily: BODY }}
            >
              Conheça a Lider Jr. <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <ClientsMarquee />

      {/* Cases preview */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p
                className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: BODY }}
              >
                Cases em destaque
              </p>
      
              <h2
                className="text-4xl font-bold text-foreground"
                style={{ fontFamily: HEADING }}
              >
                Resultados que geram confiança
              </h2>
      
              <p
                className="mt-4 max-w-2xl text-muted-foreground"
                style={{ fontFamily: BODY }}
              >
                Conheça alguns projetos desenvolvidos pela Lider Jr. e o impacto
                que nossas soluções proporcionaram para diferentes empresas.
              </p>
            </div>
      
            <button
              onClick={() => setPage("cases")}
              className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline shrink-0"
              style={{ fontFamily: BODY }}
            >
              Ver todos <ChevronRight size={16} />
            </button>
          </div>
      
          <CasesCarousel setPage={setPage} />
        </div>
      </section>

      {/* Blog preview */}
      <section className="bg-muted py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p
                className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: BODY }}
              >
                Conteúdo
              </p>
              <h2
                className="text-4xl font-bold text-foreground"
                style={{ fontFamily: HEADING }}
              >
                Últimas do blog
              </h2>
            </div>
            <button
              onClick={() => setPage("blog")}
              className="flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline shrink-0"
              style={{ fontFamily: BODY }}
            >
              Ver todos os artigos <ChevronRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <article
                key={i}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={() => setPage("blog")}
              >
                <div
                  className="overflow-hidden bg-muted"
                  style={{ height: 180 }}
                >
                  <img
                    src={`https://images.unsplash.com/${post.img}?w=500&h=300&fit=crop&auto=format`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-semibold"
                      style={{ fontFamily: BODY }}
                    >
                      {post.category}
                    </span>
                    <span
                      className="text-xs text-muted-foreground flex items-center gap-1"
                      style={{ fontFamily: BODY }}
                    >
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-foreground text-sm leading-snug mb-2 group-hover:text-accent transition-colors"
                    style={{ fontFamily: HEADING }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-xs text-muted-foreground leading-relaxed"
                    style={{ fontFamily: BODY }}
                  >
                    {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASectionDepoimentoColunas setPage={setPage} />
      <CTASectionDepoimento setPage={setPage} />
      <CTASectionRapida setPage={setPage} />
      {/* CTA */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, #ff751f, transparent 60%)",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Coluna esquerda: mensagem + CTA */}
            <div className="lg:col-span-3">
              <p
                className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ fontFamily: BODY }}
              >
                Vamos conversar
              </p>

              <h2
                className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
                style={{ fontFamily: HEADING }}
              >
                Seu próximo resultado pode começar com uma conversa.
              </h2>

              <p
                className="text-white/70 text-lg leading-8 mb-10 max-w-xl"
                style={{ fontFamily: BODY }}
              >
                Conte-nos os desafios da sua empresa. Nossa equipe irá
                entender sua necessidade e propor uma solução
                personalizada para gerar resultados reais para o seu
                negócio.
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button
                  onClick={() => setPage("contato")}
                  className="w-full sm:w-auto px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-[#f26821] transition-colors"
                  style={{ fontFamily: BODY }}
                >
                  Solicitar um orçamento
                </button>

                <button
                  onClick={() => setPage("servicos")}
                  className="w-full sm:w-auto px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors"
                  style={{ fontFamily: BODY }}
                >
                  Conhecer nossos serviços
                </button>
              </div>
            </div>

            {/* Coluna direita: cartão de confiança + contato direto */}
            <div className="lg:col-span-2 bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex flex-col gap-5 mb-8">
                {[
                  "Consultoria inicial totalmente gratuita",
                  "Retorno em até 24 horas úteis",
                  "Projetos supervisionados por professores especialistas",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span
                      className="text-sm text-white/80 leading-relaxed"
                      style={{ fontFamily: BODY }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <div className="h-px bg-white/10 mb-6" />

              <p
                className="text-xs font-semibold uppercase tracking-widest text-white/40 mb-4"
                style={{ fontFamily: BODY }}
              >
                Prefere falar direto?
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="tel:+5515998277936"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-accent" />
                  </div>
                  <span className="text-sm" style={{ fontFamily: BODY }}>
                    (15) 99827-7936
                  </span>
                </a>

                <a
                  href="mailto:contato@liderjr.com"
                  className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-accent" />
                  </div>
                  <span className="text-sm" style={{ fontFamily: BODY }}>
                    contato@liderjr.com
                  </span>
                </a>
              </div>
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

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Vamos conversar
          </p>

          <h2
            className="text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: HEADING }}
          >
            Seu próximo resultado pode começar com uma conversa.
          </h2>

          <p
            className="text-white/70 text-lg max-w-2xl mx-auto leading-8 mb-10"
            style={{ fontFamily: BODY }}
          >
            Conte-nos os desafios da sua empresa. Nossa equipe
            irá entender sua necessidade e propor uma solução
            personalizada para gerar resultados reais para o seu
            negócio.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setPage("contato")}
              className="px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-[#f26821] transition-colors"
              style={{ fontFamily: BODY }}
            >
              Solicitar um orçamento
            </button>

            <button
              onClick={() => setPage("servicos")}
              className="px-8 py-4 border border-white/20 text-white rounded-xl hover:bg-white/10 transition-colors"
              style={{ fontFamily: BODY }}
            >
              Conhecer nossos serviços
            </button>
          </div>

          <p
            className="text-white/50 text-sm mt-8"
            style={{ fontFamily: BODY }}
          >
            Responderemos sua solicitação o mais rápido
            possível.
          </p>
        </div>
      </section>
    </div>
  );
}

function QuemSomosPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 70%, #ff751f, transparent 60%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Nossa empresa
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: HEADING }}
          >
            Quem Somos
          </h1>
          <p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Somos a Líder Jr., empresa júnior do curso de
            Engenharia de Produção, formada por estudantes
            apaixonados por soluções que fazem diferença.
          </p>
        </div>
      </section>

      {/* Mission / Vision / Values */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <p
                className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: BODY }}
              >
                Nossa história
              </p>
              <h2
                className="text-4xl font-bold text-foreground mb-6"
                style={{ fontFamily: HEADING }}
              >
                Nascemos para conectar academia e mercado
              </h2>
              <p
                className="text-muted-foreground leading-relaxed mb-4"
                style={{ fontFamily: BODY }}
              >
                Fundada por um grupo de alunos motivados do
                curso de Engenharia de Produção, a Líder Jr.
                surgiu como resposta a uma necessidade clara:
                pequenas e médias empresas precisavam de
                consultoria de qualidade a preços acessíveis.
              </p>
              <p
                className="text-muted-foreground leading-relaxed"
                style={{ fontFamily: BODY }}
              >
                Ao longo dos anos, crescemos, obtivemos
                certificação pela Brasil Júnior e construímos um
                portfólio diversificado de projetos em setores
                como indústria, varejo, serviços e agronegócio.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=700&h=500&fit=crop&auto=format"
              alt="Equipe Líder Jr. trabalhando em projeto"
              className="w-full rounded-2xl object-cover"
              style={{ height: 380 }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              {
                label: "Missão",
                text: "Oferecer soluções inovadoras em Engenharia de Produção, desenvolvendo competências nos nossos membros e gerando valor real para clientes.",
                icon: "🎯",
              },
              {
                label: "Visão",
                text: "Ser referência nacional em consultoria júnior, reconhecida pela excelência técnica, impacto nos negócios e formação de líderes.",
                icon: "🔭",
              },
              {
                label: "Valores",
                text: "Inovação, comprometimento, ética e aprendizado contínuo são os pilares que guiam cada projeto e cada decisão da Líder Jr.",
                icon: "⚡",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-card border border-border rounded-xl p-8"
              >
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3
                  className="font-bold text-foreground text-lg mb-3"
                  style={{ fontFamily: HEADING }}
                >
                  {item.label}
                </h3>
                <p
                  className="text-sm text-muted-foreground leading-relaxed"
                  style={{ fontFamily: BODY }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Values */}
          <div className="mb-20">
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-3 text-center"
              style={{ fontFamily: BODY }}
            >
              Cultura
            </p>
            <h2
              className="text-4xl font-bold text-foreground text-center mb-12"
              style={{ fontFamily: HEADING }}
            >
              O que nos guia
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v, i) => (
                <div
                  key={i}
                  className="group text-center p-6 rounded-xl border border-border hover:border-accent/40 hover:bg-card transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent transition-colors">
                    <span
                      className="text-accent group-hover:text-white text-lg font-bold"
                      style={{ fontFamily: HEADING }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-foreground mb-2"
                    style={{ fontFamily: HEADING }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    style={{ fontFamily: BODY }}
                  >
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-primary py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: BODY }}
            >
              Pessoas
            </p>
            <h2
              className="text-4xl font-bold text-white"
              style={{ fontFamily: HEADING }}
            >
              Conheça nossa equipe
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {TEAM.map((member, i) => (
              <div key={i} className="group text-center">
                <div className="mb-3 rounded-xl overflow-hidden bg-white/10 aspect-square">
                  <img
                    src={`https://images.unsplash.com/${member.img}?w=300&h=300&fit=crop&auto=format&face`}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p
                  className="font-semibold text-white text-sm"
                  style={{ fontFamily: BODY }}
                >
                  {member.name}
                </p>
                <p
                  className="text-xs text-accent mt-0.5"
                  style={{ fontFamily: BODY }}
                >
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function ServicosPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 30%, #ff751f, transparent 55%)",
          }}
        />
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
            Soluções completas em Engenharia de Produção para
            empresas que querem crescer com inteligência e
            eficiência.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className={`group bg-card border rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                  selected === i
                    ? "border-accent shadow-lg shadow-accent/10"
                    : "border-border hover:border-accent/40 hover:shadow-md"
                }`}
                onClick={() =>
                  setSelected(selected === i ? null : i)
                }
              >
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center mb-6 transition-colors ${selected === i ? "bg-accent" : "bg-accent/10 group-hover:bg-accent"}`}
                >
                  <s.icon
                    size={22}
                    className={`transition-colors ${selected === i ? "text-white" : "text-accent group-hover:text-white"}`}
                  />
                </div>
                <h3
                  className="font-bold text-foreground text-lg mb-3"
                  style={{ fontFamily: HEADING }}
                >
                  {s.title}
                </h3>
                <p
                  className="text-sm text-muted-foreground leading-relaxed mb-5"
                  style={{ fontFamily: BODY }}
                >
                  {s.desc}
                </p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
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
            ))}
          </div>

          {/* Process */}
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

      {/* Contact form */}
      <section className="bg-background pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="bg-card border border-border rounded-2xl p-10">
            <div className="text-center mb-10">
              <p
                className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: BODY }}
              >
                Orçamento
              </p>
              <h2
                className="text-3xl font-bold text-foreground"
                style={{ fontFamily: HEADING }}
              >
                Solicite uma proposta gratuita
              </h2>
            </div>
            <form
              className="grid grid-cols-1 sm:grid-cols-2 gap-5"
              onSubmit={(e) => e.preventDefault()}
            >
              {[
                {
                  label: "Nome completo",
                  placeholder: "João da Silva",
                },
                {
                  label: "Email",
                  placeholder: "joao@empresa.com.br",
                },
                {
                  label: "Empresa",
                  placeholder: "Empresa Ltda.",
                },
                {
                  label: "Telefone",
                  placeholder: "(11) 99999-9999",
                },
              ].map(({ label, placeholder }, i) => (
                <div key={i}>
                  <label
                    className="block text-sm font-semibold text-foreground mb-1.5"
                    style={{ fontFamily: BODY }}
                  >
                    {label}
                  </label>
                  <input
                    type="text"
                    placeholder={placeholder}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors"
                    style={{ fontFamily: BODY }}
                  />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label
                  className="block text-sm font-semibold text-foreground mb-1.5"
                  style={{ fontFamily: BODY }}
                >
                  Como podemos ajudar?
                </label>
                <textarea
                  rows={4}
                  placeholder="Descreva brevemente o desafio ou projeto que você tem em mente..."
                  className="w-full px-4 py-3 rounded-lg border border-border bg-input-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                  style={{ fontFamily: BODY }}
                />
              </div>
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-accent text-white font-bold rounded-lg hover:bg-[#f26821] transition-colors"
                  style={{ fontFamily: BODY }}
                >
                  Enviar solicitação
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

function CasesPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, #ff751f, transparent 55%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Resultados
          </p>

          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: HEADING }}
          >
            Cases
          </h1>

          <p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Conheça alguns dos projetos desenvolvidos pela Lider
            Jr. e descubra como ajudamos empresas a alcançarem
            melhores resultados por meio da Engenharia de
            Produção.
          </p>
        </div>
      </section>
    </div>
  );
}

function MateriaisPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 80%, #ff751f, transparent 55%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Conteúdo
          </p>

          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: HEADING }}
          >
            Materiais
          </h1>

          <p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Acesse e-books, guias, planilhas e outros materiais
            desenvolvidos para compartilhar conhecimento e
            apoiar o crescimento de empresas e empreendedores.
          </p>
        </div>
      </section>
    </div>
  );
}

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const categories = [
    "Todos",
    "Processos",
    "Gestão",
    "Logística",
    "Estratégia",
    "Qualidade",
    "Mercado",
  ];

  const filtered =
    activeCategory === "Todos"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 80%, #ff751f, transparent 55%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Conhecimento
          </p>
          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: HEADING }}
          >
            Blog Líder Jr.
          </h1>
          <p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Conteúdo prático e acessível sobre Engenharia de
            Produção, gestão empresarial e inovação para
            empreendedores e estudantes.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-background py-8 border-b border-border sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-accent text-white"
                    : "bg-secondary text-secondary-foreground hover:bg-accent/10"
                }`}
                style={{ fontFamily: BODY }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-background py-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Featured */}
          {activeCategory === "Todos" && (
            <div className="mb-12 group cursor-pointer">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-card border border-border rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                <div
                  className="overflow-hidden bg-muted"
                  style={{ minHeight: 280 }}
                >
                  <img
                    src={`https://images.unsplash.com/${BLOG_POSTS[0].img}?w=800&h=500&fit=crop&auto=format`}
                    alt={BLOG_POSTS[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ minHeight: 280 }}
                  />
                </div>
                <div className="p-10 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-semibold"
                      style={{ fontFamily: BODY }}
                    >
                      {BLOG_POSTS[0].category}
                    </span>
                    <span
                      className="text-xs text-muted-foreground flex items-center gap-1"
                      style={{ fontFamily: BODY }}
                    >
                      <Clock size={11} />{" "}
                      {BLOG_POSTS[0].readTime}
                    </span>
                  </div>
                  <h2
                    className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors"
                    style={{ fontFamily: HEADING }}
                  >
                    {BLOG_POSTS[0].title}
                  </h2>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed mb-6"
                    style={{ fontFamily: BODY }}
                  >
                    {BLOG_POSTS[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs text-muted-foreground"
                      style={{ fontFamily: BODY }}
                    >
                      {BLOG_POSTS[0].date}
                    </span>
                    <div
                      className="flex items-center gap-1.5 text-accent text-sm font-semibold"
                      style={{ fontFamily: BODY }}
                    >
                      Ler artigo <ExternalLink size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "Todos"
              ? filtered.slice(1)
              : filtered
            ).map((post, i) => (
              <article
                key={i}
                className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div
                  className="overflow-hidden bg-muted"
                  style={{ height: 200 }}
                >
                  <img
                    src={`https://images.unsplash.com/${post.img}?w=500&h=300&fit=crop&auto=format`}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent font-semibold"
                      style={{ fontFamily: BODY }}
                    >
                      <Tag size={10} className="inline mr-1" />
                      {post.category}
                    </span>
                    <span
                      className="text-xs text-muted-foreground flex items-center gap-1"
                      style={{ fontFamily: BODY }}
                    >
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                  <h3
                    className="font-bold text-foreground text-base leading-snug mb-2 group-hover:text-accent transition-colors"
                    style={{ fontFamily: HEADING }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="text-xs text-muted-foreground leading-relaxed mb-4"
                    style={{ fontFamily: BODY }}
                  >
                    {post.excerpt}
                  </p>
                  <p
                    className="text-xs text-muted-foreground"
                    style={{ fontFamily: BODY }}
                  >
                    {post.date}
                  </p>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p
                className="text-muted-foreground"
                style={{ fontFamily: BODY }}
              >
                Nenhum artigo encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-primary py-20">
        <div className="max-w-xl mx-auto px-6 text-center">
          <h2
            className="text-3xl font-bold text-white mb-3"
            style={{ fontFamily: HEADING }}
          >
            Fique por dentro
          </h2>
          <p
            className="text-white/60 text-sm mb-8"
            style={{ fontFamily: BODY }}
          >
            Assine nossa newsletter e receba conteúdos
            exclusivos sobre Engenharia de Produção e gestão
            empresarial.
          </p>
          <form
            className="flex gap-3"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="seu@email.com.br"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-white/40 text-sm focus:outline-none focus:border-accent transition-colors"
              style={{ fontFamily: BODY }}
            />
            <button
              type="submit"
              className="px-6 py-3 bg-accent text-white font-semibold rounded-lg hover:bg-[#f26821] transition-colors shrink-0 text-sm"
              style={{ fontFamily: BODY }}
            >
              Assinar
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

function ContatoPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-primary py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 75% 30%, #ff751f, transparent 55%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <p
            className="text-accent text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ fontFamily: BODY }}
          >
            Entre em contato
          </p>

          <h1
            className="text-5xl lg:text-6xl font-bold text-white mb-6"
            style={{ fontFamily: HEADING }}
          >
            Fale Conosco
          </h1>

          <p
            className="text-white/60 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: BODY }}
          >
            Conte-nos sobre o seu desafio. Nossa equipe entrará
            em contato para entender sua necessidade e
            apresentar a melhor solução.
          </p>
        </div>
      </section>

      {/* Conteúdo */}
      <section className="bg-background py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Informações */}
          <div className="lg:col-span-1">
            <p
              className="text-accent text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: BODY }}
            >
              Contato
            </p>

            <h2
              className="text-4xl font-bold text-foreground mb-8"
              style={{ fontFamily: HEADING }}
            >
              Vamos conversar
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <Phone
                  className="text-accent shrink-0"
                  size={22}
                />
                <div>
                  <p
                    className="font-semibold"
                    style={{ fontFamily: BODY }}
                  >
                    Telefone
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: BODY }}
                  >
                    (15) 99827-7936
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail
                  className="text-accent shrink-0"
                  size={22}
                />
                <div>
                  <p
                    className="font-semibold"
                    style={{ fontFamily: BODY }}
                  >
                    E-mail
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: BODY }}
                  >
                    contato@liderjr.com
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin
                  className="text-accent shrink-0"
                  size={22}
                />
                <div>
                  <p
                    className="font-semibold"
                    style={{ fontFamily: BODY }}
                  >
                    Endereço
                  </p>
                  <p
                    className="text-muted-foreground"
                    style={{ fontFamily: BODY }}
                  >
                    Universidade • Cidade • Estado
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-2xl p-10">
              <h2
                className="text-3xl font-bold text-foreground mb-8"
                style={{ fontFamily: HEADING }}
              >
                Solicite um orçamento
              </h2>

              <form
                className="grid grid-cols-1 md:grid-cols-2 gap-5"
                onSubmit={(e) => e.preventDefault()}
              >
                <input
                  className="px-4 py-3 rounded-lg border border-border bg-input-background"
                  placeholder="Nome"
                />

                <input
                  className="px-4 py-3 rounded-lg border border-border bg-input-background"
                  placeholder="Empresa"
                />

                <input
                  className="px-4 py-3 rounded-lg border border-border bg-input-background"
                  placeholder="E-mail"
                />

                <input
                  className="px-4 py-3 rounded-lg border border-border bg-input-background"
                  placeholder="Telefone"
                />

                <textarea
                  rows={6}
                  placeholder="Conte um pouco sobre seu projeto..."
                  className="md:col-span-2 px-4 py-3 rounded-lg border border-border bg-input-background resize-none"
                />

                <button
                  className="md:col-span-2 py-4 bg-accent text-white font-bold rounded-lg hover:bg-[#f26821] transition-colors"
                  style={{ fontFamily: BODY }}
                >
                  Enviar mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  const navigate = (p: Page) => {
    setPage(p);
    scrollToTop();
  };

  return (
    <div
      className="min-h-screen bg-background"
      style={{ fontFamily: BODY }}
    >
      <Navbar page={page} setPage={navigate} />

      <main>
        {page === "home" && <HomePage setPage={navigate} />}
        {page === "quem-somos" && <QuemSomosPage />}
        {page === "servicos" && <ServicosPage />}
        {page === "cases" && <CasesPage />}
        {page === "materiais" && <MateriaisPage />}
        {page === "blog" && <BlogPage />}
        {page === "contato" && <ContatoPage />}
      </main>

      <Footer setPage={navigate} />
      <WhatsAppButton />
    </div>
  );
}