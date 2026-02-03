import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/container";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { NAV_ITEMS } from "@/lib/nav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/70">
      <Container className="flex h-16 items-center justify-between lg:h-20">
        <Link href="/" aria-label="Ir al inicio" className="flex items-center">
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-neutral-200 shadow-sm transition hover:scale-[1.03] active:scale-[0.98] lg:h-14 lg:w-14 dark:ring-neutral-800">
            <span className="relative h-9 w-9 lg:h-10 lg:w-10">
              <Image
                src="/navbar/logoM.png"
                alt="LiEstética"
                fill
                className="object-contain"
                priority
                sizes="40px"
              />
            </span>
          </span>
        </Link>

        <div className="hidden flex-1 justify-center md:flex">
          <NavLinks />
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          <MobileMenu items={[...NAV_ITEMS]} />
        </div>
      </Container>
    </header>
  );
}
