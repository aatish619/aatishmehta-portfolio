import { siteConfig } from '@/config/site';

/**
 * Builds standard Person schema (JSON-LD).
 */
export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: siteConfig.name,
    jobTitle: 'Senior Mobile Engineer',
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/profile.png`,
    sameAs: [
      siteConfig.author.github,
      siteConfig.author.linkedin,
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: siteConfig.country,
    },
    knowsAbout: [
      'Flutter',
      'Dart',
      'iOS Development',
      'Android Development',
      'SwiftUI',
      'Kotlin',
      'Python',
      'FastAPI',
      'AI Integration',
      'Software Architecture',
      'Mobile Engineering',
    ],
  };
}

/**
 * Builds Website schema (JSON-LD).
 */
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      '@id': `${siteConfig.url}/#person`,
    },
  };
}

/**
 * Builds BreadcrumbList schema (JSON-LD).
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Builds Individual CreativeWork / Portfolio Project schema (JSON-LD).
 */
export function generateProjectSchema(project: {
  title: string;
  summary: string;
  technologies: string[];
  url: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.summary,
    url: project.url,
    creator: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    keywords: project.technologies.join(', '),
  };
}

/**
 * Builds TechArticle schema (JSON-LD).
 */
export function generateArticleSchema(article: {
  title: string;
  summary: string;
  url: string;
  publishedDate: string;
  readingTime: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description: article.summary,
    url: article.url,
    datePublished: article.publishedDate,
    author: {
      '@type': 'Person',
      name: siteConfig.name,
    },
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
      logo: {
        '@type': 'ImageObject',
        url: `${siteConfig.url}/favicon.ico`,
      },
    },
    timeRequired: `PT${article.readingTime}M`,
  };
}
