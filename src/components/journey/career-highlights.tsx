import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

const HIGHLIGHTS = [
  { value: '5+', label: 'Years Experience' },
  { value: '10+', label: 'Production Apps' },
  { value: '6', label: 'Industries' },
  { value: '4+', label: 'Led Teams' },
];

export function CareerHighlights() {
  return (
    <div className="grid gap-4 grid-cols-2 lg:grid-cols-4">
      {HIGHLIGHTS.map((highlight, i) => (
        <ScrollReveal key={i}>
          <GlassCard className="flex flex-col items-center justify-center py-8 text-center">
            <Heading size="display" className="text-4xl text-primary mb-2">{highlight.value}</Heading>
            <Text size="sm" className="font-medium uppercase tracking-wider text-muted">
              {highlight.label}
            </Text>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
