import { FadeIn } from '@/components/animations/fade-in';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Project } from '@/data/projects';
import { ProjectBadges } from './project-badges';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  className?: string;
  delay?: number;
}

export function ProjectCard({ project, className, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay} className="h-full">
      <Card className={cn('group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glow hover:border-primary/50', className)}>
        {/* Thumbnail Placeholder */}
        <div className="relative aspect-video w-full overflow-hidden bg-card border-b border-border/50">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-background to-card group-hover:scale-105 transition-transform duration-700">
            <Heading size="h1" className="text-muted/30 group-hover:text-primary/20 transition-colors duration-500">
              {project.imagePlaceholder}
            </Heading>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <Heading size="h4" className="mb-1 group-hover:text-primary transition-colors">
                {project.title}
              </Heading>
              <Text size="sm" color="primary" className="font-medium">
                {project.category}
              </Text>
            </div>
          </div>

          <Text size="sm" color="muted" className="mb-6 flex-1 text-balance">
            {project.summary}
          </Text>

          <ProjectBadges
            platforms={project.platforms}
            technologies={project.technologies}
            maxTech={3}
            className="mb-6 mt-auto"
          />

          <Link 
            href={`/projects/${project.slug}`}
            className="mt-auto flex items-center text-sm font-medium text-muted transition-colors group-hover:text-primary"
          >
            View Case Study
            <ArrowUpRight className="ml-1 h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>
      </Card>
    </FadeIn>
  );
}
