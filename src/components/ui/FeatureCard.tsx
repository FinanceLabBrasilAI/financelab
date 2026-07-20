'client';

import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="p-8 rounded-2xl bg-[#12141C]/80 border border-[#1F222F] space-y-4 hover:border-[#00C853]/50 transition-colors shadow-xl"
    >
      <div className="w-10 h-10 rounded-lg bg-[#00C853]/10 border border-[#00C853]/20 flex items-center justify-center text-[#00C853]">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
      <p className="text-[#8E929F] text-sm leading-relaxed font-light">{description}</p>
    </motion.div>
  );
}