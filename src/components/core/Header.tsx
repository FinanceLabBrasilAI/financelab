'client';

import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-20 max-w-5xl mx-auto px-6 py-6 flex items-center justify-between border-b border-[#1F222F]/60">
      <Link href="/" className="flex items-center gap-3">
        <Image 
          src="/logo.png" 
          alt="FinanceLab Logo" 
          width={100} 
          height={35} 
          className="object-contain"
          priority
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