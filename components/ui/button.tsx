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
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
        {
          "bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] shadow-lg shadow-orange-900/20 hover:-translate-y-0.5 hover:bg-[hsl(var(--primary))]/90":
            variant === "primary",
          "bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] hover:bg-[hsl(var(--secondary))]/90":
            variant === "secondary",
          "border border-[hsl(var(--border))] bg-white/60 text-[hsl(var(--foreground))] hover:bg-white":
            variant === "outline",
          "text-[hsl(var(--foreground))] hover:bg-white/50": variant === "ghost",
          "h-10 px-4 text-sm": size === "sm",
          "h-12 px-6 text-sm": size === "md",
          "h-14 px-7 text-base": size === "lg",
        },
        className,
      )}
      {...props}
    />
  );
}
