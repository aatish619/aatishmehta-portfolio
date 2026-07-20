import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

const HIGHLIGHTS = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Production Apps', value: '12+' },
  { label: 'Architecture Focus', value: 'Clean' },
  { label: 'Primary Tech', value: 'Flutter' },
];

export function Highlights({ className }: { className?: string }) {
  return (
    <StaggerChildren
      initialDelay={0.6}
      staggerDelay={0.1}
      className={cn('grid grid-cols-2 gap-4 md:grid-cols-4', className)}
    >
      {HIGHLIGHTS.map((highlight, i) => (
        <StaggerItem key={i} className="flex h-full">
          <GlassCard className="flex flex-col items-center justify-center text-center p-6 transition-all hover:border-primary/50 w-full">
            <Heading size="h2" className="text-primary mb-2">
              {highlight.value}
            </Heading>
            <Text size="sm" color="muted" className="font-medium">
              {highlight.label}
            </Text>
          </GlassCard>
        </StaggerItem>
      ))}
    </StaggerChildren>
  );
}
