"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      className="fixed bottom-4 left-4 z-40 h-11 w-11 rounded-full border-white/15 bg-[hsl(var(--card))]/90 p-0 shadow-xl backdrop-blur md:bottom-6 md:left-6 md:h-auto md:w-auto md:px-4"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <Sun className="h-4 w-4 md:mr-2" /> : <Moon className="h-4 w-4 md:mr-2" />}
      <span className="hidden md:inline">{isDark ? "Light" : "Dark"}</span>
    </Button>
  );
}
