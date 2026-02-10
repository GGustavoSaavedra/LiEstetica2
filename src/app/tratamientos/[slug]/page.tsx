import { notFound } from "next/navigation";
import { getTratamientoBySlug, getTratamientosSlugs } from "@/lib/tratamientos";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getTratamientosSlugs().map((slug) => ({ slug }));
}

export default function Page({ params }: Props) {
  const item = getTratamientoBySlug(params.slug);
  if (!item) notFound();

  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-semibold tracking-tight">{item.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-300">
        {item.shortDescription}
      </p>

      <div className="mt-6 space-y-3 text-slate-700 dark:text-slate-200">
        <p>{item.description}</p>
        <p>
          <span className="font-medium">Duración:</span> {item.duration}
        </p>
        <p>
          <span className="font-medium">Frecuencia:</span> {item.frequency}
        </p>
      </div>

      {item.benefits.length > 0 ? (
        <>
          <h2 className="mt-8 text-xl font-semibold tracking-tight">
            Beneficios
          </h2>
          <ul className="mt-3 list-disc space-y-1 pl-5 text-slate-700 dark:text-slate-200">
            {item.benefits.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}
