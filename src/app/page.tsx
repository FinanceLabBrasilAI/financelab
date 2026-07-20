'use client';

import { useState } from "react";
import Link from "next/link";
import Header from "../components/core/Header";
import GridBackground from "../components/core/GridBackground";
import { Brain } from "lucide-react";

export default function FinanceLabHome() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="relative min-h-screen text-[#F5F5F7] font-sans selection:bg-[#00C853] selection:text-[#0B0C10]">
      <GridBackground />
      <div className="noise-overlay" />

      {/* Header com a Logo Oficial */}
      <Header />

      {/* Hero Section Comercial */}
      <main className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-16 space-y-24">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#12141C] border border-[#1F222F] text-[#00C853] font-mono text-xs">
            // Inteligência Artificial como assistente de investimentos
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Sua gestão financeira impulsionada por <span className="text-[#00C853]">Inteligência Artificial</span>.
          </h1>

          <p className="text-[#8E929F] text-base md:text-lg font-light leading-relaxed">
            Tome decisões mais inteligentes com o nosso Centro de Inteligência. Análises automatizadas, alocação estratégica e monitoramento completo na palma da sua mão.
          </p>

          <div className="pt-4">
            <a
              href="#pricing"
              className="inline-block px-10 py-4 rounded-xl bg-[#00C853] text-[#0B0C10] font-bold text-sm hover:bg-[#00b04a] transition-all shadow-xl shadow-[#00C853]/10"
            >
              Abra sua conta
            </a>
          </div>
        </div>

        {/* Seção 1: Benefícios com Ícones Minimalistas de Linha (Estilo Lucide / XP) */}
        <section id="features" className="space-y-16 border-t border-[#1F222F]/60 pt-20">
          <div className="text-center space-y-3">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// DIFERENCIAIS EXCLUSIVOS</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">O Poder do Centro de Inteligência</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Ícone 1: Cérebro (Centro de Inteligência / IA) */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-[#12141C]/40 border border-[#1F222F]/40 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center text-[#00C853]">
                <Brain className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">Centro de Inteligência</h3>
              <p className="text-[#8E929F] text-xs leading-relaxed">O coração do app. Processa dados e gera insights sob medida para o seu perfil e objetivos financeiros.</p>
            </div>

            {/* Ícone 2: BarChart3 (Análise Fundamentalista) */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-[#12141C]/40 border border-[#1F222F]/40 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center text-[#00C853]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.5h3.75v7.5H3v-7.5zm6.75-9H13.5v16.5H9.75V4.5zm6.75 4.5H20.25v12h-3.75v-12z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Análise Fundamentalista</h3>
              <p className="text-[#8E929F] text-xs leading-relaxed">Avaliação contínua de indicadores financeiros por ativo para identificar oportunidades e empresas sólidas.</p>
            </div>

            {/* Ícone 3: PieChart (Alocação Estratégica) */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-[#12141C]/40 border border-[#1F222F]/40 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center text-[#00C853]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Alocação Estratégica</h3>
              <p className="text-[#8E929F] text-xs leading-relaxed">Sugestões dinâmicas de rebalanceamento de carteira alinhadas à sua tolerância ao risco e metas.</p>
            </div>

            {/* Ícone 4: Zap (Alertas em Tempo Real) */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-[#12141C]/40 border border-[#1F222F]/40 flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center text-[#00C853]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Alertas em Tempo Real</h3>
              <p className="text-[#8E929F] text-xs leading-relaxed">Notificações inteligentes sobre mudanças de mercado, preços e dividendos dos seus ativos monitorados.</p>
            </div>
          </div>
        </section>

        {/* Seção 2: Como Funciona & Por que você precisa do app */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-[#1F222F]/60 pt-20 items-center">
          <div className="space-y-6">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// SIMPLES E EFICIENTE</span>
            <h2 className="text-3xl font-bold text-white leading-tight">Como funciona o FinanceLab?</h2>
            <p className="text-[#8E929F] text-sm leading-relaxed">
              Nossa plataforma se conecta de forma segura às suas contas e corretoras. O nosso assistente de Inteligência Artificial analisa seus investimentos em segundos, eliminando a complexidade do mercado financeiro e entregando relatórios claros para você focar no que importa.
            </p>
          </div>

          <div className="space-y-6">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// SUA VANTAGEM NO MERCADO</span>
            <h2 className="text-3xl font-bold text-white leading-tight">Por que você precisa do app?</h2>
            <p className="text-[#8E929F] text-sm leading-relaxed">
              Investir exige tempo, análise rigorosa e acompanhamento constante. Com o FinanceLab, você ganha um analista particular 24 horas por dia, capaz de cruzar dados macroeconômicos e indicadores de empresas para proteger seu patrimônio e acelerar sua independência financeira.
            </p>
          </div>
        </section>

        {/* Seção 3: Planos (Silver vs Gold - Com todos os benefícios do app) */}
        <section id="pricing" className="border-t border-[#1F222F]/60 pt-20 text-center space-y-12">
          <div className="space-y-3">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// NÍVEIS DE ACESSO</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Escolha o plano ideal para a sua jornada</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-left">
            {/* Plano Silver */}
            <div className="p-8 rounded-2xl bg-[#12141C] border border-[#1F222F] flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#8E929F] uppercase">Essencial</span>
                <h3 className="text-2xl font-bold text-white">Plano Silver</h3>
                <p className="text-3xl font-bold text-[#00C853]">Gratuito</p>
                <ul className="space-y-2.5 text-xs text-[#8E929F]">
                  <li className="flex items-center gap-2">✓ Integração de carteiras em tempo real</li>
                  <li className="flex items-center gap-2">✓ Importação automática de movimentações</li>
                  <li className="flex items-center gap-2">✓ Painel de acompanhamento de ativos</li>
                  <li className="flex items-center gap-2">✓ Relatório básico de ativos</li>
                  <li className="flex items-center gap-2">✓ Trilhas de aprendizagem</li>
                  <li className="flex items-center gap-2">✓ 1 Análise de Perfil e Alocação com IA</li>
                </ul>
              </div>
            </div>

            {/* Plano Gold */}
            <div className="p-8 rounded-2xl bg-[#12141C] border border-[#00C853]/50 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xl shadow-[#00C853]/5">
              <div className="absolute top-0 right-0 bg-[#00C853] text-[#0B0C10] text-[10px] font-mono px-3 py-1 rounded-bl">MAIS POPULAR</div>
              <div className="space-y-4">
                <span className="text-xs font-mono text-[#00C853] uppercase">Avançado com IA</span>
                <h3 className="text-2xl font-bold text-white">Plano Gold</h3>
                <p className="text-3xl font-bold text-white">R$ 29,90 <span className="text-xs font-mono text-[#8E929F]">/mês</span></p>
                <ul className="space-y-2.5 text-xs text-[#8E929F]">
                  <li className="flex items-center gap-2 text-white">✓ Tudo do plano Silver (Gratuito)</li>
                  <li className="flex items-center gap-2 text-white">✓ Alertas e Notificações em tempo real</li>
                  <li className="flex items-center gap-2 text-white">✓ Relatório e Calendário de Dividendos</li>
                  <li className="flex items-center gap-2 text-white">✓ Monitoramento avançado de ativos</li>
                  <li className="flex items-center gap-2 text-white">✓ Centro de Inteligência Completo</li>
                  <li className="flex items-center gap-2 text-white">✓ Testes de perfil de investidor (10/mês)</li>
                  <li className="flex items-center gap-2 text-white">✓ Análise e alocação de carteira com IA</li>
                  <li className="flex items-center gap-2 text-white">✓ Raio-X Fundamentalista completo (IA)</li>
                  <li className="flex items-center gap-2 text-white">✓ Recomendação de novos ativos (IA)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <a
              href="#pricing"
              className="inline-block px-12 py-4 rounded-xl bg-[#00C853] text-[#0B0C10] font-bold text-sm hover:bg-[#00b04a] transition-all shadow-xl shadow-[#00C853]/10"
            >
              Abra sua conta
            </a>
          </div>
        </section>

        {/* Seção 4: Dúvidas Gerais (FAQ) */}
        <section className="border-t border-[#1F222F]/60 pt-20 space-y-8 max-w-3xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-[#00C853] font-mono text-xs tracking-widest uppercase">// ESCLARECIMENTO</span>
            <h2 className="text-3xl font-bold text-white">Ficou alguma dúvida?</h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "Como o FinanceLab protege meus dados bancários?",
                a: "Utilizamos a infraestrutura segura da Pluggy via Open Finance com criptografia de ponta a ponta e padrões rigorosos regulamentados pelo Banco Central. O aplicativo não armazena suas senhas de acesso às corretoras."
              },
              {
                q: "Preciso entender muito de investimentos para usar o app?",
                a: "Não! O Centro de Inteligência traduz dados complexos em recomendações práticas e linguagem simples, servindo tanto para investidores iniciantes quanto para os mais experientes."
              },
              {
                q: "Como funciona o teste e a assinatura dos planos?",
                a: "Você pode começar gratuitamente no Plano Silver e evoluir para o Plano Gold a qualquer momento para desbloquear todas as análises avançadas de Inteligência Artificial."
              },
              {
                q: "Como entro em contato com o suporte?",
                a: "Nosso atendimento funciona diretamente pelo e-mail suporte@labai-tech.com com resposta rápida para auxiliar em qualquer dúvida sobre a plataforma."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-[#1F222F] rounded-xl bg-[#12141C] overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left flex justify-between items-center text-white font-medium text-sm hover:text-[#00C853] transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className="text-[#00C853] font-mono text-lg">{openFaq === index ? "−" : "+"}</span>
                </button>
                {openFaq === index && (
                  <div className="p-5 pt-0 text-sm text-[#8E929F] border-t border-[#1F222F]/40 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Rodapé Comercial */}
      <footer className="relative z-10 border-t border-[#1F222F]/60 bg-[#0B0C10] py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-[#1F222F]/40">
          <div className="flex items-center gap-3">
            <img
              src="/financelab/logo-login.png"
              alt="FinanceLab Ícone"
              width={45}
              height={45}
              className="object-contain"
            />
            <span className="font-bold text-white tracking-tight"></span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <span className="text-xs font-mono text-[#8E929F]">Baixe o aplicativo</span>
            <div className="flex items-center gap-3">
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 w-auto" />
              </a>
              <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-8 w-auto" />
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto pt-6 text-center space-y-2">
          <div className="flex justify-center gap-6 text-xs font-mono text-[#8E929F] pb-2">
            <Link href="/legal/termos" className="hover:text-[#00C853]">Termos de Uso e Política de Privacidade</Link>
          </div>
          <p className="text-xs font-mono text-[#8E929F]">
            &copy; {new Date().getFullYear()} FinanceLab — LabAI Tech. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}