import Link from "next/link";
import { Container } from "@/components/layout/container";
import { NavLinks } from "./nav-links";
import { ThemeToggle } from "./theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/80 bg-white/80 backdrop-blur-md dark:border-neutral-800/80 dark:bg-neutral-950/70">
      <Container className="flex h-16 items-center justify-between">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="inline-flex h-8 w-8 items-center justify-center text-primary">
            <LogoMark />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            LiEstética
          </span>
        </Link>

        {/* Center: Nav */}
        <div className="flex-1 flex justify-center">
          <NavLinks />
        </div>

        {/* Right: Theme toggle */}
        <div className="flex items-center justify-end">
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}

function LogoMark() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
      />
    </svg>
  );
}
