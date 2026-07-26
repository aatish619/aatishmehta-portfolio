import { notFound } from 'next/navigation';
import { ARTICLES } from '@/data/articles';
import { Container } from '@/components/layout/container';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { TableOfContents } from '@/components/knowledge/table-of-contents';
import { ReadingProgress } from '@/components/knowledge/reading-progress';
import { ShareButtons } from '@/components/knowledge/share-buttons';
import { RelatedArticles } from '@/components/knowledge/related-articles';

import { createMetadata } from '@/lib/seo/metadata-builder';
import { JsonLd } from '@/components/seo/jsonld';
import { generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo/structured-data';
import { siteConfig } from '@/config/site';

export function generateStaticParams() {
  return ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.summary,
    path: `/knowledge/articles/${article.slug}`,
    keywords: article.tags,
  });
}

export default async function ArticleDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const related = article.relatedArticles 
    ? ARTICLES.filter(a => article.relatedArticles?.includes(a.slug))
    : [];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Knowledge', url: `${siteConfig.url}/knowledge` },
    { name: article.title, url: `${siteConfig.url}/knowledge/articles/${article.slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: article.title,
    summary: article.summary,
    url: `${siteConfig.url}/knowledge/articles/${article.slug}`,
    publishedDate: article.publishedDate,
    readingTime: article.readingTime,
  });

  return (
    <article className="min-h-screen pb-24 relative">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={articleSchema} />
      <ReadingProgress />
      
      <Container>
        {/* Back Navigation */}
        <div className="pt-24 pb-8 border-b border-border/10">
          <Link 
            href="/knowledge" 
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'group rounded-full')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Knowledge Hub
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 lg:gap-16 pt-12">
          
          {/* Main Content */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <Badge variant="outline">{article.category}</Badge>
                <Badge variant={article.difficulty === 'Advanced' ? 'accent' : 'secondary'}>{article.difficulty}</Badge>
              </div>
              <Heading size="display" className="mb-4 text-4xl lg:text-5xl">{article.title}</Heading>
              <Text size="lg" color="muted" className="mb-6 max-w-3xl">{article.subtitle}</Text>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted border-t border-border/20 pt-6">
                <span className="font-medium text-foreground">{article.author}</span>
                <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {new Date(article.publishedDate).toLocaleDateString()}</span>
                <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {article.readingTime} min read</span>
              </div>
            </div>

            {/* Sections */}
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-xl leading-relaxed text-muted mb-12">{article.summary}</p>
              
              {article.sections.map((section) => (
                <div key={section.id} id={section.id} className="mb-12 scroll-mt-24">
                  <Heading size="h3" className="mb-6">{section.title}</Heading>
                  <Text className="leading-relaxed">{section.content}</Text>
                </div>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-12 flex flex-wrap gap-2 border-t border-border/20 pt-8">
              {article.tags.map(tag => (
                <Badge key={tag} variant="secondary" className="bg-surface/50">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <aside className="hidden lg:flex flex-col gap-8">
            <TableOfContents sections={article.sections} />
            <ShareButtons title={article.title} url={`https://aatish.dev/knowledge/articles/${article.slug}`} />
          </aside>
        </div>

        {/* Related */}
        <RelatedArticles articles={related} />
      </Container>
    </article>
  );
}
