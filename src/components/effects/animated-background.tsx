'use client';

import { cn } from '@/lib/cn';

interface AnimatedBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Variant of the background */
  variant?: 'gradient' | 'dots' | 'grid';
}

export function AnimatedBackground({
  className,
  variant = 'gradient',
  ...props
}: AnimatedBackgroundProps) {
  if (variant === 'dots') {
    return (
      <div
        className={cn('pointer-events-none fixed inset-0 -z-10', className)}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, hsl(var(--border)) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>
    );
  }

  if (variant === 'grid') {
    return (
      <div
        className={cn('pointer-events-none fixed inset-0 -z-10', className)}
        {...props}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Fade edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      </div>
    );
  }

  // Default: gradient orbs
  return (
    <div
      className={cn('pointer-events-none fixed inset-0 -z-10 overflow-hidden', className)}
      {...props}
    >
      {/* Primary glow orb */}
      <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-[120px]" />
      {/* Accent glow orb */}
      <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
      {/* Bottom glow */}
      <div className="absolute -bottom-40 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-primary/5 blur-[100px]" />
    </div>
  );
}

AnimatedBackground.displayName = 'AnimatedBackground';
