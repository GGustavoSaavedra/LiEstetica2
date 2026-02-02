"use client";

import { useEffect, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = (resolvedTheme ?? "light") as "light" | "dark";
  const nextTheme = current === "dark" ? "light" : "dark";

  function onToggle() {
    const switchTheme = () => setTheme(nextTheme);

    if (!(document as any).startViewTransition) {
      switchTheme();
      return;
    }

    (document as any).startViewTransition(() => {
      flushSync(() => {
        switchTheme();
      });
    });
  }

  const label =
    current === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro";

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      title={label}
      className={cn(
        // base
        "inline-flex h-10 w-10 items-center justify-center rounded-full border transition",
        // light
        "border-neutral-200 bg-white text-neutral-700 hover:text-neutral-900 hover:border-secondary/40 hover:bg-cream/30",
        // dark
        "dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-200 dark:hover:text-white dark:hover:border-secondary/50 dark:hover:bg-neutral-900/60",
        // focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40",
        "focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-950",
        className,
      )}
    >
      {current === "dark" ? (
        <Sun className="h-5 w-5" aria-hidden />
      ) : (
        <Moon className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
