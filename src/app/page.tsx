import { Hero } from '@/components/hero/hero';
import { About } from '@/components/about/about';
import { Projects } from '@/components/projects/projects';
import { ProfessionalJourney } from '@/components/journey/professional-journey';

import { JsonLd } from '@/components/seo/jsonld';
import { generatePersonSchema, generateWebsiteSchema } from '@/lib/seo/structured-data';

export default function Home() {
  const personSchema = generatePersonSchema();
  const websiteSchema = generateWebsiteSchema();

  return (
    <>
      <JsonLd schema={personSchema} />
      <JsonLd schema={websiteSchema} />
      <Hero />
      <About />
      <Projects />
      <ProfessionalJourney />
    </>
  );
}
