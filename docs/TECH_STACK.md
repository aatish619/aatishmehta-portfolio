# Tech Stack

> Complete dependency inventory for the portfolio project.
> Update this document whenever a dependency is added or removed.

## Runtime Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `next` | 15.x | React framework with App Router |
| `react` | 19.x | UI library |
| `react-dom` | 19.x | React DOM renderer |
| `framer-motion` | 12.x | Declarative animations |
| `gsap` | 3.x | Advanced timeline animations |
| `lenis` | 1.x | Smooth scrolling |
| `three` | 0.x | 3D graphics engine |
| `@react-three/fiber` | 9.x | React renderer for Three.js |
| `@react-three/drei` | 9.x | Three.js helpers |
| `next-themes` | 0.x | Theme management |
| `clsx` | 2.x | Conditional class strings |
| `tailwind-merge` | 3.x | Merge Tailwind classes |
| `class-variance-authority` | 0.x | Component variants |
| `lucide-react` | latest | Icon library |
| `zod` | 3.x | Schema validation |
| `react-hook-form` | 7.x | Form management |

## Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `typescript` | 5.x | Type checking |
| `tailwindcss` | 3.4.x | Utility-first CSS |
| `postcss` | 8.x | CSS processing |
| `autoprefixer` | 10.x | CSS vendor prefixes |
| `eslint` | 9.x | Code linting |
| `eslint-config-next` | 15.x | Next.js ESLint config |
| `prettier` | 3.x | Code formatting |
| `prettier-plugin-tailwindcss` | 0.x | Tailwind class sorting |
| `husky` | 9.x | Git hooks |
| `lint-staged` | 15.x | Pre-commit linting |
| `@next/bundle-analyzer` | 15.x | Bundle analysis |
| `@types/node` | 20.x | Node.js types |
| `@types/react` | 19.x | React types |
| `@types/react-dom` | 19.x | React DOM types |
| `@types/three` | latest | Three.js types |

## Fonts

| Font | Source | Usage |
|------|--------|-------|
| Geist | `next/font/local` or `geist` package | Headings |
| Inter | `next/font/google` | Body text |
| Geist Mono | `next/font/local` or `geist` package | Code blocks |

## Adding Dependencies

Before adding any new dependency:

1. Check if it's truly necessary (can we do it with existing tools?).
2. Check bundle size impact on [bundlephobia.com](https://bundlephobia.com).
3. Add it to this document with version and purpose.
4. Document the decision in `DECISIONS.md`.
