import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "flex h-12 w-full rounded-2xl border border-[hsl(var(--border))] bg-white/75 px-4 text-sm text-[hsl(var(--foreground))] outline-none ring-0 transition placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))]",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
