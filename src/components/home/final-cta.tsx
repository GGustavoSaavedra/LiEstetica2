import Link from "next/link";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/cn";
import { SOCIAL } from "@/data/social";

function waLink(message: string) {
  const base = `https://wa.me/${SOCIAL.whatsapp.phoneE164}`;
  const text = encodeURIComponent(message);
  return `${base}?text=${text}`;
}

export function FinalCTA() {
  const href = waLink(
    "Hola Liliana! Quería que me recomiendes un tratamiento. ¿Te cuento qué me gustaría mejorar?",
  );

  return (
    <section className="py-24 sm:py-28">
      <Container>
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl p-10 text-center shadow-2xl sm:p-14 lg:p-20",
            "bg-neutral-950 text-neutral-50",
          )}
        >
          {/* Blobs */}
          <div className="pointer-events-none absolute -top-56 left-1/4 h-140 w-140 -translate-x-1/2 rounded-full bg-primary/15 blur-[110px]" />
          <div className="pointer-events-none absolute -bottom-56 right-1/4 h-120 w-120 translate-x-1/2 rounded-full bg-secondary/15 blur-[95px]" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-serif text-4xl font-bold leading-none tracking-tight sm:text-5xl lg:text-6xl">
              Tu momento de cuidarte{" "}
              <span className="mt-2 block italic font-normal text-primary">
                empieza acá.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-neutral-300 sm:mt-6 sm:text-lg">
              Contame qué te gustaría mejorar y te recomiendo el tratamiento
              ideal para vos.
            </p>

            <div className="mt-10 flex justify-center sm:mt-12">
              <Link
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex items-center justify-center rounded-full px-10 py-5 text-[11px] font-bold uppercase tracking-[0.2em] transition",
                  "bg-linear-to-r from-secondary to-primary text-neutral-950",
                  "hover:from-primary hover:to-secondary hover:shadow-[0_18px_45px_rgba(217,159,113,0.35)]",
                  "focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-4 focus-visible:ring-offset-neutral-950",
                )}
              >
                Quiero mi recomendación
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
