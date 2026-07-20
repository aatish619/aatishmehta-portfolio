# Coding Standards

> Code quality conventions for the Aatish Mehta portfolio.

## TypeScript

### Strict Mode

`tsconfig.json` uses `"strict": true`. No exceptions.

### No `any`

Never use `any`. Use `unknown` when the type is truly unknown, then narrow with type guards.

```typescript
// ❌ Bad
function parse(data: any) { ... }

// ✅ Good
function parse(data: unknown) {
  if (typeof data === 'string') { ... }
}
```

### Named Exports

Prefer named exports. Default exports only for Next.js pages/layouts.

```typescript
// ❌ Bad
export default function Button() { ... }

// ✅ Good
export function Button() { ... }

// ✅ Exception — Next.js page
export default function Page() { ... }
```

### Type Definitions

- Shared types live in `src/types/`.
- Component props are defined inline with the component or co-located.
- Use `interface` for object shapes, `type` for unions/intersections.

```typescript
interface CardProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}
```

## File Naming

| Type | Convention | Example |
|------|-----------|---------|
| Components | kebab-case | `glass-card.tsx` |
| Hooks | kebab-case with `use-` prefix | `use-mouse-position.ts` |
| Utilities | kebab-case | `cn.ts` |
| Types | kebab-case | `project.ts` |
| Constants | kebab-case | `animation-config.ts` |
| Config | kebab-case | `site.ts` |

## Component Naming

- PascalCase for component names.
- Match file name to component name.
- `glass-card.tsx` → `export function GlassCard() {}`

## Component Structure

```typescript
// 1. Imports
import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/cn';

// 2. Variants (if using CVA)
const buttonVariants = cva('...base', {
  variants: { ... },
  defaultVariants: { ... },
});

// 3. Types
interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

// 4. Component
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

// 5. Display name (optional, for DevTools)
Button.displayName = 'Button';
```

## Styling

### Tailwind Only

- No inline styles (`style={{ ... }}`).
- No CSS modules.
- Use Tailwind utilities.
- Use `cn()` for conditional classes.
- Use `cva()` for component variants.

### Responsive

Mobile-first approach:

```tsx
<div className="px-4 md:px-8 lg:px-16" />
```

## Imports

### Absolute Imports

Always use the `@/*` alias:

```typescript
// ❌ Bad
import { Button } from '../../../components/ui/button';

// ✅ Good
import { Button } from '@/components/ui/button';
```

### Import Order

1. React / Next.js
2. Third-party libraries
3. Internal modules (`@/`)
4. Relative imports
5. Types (last)

## Animation Code

- All Framer Motion variants live in `src/lib/motion.ts`.
- GSAP utilities live in `src/lib/gsap.ts` (future).
- Never inline animation objects in components.

```typescript
// ❌ Bad
<motion.div animate={{ opacity: 1, y: 0 }} />

// ✅ Good
import { fadeUp } from '@/lib/motion';
<motion.div variants={fadeUp} initial="hidden" animate="visible" />
```

## Accessibility

- Every interactive element must be keyboard accessible.
- Use semantic HTML (`<nav>`, `<main>`, `<section>`, `<article>`).
- Images must have `alt` text.
- Use `aria-label` for icon-only buttons.
- Focus styles must be visible (`focus-visible`).

## Performance

- Use `next/image` for all images.
- Use `next/font` for all fonts.
- Use `dynamic()` for heavy components.
- Lazy load below-the-fold sections.
- Avoid layout shift (set explicit dimensions).

## Documentation

- Export a JSDoc comment for public utility functions.
- Component files don't need JSDoc — the TypeScript types serve as documentation.
- Complex logic should have inline comments explaining *why*, not *what*.
