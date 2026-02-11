import type { Tratamiento } from "@/data/tratamientos";
import { TreatmentCard } from "./treatment-card";

type Props = {
  items: Tratamiento[];
};

export function TreatmentsGrid({ items }: Props) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((t) => (
        <TreatmentCard key={t.slug} item={t} />
      ))}
    </div>
  );
}
