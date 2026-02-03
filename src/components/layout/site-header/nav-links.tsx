"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";
import { NAV_ITEMS } from "@/lib/nav";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAV_ITEMS.map((l) => {
        const isActive =
          l.href === "/" ? pathname === "/" : pathname.startsWith(l.href);
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
