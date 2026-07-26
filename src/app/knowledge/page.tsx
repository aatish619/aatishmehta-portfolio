import { KnowledgeHub } from '@/components/knowledge/knowledge-hub';

import { createMetadata } from '@/lib/seo/metadata-builder';
import { JsonLd } from '@/components/seo/jsonld';
import { generateBreadcrumbSchema } from '@/lib/seo/structured-data';
import { siteConfig } from '@/config/site';

export const metadata = createMetadata({
  title: 'Engineering Knowledge Hub',
  description: 'Deep-dive architecture articles, production playbooks, and engineering resources by Aatish Mehta.',
  path: '/knowledge',
});

export default function KnowledgePage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Knowledge', url: `${siteConfig.url}/knowledge` },
  ]);

  return (
    <main className="min-h-screen">
      <JsonLd schema={breadcrumbSchema} />
      <KnowledgeHub />
    </main>
  );
}
