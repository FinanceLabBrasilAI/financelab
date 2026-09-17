'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FormEvent, useEffect, useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { redefinirSenhaFinal } from '../../../services/auth';

export default function NewPasswordPage() {
  const router = useRouter();
  const [token, setToken] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [mostrarConfirmacao, setMostrarConfirmacao] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setToken(window.sessionStorage.getItem('password_reset_token') || '');
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (senha.length < 8 || !/[A-Z]/.test(senha) || !/[0-9]/.test(senha) || !/[!@#$%^&*(),.?":{}|<>]/.test(senha)) {
      setError('A senha deve ter no mínimo 8 caracteres, uma letra maiúscula, um número e um caractere especial.');
      return;
    }

    if (senha !== confirmacao) {
      setError('As senhas não coincidem.');
      return;
    }

    if (!token) {
      setError('Token de recuperação ausente ou expirado. Solicite um novo código.');
      return;
    }

    setLoading(true);
    const result = await redefinirSenhaFinal(token, senha);
    setLoading(false);

    if (result?.erro) {
      setError(result.erro);
      return;
    }

    window.sessionStorage.removeItem('password_reset_token');
    window.sessionStorage.removeItem('password_reset_email');
    router.push('/login?passwordChanged=1');
  };

  return (
    <main className="mx-auto flex min-h-screen max-w-md items-center justify-center px-6 py-10">
      <div className="w-full rounded-[28px] border border-[#1F222F] bg-[#12141C]/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm">
        <Link href="/verify-code" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A7ACB6] transition hover:text-[#00C853]">
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center">
            <Image src="/logo-login.png" alt="FinanceLab" width={96} height={96} className="h-full w-full object-contain" priority />
          </div>
          <h1 className="text-3xl font-black tracking-tighter text-white">Nova senha</h1>
          <p className="mt-2 text-sm text-[#A7ACB6]">Crie uma nova senha para acessar sua conta.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Nova senha</label>
            <div className="relative">
              <input
                type={mostrarSenha ? 'text' : 'password'}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 pr-12 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]"
                placeholder="********"
              />
              <button type="button" onClick={() => setMostrarSenha((visible) => !visible)} aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'} title={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'} className="absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center text-[#737984] transition hover:text-[#00C853]">
                {mostrarSenha ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Confirmar senha</label>
            <div className="relative">
              <input
                type={mostrarConfirmacao ? 'text' : 'password'}
                value={confirmacao}
                onChange={(e) => setConfirmacao(e.target.value)}
                className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 pr-12 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]"
                placeholder="********"
              />
              <button type="button" onClick={() => setMostrarConfirmacao((visible) => !visible)} aria-label={mostrarConfirmacao ? 'Ocultar confirmação de senha' : 'Mostrar confirmação de senha'} title={mostrarConfirmacao ? 'Ocultar confirmação de senha' : 'Mostrar confirmação de senha'} className="absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center text-[#737984] transition hover:text-[#00C853]">
                {mostrarConfirmacao ? <Eye size={18} /> : <EyeOff size={18} />}
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
            className="w-full rounded-xl bg-[#00C853] px-5 py-3.5 text-sm font-bold text-[#0B0C10] transition hover:bg-[#1AE078] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? 'Salvando...' : 'Salvar nova senha'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-[#A7ACB6]">
          <Link href="/login" className="font-semibold text-[#00C853] hover:text-[#1AE078]">
            Fazer login
          </Link>
        </div>
      </div>
    </main>
  );
}
