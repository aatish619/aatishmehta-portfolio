export const siteConfig = {
  name: 'Aatish Mehta',
  title: 'Aatish Mehta — Portfolio',
  description:
    'Full-stack mobile developer with 5+ years of experience shipping Flutter, Kotlin, SwiftUI, and Python-backed products for global clients.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aatishmehta.com',
  author: {
    name: 'Aatish Mehta',
    email: 'aatishm449@gmail.com',
    github: 'https://github.com/aatish619',
    linkedin: 'https://www.linkedin.com/in/aatishmehta17/',
  },
  keywords: [
    'Aatish Mehta',
    'Portfolio',
    'Software Engineer',
    'Frontend Developer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'TypeScript',
  ],
  resumePath: '/resume/aatish-mehta-resume.pdf',
  ogImage: '/og.png',
};

export type SiteConfig = typeof siteConfig;
