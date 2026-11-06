"use client";

import { motion } from "framer-motion";
import { BrowserFrame } from "./BrowserFrame";
import { Image as ImageIcon, Type, Square } from "lucide-react";

const blocks = [
  { icon: Type, width: "60%", label: "Título principal" },
  { icon: ImageIcon, width: "100%", label: "Imagem de destaque" },
  { icon: Square, width: "85%", label: "Seção de serviços" },
  { icon: Square, width: "70%", label: "Chamada para ação" },
];

export function SiteBuilderMockup() {
  return (
    <BrowserFrame url="suaempresa.com.br">
      <div className="space-y-3 p-5">
        {blocks.map((block, i) => (
          <motion.div
            key={block.label}
            initial={{ opacity: 0, scaleX: 0.3 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.18 + 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ transformOrigin: "left", width: block.width }}
            className="flex items-center gap-2.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-3"
          >
            <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-blue-500/20 text-blue-300">
              <block.icon className="size-3.5" />
            </span>
            <span className="truncate text-xs text-white/55">{block.label}</span>
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.9 }}
          className="flex items-center gap-2 pt-1 text-[11px] font-medium text-emerald-400"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
          </span>
          Responsivo e pronto para publicar
        </motion.div>
      </div>
    </BrowserFrame>
  );
}
