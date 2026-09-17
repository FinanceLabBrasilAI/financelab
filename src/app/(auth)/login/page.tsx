'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { validarLogin } from '../../../services/auth';

const formatCpf = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
};

export default function LoginPage() {
  const router = useRouter();
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [passwordChanged, setPasswordChanged] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('passwordChanged') === '1') {
      setPasswordChanged(true);
      window.history.replaceState({}, '', '/login');
    }
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');

    const cleanCpf = cpf.replace(/\D/g, '');
    if (cleanCpf.length !== 11) {
      setError('CPF inválido.');
      return;
    }

    if (!senha) {
      setError('Informe sua senha.');
      return;
    }

    setLoading(true);
    const result = await validarLogin(formatCpf(cpf), senha);
    setLoading(false);

    if ('erro' in result) {
      setError(result.erro.charAt(0).toUpperCase() + result.erro.slice(1));
      return;
    }

    const plan = new URLSearchParams(window.location.search).get('plan');
    router.push(plan === 'gold' ? '/checkout' : '/oferta-gold');
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center justify-center px-6 py-10">
      <div className="w-full rounded-[28px] border border-[#1F222F] bg-[#12141C]/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A7ACB6] transition hover:text-[#00C853]">
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center">
            <Image src="/financelab/logo-login.png" alt="FinanceLab" width={96} height={96} className="h-full w-full object-contain" priority />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white">FinanceLab</h1>
          <p className="mt-2 text-sm text-[#A7ACB6]">Acesse sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">CPF</label>
            <input
              value={cpf}
              onChange={(e) => setCpf(formatCpf(e.target.value))}
              placeholder="000.000.000-00"
              className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none ring-0 placeholder:text-[#737984] focus:border-[#00C853]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Senha</label>
            <div className="relative">
              <input
                type={mostrarSenha ? 'text' : 'password'}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="Digite sua senha"
                className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 pr-12 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]"
              />
              <button
                type="button"
                onClick={() => setMostrarSenha((visible) => !visible)}
                aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                title={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'}
                className="absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center text-[#737984] transition hover:text-[#00C853]"
              >
                {mostrarSenha ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-300">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 w-full rounded-xl bg-[#00C853] px-5 py-3.5 text-sm font-bold text-[#0B0C10] transition hover:bg-[#1AE078] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="mt-6 space-y-3 text-center text-sm text-[#A7ACB6]">
          <Link href="/reset-password" className="block text-[#00C853] transition hover:text-[#1AE078]">
            Esqueci minha senha
          </Link>
          <p>
            Ainda não tem conta?{' '}
            <Link href={`/register?plan=${new URLSearchParams(typeof window !== 'undefined' ? window.location.search : '').get('plan') || 'silver'}`} className="font-semibold text-[#00C853] hover:text-[#1AE078]">
              Criar conta
            </Link>
          </p>
        </div>
      </div>

      {passwordChanged && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-[#00C853]/30 bg-[#12141C] p-6 text-center shadow-[0_25px_70px_rgba(0,0,0,0.55)]">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#00C853]/15 text-2xl text-[#00C853]">✓</div>
            <h2 className="mt-4 text-xl font-bold text-white">Senha alterada</h2>
            <p className="mt-2 text-sm leading-relaxed text-[#A7ACB6]">Sua senha foi alterada com sucesso. Agora você pode entrar na sua conta.</p>
            <button
              type="button"
              onClick={() => setPasswordChanged(false)}
              className="mt-6 w-full rounded-xl bg-[#00C853] px-5 py-3 text-sm font-bold text-[#0B0C10] transition hover:bg-[#1AE078]"
            >
              Ir para o login
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
