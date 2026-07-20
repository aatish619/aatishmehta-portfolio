'use client';

import { motion, type Variants, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/cn';
import { fadeUp } from '@/lib/motion';

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  variants?: Variants;
  /** Viewport margin for earlier/later trigger */
  margin?: string;
  once?: boolean;
}

/**
 * Reveals content when it enters the viewport.
 * Uses fadeUp by default — pass custom variants for different effects.
 */
export function ScrollReveal({
  className,
  children,
  variants = fadeUp,
  margin = '-80px',
  once = true,
  ...props
}: ScrollRevealProps) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

ScrollReveal.displayName = 'ScrollReveal';
