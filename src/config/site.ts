export const siteConfig = {
  name: 'Aatish Mehta',
  title: 'Aatish Mehta — Senior Mobile Engineer',
  description:
    'Full-stack mobile developer with 5+ years of experience shipping Flutter, Kotlin, SwiftUI, and Python-backed products for global clients.',
  // Centralized URL, changing this updates the canonical references globally.
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aatishmehta-portfolio.vercel.app',
  ogImage: '/opengraph-image.png',
  twitterImage: '/twitter-image.png',
  author: {
    name: 'Aatish Mehta',
    email: 'aatishm449@gmail.com',
    github: 'https://github.com/aatish619',
    linkedin: 'https://www.linkedin.com/in/aatishmehta17/',
  },
  locale: 'en_IN',
  country: 'India',
  keywords: [
    'Aatish Mehta',
    'Senior Mobile Engineer',
    'Flutter Developer',
    'Kotlin Developer',
    'SwiftUI Developer',
    'Python Developer',
    'Mobile Architect',
    'Portfolio',
    'Software Engineer',
    'React',
    'Next.js',
    'TypeScript',
  ],
  themeColor: '#09090B',
  backgroundColor: '#09090B',
  resumePath: '/resume/aatish-mehta-resume.pdf',
  verification: {
    google: 'google-site-verification-placeholder',
    yandex: 'yandex-verification-placeholder',
    bing: 'msvalidate-placeholder',
    facebook: 'facebook-domain-verification-placeholder',
  },
};

export type SiteConfig = typeof siteConfig;
