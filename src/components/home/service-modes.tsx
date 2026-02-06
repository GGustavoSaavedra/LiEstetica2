import Link from "next/link";
import { CheckCircle2, Store, Car } from "lucide-react";
import { Container } from "@/components/layout/container";
import { cn } from "@/lib/cn";
import { SOCIAL } from "@/data/social";

function whatsappHref(message: string) {
  const phone = SOCIAL.whatsapp.phoneE164.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

export function ServiceModes() {
  const consultorioMsg =
    "Hola Liliana! Quiero reservar un turno en consultorio. ¿Qué días/horarios tenés disponibles?";
  const domicilioMsg =
    "Hola Liliana! Quiero consultar disponibilidad para servicio a domicilio. ¿En qué zonas atendés y qué días/horarios tenés?";

  return (
    <section
      id="service-modes"
      className={cn(
        "relative overflow-hidden py-24 sm:py-28",
        "bg-cream/10 dark:bg-neutral-950",
      )}
    >
      {/* Blobs */}
      <div className="pointer-events-none absolute -left-24 top-10 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

      <Container className="relative">
        <div className="mx-auto mb-14 max-w-2xl text-center sm:mb-16">
          <h2 className="font-serif text-4xl font-bold tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl">
            Modalidad de Atención
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            Elegí la comodidad que mejor se adapte a tu estilo de vida.
          </p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Consultorio */}
          <article
            className={cn(
              "group flex h-full flex-col rounded-3xl border p-8 text-center transition-all duration-300 md:p-12",
              "border-neutral-200/80 bg-white hover:-translate-y-1 hover:border-primary/30",
              "shadow-[0_18px_40px_rgba(15,23,42,0.10)]",
              "dark:border-neutral-800/80 dark:bg-neutral-900/20 dark:shadow-[0_18px_40px_rgba(0,0,0,0.45)]",
            )}
          >
            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-primary/10 text-primary">
              <Store
                className="h-10 w-10"
                strokeWidth={1.8}
                aria-hidden="true"
              />
            </div>

            <h3 className="font-serif text-2xl font-bold text-neutral-900 dark:text-neutral-50">
              Consultorio privado
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              Un espacio íntimo y tranquilo, pensado para que te relajes y
              disfrutes tu momento de cuidado con total comodidad.
            </p>

            <ul className="mt-7 space-y-3 text-left text-sm text-neutral-700 dark:text-neutral-200">
              <li className="flex items-center gap-3">
                <CheckCircle2
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                <span>Ambiente climatizado</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2
                  className="h-4 w-4 text-primary"
                  aria-hidden="true"
                />
                <span>Espacio preparado para la atención</span>
              </li>
            </ul>

            <div className="mt-auto pt-8">
              <Link
                href={whatsappHref(consultorioMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex w-full items-center justify-center rounded-xl border px-4 py-3 text-xs font-bold uppercase tracking-widest transition",
                  "border-primary text-primary hover:bg-primary hover:text-white",
                  "dark:hover:text-neutral-950",
                )}
              >
                Agendar por WhatsApp
              </Link>
            </div>
          </article>

          {/* Domicilio */}
          <article
            className={cn(
              "group relative flex h-full flex-col overflow-hidden rounded-3xl p-8 text-center transition-all duration-300 md:p-12",
              "bg-primary text-white hover:-translate-y-1",
              "shadow-[0_22px_60px_rgba(217,159,113,0.30)]",
              "dark:shadow-[0_22px_60px_rgba(217,159,113,0.22)]",
            )}
          >
            {/* detalle esquina */}
            <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-bl-[100px] bg-white/10" />

            <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-white/20 text-white">
              <Car className="h-10 w-10" strokeWidth={1.8} aria-hidden="true" />
            </div>

            <h3 className="font-serif text-2xl font-bold">
              Servicio a Domicilio
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Atención en la comodidad de tu hogar, pensada para adaptarse a tu
              rutina sin necesidad de moverte.
            </p>

            <ul className="mt-7 space-y-3 text-left text-sm text-white/90">
              <li className="flex items-center gap-3">
                <CheckCircle2
                  className="h-4 w-4 text-white"
                  aria-hidden="true"
                />
                <span>Sin traslados ni tráfico</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2
                  className="h-4 w-4 text-white"
                  aria-hidden="true"
                />
                <span>Turnos coordinados previamente</span>
              </li>
            </ul>

            <div className="mt-auto pt-8">
              <Link
                href={whatsappHref(domicilioMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-widest transition",
                  "bg-white text-black hover:bg-cream",
                )}
              >
                Consultar disponibilidad
              </Link>
            </div>
          </article>
        </div>
      </Container>
    </section>
  );
}
