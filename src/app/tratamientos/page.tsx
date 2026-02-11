import { Container } from "@/components/layout/container";
import { TreatmentsGrid } from "@/components/treatments/listing/treatments-grid";
import { getTratamientosByCategory } from "@/lib/tratamientos";

export default function Page() {
  const corporales = getTratamientosByCategory("corporal");
  const faciales = getTratamientosByCategory("facial");

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
            <div className="h-px flex-1 bg-linear-to-r from-primary/70 via-secondary/30 to-transparent" />
          </div>

          <TreatmentsGrid items={corporales} />
        </section>

        <section className="mt-14">
          <div className="mb-5 flex items-center gap-4">
            <h2 className="font-serif text-2xl tracking-tight text-slate-900 dark:text-slate-100">
              Faciales
            </h2>
            <div className="h-px flex-1 bg-linear-to-r from-primary/70 via-secondary/30 to-transparent" />
          </div>

          <TreatmentsGrid items={faciales} />
        </section>
      </Container>
    </main>
  );
}
