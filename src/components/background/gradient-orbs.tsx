import { cn } from '@/lib/cn';

export function GradientOrbs({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'pointer-events-none absolute inset-0 overflow-hidden',
        className
      )}
      {...props}
    >
      <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
      <div className="absolute top-1/3 -left-40 h-80 w-80 rounded-full bg-accent/10 blur-[120px]" />
    </div>
  );
}

GradientOrbs.displayName = 'GradientOrbs';
