import { FadeIn } from '@/components/animations/fade-in';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { BookOpen } from 'lucide-react';

export function KnowledgeHeader() {
  return (
    <div className="flex flex-col items-center justify-center text-center pb-12 pt-24 border-b border-border/10">
      <FadeIn>
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
          <BookOpen className="h-8 w-8" />
        </div>
      </FadeIn>
      <FadeIn delay={0.1}>
        <Heading size="display" className="mb-6">Engineering Knowledge Hub</Heading>
      </FadeIn>
      <FadeIn delay={0.2}>
        <Text size="lg" color="muted" className="max-w-2xl text-balance">
          A curated collection of deep-dive architecture articles, production playbooks, visual guides, and engineering resources.
        </Text>
      </FadeIn>
    </div>
  );
}
