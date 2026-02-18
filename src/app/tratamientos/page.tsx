import { Container } from "@/components/layout/container";
import { TreatmentsGrid } from "@/components/treatments/listing/treatments-grid";
import { getTratamientosByCategory } from "@/lib/tratamientos";
import { SOCIAL } from "@/data/social";

export default function Page() {
  const corporales = getTratamientosByCategory("corporal");
  const faciales = getTratamientosByCategory("facial");
  const whatsappUrl = `https://wa.me/${SOCIAL.whatsapp.phoneE164}?text=${encodeURIComponent(
    SOCIAL.whatsapp.defaultMessage,
  )}`;

  return (
    <main className="py-10 sm:py-14">
      <Container>
        <header className="mb-10 text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Atención personalizada · Resultados progresivos
          </p>

          <h1 className="mt-4 text-balance font-serif text-4xl tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
            Tratamientos pensados para tu piel y tu objetivo
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-pretty text-base text-slate-600 dark:text-slate-300 sm:text-lg">
            Elegí una opción corporal o facial y descubrí duración, frecuencia y
            beneficios. Cada sesión se ajusta según evaluación.
          </p>

          <div className="mx-auto mt-6 h-0.75 w-24 rounded-full bg-hero-gradient opacity-90" />
        </header>

        <section className="mt-10">
          <div className="mb-5 flex items-center gap-4">
            <h2 className="font-serif text-2xl tracking-tight text-slate-900 dark:text-slate-100">
              Corporales
            </h2>
            <div className="h-px w-24 bg-linear-to-r from-primary/70 via-secondary/30 to-transparent sm:flex-1 sm:w-auto" />
          </div>

          <TreatmentsGrid items={corporales} />
        </section>

        <section className="mt-14">
          <div className="mb-5 flex items-center gap-4">
            <h2 className="font-serif text-2xl tracking-tight text-slate-900 dark:text-slate-100">
              Faciales
            </h2>
            <div className="h-px w-24 bg-linear-to-r from-primary/70 via-secondary/30 to-transparent sm:flex-1 sm:w-auto" />
          </div>

          <TreatmentsGrid items={faciales} />
        </section>

        <section className="mt-20">
          <div className="rounded-3xl bg-cream/40 p-10 text-center dark:bg-slate-900/80">
            <h3 className="font-serif text-3xl tracking-tight text-slate-900 dark:text-slate-100">
              ¿No sabés cuál es el tratamiento ideal para vos?
            </h3>

            <p className="mx-auto mt-3 max-w-xl text-slate-600 dark:text-slate-300">
              Podemos evaluarlo juntas y definir la mejor opción según tu
              objetivo y tipo de piel.
            </p>

            <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-primary px-6 py-3 font-medium text-white shadow-soft transition hover:opacity-90"
              >
                Reservar turno por WhatsApp
              </a>

              <a
                href={SOCIAL.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-primary/30 px-6 py-3 font-medium text-primary dark:text-secondary transition hover:bg-primary/5 dark:hover:bg-secondary/10"
              >
                Ver Instagram
              </a>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
