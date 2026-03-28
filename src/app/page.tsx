import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Programmes } from '@/components/sections/Programmes';
import { Stats } from '@/components/sections/Stats';
import { Features } from '@/components/sections/Features';
import { Extracurriculars } from '@/components/sections/Extracurriculars';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Admissions } from '@/components/sections/Admissions';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Programmes />
      <Stats />
      <Features />
      <Extracurriculars />
      <Gallery />
      <Testimonials />
      <Admissions />
      <Footer />
    </>
  );
}