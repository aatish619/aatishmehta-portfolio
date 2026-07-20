import { cn } from '@/lib/cn';

export function AuroraBackground({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden opacity-30 mix-blend-screen pointer-events-none',
        className
      )}
      {...props}
    >
      {/* Animated Aurora Elements */}
      <div className="absolute -top-[10%] -left-[10%] h-[50%] w-[50%] animate-[aurora_20s_ease-in-out_infinite_alternate] rounded-full bg-primary/20 blur-[120px] will-change-transform" />
      <div className="absolute top-[20%] -right-[10%] h-[60%] w-[40%] animate-[aurora_25s_ease-in-out_infinite_alternate-reverse] rounded-full bg-accent/20 blur-[140px] will-change-transform" />
      <div className="absolute -bottom-[20%] left-[20%] h-[50%] w-[60%] animate-[aurora_30s_ease-in-out_infinite_alternate] rounded-full bg-primary/10 blur-[130px] will-change-transform" />
    </div>
  );
}

AuroraBackground.displayName = 'AuroraBackground';
