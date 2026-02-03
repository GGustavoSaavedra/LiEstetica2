"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/lib/nav";

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <div className="relative md:hidden">
      <button
        type="button"
        aria-label={open ? "Cerrar menú" : "Abrir menú"}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-full border transition",
          "border-neutral-200 bg-white text-neutral-800 hover:bg-cream/30 hover:border-secondary/40",
          "dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100 dark:hover:bg-neutral-900/60 dark:hover:border-secondary/50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/40",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-50 dark:focus-visible:ring-offset-neutral-950",
        )}
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 md:hidden bg-transparent"
        />
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          className={cn(
            "absolute right-0 top-[calc(100%+10px)] z-50 w-[min(92vw,360px)] overflow-hidden rounded-2xl border",
            "border-neutral-200 bg-white shadow-soft",
            "dark:border-neutral-800 dark:bg-neutral-950",
          )}
        >
          <div className="flex items-center justify-between gap-3 px-4 py-3 border-b border-neutral-200/70 dark:border-neutral-800/70">
            <p className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              Menú
            </p>
            <ThemeToggle />
          </div>

          <nav className="px-2 py-2">
            {items.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition",
                    isActive
                      ? "bg-cream/40 text-neutral-900 ring-1 ring-secondary/30 dark:bg-neutral-900/60 dark:text-neutral-50 dark:ring-secondary/30"
                      : "text-neutral-700 hover:bg-cream/30 hover:text-neutral-900 dark:text-neutral-200 dark:hover:bg-neutral-900/50",
                  )}
                >
                  {item.label}
                  {isActive ? (
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  ) : null}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
}
