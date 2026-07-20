'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/cn';
import { fadeUp } from '@/lib/motion';

interface FadeInProps extends HTMLMotionProps<"div"> {
  /** Animation variant — defaults to fadeUp */
  variants?: Variants;
  /** Delay in seconds */
  delay?: number;
  /** Duration in seconds */
  duration?: number;
  /** Only animate once when entering viewport */
  once?: boolean;
  /** Viewport margin for trigger */
  margin?: string;
}

export function FadeIn({
  className,
  children,
  variants = fadeUp,
  delay = 0,
  duration,
  once = true,
  margin = '-100px',
  ...props
}: FadeInProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      transition={
        delay || duration
          ? { delay, ...(duration ? { duration } : {}) }
          : undefined
      }
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

FadeIn.displayName = 'FadeIn';
