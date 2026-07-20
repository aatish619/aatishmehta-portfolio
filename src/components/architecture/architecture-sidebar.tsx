'use client';

import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';
import { Clock, Signal, Layers } from 'lucide-react';
import type { ArchitectureArticle } from '@/data/architecture';

export function ArchitectureSidebar({ article }: { article: ArchitectureArticle }) {
  const sectionKeys = Object.keys(article.sections) as (keyof typeof article.sections)[];

  return (
    <aside className="sticky top-28 hidden lg:flex flex-col gap-8" aria-label="Article metadata">
      {/* Metadata */}
      <div className="flex flex-col gap-4 rounded-xl border border-border/50 bg-card/50 p-6">
        <div className="flex items-center gap-2 text-sm text-muted">
          <Clock className="h-4 w-4 text-primary/70" />
          <span>{article.readingTime}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted">
          <Signal className="h-4 w-4 text-primary/70" />
          <span>{article.difficulty}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-muted">
          <Layers className="h-4 w-4 text-primary/70" />
          <span>{article.category}</span>
        </div>
      </div>

      {/* Table of Contents */}
      <div className="flex flex-col gap-3 rounded-xl border border-border/50 bg-card/50 p-6">
        <Text size="sm" className="font-semibold uppercase tracking-wider text-muted">
          On This Page
        </Text>
        <nav className="flex flex-col gap-2" aria-label="Table of contents">
          <a href="#diagram" className="text-sm text-muted hover:text-primary transition-colors">
            Interactive Diagram
          </a>
          {sectionKeys.map((key) => {
            const section = article.sections[key];
            if (!section) return null;
            const anchor = section.title.toLowerCase().replace(/\s+/g, '-');
            return (
              <a key={key} href={`#${anchor}`} className="text-sm text-muted hover:text-primary transition-colors">
                {section.title}
              </a>
            );
          })}
          <a href="#technologies" className="text-sm text-muted hover:text-primary transition-colors">
            Technologies
          </a>
        </nav>
      </div>

      {/* Technologies */}
      <div className="flex flex-col gap-3 rounded-xl border border-border/50 bg-card/50 p-6" id="technologies-sidebar">
        <Text size="sm" className="font-semibold uppercase tracking-wider text-muted">
          Technologies
        </Text>
        <div className="flex flex-wrap gap-2">
          {article.technologies.map((tech) => (
            <Badge key={tech} variant="default" className="text-[10px]">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </aside>
  );
}
