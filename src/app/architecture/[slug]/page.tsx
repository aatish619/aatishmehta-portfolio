import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { ARCHITECTURE_ARTICLES } from '@/data/architecture';
import { Container } from '@/components/layout/container';
import { FadeIn } from '@/components/animations/fade-in';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { ArchitectureDiagram } from '@/components/architecture/diagram/architecture-diagram';
import { ArchitectureSection } from '@/components/architecture/architecture-section';
import { ArchitectureSidebar } from '@/components/architecture/architecture-sidebar';
import { ArchitectureTags } from '@/components/architecture/architecture-tags';
import { ArchitectureNavigation } from '@/components/architecture/architecture-navigation';
import { ArchitectureRelated } from '@/components/architecture/architecture-related';

import { createMetadata } from '@/lib/seo/metadata-builder';
import { JsonLd } from '@/components/seo/jsonld';
import { generateBreadcrumbSchema, generateArticleSchema } from '@/lib/seo/structured-data';
import { siteConfig } from '@/config/site';

export function generateStaticParams() {
  return ARCHITECTURE_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ARCHITECTURE_ARTICLES.find((a) => a.slug === slug);

  if (!article) return {};

  return createMetadata({
    title: article.title,
    description: article.summary,
    path: `/architecture/${article.slug}`,
    keywords: article.tags,
  });
}

export default async function ArchitectureDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const articleIndex = ARCHITECTURE_ARTICLES.findIndex((a) => a.slug === slug);
  const article = ARCHITECTURE_ARTICLES[articleIndex];

  if (!article) {
    notFound();
  }

  const prev = articleIndex > 0 ? ARCHITECTURE_ARTICLES[articleIndex - 1] : null;
  const next = articleIndex < ARCHITECTURE_ARTICLES.length - 1 ? ARCHITECTURE_ARTICLES[articleIndex + 1] : null;

  const relatedArticles = (article.relatedArticles || [])
    .map((slug) => ARCHITECTURE_ARTICLES.find((a) => a.slug === slug))
    .filter(Boolean) as typeof ARCHITECTURE_ARTICLES;

  const sectionEntries = Object.entries(article.sections) as [string, { title: string; content: string[] }][];

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteConfig.url },
    { name: 'Architecture', url: `${siteConfig.url}/architecture` },
    { name: article.title, url: `${siteConfig.url}/architecture/${article.slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: article.title,
    summary: article.summary,
    url: `${siteConfig.url}/architecture/${article.slug}`,
    publishedDate: '2026-07-25', // Fallback publish date consistent with repo build
    readingTime: parseInt(article.readingTime) || 8,
  });

  return (
    <article className="min-h-screen pb-24">
      <JsonLd schema={breadcrumbSchema} />
      <JsonLd schema={articleSchema} />
      <Container>
        {/* Back Nav */}
        <div className="pt-24 pb-8">
          <Link
            href="/architecture"
            className={cn(buttonVariants({ variant: 'outline', size: 'sm' }), 'group rounded-full')}
          >
            <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Gallery
          </Link>
        </div>

        {/* Hero */}
        <FadeIn className="flex flex-col gap-6 border-b border-border/30 pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="secondary" className="text-xs uppercase tracking-wider">
              {article.category}
            </Badge>
            <Badge variant={article.difficulty === 'Advanced' ? 'accent' : article.difficulty === 'Intermediate' ? 'default' : 'success'} className="text-xs">
              {article.difficulty}
            </Badge>
            <Text as="span" size="sm" color="muted">{article.readingTime}</Text>
          </div>
          <Heading size="display" className="max-w-4xl tracking-tight">
            {article.title}
          </Heading>
          <Text size="lg" color="muted" className="max-w-3xl text-balance leading-relaxed">
            {article.subtitle}
          </Text>
        </FadeIn>

        {/* Two-column Layout */}
        <div className="grid gap-12 lg:grid-cols-[1fr_280px] pt-12">
          {/* Main Content */}
          <div className="flex flex-col gap-2 min-w-0">
            {/* Interactive Diagram */}
            <ScrollReveal>
              <div id="diagram" className="mb-8">
                <Heading size="h3" className="mb-6">Interactive Diagram</Heading>
                <GlassCard className="aspect-[2/1] overflow-hidden p-4 lg:p-6">
                  <ArchitectureDiagram type={article.diagram} />
                </GlassCard>
              </div>
            </ScrollReveal>

            {/* Content Sections */}
            {sectionEntries.map(([key, section]) => (
              <ArchitectureSection key={key} section={section} />
            ))}

            {/* Technologies full list */}
            <ScrollReveal className="py-8 border-t border-border/30" id="technologies">
              <Heading size="h4" className="mb-4">Technologies Used</Heading>
              <div className="flex flex-wrap gap-2">
                {article.technologies.map((tech) => (
                  <Badge key={tech} variant="default" className="text-sm px-4 py-1.5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </ScrollReveal>

            {/* Tags */}
            <ArchitectureTags tags={article.tags} />

            {/* Related */}
            <ArchitectureRelated articles={relatedArticles} />

            {/* Prev / Next */}
            <ArchitectureNavigation prev={prev} next={next} />
          </div>

          {/* Sidebar */}
          <ArchitectureSidebar article={article} />
        </div>
      </Container>
    </article>
  );
}
