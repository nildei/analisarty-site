"use client";

import Image from "next/image";
import { buildWhatsAppLink, defaultWhatsAppMessage } from "@/lib/site-config";

export function WhatsAppFloatingButton() {
  return (
    <a
      href={buildWhatsAppLink(defaultWhatsAppMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp com a Analisarty"
      className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 sm:bottom-7 sm:right-7"
    >
      <span className="max-w-0 overflow-hidden whitespace-nowrap rounded-full bg-navy-900 px-0 py-2.5 text-sm font-semibold text-white opacity-0 shadow-card transition-all duration-300 group-hover:max-w-[160px] group-hover:px-4 group-hover:opacity-100">
        Fale no WhatsApp
      </span>
      <span className="relative flex size-14 shrink-0 items-center justify-center drop-shadow-[0_12px_24px_rgba(31,184,85,0.45)] transition-transform group-hover:scale-105">
        <Image src="/images/whatsapp-icon.png" alt="" fill sizes="56px" className="object-contain" />
        <span className="absolute -right-0.5 -top-0.5 flex size-3">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex size-3 rounded-full bg-emerald-300" />
        </span>
      </span>
    </a>
  );
}
