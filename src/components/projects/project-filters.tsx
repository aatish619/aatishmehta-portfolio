import { ScrollReveal } from '@/components/animations/scroll-reveal';
import { ProjectCategory } from '@/data/projects';
import { cn } from '@/lib/cn';

interface ProjectFiltersProps {
  categories: ProjectCategory[];
  activeCategory: ProjectCategory;
  onSelectCategory: (category: ProjectCategory) => void;
  className?: string;
}

export function ProjectFilters({
  categories,
  activeCategory,
  onSelectCategory,
  className,
}: ProjectFiltersProps) {
  return (
    <ScrollReveal className={cn('mb-12', className)}>
      <div className="flex w-full overflow-x-auto pb-4 hide-scrollbar">
        <div className="flex gap-2">
          {categories.map((category) => {
            const isActive = category === activeCategory;
            return (
              <button
                key={category}
                onClick={() => onSelectCategory(category)}
                className={cn(
                  'whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300',
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-glow'
                    : 'bg-card text-muted-foreground hover:bg-card/80 hover:text-foreground border border-border/50'
                )}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </ScrollReveal>
  );
}
