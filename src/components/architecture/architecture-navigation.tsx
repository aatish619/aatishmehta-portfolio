import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Text } from '@/components/ui/text';
import type { ArchitectureArticle } from '@/data/architecture';

interface ArchitectureNavigationProps {
  prev: ArchitectureArticle | null;
  next: ArchitectureArticle | null;
}

export function ArchitectureNavigation({ prev, next }: ArchitectureNavigationProps) {
  if (!prev && !next) return null;

  return (
    <div className="flex items-stretch gap-4 border-t border-border/30 pt-8">
      {prev ? (
        <Link
          href={`/architecture/${prev.slug}`}
          className="group flex flex-1 flex-col gap-1 rounded-xl border border-border/50 bg-card/30 p-6 transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
        >
          <span className="flex items-center gap-2 text-xs text-muted">
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-1" />
            Previous
          </span>
          <Text className="font-semibold transition-colors group-hover:text-primary">
            {prev.title}
          </Text>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/architecture/${next.slug}`}
          className="group flex flex-1 flex-col items-end gap-1 rounded-xl border border-border/50 bg-card/30 p-6 text-right transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
        >
          <span className="flex items-center gap-2 text-xs text-muted">
            Next
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
          </span>
          <Text className="font-semibold transition-colors group-hover:text-primary">
            {next.title}
          </Text>
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
