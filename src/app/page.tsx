'use client';

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/core/Header";
import GridBackground from "../components/core/GridBackground";
import MobileVideoFrame from "../components/core/MobileVideoFrame";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  BrainCircuit,
  Check,
  ChevronRight,
  DollarSign,
  Gauge,
  LineChart,
  ShieldCheck,
  Sparkles,
  Star,
  TrendingUp,
  Wallet,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Centro de Inteligência",
    description: "Análises automáticas, sugestões de estratégia e explicações claras para cada decisão financeira.",
  },
  {
    icon: BarChart3,
    title: "Visão patrimonial completa",
    description: "Carteira, dividendos, risco e performance em um só painel, com atualização contínua e linguagem simples.",
  },
  {
    icon: Wallet,
    title: "Alocação inteligente",
    description: "Recomendação de mix de investimentos alinhada ao seu perfil, objetivos e tolerância ao risco.",
  },
  {
    icon: BellRing,
    title: "Alertas proativos",
    description: "Receba gatilhos relevantes sobre preço, desempenho, rebalanceamento e oportunidades relevantes ao seu portfólio.",
  },
];

const steps = [
  {
    number: "01",
    title: "Conecte sua conta",
    text: "Sincronize seus dados de forma segura para centralizar ativos, rendimentos e movimentações em um único lugar.",
  },
  {
    number: "02",
    title: "Entenda o que importa",
    text: "A IA interpreta o cenário, identifica riscos e destaca o que merece atenção na sua estratégia atual.",
  },
  {
    number: "03",
    title: "Decida com clareza",
    text: "Siga recomendações estratégicas com visão clara de carteira, objetivo e evolução financeira no tempo.",
  },
];

const personas = [
  {
    title: "Para quem está começando",
    points: [
      "Explicações em linguagem simples",
      "Acompanhamento de evolução financeira",
      "Orientação para caminhar do zero com segurança",
    ],
  },
  {
    title: "Para quem já investe",
    points: [
      "Dashboard completo para decisões mais rápidas",
      "Análises comparativas de carteira e desempenho",
      "Estratégias para otimizar rentabilidade e reduzir ruído",
    ],
  },
];

const plans = [
  {
    name: "Silver",
    price: "Gratuito",
    highlight: false,
    features: [
      "Acompanhamento básico da carteira",
      "Importação e organização de ativos",
      "Painel de desempenho e rentabilidade",
      "Conteúdo e trilhas de aprendizado",
      "Modelo inicial de IA para avaliação de perfil",
    ],
  },
  {
    name: "Gold",
    price: "R$ 29,90",
    highlight: true,
    features: [
      "Tudo do Silver",
      "Alertas inteligentes em tempo real",
      "Relatório de dividendos e cenário macro",
      "Rebalanceamento de carteira com IA",
      "Perfil de investidor e análise avançada",
      "Acesso ao Centro de Inteligência completo",
    ],
  },
];

const testimonials = [
  {
    name: "Rafael G.",
    text: "Senti que passei a entender melhor o que acontece com minha carteira e como tomar decisões sem olhar dados espalhados por vários lugares.",
  },
  {
    name: "Fernanda A.",
    text: "O app me dá clareza e segurança. A parte de inteligência foi o diferencial, especialmente para avaliar meus ativos com menos ruído.",
  },
  {
    name: "Douglas R.",
    text: "A experiência ficou muito mais prática. Eu consegui enxergar a carteira inteira e entender melhor a estratégia por trás de cada decisão.",
  },
];

const faqs = [
  {
    question: "Como o FinanceLab protege meus dados?",
    answer: "A integração é feita com segurança e os dados são tratados com foco em privacidade e conformidade. Seu acesso e a leitura da carteira seguem padrões rigorosos de segurança digital.",
  },
  {
    question: "Preciso ter experiência em investimentos?",
    answer: "Não. A plataforma foi construída para ser útil tanto para iniciantes quanto para investidores mais experientes, traduzindo dados em linguagem clara e orientada à ação.",
  },
  {
    question: "Posso testar antes de assinar?",
    answer: "Sim. O plano Silver oferece acesso inicial para você entender a proposta e evoluir para o plano Gold quando quiser desbloquear todas as funcionalidades avançadas.",
  },
  {
    question: "Existe atendimento para dúvidas?",
    answer: "Sim. A experiência foi pensada para dar suporte no uso diário e esclarecer dúvidas do usuário, com foco em clareza e continuidade de acompanhamento.",
  },
];

