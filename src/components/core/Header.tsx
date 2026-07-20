"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="relative z-20 max-w-5xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#1F222F]/60">
      <Link href="/" className="flex items-center gap-3">
        <img 
          src="/financelab/logo.png" 
          alt="FinanceLab Logo" 
          width={100} 
          height={35} 
          className="object-contain"
        />
      </Link>
      <nav className="flex items-center gap-6 text-xs font-mono text-[#8E929F]">
        <a href="#features" className="hover:text-[#00C853] transition-colors">// recursos</a>
        <a href="#pricing" className="hover:text-[#00C853] transition-colors">// planos</a>
        <Link href="/legal/termos" className="hover:text-[#00C853] transition-colors">// termos & privacidade</Link>
      </nav>
    </header>
  );
}