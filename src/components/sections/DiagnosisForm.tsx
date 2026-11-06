"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, ShieldCheck } from "lucide-react";
import { ButtonAsButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";

const needs = [
  "Perfil da Empresa no Google",
  "Tráfego pago",
  "Site profissional",
  "Landing page",
  "Aplicativo ou sistema de gestão",
  "Ainda não sei, quero orientação",
];

type Status = "idle" | "sending" | "sent";

export function DiagnosisForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    nome: "",
    empresa: "",
    cidade: "",
    whatsapp: "",
    necessidade: needs[0],
    mensagem: "",
    link: "",
  });

  function update<K extends keyof typeof form>(key: K, value: string) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.nome || !form.empresa || !form.whatsapp) return;

    setStatus("sending");

    const lines = [
      `Olá! Quero meu diagnóstico gratuito pelo site da Analisarty.`,
      ``,
      `Nome: ${form.nome}`,
      `Empresa: ${form.empresa}`,
      form.cidade ? `Cidade/País: ${form.cidade}` : null,
      `WhatsApp: ${form.whatsapp}`,
      `Principal necessidade: ${form.necessidade}`,
      form.mensagem ? `Descrição da necessidade: ${form.mensagem}` : null,
      form.link ? `Link do perfil/Instagram: ${form.link}` : null,
    ].filter(Boolean);

    const message = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-emerald-400/20 bg-emerald-500/5 p-10 text-center">
        <CheckCircle2 className="size-12 text-emerald-400" />
        <h3 className="font-[family-name:var(--font-display)] text-xl font-bold text-white">
          Abrimos o WhatsApp para você.
        </h3>
        <p className="max-w-sm text-sm text-white/60">
          Se a conversa não abriu automaticamente, envie a mensagem que preparamos para
          finalizar o contato com um especialista.
        </p>
        <ButtonAsButton variant="secondary" onClick={() => setStatus("idle")}>
          Preencher novamente
        </ButtonAsButton>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nome" required>
          <input
            required
            value={form.nome}
            onChange={(e) => update("nome", e.target.value)}
            className="input"
            placeholder="Seu nome"
          />
        </Field>
        <Field label="Empresa" required>
          <input
            required
            value={form.empresa}
            onChange={(e) => update("empresa", e.target.value)}
            className="input"
            placeholder="Nome da sua empresa"
          />
        </Field>
        <Field label="Cidade/País">
          <input
            value={form.cidade}
            onChange={(e) => update("cidade", e.target.value)}
            className="input"
            placeholder="Onde sua empresa atua"
          />
        </Field>
        <Field label="WhatsApp (com DDI)" required>
          <input
            required
            value={form.whatsapp}
            onChange={(e) => update("whatsapp", e.target.value)}
            className="input"
            placeholder="55 31 90000-0000"
          />
        </Field>
        <Field label="Principal necessidade" className="sm:col-span-2">
          <select
            value={form.necessidade}
            onChange={(e) => update("necessidade", e.target.value)}
            className="input"
          >
            {needs.map((need) => (
              <option key={need} value={need} className="bg-navy-900">
                {need}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Breve descrição da necessidade (opcional)" className="sm:col-span-2">
          <textarea
            value={form.mensagem}
            onChange={(e) => update("mensagem", e.target.value)}
            className="input min-h-24 resize-none"
            placeholder="Conte em poucas palavras o que sua empresa precisa agora"
          />
        </Field>
        <Field label="Link do Perfil no Google ou Instagram (opcional)" className="sm:col-span-2">
          <input
            value={form.link}
            onChange={(e) => update("link", e.target.value)}
            className="input"
            placeholder="https://"
          />
        </Field>
      </div>

      <ButtonAsButton
        type="submit"
        size="lg"
        disabled={status === "sending"}
        className="mt-7 w-full justify-center sm:w-auto"
      >
        {status === "sending" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          "Quero meu diagnóstico gratuito"
        )}
      </ButtonAsButton>

      <p className="mt-4 flex items-center gap-2 text-xs text-white/40">
        <ShieldCheck className="size-3.5" />
        Seus dados abrem uma conversa direta no WhatsApp — nada é enviado a terceiros.
      </p>
    </form>
  );
}

function Field({
  label,
  children,
  required,
  className,
}: {
  label: string;
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}) {
  return (
    <label className={`flex flex-col gap-1.5 ${className ?? ""}`}>
      <span className="text-xs font-medium text-white/55">
        {label} {required && <span className="text-blue-400">*</span>}
      </span>
      {children}
    </label>
  );
}
