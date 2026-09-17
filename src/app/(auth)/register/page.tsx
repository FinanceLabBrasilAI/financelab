'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';
import { buscarEnderecoPorCep } from '../../../services/cepService';
import { cadastrarUsuario } from '../../../services/auth';

const formatCpf = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `${digits.slice(0, 3)}.${digits.slice(3)}`;
  if (digits.length <= 9) return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6)}`;
  return `${digits.slice(0, 3)}.${digits.slice(3, 6)}.${digits.slice(6, 9)}-${digits.slice(9)}`;
};

const formatCep = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, '').slice(0, 11);
  if (digits.length <= 2) return `(${digits}`;
  if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
};

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cpf: '',
    nascimento: '',
    celular: '',
    pais: 'Brasil',
    estado: '',
    cidade: '',
    rua: '',
    numero: '',
    complemento: '',
    cep: '',
  });
  const [loading, setLoading] = useState(false);
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'silver' | 'gold'>('silver');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    const plan = new URLSearchParams(window.location.search).get('plan');
    if (plan === 'gold') setSelectedPlan('gold');
  }, []);

  const updateField = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCepLookup = async () => {
    const cep = form.cep.replace(/\D/g, '');
    if (cep.length !== 8) {
      setError('Informe um CEP válido antes de buscar o endereço.');
      return;
    }

    const result = await buscarEnderecoPorCep(form.cep);
    if (!result.ok) {
      setError(result.erro || 'Não foi possível consultar o CEP.');
      return;
    }

    setError('');
    setForm((prev) => ({
      ...prev,
      rua: result.logradouro || prev.rua,
      complemento: result.complemento || prev.complemento,
      cidade: result.localidade || prev.cidade,
      estado: result.uf || prev.estado,
    }));
  };

  const handleSubmit = async () => {
    if (!form.nome.trim() || form.nome.trim().split(/\s+/).length < 2) {
      setError('Informe seu nome completo.');
      return;
    }

    if (!form.email.includes('@') || !form.email.includes('.')) {
      setError('Informe um e-mail válido.');
      return;
    }

    if (form.senha.length < 8 || !/[A-Z]/.test(form.senha) || !/[0-9]/.test(form.senha) || !/[!@#$%^&*(),.?":{}|<>]/.test(form.senha)) {
      setError('A senha deve ter no mínimo 8 caracteres, letra maiúscula, número e caractere especial.');
      return;
    }

    if (form.cpf.replace(/\D/g, '').length !== 11) {
      setError('CPF inválido.');
      return;
    }

    if (!form.nascimento) {
      setError('Selecione sua data de nascimento.');
      return;
    }

    if (form.celular.replace(/\D/g, '').length < 10) {
      setError('Celular inválido.');
      return;
    }

    if (!form.cep.replace(/\D/g, '').length || !form.rua || !form.cidade || !form.estado || !form.numero) {
      setError('Preencha o endereço completo.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    const payload = {
      ...form,
      cpf: form.cpf.replace(/\D/g, ''),
      celular: form.celular.replace(/\D/g, ''),
      cep: form.cep.replace(/\D/g, ''),
    };

    const result = await cadastrarUsuario(payload as any);
    setLoading(false);

    if ('erro' in result) {
      setError(result.erro);
      return;
    }

    setSuccess('Conta criada com sucesso!');
    setTimeout(() => router.push(`/login?plan=${selectedPlan}`), 1200);
  };

  return (
    <main className="mx-auto max-w-3xl px-6 py-10">
      <div className="rounded-[30px] border border-[#1F222F] bg-[#12141C]/85 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] md:p-8">
        <div className="mb-8 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
          <Link href="/" aria-label="Voltar para a página inicial" className="justify-self-start inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#1F222F] text-[#A7ACB6] transition hover:border-[#00C853] hover:text-[#00C853]">
            <ArrowLeft size={17} />
          </Link>
          <Image src="/financelab/logo.png" alt="FinanceLab" width={120} height={45} className="h-25 w-60 justify-self-center object-contain" priority />
          <Link href={`/login?plan=${selectedPlan}`} className="justify-self-end text-sm font-semibold text-[#00C853] transition hover:text-[#1AE078]">
            Já tenho conta
          </Link>
        </div>

        <div className="mb-8">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-[#00C853]">Crie sua conta</p>
          <h1 className="mt-3 text-3xl font-black tracking-tighter text-white">Comece hoje</h1>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Nome completo</label>
            <input value={form.nome} onChange={(e) => updateField('nome', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]" placeholder="Seu nome completo" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">E-mail</label>
            <input type="email" value={form.email} onChange={(e) => updateField('email', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]" placeholder="seu@email.com" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Senha</label>
            <div className="relative">
              <input type={mostrarSenha ? 'text' : 'password'} value={form.senha} onChange={(e) => updateField('senha', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 pr-12 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]" placeholder="********" />
              <button type="button" onClick={() => setMostrarSenha((visible) => !visible)} aria-label={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'} title={mostrarSenha ? 'Ocultar senha' : 'Mostrar senha'} className="absolute inset-y-0 right-0 inline-flex w-12 items-center justify-center text-[#737984] transition hover:text-[#00C853]">
                {mostrarSenha ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">CPF</label>
            <input value={form.cpf} onChange={(e) => updateField('cpf', formatCpf(e.target.value))} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]" placeholder="000.000.000-00" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Data de nascimento</label>
            <input type="date" value={form.nascimento} onChange={(e) => updateField('nascimento', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none focus:border-[#00C853]" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Celular</label>
            <input value={form.celular} onChange={(e) => updateField('celular', formatPhone(e.target.value))} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]" placeholder="(11) 99999-9999" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">País</label>
            <input value={form.pais} onChange={(e) => updateField('pais', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none focus:border-[#00C853]" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">CEP</label>
            <div className="flex gap-2">
              <input value={form.cep} onChange={(e) => updateField('cep', formatCep(e.target.value))} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none placeholder:text-[#737984] focus:border-[#00C853]" placeholder="00000-000" />
              <button type="button" onClick={handleCepLookup} className="rounded-xl border border-[#00C853]/40 bg-[#00C853]/10 px-3 py-3 text-xs font-bold text-[#00C853]">Buscar</button>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Estado</label>
            <input value={form.estado} onChange={(e) => updateField('estado', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none focus:border-[#00C853]" placeholder="SP" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Cidade</label>
            <input value={form.cidade} onChange={(e) => updateField('cidade', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none focus:border-[#00C853]" placeholder="São Paulo" />
          </div>

          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Rua</label>
            <input value={form.rua} onChange={(e) => updateField('rua', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none focus:border-[#00C853]" placeholder="Nome da rua" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Número</label>
            <input value={form.numero} onChange={(e) => updateField('numero', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none focus:border-[#00C853]" placeholder="123" />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-[#D7DBE3]">Complemento</label>
            <input value={form.complemento} onChange={(e) => updateField('complemento', e.target.value)} className="w-full rounded-xl border border-[#1F222F] bg-[#0B0C10] px-4 py-3 text-white outline-none focus:border-[#00C853]" placeholder="Apartamento, bloco..." />
          </div>
        </div>

        {(error || success) && (
          <div className={`mt-5 rounded-xl border px-3 py-2 text-sm ${error ? 'border-red-500/30 bg-red-500/10 text-red-300' : 'border-[#00C853]/30 bg-[#00C853]/10 text-[#9AE6B4]'}`}>
            {error || success}
          </div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="mt-6 w-full rounded-xl bg-[#00C853] px-5 py-3.5 text-sm font-bold text-[#0B0C10] transition hover:bg-[#1AE078] disabled:cursor-not-allowed disabled:opacity-70"
        >
          {loading ? 'Criando conta...' : 'Criar conta'}
        </button>
      </div>
    </main>
  );
}
