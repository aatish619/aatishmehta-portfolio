'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { KnowledgeHeader } from './knowledge-header';
import { SearchBar } from './search-bar';
import { CategoryFilter } from './category-filter';
import { FeaturedArticle } from './featured-article';
import { ArticleCard } from './article-card';
import { PlaybookCard } from './playbook-card';
import { ARTICLES, ArticleCategory } from '@/data/articles';
import { FadeIn } from '@/components/animations/fade-in';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export function KnowledgeHub() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<ArticleCategory | 'All'>('All');

  const categories = useMemo(() => {
    const cats = new Set(ARTICLES.map(a => a.category));
    return Array.from(cats) as ArticleCategory[];
  }, []);

  const filteredArticles = useMemo(() => {
    return ARTICLES.filter((article) => {
      const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
      const query = searchQuery.toLowerCase();
      const matchesSearch = 
        !searchQuery || 
        article.title.toLowerCase().includes(query) ||
        article.summary.toLowerCase().includes(query) ||
        article.tags.some(t => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const featured = filteredArticles.find(a => a.featured);
  const regular = filteredArticles.filter(a => a.id !== featured?.id);

  return (
    <Section className="min-h-screen pt-24 lg:pt-32 pb-24">
      <Container>
        <KnowledgeHeader />

        {/* Filters */}
        <div className="py-12 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <CategoryFilter 
            categories={categories} 
            activeCategory={activeCategory} 
            onSelect={setActiveCategory} 
          />
          <SearchBar query={searchQuery} onChange={setSearchQuery} />
        </div>

        {/* Articles Grid */}
        {filteredArticles.length === 0 ? (
          <div className="py-24 text-center">
            <Heading size="h4" className="mb-2">No articles found</Heading>
            <Text color="muted">Try adjusting your search or category filters.</Text>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {featured && (
              <FadeIn>
                <FeaturedArticle article={featured} />
              </FadeIn>
            )}
            
            {regular.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-4">
                {regular.map((article, i) => (
                  <FadeIn key={article.id} delay={i * 0.1}>
                    <ArticleCard article={article} />
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Playbooks Section */}
        <div className="mt-32 border-t border-border/20 pt-24">
          <FadeIn>
            <div className="mb-12 text-center">
              <Heading size="h2" className="mb-4">Engineering Playbooks</Heading>
              <Text size="lg" color="muted" className="max-w-2xl mx-auto">
                Standardized processes, checklists, and guides used in production.
              </Text>
            </div>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FadeIn delay={0.1}>
              <PlaybookCard 
                title="App Release Checklist" 
                summary="A comprehensive 40-point checklist for ensuring safe and compliant App Store & Play Store submissions."
                difficulty="Intermediate"
              />
            </FadeIn>
            <FadeIn delay={0.2}>
              <PlaybookCard 
                title="Mobile Code Review Guide" 
                summary="Standardized PR review guidelines focusing on architecture, memory leaks, and performance."
                difficulty="Advanced"
              />
            </FadeIn>
            <FadeIn delay={0.3}>
              <PlaybookCard 
                title="Firebase Production Setup" 
                summary="Security rules, environments, and CI/CD integration for Firebase projects."
                difficulty="Intermediate"
              />
            </FadeIn>
          </div>
        </div>

      </Container>
    </Section>
  );
}
