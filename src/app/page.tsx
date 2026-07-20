import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';

export default function Home() {
  return (
    <>
      <Section spacing="xl">
        <Container>
          <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
            <Heading size="display" gradient className="mb-6">
              Foundation Ready
            </Heading>
            <Text size="lg" color="muted" className="max-w-2xl">
              Phase 1 complete. The design system, components, and architecture
              are in place. Sections will be built in future phases.
            </Text>
          </div>
        </Container>
      </Section>
    </>
  );
}
