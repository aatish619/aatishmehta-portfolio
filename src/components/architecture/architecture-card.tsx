'use client';

import Link from 'next/link';
import { ArrowUpRight, Clock, Signal } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import type { ArchitectureArticle } from '@/data/architecture';

const difficultyColor: Record<string, 'default' | 'accent' | 'success'> = {
  Beginner: 'success',
  Intermediate: 'default',
  Advanced: 'accent',
};

export function ArchitectureCard({ article }: { article: ArchitectureArticle }) {
  return (
    <Link href={`/architecture/${article.slug}`} className="group block h-full">
      <Card
        interactive
        className="flex h-full flex-col gap-5 p-6 lg:p-8"
      >
        {/* Category + Difficulty */}
        <div className="flex items-center justify-between">
          <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
            {article.category}
          </Badge>
          <Badge variant={difficultyColor[article.difficulty] || 'default'} className="text-[10px]">
            {article.difficulty}
          </Badge>
        </div>

        {/* Title + Subtitle */}
        <div className="flex flex-col gap-2">
          <Heading size="h4" className="transition-colors duration-300 group-hover:text-primary">
            {article.title}
          </Heading>
          <Text size="sm" color="muted" className="line-clamp-2 leading-relaxed">
            {article.summary}
          </Text>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-1.5">
          {article.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="outline" className="text-[10px]">
              {tech}
            </Badge>
          ))}
          {article.technologies.length > 4 && (
            <Badge variant="outline" className="text-[10px]">
              +{article.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-border/30 pt-4">
          <div className="flex items-center gap-4 text-muted">
            <span className="flex items-center gap-1.5 text-xs">
              <Clock className="h-3.5 w-3.5" />
              {article.readingTime}
            </span>
            <span className="flex items-center gap-1.5 text-xs">
              <Signal className="h-3.5 w-3.5" />
              {article.difficulty}
            </span>
          </div>
          <span className="flex items-center text-sm font-medium text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            Read
            <ArrowUpRight className="ml-1 h-4 w-4" />
          </span>
        </div>
      </Card>
    </Link>
  );
}
