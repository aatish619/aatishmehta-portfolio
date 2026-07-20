import { Badge } from '@/components/ui/badge';
import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { Text } from '@/components/ui/text';
import type { Experience } from '@/data/experience';
import { Building2, MapPin, CheckCircle2 } from 'lucide-react';

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <GlassCard className="flex flex-col gap-6 p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex flex-col gap-1.5">
          <Heading size="h4" className="text-primary">{experience.role}</Heading>
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="flex items-center gap-1.5">
              <Building2 className="h-4 w-4" />
              {experience.company}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4" />
              {experience.location}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2 sm:items-end">
          <Badge variant={experience.currentStatus ? 'accent' : 'secondary'} className="whitespace-nowrap">
            {experience.duration}
          </Badge>
          <Text size="caption" color="muted">{experience.employmentType}</Text>
        </div>
      </div>

      {/* Body: Impact & Architecture */}
      <div className="flex flex-col gap-3 rounded-lg bg-surface/50 p-4 border border-border/30">
        {experience.businessImpact && (
          <Text size="sm" className="leading-relaxed">
            <strong className="text-foreground">Impact:</strong> {experience.businessImpact}
          </Text>
        )}
        {experience.architecture && (
          <Text size="sm" className="leading-relaxed">
            <strong className="text-foreground">Architecture:</strong> {experience.architecture}
          </Text>
        )}
      </div>

      {/* Responsibilities */}
      <div className="flex flex-col gap-3">
        <Text size="sm" className="font-semibold uppercase tracking-wider text-muted">Key Responsibilities</Text>
        <ul className="flex flex-col gap-2">
          {experience.responsibilities.map((resp, i) => (
            <li key={i} className="flex items-start gap-2.5">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" />
              <Text size="sm" color="muted" className="leading-relaxed text-balance">{resp}</Text>
            </li>
          ))}
        </ul>
      </div>

      {/* Achievements */}
      {experience.achievements.length > 0 && (
        <div className="flex flex-col gap-3 border-t border-border/30 pt-4">
          <Text size="sm" className="font-semibold uppercase tracking-wider text-muted">Achievements</Text>
          <ul className="flex flex-col gap-2">
            {experience.achievements.map((achieve, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-success mt-0.5" />
                <Text size="sm" color="muted" className="leading-relaxed text-balance">{achieve}</Text>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Technologies */}
      <div className="flex flex-wrap gap-2 mt-2">
        {experience.technologies.map((tech) => (
          <Badge key={tech} variant="outline" className="text-[10px]">
            {tech}
          </Badge>
        ))}
      </div>
    </GlassCard>
  );
}
