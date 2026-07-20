import type { ComponentType } from 'react';

export interface Social {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
  ariaLabel: string;
}
