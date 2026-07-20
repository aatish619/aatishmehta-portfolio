import { FadeIn } from '@/components/animations/fade-in';
import { Card } from '@/components/ui/card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { buttonVariants } from '@/components/ui/button';
import { Project } from '@/data/projects';
import { ProjectBadges } from './project-badges';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/cn';
import Link from 'next/link';

interface FeaturedProjectProps {
  project: Project;
  className?: string;
}

export function FeaturedProject({ project, className }: FeaturedProjectProps) {
  return (
    <FadeIn className={cn('mb-24', className)}>
      <Card className="group flex flex-col overflow-hidden lg:flex-row transition-all hover:border-primary/50 hover:shadow-glow">
        {/* Large Image Placeholder */}
        <div className="relative flex min-h-[300px] w-full items-center justify-center border-b border-border/50 bg-gradient-to-br from-background to-card lg:w-1/2 lg:border-b-0 lg:border-r overflow-hidden">
          <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Heading size="display" className="text-muted/20 group-hover:text-primary/10 transition-colors duration-700 group-hover:scale-105">
            {project.imagePlaceholder}
          </Heading>
        </div>

        {/* Content */}
        <div className="flex w-full flex-col p-8 md:p-12 lg:w-1/2">
          <div className="mb-6 flex items-start justify-between gap-4">
            <div>
              <Text size="sm" color="primary" className="mb-2 font-semibold uppercase tracking-widest">
                Featured • {project.category}
              </Text>
              <Heading size="h2" className="mb-2">
                {project.title}
              </Heading>
              <Text color="muted" className="text-lg">
                {project.role}
              </Text>
            </div>
          </div>

          <Text size="lg" className="mb-8 leading-relaxed text-balance">
            {project.summary}
          </Text>

          <div className="mb-8 grid gap-8 sm:grid-cols-2">
            <div>
              <Text size="sm" className="mb-3 font-semibold uppercase tracking-wider text-muted">
                Key Responsibilities
              </Text>
              <ul className="flex flex-col gap-2">
                {project.responsibilities.slice(0, 2).map((resp, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/50" />
                    <Text size="sm" color="muted" className="leading-snug text-balance">
                      {resp}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Text size="sm" className="mb-3 font-semibold uppercase tracking-wider text-muted">
                Achievements
              </Text>
              <ul className="flex flex-col gap-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                    <Text size="sm" color="muted" className="leading-snug text-balance">
                      {achievement}
                    </Text>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ProjectBadges
            platforms={project.platforms}
            technologies={project.technologies}
            className="mb-8"
          />

          <div className="mt-auto pt-4 border-t border-border/50">
            <Link
              href={project.caseStudyUrl || '#'}
              className={cn(buttonVariants({ size: 'lg' }), 'group/btn w-full sm:w-auto')}
            >
              View Full Case Study
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </div>
        </div>
      </Card>
    </FadeIn>
  );
}
