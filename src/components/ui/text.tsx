import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/cn';

const textVariants = cva('', {
  variants: {
    size: {
      lg: 'text-body-lg',
      default: 'text-body',
      sm: 'text-body-sm',
      caption: 'text-caption',
    },
    color: {
      default: 'text-foreground',
      secondary: 'text-text-secondary',
      muted: 'text-muted',
      primary: 'text-primary',
      accent: 'text-accent',
    },
  },
  defaultVariants: {
    size: 'default',
    color: 'default',
  },
});

interface TextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof textVariants> {
  as?: 'p' | 'span' | 'div';
}

export function Text({
  className,
  size,
  color,
  as: Tag = 'p',
  ...props
}: TextProps) {
  return (
    <Tag className={cn(textVariants({ size, color }), className)} {...props} />
  );
}

Text.displayName = 'Text';

export { textVariants };
