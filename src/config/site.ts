export const siteConfig = {
  name: 'Aatish Mehta',
  title: 'Aatish Mehta — Portfolio',
  description:
    'Personal portfolio of Aatish Mehta — showcasing projects, architecture, and engineering craft.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://aatishmehta.com',
  author: {
    name: 'Aatish Mehta',
    email: 'aatish@example.com',
    github: 'https://github.com/aatish619',
    linkedin: 'https://linkedin.com/in/aatishmehta',
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
