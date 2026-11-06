import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <span
            className={cn(
              "mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em]",
              tone === "dark"
                ? "border-blue-400/30 bg-blue-500/10 text-blue-300"
                : "border-blue-600/20 bg-blue-600/5 text-blue-700",
            )}
          >
            <span className="size-1.5 rounded-full bg-blue-400" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2
          className={cn(
            "font-[family-name:var(--font-display)] text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl lg:text-[2.75rem]",
            tone === "dark" ? "text-white" : "text-navy-950",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p
            className={cn(
              "mt-5 text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-white/65" : "text-graphite/70",
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
