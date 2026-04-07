import * as React from "react";

import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "field-base flex h-12 w-full rounded-[22px] px-4 text-sm outline-none ring-0 transition placeholder:text-[hsl(var(--muted-foreground))] focus:border-[hsl(var(--primary))] focus:shadow-[0_0_0_4px_rgba(101,99,255,0.12)]",
        className,
      )}
      {...props}
    />
  ),
);

Input.displayName = "Input";
