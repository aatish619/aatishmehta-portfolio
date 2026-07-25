import { Mail } from 'lucide-react';
import type { ComponentType } from 'react';
import { createElement } from 'react';
import { siteConfig } from './site';

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  ariaLabel: string;
}

function GitHubIcon({ className }: { className?: string }) {
  return createElement(
    'svg',
    { className, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true },
    createElement('path', {
      d: 'M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.36-3.88-1.36-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.75 1.18 1.75 1.18 1.02 1.75 2.68 1.25 3.33.95.1-.74.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18.91-.25 1.89-.38 2.86-.38s1.95.13 2.86.38c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.74.81 1.18 1.83 1.18 3.09 0 4.42-2.7 5.4-5.27 5.68.41.36.78 1.07.78 2.16v3.2c0 .31.21.67.8.56A11.52 11.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z',
    })
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return createElement(
    'svg',
    { className, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': true },
    createElement('path', {
      d: 'M4.98 3.5a2.5 2.5 0 1 1-.02 5 2.5 2.5 0 0 1 .02-5ZM3 9.4h4v11.1H3V9.4Zm6.2 0h3.84v1.52h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.1v5.43h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.54v4.91h-4V9.4Z',
    })
  );
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: siteConfig.author.github,
    icon: GitHubIcon,
    ariaLabel: 'Visit GitHub profile',
  },
  {
    label: 'LinkedIn',
    href: siteConfig.author.linkedin,
    icon: LinkedInIcon,
    ariaLabel: 'Visit LinkedIn profile',
  },
  {
    label: 'Email',
    href: `mailto:${siteConfig.author.email}`,
    icon: Mail,
    ariaLabel: 'Send an email',
  },
];
