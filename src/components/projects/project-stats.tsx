import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

const STATS = [
  { label: 'Production Apps', value: '12+' },
  { label: 'Client Projects', value: '30+' },
  { label: 'Technologies', value: '15+' },
  { label: 'Years Building', value: '7+' },
];

export function ProjectStats({ className }: { className?: string }) {
  return (
    <StaggerChildren
      initialDelay={0.4}
      staggerDelay={0.1}
      className={cn('grid grid-cols-2 gap-4 lg:grid-cols-4 mb-16', className)}
    >
      {STATS.map((stat, i) => (
        <StaggerItem key={i} className="flex h-full">
          <GlassCard className="flex flex-col items-center justify-center text-center p-6 transition-all hover:border-primary/50 w-full">
            <Heading size="h2" className="text-primary mb-2">
              {stat.value}
            </Heading>
            <Text size="sm" color="muted" className="font-medium">
              {stat.label}
            </Text>
          </GlassCard>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
