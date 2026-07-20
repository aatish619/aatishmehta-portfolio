import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/cn';

interface ProjectBadgesProps {
  platforms?: string[];
  technologies?: string[];
  className?: string;
  maxTech?: number;
}

export function ProjectBadges({ platforms, technologies, className, maxTech }: ProjectBadgesProps) {
  const displayTech = maxTech && technologies ? technologies.slice(0, maxTech) : technologies;
  const hasMore = maxTech && technologies && technologies.length > maxTech;

  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {platforms?.map((platform) => (
        <Badge key={platform} variant="default" className="text-[10px]">
          {platform}
        </Badge>
      ))}
      
      {displayTech?.map((tech) => (
        <Badge key={tech} variant="secondary" className="text-[10px]">
          {tech}
        </Badge>
      ))}

      {hasMore && (
        <Badge variant="outline" className="text-[10px]">
          +{technologies.length - maxTech} more
        </Badge>
      )}
    </div>
  );
}
