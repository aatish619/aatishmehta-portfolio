import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/data/articles';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';

export function ArticleCard({ article }: { article: Article }) {
  return (
    <Link href={`/knowledge/articles/${article.slug}`} className="group block h-full outline-none">
      <GlassCard className="flex h-full flex-col p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
        <div className="mb-4 flex items-center justify-between">
          <Badge variant="outline" className="text-[10px] uppercase tracking-wider">{article.category}</Badge>
          <Badge variant={article.difficulty === 'Advanced' ? 'accent' : article.difficulty === 'Intermediate' ? 'default' : 'secondary'} className="text-[10px]">
            {article.difficulty}
          </Badge>
        </div>
        <Heading size="h4" className="mb-2 group-hover:text-primary transition-colors">
          {article.title}
        </Heading>
        <Text size="sm" color="muted" className="mb-6 flex-1 text-balance">
          {article.summary}
        </Text>
        
        <div className="flex items-center justify-between border-t border-border/30 pt-4 text-xs text-muted">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {article.readingTime} min</span>
            <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(article.publishedDate).toLocaleDateString(undefined, { month: 'short', year: 'numeric' })}</span>
          </div>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:text-primary" />
        </div>
      </GlassCard>
    </Link>
  );
}
