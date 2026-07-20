import { cn } from '@/lib/cn';

interface GradientBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Border width in pixels */
  borderWidth?: number;
  /** Rounded corners */
  rounded?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export function GradientBorder({
  className,
  children,
  borderWidth = 1,
  rounded = 'xl',
  ...props
}: GradientBorderProps) {
  const roundedClasses = {
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  return (
    <div
      className={cn(
        'relative bg-gradient-to-br from-primary to-accent p-px',
        roundedClasses[rounded],
        className
      )}
      style={{ padding: `${borderWidth}px` }}
      {...props}
    >
      <div
        className={cn(
          'h-full w-full bg-background',
          roundedClasses[rounded]
        )}
      >
        {children}
      </div>
    </div>
  );
}

GradientBorder.displayName = 'GradientBorder';
