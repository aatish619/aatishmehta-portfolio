import { Code, Briefcase, Mail, MessageCircle } from 'lucide-react';
import type { ComponentType } from 'react';

export interface SocialLink {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  ariaLabel: string;
}

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/aatish619',
    icon: Code,
    ariaLabel: 'Visit GitHub profile',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/aatishmehta',
    icon: Briefcase,
    ariaLabel: 'Visit LinkedIn profile',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/aatishmehta',
    icon: MessageCircle,
    ariaLabel: 'Visit Twitter profile',
  },
  {
    label: 'Email',
    href: 'mailto:aatish@example.com',
    icon: Mail,
    ariaLabel: 'Send an email',
  },
];
