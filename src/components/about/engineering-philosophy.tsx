import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';
import {
  Users,
  Layers,
  Zap,
  Maximize,
  Wrench,
  RefreshCw,
} from 'lucide-react';

const PHILOSOPHIES = [
  {
    title: 'User First',
    description: 'Empathy drives development. Every line of code should ultimately serve to enhance the end-user experience.',
    icon: Users,
  },
  {
    title: 'Clean Architecture',
    description: 'Separation of concerns ensures that code remains robust, testable, and adaptable to changing business requirements.',
    icon: Layers,
  },
  {
    title: 'Performance',
    description: 'From 60fps animations to optimized network requests, speed is treated as a fundamental feature, not an afterthought.',
    icon: Zap,
  },
  {
    title: 'Scalability',
    description: 'Building systems that handle growth elegantly—whether its scaling the architecture, the team, or the user base.',
    icon: Maximize,
  },
  {
    title: 'Maintainability',
    description: 'Code is read more often than it is written. Writing self-documenting, type-safe, and predictable logic is essential.',
    icon: Wrench,
  },
  {
    title: 'Continuous Improvement',
    description: 'The tech landscape evolves rapidly. Constantly learning and adopting the right tools to solve the right problems.',
    icon: RefreshCw,
  },
];

export function EngineeringPhilosophy({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <FadeIn>
        <Heading size="h3" className="mb-2">
          Engineering Philosophy
        </Heading>
      </FadeIn>
      <StaggerChildren
        initialDelay={0.4}
        staggerDelay={0.1}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {PHILOSOPHIES.map((item, i) => (
          <StaggerItem key={i} className="flex h-full">
            <GlassCard className="flex flex-col gap-4 p-6 transition-all hover:border-primary/50 w-full h-full">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <item.icon className="h-6 w-6" />
              </div>
              <div>
                <Heading size="h4" className="mb-2">
                  {item.title}
                </Heading>
                <Text size="sm" color="muted">
                  {item.description}
                </Text>
              </div>
            </GlassCard>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
