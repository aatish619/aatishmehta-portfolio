import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Contact } from '@/components/contact/contact';

import { createMetadata } from '@/lib/seo/metadata-builder';
import { JsonLd } from '@/components/seo/jsonld';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';
import { siteConfig } from '@/config/site';

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Get in touch with Aatish Mehta for project inquiries, Flutter opportunities, or engineering consultation.',
  path: '/contact',
});

export default function ContactPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Contact', url: `${siteConfig.url}/contact` },
  ]);

  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      <JsonLd schema={breadcrumbSchema} />
      <Section id="contact">
        <Container>
          <Contact />
        </Container>
      </Section>
    </main>
  );
}
