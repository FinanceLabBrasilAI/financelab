"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import ProfileMenu from "./ProfileMenu";
import { getStoredUser, StoredUser } from "../../services/api";

export default function Header() {
  const [user, setUser] = useState<StoredUser | null>(null);

  useEffect(() => {
    setUser(getStoredUser());
  }, []);

  return (
    <header className="relative z-20 mx-auto max-w-6xl px-6 py-5">
      <div className="flex items-center justify-between rounded-full border border-[#1F222F] bg-[#12141C]/70 px-4 py-3 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/financelab/logo.png"
            alt="FinanceLab Logo"
            width={92}
            height={32}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 text-[11px] font-medium uppercase tracking-[0.2em] text-[#8E929F] md:flex">
          <a href="#features" className="transition hover:text-[#00C853]">Recursos</a>
          <a href="#pricing" className="transition hover:text-[#00C853]">Planos</a>
          <Link href="/legal/termos" className="transition hover:text-[#00C853]">Termos</Link>
        </nav>

        {user ? (
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-2 sm:flex">
              <a href="#" aria-label="Baixar na Google Play" className="inline-flex transition hover:opacity-80">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  width={105}
                  height={31}
                  className="h-7 w-auto object-contain"
                />
              </a>
              <a href="#" aria-label="Baixar na App Store" className="inline-flex transition hover:opacity-80">
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="App Store"
                  width={105}
                  height={31}
                  className="h-7 w-auto object-contain"
                />
              </a>
            </div>
            <ProfileMenu onLogout={() => setUser(null)} />
          </div>
        ) : (
          <Link href="/register?plan=silver" className="inline-flex items-center rounded-full border border-[#00C853]/35 bg-[#00C853]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#00C853] transition hover:bg-[#00C853] hover:text-[#0B0C10]">
            Comece agora
            <ArrowRight size={16} />
          </Link>
        )}
      </div>
    </header>
  );
}