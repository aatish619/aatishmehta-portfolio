'use client';

import { LazyMotion, domAnimation } from 'framer-motion';
import type { ReactNode } from 'react';

interface MotionProviderProps {
  children: ReactNode;
}

/**
 * Wraps the app with Framer Motion's LazyMotion for reduced bundle size.
 * Uses domAnimation (lighter) instead of domMax.
 * Switch to domMax if you need layout animations or drag.
 */
export function MotionProvider({ children }: MotionProviderProps) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
