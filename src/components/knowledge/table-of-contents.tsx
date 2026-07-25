import { GlassCard } from '@/components/ui/glass-card';
import { Text } from '@/components/ui/text';
import type { ArticleSection } from '@/data/articles';

export function TableOfContents({ sections }: { sections: ArticleSection[] }) {
  if (sections.length === 0) return null;

  return (
    <GlassCard className="p-6 sticky top-24">
      <Text size="sm" className="mb-4 font-semibold uppercase tracking-wider text-muted">
        Contents
      </Text>
      <ul className="flex flex-col gap-3">
        {sections.map((section) => (
          <li key={section.id}>
            <a 
              href={`#${section.id}`} 
              className="text-sm text-muted hover:text-primary transition-colors line-clamp-1"
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </GlassCard>
  );
}
