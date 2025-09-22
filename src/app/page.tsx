import { Footer } from "@/components/layout/Footer";
import { Features } from "@/components/sections/Features";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Features />
      <Testimonials />
      <Footer />
    </>
  );
}
