import Link from "next/link";
import { cn } from "@/lib/cn";
import { ArrowRight } from "lucide-react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface BaseProps {
  variant?: ButtonVariant;
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
  showArrow?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-blue-600 text-white shadow-[0_18px_40px_-12px_rgba(23,105,255,0.55)] hover:bg-blue-500 hover:shadow-[0_22px_48px_-12px_rgba(23,105,255,0.7)]",
  secondary:
    "bg-white/5 text-white border border-white/15 hover:border-blue-400/60 hover:bg-white/10",
  ghost: "bg-transparent text-navy-900 hover:text-blue-600 underline-offset-4 hover:underline",
};

const sizeClasses = {
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-4 text-base",
};

function baseStyles(variant: ButtonVariant, size: "md" | "lg", className?: string) {
  return cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out whitespace-nowrap",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow,
  href,
  ...rest
}: BaseProps & { href: string } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const isExternal = href.startsWith("http");
  const classes = baseStyles(variant, size, className);

  if (isExternal) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
        {showArrow && <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {children}
      {showArrow && <ArrowRight className="size-4" />}
    </Link>
  );
}

export function ButtonAsButton({
  variant = "primary",
  size = "md",
  className,
  children,
  showArrow,
  ...rest
}: BaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={baseStyles(variant, size, className)} {...rest}>
      {children}
      {showArrow && <ArrowRight className="size-4" />}
    </button>
  );
}
