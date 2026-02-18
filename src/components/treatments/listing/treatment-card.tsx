import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Tratamiento } from "@/data/tratamientos";
import { cn } from "@/lib/cn";

type Props = {
  item: Tratamiento;
};

function getImageSrc(t: Tratamiento) {
  const folder = t.category === "corporal" ? "corporales" : "faciales";
  return `/tratamientos/${folder}/${t.slug}.webp`;
}

export function TreatmentCard({ item }: Props) {
  const href = `/tratamientos/${item.slug}`;
  const imgSrc = getImageSrc(item);

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border shadow-sm transition",
        "border-slate-200 bg-white hover:-translate-y-0.5 hover:shadow-md",
        "hover:ring-1 hover:ring-primary/30",
        "dark:border-slate-800 dark:bg-slate-900/60 dark:hover:ring-secondary/25",
        "w-full max-w-105",
      )}
    >
      <Link href={href} className="block focus:outline-none">
        <div className="relative h-36 w-full sm:h-44">
          <Image
            src={imgSrc}
            alt={item.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Difuminado */}
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 bottom-0 h-24",
              "bg-linear-to-b from-transparent via-white/70 to-white",
              "dark:via-slate-900/30 dark:to-slate-900/60",
            )}
          />

          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/5" />
        </div>

        <div className="p-4">
          <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100">
            {item.title}
          </h3>

          <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
            {item.shortDescription}
          </p>

          <div className="mt-4 flex items-center justify-between gap-4">
            <span className="text-xs text-slate-500 dark:text-slate-400">
              {item.duration}
            </span>

            <span
              className={cn(
                "inline-flex items-center gap-2 text-sm font-medium",
                "text-primary dark:text-secondary",
                "transition group-hover:gap-3 group-hover:underline",
              )}
            >
              Ver info <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
