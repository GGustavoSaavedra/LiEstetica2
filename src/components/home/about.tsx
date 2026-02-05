import Image from "next/image";
import { Container } from "@/components/layout/container";

export function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 dark:bg-neutral-950 lg:py-28"
    >
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="order-1 lg:order-2 lg:col-span-7">
            <span className="mb-4 block text-[11px] font-bold uppercase tracking-[0.3em] text-primary">
              Sobre mí
            </span>

            <h2 className="font-serif text-3xl font-bold leading-[1.05] text-neutral-900 dark:text-neutral-50 sm:text-4xl lg:text-5xl">
              Más que estética,
              <br />
              <span className="font-serif italic font-normal text-neutral-900 dark:text-neutral-50">
                es{" "}
              </span>
              <span className="font-serif italic font-normal text-primary">
                cuidado personal.
              </span>
            </h2>

            <p className="mt-5 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:mt-6 sm:text-lg">
              Soy Liliana Iturres, cosmetóloga y esteticista. Mi pasión es
              acompañar el cuidado de tu piel desde un enfoque profesional que
              combina conocimiento técnico con calidez humana. Entiendo que cada
              rostro y cada piel cuentan una historia única, y mi misión es
              ayudarte a que la tuya se vea y se sienta mejor, con confianza.
            </p>

            <p className="mt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300 sm:text-lg">
              Trabajo con tratamientos no invasivos que respetan el ritmo y las
              necesidades de tu cuerpo, utilizando técnicas como Maderoterapia y
              Dermaplaning para lograr resultados visibles y sostenibles en el
              tiempo.
            </p>

            {/* Stats */}
            <div className="mt-10 flex flex-wrap items-center gap-8 border-t border-neutral-200/80 pt-8 dark:border-neutral-800/80">
              <Stat value="5+" label="Años exp." />
              <Divider />
              <Stat value="100+" label="Clientes" />
              <Divider />
              <Stat value="100%" label="Enfoque personalizado" />
            </div>
          </div>

          <div className="order-2 lg:order-1 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-90 sm:max-w-105 lg:max-w-none">
              {/* Fondo suave detrás */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rotate-12 rounded-[48%_52%_62%_38%/45%_45%_55%_55%] bg-primary/5 blur-2xl" />

              <div className="relative z-10">
                <div className="organic-shape-2 relative aspect-3/4 overflow-hidden border-8 border-white shadow-2xl dark:border-neutral-900">
                  <Image
                    src="/home/about/about.png"
                    alt="Cosmetología en LiEstética"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 520px"
                  />
                </div>

                {/* Sello giratorio */}
                <div
                  className={[
                    "animate-spin-slow absolute z-20 grid place-items-center rounded-full shadow-xl",
                    "bg-cream text-primary dark:bg-neutral-900 dark:text-cream",
                    "h-24 w-24 sm:h-32 sm:w-32",
                    "bottom-4 right-4 sm:-bottom-10 sm:-right-8",
                  ].join(" ")}
                >
                  <svg
                    className="h-full w-full"
                    viewBox="0 0 100 100"
                    aria-hidden="true"
                  >
                    <defs>
                      <path
                        id="circle-text"
                        d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
                      />
                    </defs>
                    <text
                      fill="currentColor"
                      fontFamily="Inter"
                      fontSize="9"
                      fontWeight="700"
                      letterSpacing="2"
                    >
                      <textPath href="#circle-text">
                        EXPERIENCIA • CALIDEZ • RESULTADOS •
                      </textPath>
                    </text>
                  </svg>

                  <span className="absolute text-lg font-black sm:text-xl">
                    ✓
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <span className="block font-serif text-3xl font-bold text-primary">
        {value}
      </span>
      <span className="mt-1 block text-[10px] font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <span className="hidden h-12 w-px bg-neutral-200 dark:bg-neutral-800 sm:block" />
  );
}
