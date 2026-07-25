import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import { Project } from '@/data/projects';

export function CaseStudyArchitecture({ project }: { project: Project }) {
  if (!project.architecture && !project.technologies) return null;

  return (
    <div className="border-b border-border/30 py-12 lg:py-16">
      <ScrollReveal className="flex flex-col gap-8">
        <div className="max-w-3xl">
          <Heading size="h3" className="mb-4">Architecture & Engineering</Heading>
          {project.architecture && (
            <Text color="muted" className="leading-relaxed text-balance">
              {project.architecture}
            </Text>
          )}
        </div>

        <GlassCard className="border border-border/40 bg-white/80 p-5 shadow-sm md:p-6">
          <div className="mb-4 flex items-center justify-between gap-3">
            <div>
              <Text size="sm" className="font-semibold uppercase tracking-wider text-primary">
                Technology Stack
              </Text>
              <Text size="sm" color="muted" className="mt-1">
                Tools, frameworks, and implementation layers used on this project.
              </Text>
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" className="rounded-full px-3 py-1.5 text-xs">
                {tech}
              </Badge>
            ))}
            {project.skills?.map((skill) => (
              <Badge key={skill} variant="secondary" className="rounded-full px-3 py-1.5 text-xs">
                {skill}
              </Badge>
            ))}
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}
