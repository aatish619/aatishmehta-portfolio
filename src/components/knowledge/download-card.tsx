import { GlassCard } from '@/components/ui/glass-card';
import { Text } from '@/components/ui/text';
import { Download } from 'lucide-react';
import type { ResourceLink } from '@/data/articles';

export function DownloadCard({ resource }: { resource: ResourceLink }) {
  return (
    <GlassCard interactive className="flex items-center justify-between p-4 group">
      <div className="flex flex-col">
        <Text size="sm" className="font-medium group-hover:text-primary transition-colors">{resource.title}</Text>
        <Text size="caption" color="muted">{resource.type}</Text>
      </div>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
        <Download className="h-4 w-4" />
      </div>
    </GlassCard>
  );
}
