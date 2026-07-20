'use client';

import { FadeIn } from '@/components/animations/fade-in';
import { Container } from '@/components/layout/container';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export function ArchitectureHeader() {
  return (
    <div className="border-b border-border/30 pb-16 pt-32 lg:pt-40">
      <Container>
        <FadeIn className="flex flex-col items-center gap-6 text-center">
          <Text size="sm" color="primary" className="font-semibold uppercase tracking-widest">
            Engineering Showcase
          </Text>
          <Heading size="display" className="max-w-4xl tracking-tight">
            Architecture Gallery
          </Heading>
          <Text size="lg" color="muted" className="max-w-2xl text-balance leading-relaxed">
            An interactive collection of architectural patterns, system designs, and engineering
            decisions behind production mobile applications.
          </Text>
        </FadeIn>
      </Container>
    </div>
  );
}
