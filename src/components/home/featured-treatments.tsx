import Link from "next/link";
import { Container } from "@/components/layout/container";
import { tratamientos } from "@/data/tratamientos";
import { Sparkles, Droplets, HeartPulse, ArrowRight } from "lucide-react";

const ICONS = [Sparkles, Droplets, HeartPulse] as const;

const FEATURED_SLUGS = [
  "maderoterapia",
  "anticeluliticos",
  "dermaplaning",
] as const;

export function FeaturedTreatments() {
  const featured = FEATURED_SLUGS.map(
    (slug) => tratamientos.find((t) => t.slug === slug)!,
  );

  return (
    <section className="py-16 lg:py-20">
      <Container>
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-3xl">
            Tratamientos destacados
          </h2>
          <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-primary" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {featured.map((t, idx) => {
            const Icon = ICONS[idx % ICONS.length];

            return (
              <article
                key={t.slug}
                className={[
                  "group rounded-2xl border p-7 transition",
                  "border-neutral-200 bg-white hover:-translate-y-1 hover:shadow-soft",
                  "dark:border-neutral-800 dark:bg-neutral-950",
                ].join(" ")}
              >
                <div
                  className={[
                    "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl transition",
                    "bg-cream/60 text-primary ring-1 ring-secondary/20",
                    "group-hover:bg-primary group-hover:text-white",
                    "dark:bg-neutral-900/60 dark:ring-secondary/20",
                  ].join(" ")}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                  {t.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {t.shortDescription}
                </p>

                <Link
                  href={`/tratamientos#${t.slug}`}
                  className={[
                    "mt-5 inline-flex items-center gap-2 text-sm font-bold",
                    "text-primary hover:text-secondary transition-colors",
                    "dark:text-cream dark:hover:text-secondary",
                  ].join(" ")}
                >
                  Ver más <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
