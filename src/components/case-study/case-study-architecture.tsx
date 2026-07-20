import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import { Project } from '@/data/projects';

export function CaseStudyArchitecture({ project }: { project: Project }) {
  if (!project.architecture && !project.technologies) return null;

  return (
    <div className="py-16 lg:py-24 border-b border-border/30">
      <ScrollReveal className="flex flex-col gap-12">
        <div className="max-w-3xl">
          <Heading size="h3" className="mb-6">Architecture & Engineering</Heading>
          {project.architecture && (
            <Text color="muted" className="leading-relaxed text-balance mb-8">
              {project.architecture}
            </Text>
          )}
        </div>

        <GlassCard className="p-8">
          <Text size="sm" className="mb-6 font-semibold uppercase tracking-wider text-primary">
            Technology Stack
          </Text>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="default" className="text-sm px-4 py-1.5">
                {tech}
              </Badge>
            ))}
            {project.skills?.map((skill) => (
              <Badge key={skill} variant="secondary" className="text-sm px-4 py-1.5">
                {skill}
              </Badge>
            ))}
          </div>
        </GlassCard>
      </ScrollReveal>
    </div>
  );
}
