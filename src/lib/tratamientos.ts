import {
  tratamientos,
  type Tratamiento,
  type TratamientoCategory,
} from "@/data/tratamientos";

export function getTratamientoBySlug(slug: string): Tratamiento | null {
  return tratamientos.find((t) => t.slug === slug) ?? null;
}

export function getTratamientosByCategory(category: TratamientoCategory) {
  return tratamientos
    .filter((t) => t.category === category)
    .sort((a, b) => a.order - b.order);
}

export function getTratamientosSlugs() {
  return tratamientos.map((t) => t.slug);
}
