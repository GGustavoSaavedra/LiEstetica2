import Image from "next/image";
import Link from "next/link";
import { Flower2 } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/cn";

export function Hero() {
  return (
    <section className="relative flex min-h-[78vh] items-center overflow-hidden pt-24 pb-14 sm:min-h-[90vh] sm:pt-28 sm:pb-16">
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-[10%] -right-[10%] h-200 w-200 rounded-full bg-linear-to-br from-cream/40 to-primary/10 blur-[100px]" />
      <div className="pointer-events-none absolute -bottom-[10%] -left-[10%] h-150 w-150 rounded-full bg-primary/5 blur-[80px]" />

      <Container className="relative w-full">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-20">
          {/* Left (Text) */}
          <div className="relative z-10 order-1 lg:order-1 lg:col-span-6">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-white/60 px-4 py-2 backdrop-blur-sm dark:bg-neutral-950/20">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                Cosmetología & Estética
              </span>
            </div>

            <h1 className="mt-6 font-serif text-4xl font-bold leading-[0.98] tracking-[-0.02em] text-neutral-900 dark:text-neutral-50 sm:text-6xl lg:text-7xl">
              Tu piel, <br />
              <span className="relative inline-block">
                <span className="relative z-10 font-serif italic font-normal text-primary">
                  mi compromiso
                </span>
                <svg
                  className="absolute -bottom-1 left-0 z-0 h-3 w-full text-cream"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 10"
                  aria-hidden="true"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </span>
              <br />
              personal.
            </h1>

            <p className="mt-6 max-w-md border-l-2 border-primary/30 pl-5 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
              Redescubrí tu belleza natural
              <br />
              con tratamientos personalizados diseñados exclusivamente para vos.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="#about"
                className={cn(
                  "group relative overflow-hidden rounded-full px-7 py-4 text-[11px] font-bold uppercase tracking-[0.2em] transition",
                  "bg-neutral-900 text-white dark:bg-white dark:text-neutral-950",
                )}
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white dark:group-hover:text-neutral-950">
                  Descubrir
                </span>
                <span className="absolute inset-0 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </div>
          </div>

          {/* Right (Image) */}
          <div className="relative order-2 lg:order-2 lg:col-span-6">
            <div className="relative mx-auto w-full max-w-90 sm:max-w-105 lg:max-w-130">
              {/* Soft blob around image */}
              <div className="pointer-events-none absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-primary/10 blur-2xl sm:h-40 sm:w-40" />

              {/* Organic image */}
              <div className="organic-shape-1 relative z-10 aspect-4/5 overflow-hidden shadow-2xl shadow-primary/20 lg:aspect-square animate-float">
                <Image
                  src="/home/hero/hero.png"
                  alt="LiEstética"
                  fill
                  priority
                  className="object-cover scale-110 transition-transform duration-2000 hover:scale-100"
                  sizes="(max-width: 640px) 360px, (max-width: 1024px) 420px, 520px"
                />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-950/15 to-transparent dark:from-neutral-950/35" />
              </div>

              {/* Floating badge */}
              <div
                className={cn(
                  "animate-float absolute z-20 rounded-2xl bg-white shadow-lg shadow-black/5 dark:bg-neutral-950",
                  "p-3 sm:p-4",
                  "left-4 bottom-4",
                  "left-4 bottom-4 sm:bottom-10 sm:-left-6",
                )}
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-primary/10 p-2 text-primary">
                    <Flower2 className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-900 dark:text-neutral-50">
                      Bienestar
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-300">
                      Personalizado
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
