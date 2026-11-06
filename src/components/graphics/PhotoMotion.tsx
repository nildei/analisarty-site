"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/cn";

export function PhotoMotion({
  src,
  alt,
  className,
  priority,
  objectPosition = "center",
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  objectPosition?: string;
}) {
  return (
    <div
      className={cn(
        "relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 shadow-card",
        className,
      )}
    >
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: [1.1, 1.18, 1.1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 480px, 90vw"
          className="object-cover"
          style={{ objectPosition }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/70 via-navy-950/10 to-transparent" />
      <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay" />
    </div>
  );
}
