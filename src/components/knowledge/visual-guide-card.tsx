import { GlassCard } from '@/components/ui/glass-card';
import { Heading } from '@/components/ui/heading';
import { ArchitectureDiagram } from '@/components/architecture/diagram/architecture-diagram';
import type { DiagramType } from '@/data/architecture';

interface VisualGuideCardProps {
  title: string;
  diagramType: DiagramType;
}

export function VisualGuideCard({ title, diagramType }: VisualGuideCardProps) {
  return (
    <GlassCard className="flex flex-col gap-6 p-6">
      <Heading size="h4" className="text-center">{title}</Heading>
      <div className="relative min-h-[300px] w-full rounded-lg bg-surface/50 border border-border/30 overflow-hidden flex items-center justify-center p-4">
        <ArchitectureDiagram type={diagramType} />
      </div>
    </GlassCard>
  );
}
