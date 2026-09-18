'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Check, LockKeyhole } from 'lucide-react';
import { useEffect, useState } from 'react';
import { fetchPlanPricing } from '../../services/planPricing';

export default function CheckoutPage() {
  const [monthlyPrice, setMonthlyPrice] = useState('—');

  useEffect(() => {
    fetchPlanPricing()
      .then(({ monthly }) => setMonthlyPrice(monthly || 'Indisponível'))
      .catch(() => setMonthlyPrice('Indisponível'));
  }, []);

  return (
    <main className="min-h-screen bg-[#0B0C10] px-6 py-10 text-[#F5F5F7]">
      <div className="mx-auto max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-[#A7ACB6] transition hover:text-[#00C853]"><ArrowLeft size={16} /> Voltar</Link>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.8fr]">
          <section className="rounded-[28px] border border-[#1F222F] bg-[#12141C] p-7 md:p-9">
            <Image src="/financelab/logo-login.png" alt="FinanceLab" width={150} height={52} className="h-12 w-auto object-contain" priority />
            <p className="mt-10 text-xs font-bold uppercase tracking-[0.24em] text-[#00C853]">Assinatura Gold</p>
            <h1 className="mt-3 text-4xl font-black tracking-tight text-white">Finalize sua assinatura</h1>
            <p className="mt-4 text-sm leading-relaxed text-[#A7ACB6]">Você está a um passo de desbloquear a experiência completa do FinanceLab.</p>

            <div className="mt-8 space-y-3">
              {['Centro de Inteligência completo', 'Alertas e análises avançadas', 'Acesso pelo aplicativo'].map((item) => <div key={item} className="flex items-center gap-3 text-sm text-[#D7DBE3]"><Check size={16} className="text-[#00C853]" />{item}</div>)}
            </div>
          </section>

          <aside className="rounded-[28px] border border-[#00C853]/30 bg-[#12141C] p-7 md:p-9">
            <div className="flex items-center justify-between border-b border-[#1F222F] pb-5"><span className="text-sm text-[#A7ACB6]">Plano Gold</span><span className="text-2xl font-black text-white">{monthlyPrice}<span className="text-xs font-normal text-[#8E929F]">/mês</span></span></div>
            <p className="mt-6 text-sm leading-relaxed text-[#A7ACB6]">O checkout será conectado ao gateway de pagamento definido para a assinatura.</p>
            <button type="button" disabled className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#00C853] px-5 py-4 text-sm font-bold text-[#0B0C10] opacity-70">Continuar para pagamento <LockKeyhole size={16} /></button>
            <p className="mt-4 text-center text-xs text-[#737984]">Pagamento seguro. A integração do gateway será ativada nesta etapa.</p>
          </aside>
        </div>
      </div>
    </main>
  );
}
