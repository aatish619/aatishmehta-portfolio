import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aatishmehta.com';

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Future pages will be added here:
    // { url: `${siteUrl}/projects`, ... },
    // { url: `${siteUrl}/blog`, ... },
  ];
}
