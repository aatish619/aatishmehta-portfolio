import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Award } from 'lucide-react';

const CERTIFICATIONS = [
  {
    title: 'Clean Architecture Principles',
    issuer: 'Udemy / Software Architecture',
    date: '2023',
  },
  {
    title: 'Advanced Flutter State Management',
    issuer: 'Google Developer Training',
    date: '2022',
  }
];

export function Certifications() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {CERTIFICATIONS.map((cert, i) => (
        <ScrollReveal key={i} className="h-full">
          <GlassCard className="flex h-full flex-col sm:flex-row gap-4 p-6">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-primary border border-border/50">
              <Award className="h-5 w-5" />
            </div>
            <div className="flex flex-col gap-1">
              <Heading size="h4" className="text-base">{cert.title}</Heading>
              <Text size="sm" color="muted">{cert.issuer}</Text>
              <Text size="caption" color="muted" className="mt-1">{cert.date}</Text>
            </div>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
