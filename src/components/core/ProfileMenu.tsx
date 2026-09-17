'use client';

import { useEffect, useState } from 'react';
import { ChevronDown, LogOut } from 'lucide-react';
import { clearAuthToken, clearStoredUser, getStoredUser, StoredUser } from '../../services/api';
import { useRouter } from 'next/navigation';

export default function ProfileMenu({ onLogout }: { onLogout?: () => void }) {
  const router = useRouter();
  const [user, setUser] = useState<StoredUser | null>(null);
  const [open, setOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  if (!user) return null;

  const firstName = user.nome.trim().split(/\s+/)[0] || 'Usuário';
  const initials = user.iniciais || firstName.charAt(0).toUpperCase();

  const logout = async () => {
    await clearAuthToken();
    clearStoredUser();
    setUser(null);
    setConfirmLogout(false);
    onLogout?.();
    router.push('/');
  };

  return (
    <>
      <div className="relative">
        <button type="button" onClick={() => setOpen((value) => !value)} className="inline-flex items-center gap-2 rounded-full border border-[#1F222F] bg-[#12141C] px-2 py-1.5 text-left transition hover:border-[#00C853]/50">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#00C853] text-xs font-black text-[#0B0C10]">{initials}</span>
          <span className="hidden text-sm font-semibold text-white sm:block">{firstName}</span>
          <ChevronDown size={15} className={`text-[#8E929F] transition ${open ? 'rotate-180' : ''}`} />
        </button>
        {open && (
          <div className="absolute right-0 top-12 z-40 min-w-44 rounded-xl border border-[#1F222F] bg-[#12141C] p-2 shadow-2xl">
            <button type="button" onClick={() => setConfirmLogout(true)} className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-red-400 transition hover:bg-red-500/10"><LogOut size={16} /> Sair</button>
          </div>
        )}
      </div>

      {confirmLogout && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
          <div className="w-full max-w-sm rounded-2xl border border-[#1F222F] bg-[#12141C] p-6 text-center shadow-2xl">
            <h2 className="text-xl font-bold text-white">Sair da conta?</h2>
            <p className="mt-2 text-sm text-[#A7ACB6]">Você precisará fazer login novamente para continuar.</p>
            <div className="mt-6 grid grid-cols-2 gap-3"><button type="button" onClick={() => setConfirmLogout(false)} className="rounded-xl border border-[#1F222F] px-4 py-3 text-sm font-semibold text-white">Cancelar</button><button type="button" onClick={logout} className="rounded-xl bg-red-500 px-4 py-3 text-sm font-bold text-white">Sair</button></div>
          </div>
        </div>
      )}
    </>
  );
}