import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <ScrollReveal>
      <GlassCard className="flex flex-col sm:flex-row gap-6 p-6 lg:p-8">
        <div className="flex items-center justify-center rounded-xl bg-primary/10 p-4 text-primary sm:self-start">
          <GraduationCap className="h-8 w-8" />
        </div>
        <div className="flex flex-col gap-2">
          <Heading size="h4">Bachelor of Engineering in Information Technology</Heading>
          <Text size="sm" color="primary" className="font-medium">Gujarat Technological University</Text>
          <Text size="sm" color="muted">2014 - 2018</Text>
          <Text size="sm" color="muted" className="mt-2 leading-relaxed max-w-2xl">
            Foundational studies in data structures, algorithms, object-oriented programming, and software engineering principles.
          </Text>
        </div>
      </GlassCard>
    </ScrollReveal>
  );
}
