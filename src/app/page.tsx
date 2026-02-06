import { Hero } from "@/components/home/hero";
import { FeaturedTreatments } from "@/components/home/featured-treatments";
import { About } from "@/components/home/about";
import { ServiceModes } from "@/components/home/service-modes";
import { FinalCTA } from "@/components/home/final-cta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedTreatments />
      <ServiceModes />
      <FinalCTA />
    </>
  );
}
