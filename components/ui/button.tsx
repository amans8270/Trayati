import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
};

export function Button({
  className,
  asChild,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(
        "magnetic inline-flex items-center justify-center rounded-full font-semibold tracking-[-0.01em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
        {
          "border border-white/20 bg-[linear-gradient(135deg,hsl(var(--primary)),hsl(var(--accent)))] text-[hsl(var(--primary-foreground))] shadow-[0_24px_60px_-24px_rgba(83,87,255,0.75)] hover:-translate-y-1 hover:shadow-[0_28px_70px_-24px_rgba(83,87,255,0.82)]":
            variant === "primary",
          "border border-white/12 bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] shadow-[0_24px_60px_-28px_rgba(6,10,30,0.75)] hover:-translate-y-1":
            variant === "secondary",
          "border border-white/45 bg-white/60 text-[hsl(var(--foreground))] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_18px_40px_-28px_rgba(40,52,110,0.55)] hover:-translate-y-1 hover:bg-white/78 dark:border-white/10 dark:bg-white/[0.04] dark:hover:bg-white/[0.08]":
            variant === "outline",
          "text-[hsl(var(--foreground))] hover:bg-white/50 dark:hover:bg-white/10": variant === "ghost",
          "h-10 px-4 text-sm": size === "sm",
          "h-12 px-6 text-sm": size === "md",
          "h-14 px-7 text-base": size === "lg",
        },
        className,
      )}
      data-magnetic
      {...props}
    />
  );
}
