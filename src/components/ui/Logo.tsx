import Image from "next/image";
import { cn } from "@/lib/cn";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/images/logo-analisarty.png"
      alt="Analisarty Negócios Online"
      width={398}
      height={174}
      className={cn("h-14 w-auto sm:h-16", className)}
      priority
    />
  );
}
