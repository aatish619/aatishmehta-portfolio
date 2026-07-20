import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import type { ArchitectureArticle } from '@/data/architecture';

interface ArchitectureRelatedProps {
  articles: ArchitectureArticle[];
}

export function ArchitectureRelated({ articles }: ArchitectureRelatedProps) {
  if (articles.length === 0) return null;

  return (
    <div className="flex flex-col gap-6 border-t border-border/30 py-8">
      <Heading size="h4">Related Architectures</Heading>
      <div className="grid gap-4 sm:grid-cols-2">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`/architecture/${article.slug}`}
            className="group flex flex-col gap-2 rounded-xl border border-border/50 bg-card/30 p-5 transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
          >
            <div className="flex items-center justify-between">
              <Badge variant="secondary" className="text-[10px]">
                {article.category}
              </Badge>
              <ArrowUpRight className="h-4 w-4 text-muted opacity-0 transition-all group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <Text className="font-semibold transition-colors group-hover:text-primary">
              {article.title}
            </Text>
            <Text size="sm" color="muted" className="line-clamp-2">
              {article.subtitle}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  );
}
