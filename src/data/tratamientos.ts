export type TratamientoCategory = "corporal" | "facial";

export type Tratamiento = {
  slug: string;
  title: string;
  category: TratamientoCategory;
  order: number;
  shortDescription: string;
  description: string;
  duration: string;
  frequency: string;
  benefits: string[];
};

export const tratamientos: Tratamiento[] = [
  // CORPORALES
  {
    slug: "reductores",
    title: "Reductores",
    category: "corporal",
    order: 1,
    shortDescription:
      "Enfoque en reducir volumen y mejorar la apariencia de la piel.",
    description:
      "Tratamiento corporal orientado a trabajar zonas específicas, acompañando objetivos estéticos y hábitos. La elección de técnicas se ajusta según evaluación.",
    duration: "60–75 min",
    frequency: "1–2 veces por semana",
    benefits: [
      "Mejora del aspecto general de la zona tratada",
      "Acompaña reducción de volumen",
      "Estimula la circulación",
      "Sensación de liviandad",
    ],
  },
  {
    slug: "anticeluliticos",
    title: "Anticelulíticos",
    category: "corporal",
    order: 2,
    shortDescription:
      "Trabajo focalizado sobre celulitis y textura de la piel.",
    description:
      "Tratamiento enfocado en mejorar la apariencia de la celulitis, con técnicas manuales y/o complementarias según el caso.",
    duration: "60–75 min",
    frequency: "1–2 veces por semana",
    benefits: [
      "Mejora la textura y el tono de la piel",
      "Estimula el drenaje y la circulación",
      "Ayuda a reducir retención",
    ],
  },
  {
    slug: "modeladores",
    title: "Modeladores",
    category: "corporal",
    order: 3,
    shortDescription: "Definición y contorno corporal en zonas específicas.",
    description:
      "Tratamiento orientado a mejorar el contorno y la apariencia general, trabajando zonas objetivo según evaluación y preferencias.",
    duration: "60 min",
    frequency: "1 vez por semana",
    benefits: [
      "Mejora del contorno corporal",
      "Acompaña objetivos de definición",
      "Sensación de firmeza",
    ],
  },
  {
    slug: "masajes-relajantes",
    title: "Masajes relajantes",
    category: "corporal",
    order: 4,
    shortDescription: "Alivio de tensión, descanso y bienestar general.",
    description:
      "Masaje de relajación para bajar el estrés, aliviar tensiones y mejorar el bienestar. Intensidad adaptable.",
    duration: "45–60 min",
    frequency: "A elección",
    benefits: [
      "Reduce tensión muscular",
      "Mejora descanso y relajación",
      "Bienestar general",
    ],
  },
  {
    slug: "maderoterapia",
    title: "Maderoterapia",
    category: "corporal",
    order: 5,
    shortDescription: "Técnica con elementos de madera para masaje y drenaje.",
    description:
      "Técnica corporal con herramientas de madera para estimular circulación, drenaje y mejorar textura, según tolerancia.",
    duration: "60 min",
    frequency: "1 vez por semana",
    benefits: [
      "Estimula la circulación",
      "Favorece drenaje",
      "Mejora el aspecto de la piel",
    ],
  },
  {
    slug: "aparatologia",
    title: "Aparatología",
    category: "corporal",
    order: 6,
    shortDescription:
      "Tratamientos corporales asistidos con tecnología (según disponibilidad).",
    description:
      "Uso de aparatología para complementar objetivos corporales. Se define en consulta según tipo de piel, zona y objetivo.",
    duration: "30–60 min",
    frequency: "Según evaluación",
    benefits: [
      "Complementa técnicas manuales",
      "Enfoque en objetivos específicos",
      "Sesiones ajustadas al caso",
    ],
  },

  // FACIALES
  {
    slug: "limpieza-facial",
    title: "Limpieza facial",
    category: "facial",
    order: 1,
    shortDescription: "Higiene, renovación y cuidado según tu tipo de piel.",
    description:
      "Limpieza facial adaptada a tu piel para mejorar textura, luminosidad y sensación de frescura. Ideal como base de cualquier rutina.",
    duration: "60–75 min",
    frequency: "Cada 4–6 semanas",
    benefits: [
      "Limpieza profunda",
      "Mejora textura y luminosidad",
      "Ayuda con puntos negros",
      "Piel más suave",
    ],
  },
  {
    slug: "extracciones",
    title: "Extracciones",
    category: "facial",
    order: 2,
    shortDescription:
      "Extracción cuidadosa de comedones y puntos negros (si aplica).",
    description:
      "Procedimiento focalizado para extracción, con técnica cuidadosa y criterios de seguridad. Se realiza cuando la piel lo permite.",
    duration: "45–60 min",
    frequency: "Según necesidad",
    benefits: [
      "Mejora apariencia de poros",
      "Disminuye comedones",
      "Piel más limpia y uniforme",
    ],
  },
  {
    slug: "nutricion",
    title: "Nutrición",
    category: "facial",
    order: 3,
    shortDescription:
      "Activos que devuelven confort, hidratación y luminosidad.",
    description:
      "Tratamiento de nutrición para pieles apagadas o con barrera debilitada. Se seleccionan activos según evaluación.",
    duration: "50–60 min",
    frequency: "Cada 2–4 semanas",
    benefits: [
      "Aporta confort e hidratación",
      "Mejora luminosidad",
      "Refuerza la barrera cutánea",
    ],
  },
  {
    slug: "lineas-de-expresion",
    title: "Líneas de expresión",
    category: "facial",
    order: 4,
    shortDescription:
      "Enfoque en suavizar líneas y mejorar apariencia general.",
    description:
      "Tratamiento orientado a mejorar la apariencia de líneas finas y la calidad de la piel, con activos y técnicas adecuadas.",
    duration: "50–60 min",
    frequency: "Cada 2–4 semanas",
    benefits: ["Mejora textura", "Aporta luminosidad", "Piel más uniforme"],
  },
  {
    slug: "dermaplaning",
    title: "Dermaplaning",
    category: "facial",
    order: 5,
    shortDescription:
      "Exfoliación física superficial para una piel más suave y luminosa desde la primera sesión.",
    description:
      "Exfoliación superficial para mejorar textura y luminosidad. Se indica según tipo de piel y se realiza con técnica profesional.",
    duration: "45–60 min",
    frequency: "Según evaluación",
    benefits: [
      "Piel más suave",
      "Mejora luminosidad",
      "Mejora la aplicación de productos",
    ],
  },
];
