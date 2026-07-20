import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { ScrollReveal } from '@/components/animations/scroll-reveal';
import type { Skill } from '@/data/skills';

interface TechnicalExpertiseProps {
  skills: Skill[];
}

export function TechnicalExpertise({ skills }: TechnicalExpertiseProps) {
  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categories = Object.keys(groupedSkills);

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <ScrollReveal key={category} className="h-full">
          <GlassCard className="flex h-full flex-col gap-6 p-6 lg:p-8">
            <Heading size="h4">{category}</Heading>
            <div className="flex flex-col gap-3">
              {groupedSkills[category].map((skill) => (
                <div key={skill.id} className="flex items-center justify-between border-b border-border/20 pb-2 last:border-0 last:pb-0">
                  <span className="text-sm font-medium text-foreground">{skill.name}</span>
                  <Badge 
                    variant={skill.level === 'Expert' ? 'accent' : skill.level === 'Advanced' ? 'default' : 'secondary'} 
                    className="text-[10px]"
                  >
                    {skill.level}
                  </Badge>
                </div>
              ))}
            </div>
          </GlassCard>
        </ScrollReveal>
      ))}
    </div>
  );
}
