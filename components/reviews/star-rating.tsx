"use client";

import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export function StarRating({
  value,
  onChange,
  size = "md",
}: {
  value: number;
  onChange?: (value: number) => void;
  size?: "sm" | "md" | "lg";
}) {
  const className = size === "lg" ? "h-6 w-6" : size === "sm" ? "h-4 w-4" : "h-5 w-5";

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, index) => {
        const starValue = index + 1;
        return (
          <button
            key={starValue}
            type="button"
            className={cn("transition-transform hover:scale-110", onChange ? "cursor-pointer" : "cursor-default")}
            onClick={() => onChange?.(starValue)}
          >
            <Star className={cn(className, starValue <= value ? "fill-amber-400 text-amber-400" : "text-stone-300")} />
          </button>
        );
      })}
    </div>
  );
}
