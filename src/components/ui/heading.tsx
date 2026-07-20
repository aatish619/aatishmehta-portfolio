import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const headingVariants = cva('font-heading text-foreground', {
  variants: {
    size: {
      display: 'text-display',
      h1: 'text-heading-1',
      h2: 'text-heading-2',
      h3: 'text-heading-3',
      h4: 'text-heading-4',
    },
    gradient: {
      true: 'gradient-text',
      false: '',
    },
  },
  defaultVariants: {
    size: 'h2',
    gradient: false,
  },
});

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  /** HTML heading tag. Defaults based on size variant. */
  as?: HeadingTag;
}

const sizeToTag: Record<string, HeadingTag> = {
  display: 'h1',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
};

export function Heading({
  className,
  size,
  gradient,
  as,
  ...props
}: HeadingProps) {
  const Tag = as || sizeToTag[size || 'h2'] || 'h2';

  return (
    <Tag
      className={cn(headingVariants({ size, gradient }), className)}
      {...props}
    />
  );
}

Heading.displayName = 'Heading';

export { headingVariants };
