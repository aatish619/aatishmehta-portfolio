import { ArticleCard } from './article-card';
import type { Article } from '@/data/articles';
import { Heading } from '@/components/ui/heading';
import { FadeIn } from '@/components/animations/fade-in';

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <div className="mt-24 border-t border-border/20 pt-16">
      <Heading size="h3" className="mb-8">Related Articles</Heading>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
          <FadeIn key={article.id} delay={i * 0.1}>
            <ArticleCard article={article} />
          </FadeIn>
        ))}
      </div>
    </div>
  );
}
