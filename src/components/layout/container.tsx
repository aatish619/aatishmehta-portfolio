import { cn } from '@/lib/cn';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Maximum width preset */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  /** HTML element to render */
  as?: 'div' | 'section' | 'article' | 'main';
}

const sizeClasses = {
  sm: 'max-w-screen-sm',
  md: 'max-w-screen-md',
  lg: 'max-w-screen-lg',
  xl: 'max-w-screen-xl',
  '2xl': 'max-w-[1400px]',
};

export function Container({
  className,
  size = '2xl',
  as: Tag = 'div',
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClasses[size],
        className
      )}
      {...props}
    />
  );
}

Container.displayName = 'Container';
