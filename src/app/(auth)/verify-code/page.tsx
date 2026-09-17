'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { validarCodigoRecuperacao } from '../../../services/auth';

export default function VerifyCodePage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = window.sessionStorage.getItem('password_reset_email');
    if (savedEmail) {
      setEmail(savedEmail);
    } else {
      setError('Informe seu e-mail para solicitar um novo código.');
    }
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (code.length !== 6) {
      setError('Informe o código de 6 dígitos.');
      return;
    }

    if (!email) {
      setError('Não foi possível identificar o e-mail da recuperação.');
      return;
    }

    setLoading(true);
    const result = await validarCodigoRecuperacao(email, code);
    setLoading(false);

    if (result?.erro) {
      setError(result.erro);
      return;
    }

    const resetToken = result?.token || result?.reset_token || result?.token_reset || result?.data?.token;
    if (!resetToken) {
      setError('O código foi validado, mas o token de recuperação não foi recebido.');
      return;
    }

    window.sessionStorage.setItem('password_reset_token', resetToken);
    router.push('/new-password');
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center justify-center px-6 py-10">
      <div className="w-full rounded-[28px] border border-[#1F222F] bg-[#12141C]/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <Link href="/reset-password" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A7ACB6] transition hover:text-[#00C853]">
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center">
            <Image src="/financelab/logo-login.png" alt="FinanceLab" width={96} height={96} className="h-full w-full object-contain" priority />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white">Código enviado</h1>
          <p className="mt-2 text-sm text-[#A7ACB6]">Digite o código de 6 dígitos enviado para seu e-mail.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Código</label>
            <input
              value={code}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, '').slice(0, 6))}
              className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-center text-2xl font-bold tracking-[0.5em] text-white outline-none focus:border-[#00C853]"
              placeholder="000000"
              inputMode="numeric"
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
            {loading ? 'Validando...' : 'Validar código'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[#A7ACB6]">
          <Link href="/reset-password" className="font-semibold text-[#00C853] hover:text-[#1AE078]">
            Solicitar outro código
          </Link>
        </div>
      </div>
    </main>
  );
}
