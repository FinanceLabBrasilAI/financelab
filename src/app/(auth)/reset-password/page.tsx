'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FormEvent, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { solicitarRecuperacao } from '../../../services/auth';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

    if (!isEmail) {
      setError('Informe um e-mail válido.');
      return;
    }

    setLoading(true);
    const result = await solicitarRecuperacao(value);
    setLoading(false);

    if (result?.erro) {
      setError(result.erro);
      return;
    }

    window.sessionStorage.setItem('password_reset_email', value.trim());
    router.push('/verify-code');
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center justify-center px-6 py-10">
      <div className="w-full rounded-[28px] border border-[#1F222F] bg-[#12141C]/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <Link href="/login" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A7ACB6] transition hover:text-[#00C853]">
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center">
            <Image src="/financelab/logo-login.png" alt="FinanceLab" width={96} height={96} className="h-full w-full object-contain" priority />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white">Recuperar acesso</h1>
          <p className="mt-2 text-sm text-[#A7ACB6]">Informe seu e-mail para receber o código.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">E-mail</label>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]"
              type="email"
              placeholder="seu@email.com"
            />
          </div>

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-[#00C853] px-5 py-3.5 text-sm font-bold text-[#0B0C10] transition hover:bg-[#1AE078] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Enviando...' : 'Enviar código'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[#A7ACB6]">
          <Link href="/login" className="font-semibold text-[#00C853] hover:text-[#1AE078]">
            Voltar para login
          </Link>
        </div>
      </div>
    </main>
  );
}
