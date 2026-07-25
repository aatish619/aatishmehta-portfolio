import { Badge } from '@/components/ui/badge';
import type { ArticleCategory } from '@/data/articles';

interface CategoryFilterProps {
  categories: ArticleCategory[];
  activeCategory: ArticleCategory | 'All';
  onSelect: (category: ArticleCategory | 'All') => void;
}

export function CategoryFilter({ categories, activeCategory, onSelect }: CategoryFilterProps) {
  const allCategories = ['All' as const, ...categories];

  return (
    <div className="flex flex-wrap items-center gap-2">
      {allCategories.map((cat) => (
        <button key={cat} onClick={() => onSelect(cat)} className="focus:outline-none">
          <Badge
            variant={activeCategory === cat ? 'default' : 'outline'}
            className={`cursor-pointer transition-colors ${
              activeCategory === cat 
                ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                : 'hover:bg-primary/10 hover:text-primary'
            }`}
          >
            {cat}
          </Badge>
        </button>
      ))}
    </div>
  );
}
