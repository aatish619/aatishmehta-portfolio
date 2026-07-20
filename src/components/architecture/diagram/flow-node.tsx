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

export function FlowNode({ x, y, width, height, label, sublabel, variant = 'default', delay = 0, className }: FlowNodeProps) {
  const getFills = () => {
    switch (variant) {
      case 'primary': return { bg: 'var(--primary)', border: 'var(--primary)', text: '#000' };
      case 'secondary': return { bg: 'hsl(var(--card))', border: 'var(--primary)', text: 'hsl(var(--foreground))' };
      case 'outline': return { bg: 'transparent', border: 'hsl(var(--border))', text: 'hsl(var(--muted-foreground))' };
      default: return { bg: 'hsl(var(--card))', border: 'hsl(var(--border))', text: 'hsl(var(--foreground))' };
    }
  };

  const fills = getFills();

  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
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
      <text
        x={x + width / 2}
        y={y + height / 2 + (sublabel ? -6 : 4)}
        textAnchor="middle"
        fill={fills.text}
        className="text-[12px] font-semibold"
        style={{ pointerEvents: 'none' }}
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + width / 2}
          y={y + height / 2 + 12}
          textAnchor="middle"
          fill={fills.text}
          className="text-[10px] opacity-70"
          style={{ pointerEvents: 'none' }}
        >
          {sublabel}
        </text>
      )}
    </motion.g>
  );
}
