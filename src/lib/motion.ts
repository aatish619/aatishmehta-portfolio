import type { Variants } from 'framer-motion';

/* ============================================
   Framer Motion Variant Library
   ============================================
   Import these in components instead of
   defining inline animation objects.
   ============================================ */

/** Fade up from below */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Fade down from above */
export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Fade in from left */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Fade in from right */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Blur in effect */
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: {
    opacity: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Scale up from small */
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Scale down from large */
export const scaleDown: Variants = {
  hidden: { opacity: 0, scale: 1.05 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Floating animation (infinite) */
export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

/** Rotate in */
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -5 },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/** Stagger children container */
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

/** Stagger children with faster timing */
export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
};

/** Hover lift effect — use on whileHover */
export const hoverLift = {
  y: -4,
  transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
};

/** Hover scale effect — use on whileHover */
export const hoverScale = {
  scale: 1.02,
  transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
};

/** Tap effect — use on whileTap */
export const tapScale = {
  scale: 0.98,
};

/** Glow pulse animation */
export const glowPulse: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(79, 70, 229, 0.3)',
      '0 0 40px rgba(79, 70, 229, 0.6)',
      '0 0 20px rgba(79, 70, 229, 0.3)',
    ],
    transition: {
      duration: 2,
      ease: 'easeInOut',
      repeat: Infinity,
    },
  },
};

/**
 * Creates a parallax scroll effect variant.
 * @param distance - The distance to move (positive = down)
 */
export function createParallax(distance: number = 50): Variants {
  return {
    hidden: { y: distance },
    visible: {
      y: 0,
      transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
    },
  };
}

/**
 * Creates a delay wrapper for any variant.
 * @param variants - The base variants
 * @param delay - Delay in seconds
 */
export function withDelay(variants: Variants, delay: number): Variants {
  const result: Variants = {};
  for (const [key, value] of Object.entries(variants)) {
    if (typeof value === 'object' && value !== null && 'transition' in value) {
      result[key] = {
        ...value,
        transition: {
          ...(typeof value.transition === 'object' ? value.transition : {}),
          delay,
        },
      };
    } else {
      result[key] = value;
    }
  }
  return result;
}

/** Default viewport settings for scroll-triggered animations */
export const defaultViewport = {
  once: true,
  margin: '-100px',
};
