import { FadeIn } from '@/components/animations/fade-in';
import { cn } from '@/lib/cn';

export function ScrollIndicator({ className }: { className?: string }) {
  return (
    <FadeIn
      delay={1.2}
      className={cn('flex flex-col items-center justify-center gap-2', className)}
    >
      <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
        Scroll to Explore
      </span>
      <div className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/30 p-1">
        <div className="h-2 w-1 animate-bounce rounded-full bg-primary/80" />
      </div>
    </FadeIn>
  );
}

ScrollIndicator.displayName = 'ScrollIndicator';
