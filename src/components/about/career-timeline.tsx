import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';
import { Smartphone, Layers, Workflow, Cpu } from 'lucide-react';

const TIMELINE_EVENTS = [
  {
    year: '2017',
    title: 'Native Mobile Foundations',
    description: 'Started the journey building deep expertise in Native Android (Kotlin/Java) and iOS (Swift/Objective-C), learning the core principles of mobile platforms.',
    icon: Smartphone,
  },
  {
    year: '2019',
    title: 'Embracing Flutter',
    description: 'Transitioned into cross-platform development with Flutter, realizing the immense potential of declarative UI and a single unified codebase for delivering performant apps.',
    icon: Layers,
  },
  {
    year: '2021',
    title: 'Scalable Architecture',
    description: 'Focused heavily on systems design, implementing Clean Architecture and solid state management patterns to build apps capable of supporting millions of users.',
    icon: Workflow,
  },
  {
    year: 'Present',
    title: 'AI Integration',
    description: 'Leading product engineering efforts by integrating powerful AI models into applications, pushing the boundaries of what mobile experiences can achieve.',
    icon: Cpu,
  },
];

export function CareerTimeline({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col', className)}>
      <FadeIn>
        <Heading size="h3" className="mb-8">
          Career Journey
        </Heading>
      </FadeIn>
      <StaggerChildren
        initialDelay={0.4}
        staggerDelay={0.15}
        className="relative border-l border-border/50 ml-4 md:ml-6"
      >
        {TIMELINE_EVENTS.map((event, i) => (
          <StaggerItem
            key={i}
            className="mb-10 ml-8 md:ml-12 last:mb-0 relative"
          >
            <div className="absolute -left-[53px] md:-left-[69px] flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card shadow-sm">
              <event.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="flex flex-col gap-1">
              <Text size="sm" color="primary" className="font-semibold tracking-wider uppercase">
                {event.year}
              </Text>
              <Heading size="h4">{event.title}</Heading>
              <Text color="muted" className="mt-2 text-balance leading-relaxed">
                {event.description}
              </Text>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
    </div>
  );
}
