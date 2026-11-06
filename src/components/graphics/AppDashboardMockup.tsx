"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, ListChecks } from "lucide-react";

const tasks = [
  { label: "Pedido #482 confirmado", done: true },
  { label: "Estoque atualizado", done: true },
  { label: "Relatório semanal gerado", done: false },
];

export function AppDashboardMockup() {
  return (
    <div className="w-[220px] overflow-hidden rounded-[1.75rem] border border-white/10 bg-navy-900/90 p-3 shadow-card">
      <div className="mb-3 flex items-center justify-between rounded-xl bg-white/[0.04] px-3 py-2">
        <span className="flex items-center gap-1.5 text-[11px] font-semibold text-white/70">
          <ListChecks className="size-3.5 text-blue-400" />
          Painel do negócio
        </span>
        <Clock className="size-3.5 text-white/30" />
      </div>
      <div className="space-y-2">
        {tasks.map((task, i) => (
          <motion.div
            key={task.label}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 + 0.2, duration: 0.4 }}
            className="flex items-center gap-2 rounded-lg bg-white/[0.03] px-2.5 py-2"
          >
            <CheckCircle2
              className={`size-3.5 shrink-0 ${task.done ? "text-emerald-400" : "text-white/20"}`}
            />
            <span className={`text-[11px] leading-tight ${task.done ? "text-white/70" : "text-white/40"}`}>
              {task.label}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.6 }}
        style={{ transformOrigin: "left" }}
        className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"
      >
        <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-blue-500 to-blue-300" />
      </motion.div>
      <p className="mt-1.5 text-[10px] text-white/40">72% dos processos automatizados</p>
    </div>
  );
}
