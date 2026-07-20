# Design System

> Centralized design tokens for the Aatish Mehta portfolio.
> Every visual decision flows from this document.

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--background` | `#09090B` | Page background |
| `--surface` | `#111111` | Elevated surfaces, sidebars |
| `--card` | `#18181B` | Card backgrounds |
| `--border` | `#27272A` | Borders, dividers |
| `--primary` | `#4F46E5` | Primary actions, links |
| `--primary-hover` | `#4338CA` | Primary hover state |
| `--accent` | `#8B5CF6` | Secondary emphasis, gradients |
| `--accent-hover` | `#7C3AED` | Accent hover state |
| `--text` | `#FAFAFA` | Primary text |
| `--text-secondary` | `#E4E4E7` | Secondary text |
| `--muted` | `#A1A1AA` | Muted text, placeholders |
| `--success` | `#22C55E` | Success states |
| `--warning` | `#F59E0B` | Warning states |
| `--error` | `#EF4444` | Error states |

### Gradient Tokens

| Token | Value |
|-------|-------|
| `--gradient-primary` | `linear-gradient(135deg, #4F46E5, #8B5CF6)` |
| `--gradient-glow` | `radial-gradient(circle, rgba(79,70,229,0.15), transparent 70%)` |
| `--gradient-card` | `linear-gradient(180deg, #18181B, #111111)` |

## Typography

### Font Stack

| Role | Font | Fallback |
|------|------|----------|
| Heading | Geist | system-ui, sans-serif |
| Body | Inter | system-ui, sans-serif |
| Code | Geist Mono | monospace |

### Type Scale

| Level | Size | Weight | Line Height | Letter Spacing |
|-------|------|--------|-------------|----------------|
| Display | 4.5rem (72px) | 700 | 1.1 | -0.02em |
| H1 | 3rem (48px) | 700 | 1.2 | -0.02em |
| H2 | 2.25rem (36px) | 600 | 1.25 | -0.01em |
| H3 | 1.5rem (24px) | 600 | 1.35 | -0.01em |
| H4 | 1.25rem (20px) | 600 | 1.4 | 0 |
| Body Large | 1.125rem (18px) | 400 | 1.6 | 0 |
| Body | 1rem (16px) | 400 | 1.6 | 0 |
| Body Small | 0.875rem (14px) | 400 | 1.5 | 0 |
| Caption | 0.75rem (12px) | 400 | 1.4 | 0.02em |

## Spacing

Based on a 4px grid:

| Token | Value |
|-------|-------|
| `--space-1` | 4px |
| `--space-2` | 8px |
| `--space-3` | 12px |
| `--space-4` | 16px |
| `--space-5` | 20px |
| `--space-6` | 24px |
| `--space-8` | 32px |
| `--space-10` | 40px |
| `--space-12` | 48px |
| `--space-16` | 64px |
| `--space-20` | 80px |
| `--space-24` | 96px |
| `--space-32` | 128px |

## Border Radius

| Token | Value |
|-------|-------|
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |
| `--radius-xl` | 16px |
| `--radius-2xl` | 24px |
| `--radius-full` | 9999px |

## Shadows

| Token | Value |
|-------|-------|
| `--shadow-sm` | `0 1px 2px rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 4px 6px rgba(0,0,0,0.3)` |
| `--shadow-lg` | `0 10px 15px rgba(0,0,0,0.3)` |
| `--shadow-xl` | `0 20px 25px rgba(0,0,0,0.3)` |
| `--shadow-glow` | `0 0 20px rgba(79,70,229,0.3)` |
| `--shadow-glow-lg` | `0 0 40px rgba(79,70,229,0.4)` |

## Container

| Token | Value |
|-------|-------|
| `--container-sm` | 640px |
| `--container-md` | 768px |
| `--container-lg` | 1024px |
| `--container-xl` | 1280px |
| `--container-2xl` | 1400px |

## Breakpoints

| Name | Value |
|------|-------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

## Animation Timing

| Token | Value | Usage |
|-------|-------|-------|
| `--duration-fast` | 150ms | Micro-interactions |
| `--duration-normal` | 300ms | Standard transitions |
| `--duration-slow` | 500ms | Page transitions |
| `--duration-slower` | 700ms | Entrance animations |
| `--ease-default` | `cubic-bezier(0.25, 0.1, 0.25, 1)` | Default easing |
| `--ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Smooth in-out |
| `--ease-out` | `cubic-bezier(0, 0, 0.2, 1)` | Exit animations |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy spring |

## Z-Index Scale

| Token | Value | Usage |
|-------|-------|-------|
| `--z-base` | 0 | Default |
| `--z-above` | 10 | Above content |
| `--z-dropdown` | 20 | Dropdowns |
| `--z-sticky` | 30 | Sticky elements |
| `--z-navbar` | 40 | Navigation |
| `--z-modal` | 50 | Modals |
| `--z-toast` | 60 | Notifications |
| `--z-tooltip` | 70 | Tooltips |
| `--z-overlay` | 100 | Full overlays |

## Glass Effect

```css
.glass {
  background: rgba(17, 17, 17, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(39, 39, 42, 0.5);
}
```

## Focus Styles

```css
:focus-visible {
  outline: 2px solid var(--primary);
  outline-offset: 2px;
  border-radius: var(--radius-sm);
}
```

## Hover Effects

- Buttons: Scale 1.02, subtle shadow increase
- Cards: Translate Y -2px, border color shift to primary
- Links: Color shift to primary, underline animation
- Icons: Scale 1.1, opacity transition
