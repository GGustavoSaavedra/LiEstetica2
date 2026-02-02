import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Providers } from "./providers";
import { SiteHeader } from "@/components/layout/site-header/site-header";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LiEstética",
  description: "Estética y cosmetología",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={[
          inter.className,
          "bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50 transition-colors",
        ].join(" ")}
      >
        <Providers>
          <SiteHeader />
          {children}
        </Providers>
      </body>
    </html>
  );
}
