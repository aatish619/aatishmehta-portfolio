'use client';

import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import type { ArchitectureSection as SectionType } from '@/data/architecture';

interface ArchitectureSectionProps {
  section: SectionType;
}

export function ArchitectureSection({ section }: ArchitectureSectionProps) {
  return (
    <ScrollReveal className="flex flex-col gap-4 py-8 border-b border-border/20 last:border-b-0">
      <Heading size="h3" id={section.title.toLowerCase().replace(/\s+/g, '-')}>
        {section.title}
      </Heading>
      <div className="flex flex-col gap-3">
        {section.content.map((paragraph, i) => (
          <Text key={i} color="muted" className="leading-relaxed text-balance">
            {paragraph}
          </Text>
        ))}
      </div>
    </ScrollReveal>
  );
}
