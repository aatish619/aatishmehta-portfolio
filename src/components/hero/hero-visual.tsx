'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';
import { GlassCard } from '@/components/ui/glass-card';

export function HeroVisual({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('relative flex h-[420px] w-full items-center justify-center lg:h-[460px]', className)}
      {...props}
    >
      {/* Central Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        className="relative z-10 h-[360px] w-[180px] rounded-[2.5rem] border-[6px] border-border bg-background p-2 shadow-2xl sm:h-[420px] sm:w-[210px]"
      >
        <div className="absolute top-0 left-1/2 h-4 w-24 -translate-x-1/2 rounded-b-xl bg-border" />
        <div className="flex h-full w-full flex-col overflow-hidden rounded-[2rem] border border-border/50 bg-gradient-to-b from-card to-background">
          {/* Mock App Content */}
          <div className="flex flex-1 flex-col gap-4 p-4 pt-8">
            <div className="h-20 w-full animate-pulse rounded-xl bg-primary/10" />
            <div className="h-10 w-3/4 rounded-lg bg-muted/20" />
            <div className="h-10 w-full rounded-lg bg-muted/20" />
            <div className="mt-auto flex justify-between gap-2">
              <div className="h-8 w-8 rounded-full bg-accent/20" />
              <div className="h-8 w-8 rounded-full bg-accent/20" />
              <div className="h-8 w-8 rounded-full bg-accent/20" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating Card 1 - Architecture */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute left-[5%] top-[20%] z-20 hidden animate-[float_4s_ease-in-out_infinite] sm:block lg:left-[-10%]"
      >
        <GlassCard className="flex items-center gap-3 p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-foreground">Clean Architecture</span>
            <span className="text-[10px] text-muted-foreground">Scalable & Tested</span>
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating Card 2 - Performance */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="absolute right-[5%] top-[40%] z-20 hidden animate-[float_3s_ease-in-out_infinite_reverse] sm:block lg:right-[-5%]"
      >
        <GlassCard className="flex items-center gap-3 p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/20 text-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 2v20" />
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-foreground">60fps Performance</span>
            <span className="text-[10px] text-muted-foreground">Native Experience</span>
          </div>
        </GlassCard>
      </motion.div>

      {/* Floating Card 3 - Technology */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="absolute bottom-[10%] left-[10%] z-20 hidden animate-[float_3.5s_ease-in-out_infinite] sm:block lg:left-[5%]"
      >
        <GlassCard className="flex items-center gap-2 rounded-full p-2 pr-4">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/20 text-accent">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m18 16 4-4-4-4" />
              <path d="m6 8-4 4 4 4" />
              <path d="m14.5 4-5 16" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-foreground">Type Safe</span>
        </GlassCard>
      </motion.div>

      {/* Decorative Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" />
    </div>
  );
}

HeroVisual.displayName = 'HeroVisual';
