import { StaggerChildren, StaggerItem } from '@/components/animations/stagger-children';
import { Text } from '@/components/ui/text';
import { cn } from '@/lib/cn';

export function AboutStory({ className }: { className?: string }) {
  return (
    <StaggerChildren
      initialDelay={0.5}
      staggerDelay={0.15}
      className={cn('flex flex-col gap-6 md:gap-8 max-w-3xl', className)}
    >
      <StaggerItem>
        <Text size="lg" className="leading-relaxed">
          My engineering journey began with a simple curiosity about how mobile
          applications function under the hood. Since then, I&apos;ve dedicated myself to
          mastering the intricacies of Native iOS and Android development, eventually
          embracing Flutter as a tool to deliver high-quality, cross-platform
          experiences without compromising on performance.
        </Text>
      </StaggerItem>
      <StaggerItem>
        <Text size="lg" className="leading-relaxed">
          I firmly believe that good software architecture is invisible to the user but
          essential for the business. By championing Clean Architecture, I ensure that
          codebases remain scalable, maintainable, and resilient to change. To me, a
          perfect application isn&apos;t just about rendering 60fps—it&apos;s about building a
          robust foundation that teams can confidently iterate upon.
        </Text>
      </StaggerItem>
      <StaggerItem>
        <Text size="lg" className="leading-relaxed">
          Recently, my focus has expanded into integrating AI into production environments.
          Whether it&apos;s intelligent product features or orchestrating complex LLM-driven
          workflows, I enjoy blending cutting-edge capabilities with pragmatic engineering
          solutions. I am constantly learning, refining my craft, and striving to build
          software that leaves a lasting impact.
        </Text>
      </StaggerItem>
    </StaggerChildren>
  );
}
