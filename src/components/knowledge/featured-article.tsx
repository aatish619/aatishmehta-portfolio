import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import type { Article } from '@/data/articles';
import Link from 'next/link';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { cn } from '@/lib/cn';

export function FeaturedArticle({ article, className }: { article: Article; className?: string }) {
  return (
    <Link href={`/knowledge/articles/${article.slug}`} className={cn("group block outline-none", className)}>
      <GlassCard className="relative flex h-full flex-col justify-between overflow-hidden p-8 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow lg:p-12">
        
        {/* Background Gradient Effect */}
        <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:bg-primary/20" />

        <div className="relative z-10 flex flex-col items-start gap-4 mb-12 lg:w-2/3">
          <div className="flex items-center gap-3">
            <Badge variant="accent" className="flex items-center gap-1 text-[10px]">
              <Star className="h-3 w-3 fill-current" /> Featured
            </Badge>
            <Badge variant="outline" className="text-[10px]">{article.category}</Badge>
          </div>
          
          <Heading size="h2" className="mt-2 text-balance group-hover:text-primary transition-colors">
            {article.title}
          </Heading>
          
          <Text size="lg" color="muted" className="mt-2 text-balance leading-relaxed">
            {article.summary}
          </Text>
        </div>

        <div className="relative z-10 flex items-center justify-between border-t border-border/30 pt-6">
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary" className="bg-surface/50 text-[10px]">{tag}</Badge>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-muted">
            <span className="hidden sm:flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.readingTime} min read</span>
            <span className="flex items-center gap-1 group-hover:text-primary transition-colors">
              Read Article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </div>
      </GlassCard>
    </Link>
  );
}
