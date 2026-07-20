import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import { Sprout, Truck, HeartPulse, Landmark, Newspaper, Building } from 'lucide-react';

const INDUSTRIES = [
  { icon: <Sprout />, title: 'Agritech', desc: 'AI-driven crop analysis' },
  { icon: <Truck />, title: 'Logistics', desc: 'High-volume tracking' },
  { icon: <HeartPulse />, title: 'Healthcare', desc: 'HIPAA-compliant comms' },
  { icon: <Landmark />, title: 'Finance', desc: 'Secure transactions' },
  { icon: <Newspaper />, title: 'News', desc: 'Content delivery' },
  { icon: <Building />, title: 'Enterprise', desc: 'Internal productivity tools' },
];

export function Industries() {
  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {INDUSTRIES.map((ind, i) => (
        <ScrollReveal key={i}>
          <GlassCard interactive className="flex flex-col items-center justify-center gap-3 p-6 text-center">
            <div className="text-primary opacity-80 mb-2">
              {ind.icon}
            </div>
            <Heading size="h4" className="text-sm">{ind.title}</Heading>
            <Text size="caption" color="muted">{ind.desc}</Text>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
