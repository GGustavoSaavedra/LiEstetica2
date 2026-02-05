import { Container } from "@/components/layout/container";

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <Container>
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl font-black text-neutral-900 dark:text-neutral-50 sm:text-4xl">
            Sobre mí
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-300">
            {/* lo completamos luego */}
          </p>
        </div>
      </Container>
    </section>
  );
}
