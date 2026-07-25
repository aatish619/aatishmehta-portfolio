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
      <div className="absolute -top-32 -right-28 h-96 w-96 rounded-full bg-primary/16 blur-[130px]" />
      <div className="absolute top-1/4 -left-24 h-80 w-80 rounded-full bg-accent/12 blur-[120px]" />
      <div className="absolute bottom-[-6rem] left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[140px]" />
    </div>
  );
}

GradientOrbs.displayName = 'GradientOrbs';
