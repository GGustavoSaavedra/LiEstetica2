import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/container";
import { tratamientos } from "@/data/tratamientos";
import { cn } from "@/lib/cn";

import { IconDermaplaning } from "@/components/icons/treatments/dermaplaning";
import { IconNutricion } from "@/components/icons/treatments/nutricion";
import { IconMaderoterapia } from "@/components/icons/treatments/maderoterapia";
import { IconReductores } from "@/components/icons/treatments/reductores";

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

type Item = {
  slug: string;
  Icon: IconComponent;
};

const FACIAL: Item[] = [
  { slug: "dermaplaning", Icon: IconDermaplaning },
  { slug: "nutricion", Icon: IconNutricion },
];

const CORPORAL: Item[] = [
  { slug: "maderoterapia", Icon: IconMaderoterapia },
  { slug: "reductores", Icon: IconReductores },
];

function getTratamiento(slug: string) {
  const t = tratamientos.find((x) => x.slug === slug);
  if (!t) throw new Error(`Tratamiento no encontrado: ${slug}`);
  return t;
}

export function FeaturedTreatments() {
  const facial = FACIAL.map((i) => ({ ...i, ...getTratamiento(i.slug) }));
  const corporal = CORPORAL.map((i) => ({ ...i, ...getTratamiento(i.slug) }));

  return (
    <section id="services" className="py-24 sm:py-28">
      <Container>
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-20">
          <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
            Tratamientos
          </span>

          <h2 className="font-serif text-4xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
            Bienestar integral
          </h2>

          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Elegí un área y descubrí qué tratamiento se adapta mejor a vos.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <CategoryCard
            title="Cuidado Facial"
            subtitle="Luminosidad y renovación"
            accent="primary"
            items={facial}
            href="/tratamientos#facial"
            cta="Ver todo facial"
          />

          <CategoryCard
            title="Cuidado Corporal"
            subtitle="Modelado y bienestar"
            accent="secondary"
            items={corporal}
            href="/tratamientos#corporal"
            cta="Ver todo corporal"
          />
        </div>
      </Container>
    </section>
  );
}

function CategoryCard({
  title,
  subtitle,
  accent,
  items,
  href,
  cta,
}: {
  title: string;
  subtitle: string;
  accent: "primary" | "secondary";
  items: Array<
    {
      Icon: IconComponent;
    } & ReturnType<typeof getTratamiento>
  >;
  href: string;
  cta: string;
}) {
  const accentText = accent === "primary" ? "text-primary" : "text-secondary";
  const accentBgSoft =
    accent === "primary" ? "bg-primary/10" : "bg-secondary/10";

  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-[2.5rem] border transition-all duration-500",
        "border-neutral-200/80 bg-white shadow-[0_18px_40px_rgba(15,23,42,0.10)]",
        "hover:-translate-y-0.5 hover:shadow-[0_26px_60px_rgba(15,23,42,0.14)]",
        "dark:border-neutral-800/80 dark:bg-neutral-900/30 dark:shadow-[0_18px_40px_rgba(0,0,0,0.45)]",
        "dark:hover:border-primary/30",
      )}
    >
      {/* Decorativo: formas/gradientes */}
      <div
        className={cn(
          "pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full blur-3xl transition-opacity duration-500",
          accent === "primary"
            ? "bg-primary/10 opacity-70 dark:bg-primary/12 dark:opacity-60"
            : "bg-secondary/10 opacity-70 dark:bg-secondary/12 dark:opacity-60",
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute right-8 top-10 h-28 w-28 rounded-[48%_52%_62%_38%/45%_45%_55%_55%] blur-2xl transition-opacity duration-500",
          accent === "primary"
            ? "bg-primary/10 opacity-60 group-hover:opacity-85"
            : "bg-secondary/10 opacity-60 group-hover:opacity-85",
        )}
      />

      <div className="relative z-10 flex h-full flex-col p-10 sm:p-12">
        <header>
          <h3 className="font-serif text-3xl font-bold text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            {title}
          </h3>
          <p className={cn("mt-2 font-medium italic", accentText)}>
            {subtitle}
          </p>
        </header>

        <div className="mt-8 space-y-7">
          {items.map(({ slug, title, shortDescription, Icon }) => (
            <div key={slug} className="flex items-start gap-4">
              <div
                className={cn(
                  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full",
                  "bg-cream/60 text-neutral-900",
                  "dark:bg-neutral-950/60 dark:text-neutral-50",
                  accentBgSoft,
                )}
              >
                <Icon
                  className={cn("h-6.5 w-6.5 stroke-[1.75]", accentText)}
                  aria-hidden="true"
                />
              </div>

              <div>
                <h4 className="text-lg font-bold text-neutral-900 dark:text-neutral-50">
                  {title}
                </h4>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                  {shortDescription}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-auto">
          <div className="mt-10 border-t border-neutral-200/80 pt-8 dark:border-neutral-800/80">
            <Link
              href={href}
              className={cn(
                "inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors",
                "text-neutral-900 hover:text-primary dark:text-neutral-50 dark:hover:text-cream",
              )}
            >
              {cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "absolute bottom-0 left-0 h-1.5 w-full origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100",
          accent === "primary"
            ? "bg-linear-to-r from-primary to-cream"
            : "bg-linear-to-r from-secondary to-primary",
        )}
      />
    </article>
  );
}
