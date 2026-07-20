'use client';

import { useState, useMemo } from 'react';
import { Search, X } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Container } from '@/components/layout/container';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { Text } from '@/components/ui/text';
import { ArchitectureCard } from './architecture-card';
import type { ArchitectureArticle, ArchitectureCategory } from '@/data/architecture';

const FILTER_CATEGORIES: ArchitectureCategory[] = [
  'All',
  'Architecture',
  'Mobile',
  'Backend',
  'Frontend',
  'Security',
  'AI',
  'Performance',
  'DevOps',
  'System Design',
];

interface ArchitectureGalleryProps {
  articles: ArchitectureArticle[];
}

export function ArchitectureGallery({ articles }: ArchitectureGalleryProps) {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState<ArchitectureCategory>('All');

  const filtered = useMemo(() => {
    let result = articles;

    // Category filter
    if (activeFilter !== 'All') {
      result = result.filter((a) => a.category === activeFilter);
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.summary.toLowerCase().includes(q) ||
          a.technologies.some((t) => t.toLowerCase().includes(q)) ||
          a.tags.some((t) => t.toLowerCase().includes(q)) ||
          a.category.toLowerCase().includes(q) ||
          a.difficulty.toLowerCase().includes(q)
      );
    }

    return result;
  }, [articles, activeFilter, search]);

  return (
    <Container className="py-12 lg:py-16">
      {/* Search Bar */}
      <div className="relative mb-8 max-w-lg mx-auto">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search architectures, technologies, topics…"
          aria-label="Search architecture articles"
          className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-10 text-sm text-foreground placeholder:text-muted focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
        />
        {search && (
          <button
            onClick={() => setSearch('')}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Filter Chips */}
      <div className="mb-12 flex flex-wrap items-center justify-center gap-2" role="tablist" aria-label="Filter by category">
        {FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            role="tab"
            aria-selected={activeFilter === cat}
            className="transition-all duration-200"
          >
            <Badge
              variant={activeFilter === cat ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-1.5 text-xs hover:border-primary/50"
            >
              {cat}
            </Badge>
          </button>
        ))}
      </div>

      {/* Results */}
      {filtered.length > 0 ? (
        <StaggerChildren staggerDelay={0.08} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((article) => (
            <StaggerItem key={article.id} className="h-full">
              <ArchitectureCard article={article} />
            </StaggerItem>
          ))}
        </StaggerChildren>
      ) : (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <Text size="lg" color="muted">No architectures found.</Text>
          <Text size="sm" color="muted" className="mt-2">
            Try adjusting your search or filter.
          </Text>
        </div>
      )}
    </Container>
  );
}
