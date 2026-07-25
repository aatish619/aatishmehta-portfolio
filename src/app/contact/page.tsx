import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Contact } from '@/components/contact/contact';

export const metadata = {
  title: 'Contact | Aatish Mehta',
  description: 'Get in touch with Aatish Mehta.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 lg:pt-32">
      <Section id="contact">
        <Container>
          <Contact />
        </Container>
      </Section>
    </main>
  );
}
