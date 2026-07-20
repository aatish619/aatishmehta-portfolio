import { Section } from '@/components/layout/section';
import { Container } from '@/components/layout/container';
import { HeroContent } from './hero-content';
import { HeroActions } from './hero-actions';
import { HeroStats } from './hero-stats';
import { HeroSocials } from './hero-socials';
import { HeroVisual } from './hero-visual';
import { ScrollIndicator } from './scroll-indicator';
export function Hero() {
  return (
    <Section className="relative flex min-h-[100svh] flex-col overflow-hidden pt-24 lg:pt-32">
      <Container className="flex flex-1 flex-col justify-center">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col gap-8">
            <HeroContent />
            <HeroActions />
            <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
              <HeroSocials />
              <ScrollIndicator className="hidden sm:flex" />
            </div>
            <HeroStats className="mt-8 lg:mt-12" />
          </div>

          <div className="flex justify-center lg:justify-end">
            <HeroVisual />
          </div>
        </div>
      </Container>
    </Section>
  );
}

Hero.displayName = 'Hero';
