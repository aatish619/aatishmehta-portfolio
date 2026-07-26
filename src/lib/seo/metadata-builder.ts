import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';

interface MetadataParams {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  keywords?: string[];
  noIndex?: boolean;
}

/**
 * Enterprise metadata builder helper following Next.js 15 routing specifications.
 */
export function createMetadata({
  title,
  description,
  path = '',
  image,
  keywords = [],
  noIndex = false,
}: MetadataParams = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title;
  
  const fullDescription = description || siteConfig.description;
  const canonicalUrl = `${siteConfig.url}${path}`;
  const ogImageUrl = image || `${siteConfig.url}${siteConfig.ogImage}`;
  const combinedKeywords = Array.from(new Set([...siteConfig.keywords, ...keywords]));

  return {
    title: fullTitle,
    description: fullDescription,
    keywords: combinedKeywords,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': `${siteConfig.url}/en-us${path}`,
        'en-IN': `${siteConfig.url}/en-in${path}`,
      },
    },
    authors: [{ name: siteConfig.author.name }],
    creator: siteConfig.author.name,
    publisher: siteConfig.author.name,
    applicationName: siteConfig.name,
    category: 'Technology',
    classification: 'Software Engineering Portfolio',
    referrer: 'origin-when-cross-origin',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      title: fullTitle,
      description: fullDescription,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
      locale: siteConfig.locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: fullDescription,
      images: [ogImageUrl],
      creator: '@aatish619',
      site: '@aatish619',
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: siteConfig.verification.google,
      yandex: siteConfig.verification.yandex,
      other: {
        bing: siteConfig.verification.bing,
        facebook: siteConfig.verification.facebook,
      },
    },
  };
}
