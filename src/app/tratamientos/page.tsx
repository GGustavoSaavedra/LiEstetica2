import Link from "next/link";
import { getTratamientosByCategory } from "@/lib/tratamientos";

export default function Page() {
  const corporales = getTratamientosByCategory("corporal");
  const faciales = getTratamientosByCategory("facial");

  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">Tratamientos</h1>
      <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
        Seleccioná un tratamiento para ver detalles.
      </p>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Corporales</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {corporales.map((t) => (
            <Link
              key={t.slug}
              href={`/tratamientos/${t.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {t.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold tracking-tight">Faciales</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {faciales.map((t) => (
            <Link
              key={t.slug}
              href={`/tratamientos/${t.slug}`}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900/60"
            >
              <h3 className="font-semibold">{t.title}</h3>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {t.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
