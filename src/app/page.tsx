import { Hero } from "@/components/home/hero";
import { FeaturedTreatments } from "@/components/home/featured-treatments";
import { About } from "@/components/home/about";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <FeaturedTreatments />
    </>
  );
}
