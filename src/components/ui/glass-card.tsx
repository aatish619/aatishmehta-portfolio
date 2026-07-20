import { cn } from '@/lib/cn';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Intensity of the glass blur */
  intensity?: 'subtle' | 'default' | 'strong';
  /** Adds hover effects */
  interactive?: boolean;
}

export function GlassCard({
  className,
  intensity = 'default',
  interactive = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border/50 p-6',
        {
          'bg-surface/60 backdrop-blur-sm': intensity === 'subtle',
          'bg-surface/80 backdrop-blur-md': intensity === 'default',
          'bg-surface/90 backdrop-blur-lg': intensity === 'strong',
        },
        interactive &&
          'transition-all duration-normal hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-lg',
        className
      )}
      {...props}
    />
  );
}

GlassCard.displayName = 'GlassCard';
