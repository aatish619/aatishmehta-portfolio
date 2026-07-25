import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { CheckCircle2 } from 'lucide-react';
import { Project } from '@/data/projects';

export function CaseStudyOverview({ project }: { project: Project }) {
  return (
    <div className="grid gap-10 border-b border-border/30 py-12 lg:grid-cols-2 lg:py-16">
      <ScrollReveal className="flex flex-col gap-5">
        <Heading size="h3">The Problem & Solution</Heading>
        <Text color="muted" className="leading-relaxed">
          {project.businessImpact || project.summary}
        </Text>
        {project.features && (
          <div className="mt-2">
            <Text size="sm" className="mb-3 font-semibold uppercase tracking-wider text-muted">
              Key Features Delivered
            </Text>
            <ul className="flex flex-col gap-2.5">
              {project.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                  <Text color="muted" className="leading-snug text-balance">
                    {feature}
                  </Text>
                </li>
              ))}
            </ul>
          </div>
        )}
      </ScrollReveal>

      <ScrollReveal className="flex flex-col gap-5">
        <Heading size="h3">My Responsibilities</Heading>
        <ul className="flex flex-col gap-3">
          {project.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <Text color="muted" className="leading-relaxed text-balance">
                {resp}
              </Text>
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </div>
  );
}
