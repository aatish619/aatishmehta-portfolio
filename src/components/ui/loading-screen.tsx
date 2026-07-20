'use client';

import { cn } from '@/lib/cn';

interface LoadingScreenProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Loading text */
  text?: string;
}

export function LoadingScreen({
  className,
  text = 'Loading',
  ...props
}: LoadingScreenProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-overlay flex flex-col items-center justify-center bg-background',
        className
      )}
      {...props}
    >
      {/* Animated dots */}
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:200ms]" />
        <div className="h-2 w-2 animate-pulse rounded-full bg-primary [animation-delay:400ms]" />
      </div>
      {text && (
        <p className="mt-4 text-body-sm text-muted">{text}</p>
      )}
    </div>
  );
}

LoadingScreen.displayName = 'LoadingScreen';
