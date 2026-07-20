export interface NavItem {
  label: string;
  href: string;
  /** If true, this is an external link */
  external?: boolean;
}

export const navigationItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Architecture', href: '/architecture' },
  { label: 'Contact', href: '#contact' },
];

export const navigationConfig = {
  /** Height of the navbar in pixels */
  height: 64,
  /** Scroll threshold to trigger navbar blur/shrink */
  scrollThreshold: 50,
} as const;
