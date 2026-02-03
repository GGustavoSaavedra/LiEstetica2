import Image from "next/image";
import { Container } from "@/components/layout/container";

export function Hero() {
  return (
    <section className="py-12 lg:py-20">
      <Container>
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center">
          <div className="w-full lg:w-1/2">
            <div className="flex max-w-xl flex-col gap-8">
              <div className="flex flex-col gap-4">
                <span className="text-primary text-xs font-bold uppercase tracking-[0.25em]">
                  Estética de alto nivel
                </span>

                <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] text-neutral-900 dark:text-neutral-50 sm:text-5xl lg:text-6xl">
                  Realza tu{" "}
                  <span className="bg-hero-gradient bg-clip-text text-transparent">
                    belleza
                  </span>{" "}
                  natural
                </h1>

                <p className="text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
                  Tratamientos personalizados y cuidado profesional para tu
                  piel. Un enfoque cálido, realista y de calidad para que te
                  sientas mejor con vos misma.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <button
                  type="button"
                  className="inline-flex h-12 min-w-45 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white shadow-soft shadow-primary/20 transition hover:bg-secondary active:scale-[0.98]"
                >
                  Reservar turno
                </button>

                <button
                  type="button"
                  className="inline-flex h-12 min-w-45 items-center justify-center rounded-lg border-2 border-primary/30 bg-transparent px-6 text-base font-bold text-neutral-900 transition hover:bg-cream/30 dark:text-neutral-50 dark:hover:bg-neutral-900/60"
                >
                  Ver tratamientos
                </button>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative mx-auto w-full max-w-140">
              <div className="absolute -inset-2 rounded-2xl bg-linear-to-r from-primary/25 to-secondary/25 blur-2xl" />

              <div className="relative overflow-hidden rounded-2xl border-8 border-white shadow-soft dark:border-neutral-800">
                <div className="relative aspect-square">
                  <Image
                    src="/home/hero/hero.png"
                    alt="LiEstética"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 1024px) 100vw, 560px"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-950/10 via-transparent to-transparent dark:from-neutral-950/30" />
                </div>
              </div>

              <div className="absolute -bottom-5 left-6 rounded-full border border-neutral-200 bg-white/90 px-4 py-2 text-xs font-semibold text-neutral-700 shadow-soft backdrop-blur-md dark:border-neutral-800 dark:bg-neutral-950/80 dark:text-neutral-200">
                Consultá por tu diagnóstico inicial ✨
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
