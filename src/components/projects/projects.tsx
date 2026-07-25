'use client';

import { useState, useMemo } from 'react';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { ProjectsHeader } from './projects-header';
import { ProjectStats } from './project-stats';
import { ProjectFilters } from './project-filters';
import { FeaturedProject } from './featured-project';
import { ProjectGrid } from './project-grid';
import { ProjectEmptyState } from './project-empty-state';
import { PROJECTS, ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/cn';
import { FadeIn } from '@/components/animations/fade-in';

export function Projects({ className }: { className?: string }) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');

  // Derive unique categories from data
  const categories = useMemo<ProjectCategory[]>(() => {
    const cats = new Set(PROJECTS.map((p) => p.category));
    return ['All', ...Array.from(cats)] as ProjectCategory[];
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const featuredProject = filteredProjects.find((p) => p.featured);
  const standardProjects = filteredProjects
    .filter((p) => !p.featured)
    .sort((a, b) => {
      const priorityOrder = ['smart-fasal', 'magikschool', 'show-united'];
      const aPriority = priorityOrder.indexOf(a.slug);
      const bPriority = priorityOrder.indexOf(b.slug);

      if (aPriority !== -1 || bPriority !== -1) {
        if (aPriority === -1) return 1;
        if (bPriority === -1) return -1;
        return aPriority - bPriority;
      }

      const aHasLinks = Boolean(a.storeLinks.appStore || a.storeLinks.playStore || a.storeLinks.website || a.storeLinks.github);
      const bHasLinks = Boolean(b.storeLinks.appStore || b.storeLinks.playStore || b.storeLinks.website || b.storeLinks.github);

      if (aHasLinks !== bHasLinks) return Number(bHasLinks) - Number(aHasLinks);

      return a.title.localeCompare(b.title);
    });

  return (
    <Section id="work" spacing="xl" className={cn('relative', className)}>
      <Container>
        <ProjectsHeader
          title="Premium Engineering."
          description="A selection of high-impact production applications I've architected, built, and scaled."
        />

        <ProjectStats />

        <ProjectFilters
          categories={categories}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
        />

        <div className="flex flex-col gap-8">
          {filteredProjects.length === 0 ? (
            <FadeIn>
              <ProjectEmptyState onClearFilters={() => setActiveCategory('All')} />
            </FadeIn>
          ) : (
            <>
              {featuredProject && <FeaturedProject project={featuredProject} />}
              {standardProjects.length > 0 && <ProjectGrid projects={standardProjects} />}
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}
