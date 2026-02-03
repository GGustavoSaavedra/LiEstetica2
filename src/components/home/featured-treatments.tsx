import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Waves, ScanFace } from "lucide-react";
import { Container } from "@/components/layout/container";
import { tratamientos } from "@/data/tratamientos";
import { cn } from "@/lib/cn";

const FEATURED = [
  {
    slug: "maderoterapia",
    image: "/home/featured-treatments/maderoterapia.png",
    Icon: Waves,
  },
  {
    slug: "anticeluliticos",
    image: "/home/featured-treatments/anticelulitis.png",
    Icon: Sparkles,
  },
  {
    slug: "dermaplaning",
    image: "/home/featured-treatments/dermaplaning.png",
    Icon: ScanFace,
  },
] as const;

export function FeaturedTreatments() {
  const featured = FEATURED.map((f) => {
    const t = tratamientos.find((x) => x.slug === f.slug);
    if (!t) {
      throw new Error(`Tratamiento no encontrado: ${f.slug}`);
    }
    return { ...f, ...t };
  });

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
          {featured.map(({ slug, title, shortDescription, image, Icon }) => (
            <div key={slug} className="group relative">
              <div
                className={cn(
                  "pointer-events-none absolute -inset-3 -z-10 rounded-3xl blur-2xl transition-opacity duration-500",
                  "opacity-0",
                  "dark:opacity-30 dark:bg-linear-to-r dark:from-primary/25 dark:to-secondary/20",
                  "dark:group-hover:opacity-60",
                )}
              />

              <article
                className={cn(
                  "overflow-hidden rounded-2xl border transition",
                  "border-neutral-200 bg-white hover:-translate-y-1 hover:shadow-soft",
                  "dark:border-neutral-800 dark:bg-neutral-950",
                )}
              >
                <div className="relative aspect-16/10 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 360px"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-neutral-950/10 via-transparent to-transparent dark:from-neutral-950/35" />

                  <div
                    className={cn(
                      "absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5",
                      "border-neutral-200/70 bg-white/85 text-neutral-800 backdrop-blur",
                      "dark:border-neutral-800/70 dark:bg-neutral-950/70 dark:text-neutral-100",
                    )}
                  >
                    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
                    <span className="text-xs font-semibold">Destacado</span>
                  </div>
                </div>

                <div className="p-7">
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                    {title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {shortDescription}
                  </p>

                  <Link
                    href={`/tratamientos#${slug}`}
                    className={cn(
                      "mt-5 inline-flex items-center gap-2 text-sm font-bold transition-colors",
                      "text-primary hover:text-secondary",
                      "dark:text-cream dark:hover:text-secondary",
                    )}
                  >
                    Ver más{" "}
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </article>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
