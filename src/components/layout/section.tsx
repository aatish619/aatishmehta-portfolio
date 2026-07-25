import { cn } from '@/lib/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Vertical padding preset */
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

const spacingClasses = {
  sm: 'py-10 md:py-14',
  md: 'py-14 md:py-20',
  lg: 'py-20 md:py-28',
  xl: 'py-24 md:py-32',
};

export function Section({
  className,
  spacing = 'md',
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingClasses[spacing], className)}
      {...props}
    />
  );
}

Section.displayName = 'Section';