export default function FinanceLabHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#0B0C10] text-[#F5F5F7] selection:bg-[#00C853] selection:text-[#0B0C10]">
      <GridBackground />
      <div className="noise-overlay" />

      <Header />

      <main className="relative z-10 mx-auto max-w-6xl px-6 pb-20 pt-12 md:pt-16">
        <section className="grid items-center gap-10 pb-20 pt-10 md:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-7">
            <div className="inline-flex items-center rounded-full border border-[#1F222F] bg-[#12141C]/80 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.2em] text-[#00C853]">
              FinanceLab AI
            </div>

            <h1 className="max-w-xl text-4xl font-black leading-[1.05] tracking-[-0.06em] text-white md:text-6xl">
              Sua carteira com <span className="text-[#00C853]">clareza, IA e estratégia.</span>
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-[#A7ACB6] md:text-lg">
              Organize seus investimentos, entenda seus ativos e tome decisões com mais confiança. O FinanceLab transforma dados financeiros em uma experiência prática, segura e orientada ao resultado.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C853] px-6 py-3.5 text-sm font-bold text-[#0B0C10] transition hover:bg-[#1AE078]"
              >
                Começar agora
                <ArrowRight size={16} />
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1F222F] bg-[#12141C]/60 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-[#00C853]/60 hover:text-[#00C853]"
              >
                Ver recursos
                <ChevronRight size={16} />
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-sm text-[#8E929F]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#00C853]" />
                Segurança e privacidade
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-[#00C853]" />
                IA orientada a estratégia
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-[#1F222F] bg-[#12141C]/80 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02),0_34px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
            <div className="rounded-[22px] border border-[#1F222F] bg-[#0D1116] p-5">
              <div className="mb-5 flex items-center justify-between border-b border-[#1F222F] pb-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.22em] text-[#8E929F]">Portfolio</p>
                  <h3 className="mt-2 text-2xl font-bold text-white">R$ 184.240</h3>
                </div>
                <div className="rounded-xl border border-[#00C853]/30 bg-[#00C853]/10 px-2 py-1 text-xs font-bold text-[#00C853]">
                  +12,8% no ano
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-[#1F222F] bg-[#12141C] p-4">
                  <div className="mb-3 flex items-center justify-between text-sm text-[#8E929F]">
                    <span>Alocação</span>
                    <span className="text-white">67/23/10</span>
                  </div>
                  <div className="flex h-3 overflow-hidden rounded-full bg-[#1F222F]">
                    <span className="w-[67%] bg-[#00C853]" />
                    <span className="w-[23%] bg-[#1AE078]" />
                    <span className="w-[10%] bg-[#D9FFEF]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-[#1F222F] bg-[#12141C] p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8E929F]">Dividendos</p>
                    <p className="mt-2 text-xl font-bold text-white">R$ 2.410</p>
                    <div className="mt-3 flex items-center gap-1 text-[11px] text-[#00C853]">
                      <TrendingUp size={12} />
                      +8,4% vs. mês anterior
                    </div>
                  </div>
                  <div className="rounded-2xl border border-[#1F222F] bg-[#12141C] p-4">
                    <p className="text-[11px] uppercase tracking-[0.18em] text-[#8E929F]">Seu Perfil</p>
                    <p className="mt-2 text-xl font-bold text-white">Moderado</p>
                    <div className="mt-3 flex items-center gap-1 text-[11px] text-[#00C853]">
                      <Gauge size={12} />
                      Ajuste recomendado
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#1F222F] bg-[#12141C] p-4">
                  <div className="mb-2 flex items-center justify-between text-sm text-[#8E929F]">
                    <span>Rentabilidade</span>
                    <span className="text-[#00C853]">+18.6%</span>
                  </div>
                  <div className="flex h-20 items-end gap-2">
                    {[22, 30, 28, 44, 50, 58, 72].map((height, index) => (
                      <div
                        key={index}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-[#00C853]/20 to-[#00C853]"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-4 border-t border-[#1F222F]/70 pt-10 mt-20 md:grid-cols-4">
          {[
            { label: "Usuários ativos", value: "+12k" },
            { label: "Carteiras analisadas", value: "58k" },
            { label: "Alertas entregues", value: "1.2M" },
            { label: "Taxa de retenção", value: "89%" },
          ].map((metric) => (
            <div key={metric.label} className="rounded-2xl border border-[#1F222F] bg-[#12141C]/60 p-5 text-center">
              <div className="text-3xl font-black text-white">{metric.value}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.2em] text-[#8E929F]">{metric.label}</div>
            </div>
          ))}
        </section>

        <section id="features" className="space-y-12 border-t border-[#1F222F]/70 pt-20 mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#00C853]">Recursos para clientes e usuários</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white md:text-5xl">
              Mais clareza para decidir melhor.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {features.map(({ icon: Icon, title, description }) => (
              <div key={title} className="group rounded-[24px] border border-[#1F222F] bg-[#12141C]/80 p-6 transition hover:-translate-y-1 hover:border-[#00C853]/40 hover:shadow-[0_20px_40px_rgba(0,200,83,0.08)]">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#00C853]/25 bg-[#00C853]/10 text-[#00C853]">
                  <Icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A7ACB6]">{description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#1F222F]/70 pt-20 mt-20">
          <div className="mx-auto mb-10 max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#00C853]">Tutorial</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white md:text-5xl">
              Como funciona
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ number, title, text }) => (
              <div key={number} className="rounded-[24px] border border-[#1F222F] bg-[#12141C]/70 p-6">
                <div className="mb-5 text-sm font-mono text-[#00C853]">{number}</div>
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#A7ACB6]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#1F222F]/70 pt-20 mt-20">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#00C853]">Para quem é</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white md:text-5xl">
              O mesmo produto, com valor para todos os perfis.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {personas.map(({ title, points }) => (
              <div key={title} className="rounded-[28px] border border-[#1F222F] bg-[#12141C]/80 p-7">
                <h3 className="text-2xl font-bold text-white">{title}</h3>
                <ul className="mt-5 space-y-3">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-[#A7ACB6]">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#00C853]/10 text-[#00C853]">
                        <Check size={12} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="relative w-screen left-[calc(-50vw+50%)] py-20 bg-[#060708] border-t border-[#1F222F]/70">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-center text-center">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#00C853]">Por que funciona</p>
              <h2 className="mt-4 text-4xl font-bold tracking-[-0.05em] text-white md:text-6xl">
                A plataforma que organiza sua vida financeira.
              </h2>
              <p className="mt-5 mx-auto text-lg leading-relaxed text-[#A7ACB6]">
                Em vez de você perder tempo juntando dados em planilhas e aplicativos diferentes, o FinanceLab centraliza o que importa: ativos, informação financeira, alertas e estratégia.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Consolida patrimônio e rentabilidade em uma visão clara",
                  "Identifica padrões e riscos antes que eles se tornem problemas",
                  "Acompanha performance e dividendos com contexto real do mercado",
                ].map((item) => (
                  <div key={item} className="flex items-center justify-center gap-3 rounded-2xl border border-[#1F222F] bg-[#12141C]/60 p-4 text-base text-[#D7DBE3]">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#00C853]/10 text-[#00C853] flex-shrink-0">
                      <LineChart size={14} />
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <MobileVideoFrame videoSrc="https://res.cloudinary.com/fdp10d5v/video/upload/lv_0_20260815182017.mp4" />
            </div>
          </div>
        </section>

        <section id="pricing" className="border-t border-[#1F222F]/70 pt-20 mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#00C853]">Planos</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white md:text-5xl">
              Escolha o nivel que combina com seu momento.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {plans.map(({ name, price, highlight, features }) => (
              <div
                key={name}
                className={`rounded-[28px] border p-7 ${
                  highlight
                    ? "border-[#00C853]/50 bg-[#0F1713] shadow-[0_0_0_1px_rgba(0,200,83,0.2),0_30px_60px_rgba(0,200,83,0.08)]"
                    : "border-[#1F222F] bg-[#12141C]/80"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#8E929F]">{name}</span>
                  {highlight && (
                    <span className="rounded-full bg-[#00C853] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#0B0C10]">
                      Popular
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-end gap-2">
                  <span className="text-4xl font-black text-white">{price}</span>
                  {price !== "Gratuito" && <span className="pb-1 text-xs uppercase tracking-[0.2em] text-[#8E929F]">/mês</span>}
                </div>

                <ul className="mt-7 space-y-3 text-sm text-[#D7DBE3]">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#00C853]/10 text-[#00C853]">
                        <Check size={12} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-bold transition ${
                    highlight
                      ? "bg-[#00C853] text-[#0B0C10] hover:bg-[#1AE078]"
                      : "border border-[#1F222F] bg-[#0B0C10] text-white hover:border-[#00C853]/40 hover:text-[#00C853]"
                  }`}
                >
                  {name === "Gold" ? "Assinar Gold" : "Começar grátis"}
                  <ArrowRight size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#1F222F]/70 pt-20 mt-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#00C853]">Depoimentos</p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white md:text-5xl">
              Quem usa entende o valor na prática.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map(({ name, text }) => (
              <div key={name} className="rounded-[24px] border border-[#1F222F] bg-[#12141C]/80 p-6">
                <div className="mb-5 flex items-center gap-1 text-[#00C853]">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-[#D7DBE3]">“{text}”</p>
                <div className="mt-6 border-t border-[#1F222F] pt-4 text-sm font-semibold text-white">{name}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-[#1F222F]/70 pt-20 mt-20">
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#00C853]">FAQ</p>
              <h2 className="mt-4 text-3xl font-bold tracking-[-0.05em] text-white md:text-5xl">
                Perguntas rápidas.
              </h2>
            </div>

            <div className="mt-8 space-y-4">
              {faqs.map((faq, index) => (
                <div key={faq.question} className="overflow-hidden rounded-2xl border border-[#1F222F] bg-[#12141C]/80">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left text-base font-medium text-white"
                  >
                    <span>{faq.question}</span>
                    <span className="text-xl text-[#00C853]">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <div className="border-t border-[#1F222F] px-5 py-4 text-sm leading-relaxed text-[#A7ACB6]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#1F222F]/70 pt-20 mt-20">
          <div className="rounded-[30px] border border-[#00C853]/25 bg-[radial-gradient(circle_at_top,_rgba(0,200,83,0.15),_transparent_30%),_linear-gradient(180deg,_rgba(18,20,28,1),_rgba(11,12,16,1))] p-8 text-center md:p-12">
            <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#00C853]">Próximo passo</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-black tracking-[-0.06em] text-white md:text-5xl">
              Pare de analisar em planilhas e comece a investir com direção.
            </h2>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#00C853] px-7 py-3.5 text-sm font-bold text-[#0B0C10] transition hover:bg-[#1AE078]"
              >
                Começar agora
                <ArrowRight size={16} />
              </a>
              <Link
                href="/legal/termos"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#1F222F] bg-[#12141C]/60 px-7 py-3.5 text-sm font-semibold text-white transition hover:border-[#00C853]/50 hover:text-[#00C853]"
              >
                Ver termos
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-[#1F222F]/70 bg-[#0B0C10] px-6 py-10 mt-20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-3">
            <Image src="/logo-login.png" alt="FinanceLab" width={42} height={42} className="object-contain" />
            <div>
              <div className="text-sm font-bold text-white">FinanceLab</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-[#8E929F]">LabAI Tech</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3 md:items-end">
            <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-[#8E929F]">Baixe o aplicativo</span>

            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
              <a
                href="#"
                aria-label="Baixar na Google Play"
                className="inline-flex rounded-xl transition hover:opacity-90"
              >
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  width={170}
                  height={50}
                  className="h-11 w-auto object-contain"
                />
              </a>

              <a
                href="#"
                aria-label="Baixar na App Store"
                className="inline-flex rounded-xl transition hover:opacity-90"
              >
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  width={170}
                  height={50}
                  className="h-11 w-auto object-contain"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 flex max-w-6xl flex-col items-center justify-between gap-4 border-t border-[#1F222F] pt-6 text-xs text-[#8E929F] md:flex-row md:text-left">
          <Link href="/legal/termos" className="transition hover:text-[#00C853]">
            Termos de Uso e Política de Privacidade
          </Link>

          <a
            href="https://www.labai-tech.com/"
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[#00C853]"
          >
            LabAI-Tech
          </a>
        </div>

        <div className="mx-auto mt-6 max-w-6xl text-center text-xs text-[#8E929F]">
          © {new Date().getFullYear()} FinanceLab. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
