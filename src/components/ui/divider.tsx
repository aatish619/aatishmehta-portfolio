import { cn } from '@/lib/cn';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Gradient variant adds a primary-to-accent gradient */
  gradient?: boolean;
  /** Spacing above and below */
  spacing?: 'sm' | 'md' | 'lg';
}

export function Divider({
  className,
  gradient = false,
  spacing = 'md',
  ...props
}: DividerProps) {
  return (
    <div
      role="separator"
      className={cn(
        'w-full',
        {
          'my-4': spacing === 'sm',
          'my-8': spacing === 'md',
          'my-16': spacing === 'lg',
        },
        gradient
          ? 'h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent'
          : 'h-px bg-border',
        className
      )}
      {...props}
    />
  );
}

Divider.displayName = 'Divider';
