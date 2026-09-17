'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BellRing, BrainCircuit, CalendarDays, Check, Download, LineChart, ScanSearch, ShieldCheck, Sparkles, Wallet } from 'lucide-react';

const benefits = [
  { icon: BellRing, title: 'Alertas em tempo real', text: 'Saiba quando um ativo, preço ou movimento merece sua atenção.' },
  { icon: CalendarDays, title: 'Dividendos com contexto', text: 'Acompanhe proventos, calendário e evolução da sua renda passiva.' },
  { icon: BrainCircuit, title: 'Centro de Inteligência', text: 'Use IA para transformar dados complexos em decisões mais claras.' },
  { icon: Wallet, title: 'Alocação inteligente', text: 'Encontre oportunidades de rebalanceamento alinhadas à sua estratégia.' },
  { icon: ScanSearch, title: 'Raio-X fundamentalista', text: 'Analise ativos com profundidade sem precisar reunir dados em vários lugares.' },
  { icon: LineChart, title: 'Monitoramento avançado', text: 'Veja performance, risco e patrimônio evoluindo em uma única visão.' },
];

export default function GoldOfferPage() {
  return (
    <main className="min-h-screen bg-[#0B0C10] px-6 py-10 text-[#F5F5F7]">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/financelab/logo.png" alt="FinanceLab" width={120} height={45} className="h-10 w-auto object-contain" priority />
          </Link>
        </header>

        <section className="relative mt-16 overflow-hidden rounded-4xl border border-[#FFC107]/50 bg-[#3E2723] p-8 shadow-[0_30px_90px_rgba(255,193,7,0.12)] md:p-14">
          <div className="absolute inset-x-0 top-0 h-1 bg-[#FFC107]" />
          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="flex items-center gap-3 text-[#FFECB3]"><Sparkles size={18} /><p className="text-xs font-bold uppercase tracking-[0.24em]">Experiência premium</p></div>
              <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-[#FFF8E1] md:text-6xl">FinanceLab GOLD para investir com mais clareza.</h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#FFECB3]">Desbloqueie o poder máximo da inteligência artificial para entender sua carteira, antecipar movimentos e construir uma estratégia que faça sentido para você.</p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/checkout" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC107] px-7 py-4 text-sm font-bold text-[#3E2723] transition hover:bg-[#FFD54F]">
                  Assinar o Gold
                  <ArrowRight size={17} />
                </Link>
                <div className="flex items-center gap-2 text-xs text-[#FFECB3]"><ShieldCheck size={16} className="text-[#FFC107]" /> Cancele quando quiser</div>
              </div>
            </div>

            <div className="rounded-3xl border border-[#FFC107]/50 bg-[#5D4037] p-6">
              <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[0.2em] text-[#FFECB3]">Plano premium</span><Sparkles size={22} className="text-[#FFC107]" /></div>
              <p className="mt-5 text-4xl font-black text-[#FFF8E1]">R$ 29,90<span className="text-sm font-normal text-[#FFECB3]">/mês</span></p>
              <p className="mt-3 text-sm leading-relaxed text-[#FFECB3]">Tudo o que você precisa para sair da análise superficial e investir com contexto.</p>
              <div className="mt-6 border-t border-[#FFC107]/30 pt-5 text-sm text-[#FFF8E1]"><Check size={16} className="mr-2 inline text-[#FFC107]" /> Acesso completo ao FinanceLab GOLD</div>
            </div>
          </div>
        </section>

        <section className="mt-16 border-t border-[#1F222F] pt-14">
          <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#FFC107]">O que muda para você</p><h2 className="mt-4 text-3xl font-black tracking-tight text-white md:text-5xl">Mais do que dados. Uma visão completa da sua estratégia.</h2><p className="mt-4 text-base leading-relaxed text-[#A7ACB6]">O Gold reúne as ferramentas que ajudam você a acompanhar, interpretar e agir sobre seus investimentos com menos ruído.</p></div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div key={title} className="rounded-2xl border border-[#FFC107]/25 bg-[#12141C] p-5 transition hover:border-[#FFC107]/60">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFC107]/15 text-[#FFC107]"><Icon size={20} /></div>
                <h3 className="mt-5 text-base font-bold text-[#FFF8E1]">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#A7ACB6]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-[#1F222F] pt-14">
          <div className="rounded-3xl border border-[#FFC107]/30 bg-[#12141C] p-7 text-center md:p-10"><p className="text-2xl font-black text-white md:text-3xl">Sua carteira merece uma análise à altura.</p><p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-[#A7ACB6]">Comece agora e tenha uma visão mais inteligente para tomar decisões com confiança.</p><Link href="/checkout" className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl bg-[#FFC107] px-7 py-3.5 text-sm font-bold text-[#3E2723] transition hover:bg-[#FFD54F]">Quero ser Gold <ArrowRight size={16} /></Link></div>
        </section>

        <section className="mt-16 border-t border-[#1F222F] pt-10">
          <div className="flex items-center gap-3"><Download size={20} className="text-[#FFC107]" /><h2 className="text-2xl font-bold text-white">Leve sua experiência para o celular</h2></div>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#A7ACB6]">Baixe o FinanceLab e acompanhe sua carteira, alertas e análises onde estiver.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#" aria-label="Baixar na Google Play" className="inline-flex rounded-xl transition hover:opacity-90"><Image src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" width={170} height={50} className="h-11 w-auto object-contain" /></a>
            <a href="#" aria-label="Baixar na App Store" className="inline-flex rounded-xl transition hover:opacity-90"><Image src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" width={170} height={50} className="h-11 w-auto object-contain" /></a>
          </div>
        </section>
      </div>
    </main>
  );
}
