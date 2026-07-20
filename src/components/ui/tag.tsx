import { cn } from '@/lib/cn';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Remove handler — when provided, shows an × button */
  onRemove?: () => void;
}

export function Tag({ className, children, onRemove, ...props }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-md bg-card px-2.5 py-1 text-xs text-muted border border-border transition-colors hover:border-primary/30 hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 rounded-full p-0.5 hover:bg-border/50"
          aria-label="Remove tag"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      )}
    </span>
  );
}

Tag.displayName = 'Tag';
