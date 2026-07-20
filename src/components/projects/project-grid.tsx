import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Project } from '@/data/projects';
import { ProjectCard } from './project-card';
import { cn } from '@/lib/cn';

interface ProjectGridProps {
  projects: Project[];
  className?: string;
}

export function ProjectGrid({ projects, className }: ProjectGridProps) {
  return (
    <div className={cn('grid gap-6 md:grid-cols-2 lg:grid-cols-3', className)}>
      {projects.map((project, index) => (
        <ScrollReveal key={project.id} className="h-full">
          <ProjectCard project={project} delay={index * 0.1} />
        </ScrollReveal>
      ))}
    </div>
  );
}
