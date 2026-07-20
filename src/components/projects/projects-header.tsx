import { FadeIn } from '@/components/animations/fade-in';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

interface ProjectsHeaderProps {
  className?: string;
  eyebrow?: string;
  title: string;
  description?: string;
}

export function ProjectsHeader({
  className,
  eyebrow = 'Showcase',
  title,
  description,
}: ProjectsHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-4 max-w-3xl mb-16', className)}>
      {eyebrow && (
        <FadeIn delay={0.2}>
          <Text
            size="sm"
            color="primary"
            className="uppercase tracking-widest font-semibold"
          >
            {eyebrow}
          </Text>
        </FadeIn>
      )}
      
      <FadeIn delay={0.3}>
        <Heading size="display" className="tracking-tight">
          {title}
        </Heading>
      </FadeIn>

      {description && (
        <FadeIn delay={0.4}>
          <Text size="lg" color="muted" className="text-balance leading-relaxed">
            {description}
          </Text>
        </FadeIn>
      )}
    </div>
  );
}
