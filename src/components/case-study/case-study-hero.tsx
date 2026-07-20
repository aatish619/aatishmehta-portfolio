import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Badge } from '@/components/ui/badge';
import { Project } from '@/data/projects';

export function CaseStudyHero({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-8 pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-border/30">
      <FadeIn className="flex flex-col gap-6">
        <Text size="sm" color="primary" className="font-semibold uppercase tracking-widest">
          {project.category}
        </Text>
        <Heading size="display" className="tracking-tight max-w-4xl">
          {project.title}
        </Heading>
        <Text size="lg" color="muted" className="text-balance max-w-3xl leading-relaxed">
          {project.summary}
        </Text>
      </FadeIn>

      <StaggerChildren initialDelay={0.3} staggerDelay={0.1} className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-4">
        <StaggerItem>
          <Text size="sm" className="mb-2 font-semibold uppercase tracking-wider text-muted">Role</Text>
          <Text className="font-medium">{project.role}</Text>
        </StaggerItem>
        {project.teamSize && (
          <StaggerItem>
            <Text size="sm" className="mb-2 font-semibold uppercase tracking-wider text-muted">Team Size</Text>
            <Text className="font-medium">{project.teamSize}</Text>
          </StaggerItem>
        )}
        {project.duration && (
          <StaggerItem>
            <Text size="sm" className="mb-2 font-semibold uppercase tracking-wider text-muted">Duration</Text>
            <Text className="font-medium">{project.duration}</Text>
          </StaggerItem>
        )}
        <StaggerItem>
          <Text size="sm" className="mb-2 font-semibold uppercase tracking-wider text-muted">Platforms</Text>
          <div className="flex flex-wrap gap-2">
            {project.platforms.map((platform) => (
              <Badge key={platform} variant="secondary" className="text-[10px]">
                {platform}
              </Badge>
            ))}
          </div>
        </StaggerItem>
      </StaggerChildren>
    </div>
  );
}
