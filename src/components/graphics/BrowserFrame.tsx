import { cn } from "@/lib/cn";

export function BrowserFrame({
  children,
  className,
  url = "analisarty.com.br",
}: {
  children: React.ReactNode;
  className?: string;
  url?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-white/10 bg-navy-900/80 shadow-card backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-3">
        <div className="flex gap-1.5">
          <span className="size-2.5 rounded-full bg-[#ff5f57]" />
          <span className="size-2.5 rounded-full bg-[#febc2e]" />
          <span className="size-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="ml-2 flex flex-1 items-center gap-2 rounded-md bg-black/25 px-3 py-1 text-[11px] text-white/45">
          <svg viewBox="0 0 24 24" className="size-3 fill-none stroke-current stroke-2">
            <rect x="5" y="11" width="14" height="9" rx="2" />
            <path d="M8 11V7a4 4 0 0 1 8 0v4" />
          </svg>
          {url}
        </div>
      </div>
      {children}
    </div>
  );
}
