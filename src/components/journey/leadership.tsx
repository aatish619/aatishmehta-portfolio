import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Users2, Target, GitPullRequest, MessagesSquare } from 'lucide-react';

const LEADERSHIP_TRAITS = [
  {
    icon: <Users2 className="h-6 w-6" />,
    title: 'Team Mentoring',
    description: 'Guiding junior and mid-level engineers in state management, clean architecture, and best practices.',
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: 'Technical Decision Making',
    description: 'Evaluating tools, libraries, and architectural patterns to ensure long-term product viability.',
  },
  {
    icon: <GitPullRequest className="h-6 w-6" />,
    title: 'Code Reviews',
    description: 'Enforcing strict quality gates, SOLID principles, and comprehensive test coverage.',
  },
  {
    icon: <MessagesSquare className="h-6 w-6" />,
    title: 'Client Communication',
    description: 'Translating complex business requirements into actionable technical sprints and architecture plans.',
  },
];

export function Leadership() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {LEADERSHIP_TRAITS.map((trait, i) => (
        <ScrollReveal key={i} className="h-full">
          <GlassCard className="flex h-full flex-col items-start gap-4 p-6 lg:p-8">
            <div className="rounded-xl bg-primary/10 p-3 text-primary">
              {trait.icon}
            </div>
            <Heading size="h4">{trait.title}</Heading>
            <Text size="sm" color="muted" className="leading-relaxed">
              {trait.description}
            </Text>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
