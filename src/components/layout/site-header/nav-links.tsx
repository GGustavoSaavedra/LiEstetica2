"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const LINKS = [
  { label: "Home", href: "/" },
  { label: "Tratamientos", href: "/tratamientos" },
  { label: "Sobre mi", href: "/sobre-mi" },
] as const;

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden md:flex items-center gap-8">
      {LINKS.map((l) => {
        const isActive = pathname === l.href;

        return (
          <Link
            key={l.href}
            href={l.href}
            className={cn(
              "text-sm font-medium transition-colors",
              "text-neutral-700 hover:text-primary dark:text-neutral-300 dark:hover:text-cream",
              isActive && "text-primary dark:text-cream",
            )}
          >
            <span className="relative">
              {l.label}
              <span
                className={cn(
                  "pointer-events-none absolute -bottom-2 left-0 h-0.5 w-0 rounded-full transition-all",
                  isActive && "w-full bg-primary dark:bg-cream",
                )}
              />
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
