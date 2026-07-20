import { EmptyState } from '@/components/ui/empty-state';
import { FilterX } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectEmptyStateProps {
  onClearFilters: () => void;
}

export function ProjectEmptyState({ onClearFilters }: ProjectEmptyStateProps) {
  return (
    <EmptyState
      icon={<FilterX className="h-12 w-12 text-muted-foreground mb-4" />}
      title="No projects found"
      description="We couldn't find any projects matching your selected filters. Try adjusting your categories."
    >
      <Button variant="outline" onClick={onClearFilters}>
        Clear Filters
      </Button>
    </EmptyState>
  );
}
