# Project Rules

> Single source of truth for development discipline across all phases.

## Core Principles

1. **Never rewrite completed work** unless a critical bug or architectural flaw demands it.
2. **Never rename folders or components** without a documented reason in `DECISIONS.md`.
3. **Never duplicate components.** Every component lives in one canonical location.
4. **Never hardcode portfolio content** into components. Content comes from `src/data/` or `src/content/`.
5. **Never create fake projects, lorem ipsum, or fabricated statistics.**
6. **If content is unavailable**, leave the structure ready but empty.

## Development Rules

| Rule | Detail |
|------|--------|
| Language | TypeScript — strict mode, no `any` |
| Styling | Tailwind CSS utility classes only — no inline styles |
| Components | Reusable, composable, documented |
| Animation | Framer Motion variants from `src/lib/motion.ts` — never inline |
| State | React state or context — no unnecessary global state |
| Imports | Absolute imports via `@/*` alias |
| Naming | PascalCase components, camelCase functions, kebab-case files |
| Exports | Named exports preferred, default exports for pages only |
| Testing | Every utility function should be testable in isolation |
| Accessibility | Semantic HTML, ARIA labels, keyboard navigation |
| Performance | Lazy load heavy components, optimize images, tree-shake |

## Phase Rules

- Each phase builds upon the previous one.
- Before starting any phase, read **all** documents in `/docs`.
- Never modify the design system without updating `DESIGN_SYSTEM.md`.
- Never add a dependency without documenting it in `TECH_STACK.md`.
- Every architectural decision goes into `DECISIONS.md`.

## Content Rules

- Portfolio content lives in `src/data/` (TypeScript) or `src/content/` (MDX/markdown).
- Components consume content via props — never embed it.
- Social links, navigation items, and site metadata live in `src/config/`.

## Git Rules

- See `GIT_WORKFLOW.md` for branching strategy.
- Commit messages follow Conventional Commits.
- Never push directly to `main`.
- Every feature goes through a Pull Request.
