import { FadeIn } from '@/components/animations/fade-in';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Project } from '@/data/projects';
import { ProjectBadges } from './project-badges';
import { ProjectImage } from './project-image';
import { ArrowUpRight, BadgeCheck, Clock3, BadgeAlert, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  className?: string;
  delay?: number;
}

function statusClasses(status?: string) {
  switch (status) {
    case 'Live':
      return 'border-success/20 bg-success/10 text-success';
    case 'In progress':
      return 'border-primary/20 bg-primary/10 text-primary';
    case 'Pending approvals':
      return 'border-warning/25 bg-warning/15 text-warning';
    default:
      return 'border-border/40 bg-surface/80 text-muted';
  }
}

function statusIcon(status?: string) {
  switch (status) {
    case 'Live':
      return <CheckCircle2 className="h-3.5 w-3.5" />;
    case 'In progress':
      return <Clock3 className="h-3.5 w-3.5" />;
    case 'Pending approvals':
      return <BadgeAlert className="h-3.5 w-3.5" />;
    default:
      return <BadgeCheck className="h-3.5 w-3.5" />;
  }
}

export function ProjectCard({ project, className, delay = 0 }: ProjectCardProps) {
  return (
    <FadeIn delay={delay} className="h-full">
      <Card className={cn('group flex h-full flex-col overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-glow hover:border-primary/50', className)}>
        <div className="relative aspect-video w-full overflow-hidden bg-card border-b border-border/50">
          <ProjectImage project={project} />
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
            {project.status && (
              <span className={cn('inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider', statusClasses(project.status))}>
                {statusIcon(project.status)}
                {project.status}
              </span>
            )}
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
