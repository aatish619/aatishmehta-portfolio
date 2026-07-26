import { ARCHITECTURE_ARTICLES } from '@/data/architecture';
import { ArchitectureHeader } from '@/components/architecture/architecture-header';
import { ArchitectureGallery } from '@/components/architecture/architecture-gallery';

import { createMetadata } from '@/lib/seo/metadata-builder';
import { JsonLd } from '@/components/seo/jsonld';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';
import { siteConfig } from '@/config/site';

export const metadata = createMetadata({
  title: 'Architecture Gallery',
  description:
    'An interactive engineering showcase of architectural patterns, system designs, and production mobile application decisions by Aatish Mehta.',
  path: '/architecture',
});

export default function ArchitecturePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Architecture', url: `${siteConfig.url}/architecture` },
  ]);

  return (
    <main className="min-h-screen">
      <JsonLd schema={breadcrumbSchema} />
      <ArchitectureHeader />
      <ArchitectureGallery articles={ARCHITECTURE_ARTICLES} />
    </main>
  );
}
