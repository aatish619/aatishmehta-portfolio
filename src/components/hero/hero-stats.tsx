import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

const STATS = [
  { label: 'Years Experience', value: '7+' },
  { label: 'Production Apps', value: '12+' },
  { label: 'Core Tech Stack', value: '5' },
  { label: 'Projects Delivered', value: '30+' },
];

export function HeroStats({ className }: { className?: string }) {
  return (
    <StaggerChildren
      initialDelay={0.8}
      staggerDelay={0.1}
      className={cn('grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2', className)}
    >
      {STATS.map((stat, i) => (
        <StaggerItem key={i}>
          <GlassCard className="flex flex-col items-center justify-center p-4 text-center sm:p-6 lg:items-start lg:text-left">
            <Heading size="h3" className="text-primary">
              {stat.value}
            </Heading>
            <Text size="sm" color="muted" className="mt-1 font-medium">
              {stat.label}
            </Text>
          </GlassCard>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}

HeroStats.displayName = 'HeroStats';
