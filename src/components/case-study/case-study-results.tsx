import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { GlassCard } from '@/components/ui/glass-card';
import { Project } from '@/data/projects';
import { Trophy } from 'lucide-react';

export function CaseStudyResults({ project }: { project: Project }) {
  if (!project.achievements && !project.results) return null;

  return (
    <div className="py-16 lg:py-24 border-b border-border/30">
      <ScrollReveal className="flex flex-col gap-12">
        <Heading size="h3">Outcomes & Achievements</Heading>
        
        <StaggerChildren initialDelay={0.2} staggerDelay={0.1} className="grid gap-6 md:grid-cols-3">
          {project.results?.map((result, i) => (
            <StaggerItem key={i} className="h-full">
              <GlassCard className="flex flex-col items-center justify-center p-8 text-center h-full">
                <Trophy className="mb-4 h-8 w-8 text-primary opacity-80" />
                <Heading size="h4" className="text-foreground">
                  {result}
                </Heading>
              </GlassCard>
            </StaggerItem>
          ))}
        </StaggerChildren>

        <ul className="grid gap-4 sm:grid-cols-2 mt-8">
          {project.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3 p-6 rounded-2xl bg-card/30 border border-border/50">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
              <Text color="muted" className="leading-relaxed">
                {achievement}
              </Text>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </div>
  );
}
