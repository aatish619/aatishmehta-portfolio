'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/cn';

interface FlowNodeProps {
  x: number;
  y: number;
  width: number;
  height: number;
  label: string;
  sublabel?: string;
  variant?: 'default' | 'primary' | 'secondary' | 'outline';
  delay?: number;
  className?: string;
}

/**
 * Wraps text by splitting on spaces and breaking when the
 * cumulative width would exceed the supplied `maxWidth`.
 * Returns an array of lines.
 */
function wrapText(text: string, maxWidth: number, charSize = 7): string[] {
  // Approximate average character width at fontSize 12
  const maxChars = Math.max(6, Math.floor(maxWidth / charSize));
  const words = text.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    if (!current) {
      current = word;
      continue;
    }
    if ((current + ' ' + word).length <= maxChars) {
      current += ' ' + word;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

export function FlowNode({
  x,
  y,
  width,
  height,
  label,
  sublabel,
  variant = 'default',
  delay = 0,
  className,
}: FlowNodeProps) {
  const getFills = () => {
    switch (variant) {
      case 'primary':
        return {
          bg: 'hsl(var(--primary))',
          border: 'hsl(var(--primary))',
          text: '#ffffff',
        };
      case 'secondary':
        return {
          bg: 'hsl(var(--card))',
          border: 'hsl(var(--primary))',
          text: 'hsl(var(--foreground))',
        };
      case 'outline':
        return {
          bg: 'transparent',
          border: 'hsl(var(--border))',
          text: 'hsl(var(--muted-foreground))',
        };
      default:
        return {
          bg: 'hsl(var(--card))',
          border: 'hsl(var(--border))',
          text: 'hsl(var(--foreground))',
        };
    }
  };

  const fills = getFills();

  // Wrap text so it never overflows the rect
  const labelLines = wrapText(label, width - 12);
  const sublabelLines = sublabel ? wrapText(sublabel, width - 12) : [];
  const lineHeight = 14;
  const subLineHeight = 11;
  const totalTextHeight =
    labelLines.length * lineHeight +
    (sublabelLines.length > 0 ? 4 + sublabelLines.length * subLineHeight : 0);
  const startY = y + height / 2 - totalTextHeight / 2 + lineHeight - 4;

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, delay, ease: 'easeOut' }}
      className={cn('group', className)}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={8}
        fill={fills.bg}
        stroke={fills.border}
        strokeWidth={2}
        className="transition-colors duration-300"
      />
      {labelLines.map((line, i) => (
        <text
          key={`l-${i}`}
          x={x + width / 2}
          y={startY + i * lineHeight}
          textAnchor="middle"
          fill={fills.text}
          className="text-[12px] font-semibold"
          style={{ pointerEvents: 'none' }}
        >
          {line}
        </text>
      ))}
      {sublabelLines.map((line, i) => (
        <text
          key={`s-${i}`}
          x={x + width / 2}
          y={startY + labelLines.length * lineHeight + 6 + i * subLineHeight}
          textAnchor="middle"
          fill={fills.text}
          className="text-[10px] opacity-70"
          style={{ pointerEvents: 'none' }}
        >
          {line}
        </text>
      ))}
    </motion.g>
  );
}
