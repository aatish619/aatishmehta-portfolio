'use client';

import { motion } from 'framer-motion';

interface FlowArrowProps {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  delay?: number;
  dashed?: boolean;
}

export function FlowArrow({
  startX,
  startY,
  endX,
  endY,
  delay = 0,
  dashed = false,
}: FlowArrowProps) {
  // Shrink the line slightly so the arrowhead sits at the end cleanly
  const angle = Math.atan2(endY - startY, endX - startX);
  const arrowSize = 8;
  const trimmedEndX = endX - Math.cos(angle) * arrowSize;
  const trimmedEndY = endY - Math.sin(angle) * arrowSize;
  const path = `M ${startX} ${startY} L ${trimmedEndX} ${trimmedEndY}`;

  return (
    <motion.g
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
    >
      <motion.path
        d={path}
        fill="none"
        stroke="hsl(var(--muted-foreground))"
        strokeWidth={2}
        strokeLinecap="round"
        strokeDasharray={dashed ? '4,4' : 'none'}
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: delay + 0.2, ease: 'easeInOut' }}
      />
      <motion.polygon
        points="0,-4 8,0 0,4"
        fill="hsl(var(--muted-foreground))"
        transform={`translate(${endX}, ${endY}) rotate(${(angle * 180) / Math.PI})`}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.3, delay: delay + 0.8 }}
      />
    </motion.g>
  );
}
