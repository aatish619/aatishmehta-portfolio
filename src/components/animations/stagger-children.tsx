'use client';

import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/cn';
import { fadeUp } from '@/lib/motion';

interface StaggerChildrenProps extends HTMLMotionProps<"div"> {
  /** Delay between each child animation (seconds) */
  staggerDelay?: number;
  /** Initial delay before first child (seconds) */
  initialDelay?: number;
  /** Only animate once */
  once?: boolean;
}

export function StaggerChildren({
  className,
  children,
  staggerDelay = 0.1,
  initialDelay = 0.1,
  once = true,
  ...props
}: StaggerChildrenProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: initialDelay,
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-50px' }}
      className={cn(className)}
      {...props}
    >
      {children}
    </motion.div>
  );
}

/** Wrap each child of StaggerChildren with this for automatic animation */
export function StaggerItem({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div variants={fadeUp} className={cn(className)} {...props}>
      {children}
    </motion.div>
  );
}

StaggerChildren.displayName = 'StaggerChildren';
StaggerItem.displayName = 'StaggerItem';
