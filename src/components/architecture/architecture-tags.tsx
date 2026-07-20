import { Badge } from '@/components/ui/badge';
import { Text } from '@/components/ui/text';

interface ArchitectureTagsProps {
  tags: string[];
}

export function ArchitectureTags({ tags }: ArchitectureTagsProps) {
  if (tags.length === 0) return null;

  return (
    <div className="flex flex-col gap-3 py-8 border-t border-border/30">
      <Text size="sm" className="font-semibold uppercase tracking-wider text-muted">
        Tags
      </Text>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="outline" className="text-xs">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}
