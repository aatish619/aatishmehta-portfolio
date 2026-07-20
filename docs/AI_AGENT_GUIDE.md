# AI Agent Guide

> Instructions for AI coding agents working on this project.
> Read this BEFORE making any changes.

## Before You Start

1. **Read all documents in `/docs/`** — they are the single source of truth.
2. **Check `PROJECT_ROADMAP.md`** to understand what phase you're working on.
3. **Check `DECISIONS.md`** for past architectural decisions.
4. **Check `DESIGN_SYSTEM.md`** before creating any visual element.
5. **Check `CODING_STANDARDS.md`** before writing code.

## Key Files to Know

| File | Purpose |
|------|---------|
| `src/lib/cn.ts` | Class name utility — always use this |
| `src/lib/motion.ts` | All Framer Motion variants |
| `src/lib/fonts.ts` | Font configuration |
| `src/config/site.ts` | Site metadata |
| `src/config/navigation.ts` | Navigation items |
| `src/config/theme.ts` | Theme constants |
| `src/app/globals.css` | Design tokens (CSS variables) |
| `tailwind.config.ts` | Tailwind theme extensions |

## Rules for AI Agents

### Do

- ✅ Use existing components before creating new ones.
- ✅ Use `cn()` for all className merging.
- ✅ Use motion variants from `src/lib/motion.ts`.
- ✅ Use absolute imports (`@/components/...`).
- ✅ Follow the file naming convention (kebab-case).
- ✅ Add TypeScript types for all props.
- ✅ Use semantic HTML.
- ✅ Test that `pnpm build` succeeds after changes.
- ✅ Update documentation if you add new patterns.

### Don't

- ❌ Don't create duplicate components.
- ❌ Don't use inline styles.
- ❌ Don't use `any` in TypeScript.
- ❌ Don't hardcode content in components.
- ❌ Don't add dependencies without documenting in `TECH_STACK.md`.
- ❌ Don't rename existing files without updating `DECISIONS.md`.
- ❌ Don't create lorem ipsum or fake data.
- ❌ Don't push directly to `main`.

## Component Creation Checklist

When creating a new component:

1. Check if a similar component already exists.
2. Place it in the correct directory (see `FOLDER_STRUCTURE.md`).
3. Use kebab-case for the filename.
4. Use PascalCase for the export name.
5. Define TypeScript props interface.
6. Use `cn()` for class merging.
7. Use `cva()` if it has variants.
8. Ensure it's accessible (keyboard, screen reader).
9. Make it responsive (mobile-first).

## Animation Guidelines

- All reusable variants live in `src/lib/motion.ts`.
- Component-specific animations can be defined in the component file.
- Use `framer-motion` for declarative UI animations.
- Use `gsap` for complex timeline animations only.
- Lenis handles smooth scrolling — don't add competing scroll libraries.

## Data Flow

```
src/config/     → Static app config (site info, nav items, socials)
src/data/       → Portfolio content (projects, experience, skills)
src/content/    → MDX/markdown (blog, case studies)
src/types/      → TypeScript interfaces for all data
```

Components consume data through props. Never import data directly inside a UI component.

## Testing Changes

After any code change:

```bash
pnpm lint        # Check for lint errors
pnpm build       # Ensure build succeeds
pnpm dev         # Visual verification
```

## Getting Help

- Architecture questions → `ARCHITECTURE.md`
- Design questions → `DESIGN_SYSTEM.md`
- Code style questions → `CODING_STANDARDS.md`
- Past decisions → `DECISIONS.md`
- What to build next → `PROJECT_ROADMAP.md`
