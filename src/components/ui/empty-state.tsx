import { cn } from '@/lib/cn';
import { Inbox } from 'lucide-react';

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  icon?: React.ReactNode;
}

export function EmptyState({
  className,
  title = 'Nothing here yet',
  description = 'Content will appear here in a future phase.',
  icon,
  children,
  ...props
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        'flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card/50 p-12 text-center',
        className
      )}
      {...props}
    >
      <div className="mb-4 text-muted">
        {icon || <Inbox className="h-12 w-12" />}
      </div>
      <h3 className="mb-2 font-heading text-heading-4 text-foreground">
        {title}
      </h3>
      <p className="max-w-sm text-body-sm text-muted">{description}</p>
      {children && <div className="mt-6">{children}</div>}
    </div>
  );
}

EmptyState.displayName = 'EmptyState';
