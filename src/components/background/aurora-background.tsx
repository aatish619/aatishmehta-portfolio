import { cn } from '@/lib/cn';

export function AuroraBackground({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'absolute inset-0 overflow-hidden opacity-28 mix-blend-screen pointer-events-none',
        className
      )}
      {...props}
    >
      {/* Animated Aurora Elements */}
      <div className="absolute -top-[12%] -left-[10%] h-[50%] w-[50%] animate-[aurora_20s_ease-in-out_infinite_alternate] rounded-full bg-primary/20 blur-[140px] will-change-transform" />
      <div className="absolute top-[14%] -right-[8%] h-[58%] w-[40%] animate-[aurora_25s_ease-in-out_infinite_alternate-reverse] rounded-full bg-accent/18 blur-[150px] will-change-transform" />
      <div className="absolute -bottom-[18%] left-[20%] h-[52%] w-[58%] animate-[aurora_30s_ease-in-out_infinite_alternate] rounded-full bg-cyan-300/14 blur-[150px] will-change-transform" />
    </div>
  );
}

AuroraBackground.displayName = 'AuroraBackground';
