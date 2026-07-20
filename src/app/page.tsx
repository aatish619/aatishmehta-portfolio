import { Hero } from '@/components/hero/hero';
import { About } from '@/components/about/about';
import { Projects } from '@/components/projects/projects';
import { ProfessionalJourney } from '@/components/journey/professional-journey';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <ProfessionalJourney />
    </>
  );
}
