import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base UI (texto, fondos, bordes)
        neutral: colors.stone,

        // Brand (tus colores)
        primary: { DEFAULT: "#da9f71" }, // marca / CTA
        secondary: { DEFAULT: "#ff914d" }, // acento / hover
        cream: { DEFAULT: "#fae6ba" }, // fondos cálidos / detalles

        // (Opcional) podés sumar estados después si los necesitás
        // danger: colors.red,
        // warning: colors.amber,
        // success: colors.emerald,
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #da9f71 0%, #ff914d 100%)",
      },
      boxShadow: {
        // sombras suaves y “premium” (light)
        soft: "0 18px 45px rgba(15, 23, 42, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
