import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { AboutHeader } from './about-header';
import { AboutStory } from './about-story';
import { EngineeringPhilosophy } from './engineering-philosophy';
import { CareerTimeline } from './career-timeline';
import { Highlights } from './highlights';
import { SkillsPreview } from './skills-preview';
import { cn } from '@/lib/cn';

export function About({ className }: { className?: string }) {
  return (
    <Section
      id="about"
      spacing="xl"
      className={cn('relative overflow-hidden', className)}
    >
      <Container>
        <div className="flex flex-col gap-16 md:gap-20">
          {/* Header & Story & Highlights */}
          <div className="flex flex-col gap-8 md:gap-10">
            <ScrollReveal>
              <AboutHeader
                title="Building software that matters."
                description="I'm a Senior Mobile Engineer focused on crafting premium, performant, and scalable applications."
              />
            </ScrollReveal>

            <ScrollReveal>
              <AboutStory />
            </ScrollReveal>

            <ScrollReveal>
              <Highlights />
            </ScrollReveal>
          </div>

          {/* Philosophy & Timeline */}
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
            <ScrollReveal className="order-2 lg:order-1">
              <CareerTimeline />
            </ScrollReveal>

            <ScrollReveal className="order-1 lg:order-2">
              <EngineeringPhilosophy />
            </ScrollReveal>
          </div>

          {/* Skills Preview */}
          <ScrollReveal>
            <SkillsPreview />
          </ScrollReveal>
        </div>
      </Container>
    </Section>
  );
}
