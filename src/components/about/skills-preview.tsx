import { FadeIn } from '@/components/animations/fade-in';
import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const SKILL_CATEGORIES = [
  {
    name: 'Mobile Development',
    skills: 'Flutter, Dart, Swift, Kotlin, Objective-C, Java',
  },
  {
    name: 'Architecture & Patterns',
    skills: 'Clean Architecture, BLoC, Riverpod, MVVM, SOLID',
  },
  {
    name: 'Backend & Cloud',
    skills: 'Node.js, Firebase, AWS, REST APIs, GraphQL',
  },
  {
    name: 'AI Integration',
    skills: 'LLMs, OpenAI API, Prompt Engineering, AI Integration',
  },
  {
    name: 'Tools & DevOps',
    skills: 'Git, CI/CD, Fastlane, Docker, Figma',
  },
];

export function SkillsPreview({ className }: { className?: string }) {
  return (
    <div className={cn('flex flex-col gap-8 rounded-2xl border border-border/50 bg-card/30 p-6 md:p-10 backdrop-blur-sm', className)}>
      <FadeIn>
        <Heading size="h3">Technical Expertise</Heading>
      </FadeIn>
      <StaggerChildren
        initialDelay={0.4}
        staggerDelay={0.1}
        className="flex flex-col gap-6"
      >
        {SKILL_CATEGORIES.map((category, i) => (
          <StaggerItem key={i}>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between border-b border-border/30 pb-4 last:border-0 last:pb-0 gap-2">
              <Text size="lg" className="font-medium shrink-0 md:w-1/3">
                {category.name}
              </Text>
              <Text color="muted" className="md:w-2/3 md:text-right text-balance">
                {category.skills}
              </Text>
            </div>
          </StaggerItem>
        ))}
      </StaggerChildren>
      <FadeIn delay={0.8} className="mt-4 flex justify-start md:justify-end">
        <Link
          href="#experience"
          className={cn(buttonVariants({ variant: 'outline' }), 'group rounded-full')}
        >
          View All Experience
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </FadeIn>
    </div>
  );
}
