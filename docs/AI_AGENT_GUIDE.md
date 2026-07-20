# AI Agent Guide

> Instructions for AI coding agents working on this project.
>
> **Read this document before making ANY code changes.**
>
> This project is developed incrementally over multiple phases. Every implementation must preserve the existing architecture and build upon it.

---

# Before You Start

Before writing any code, always complete the following:

1. Read **all documents inside `/docs`**.
2. Read `PROJECT_RULES.md`.
3. Read `PROJECT_ROADMAP.md` to understand the current phase.
4. Read `DECISIONS.md` to understand previous architectural decisions.
5. Read `DESIGN_SYSTEM.md` before creating any UI.
6. Read `CODING_STANDARDS.md`.
7. Read `ARCHITECTURE.md`.

Never start coding without understanding the current project architecture.

---

# Decision Priority

When making implementation decisions, always follow this priority.

1. PROJECT_RULES.md
2. ARCHITECTURE.md
3. DESIGN_SYSTEM.md
4. CODING_STANDARDS.md
5. TECH_STACK.md
6. Existing Codebase

Never violate a higher-priority document to satisfy a lower-priority one.

---

# Development Philosophy

Always prefer

- Reuse over Rewrite
- Simplicity over Cleverness
- Composition over Duplication
- Readability over Brevity
- Performance over Excessive Animation
- Accessibility over Visual Tricks
- Long-term Maintainability over Short-term Convenience

Every change should improve the project.

---

# Key Files

| File | Purpose |
|------|---------|
| `src/lib/cn.ts` | Class merging utility |
| `src/lib/motion.ts` | Shared Framer Motion variants |
| `src/lib/fonts.ts` | Font configuration |
| `src/lib/seo.ts` | SEO helpers |
| `src/config/site.ts` | Site metadata |
| `src/config/navigation.ts` | Navigation configuration |
| `src/config/theme.ts` | Theme configuration |
| `src/config/socials.ts` | Social links |
| `src/app/globals.css` | Design tokens |
| `tailwind.config.ts` | Tailwind configuration |

---

# Before Making Any Changes

Always

- Understand the existing implementation.
- Search for reusable components.
- Search for existing utilities.
- Search for existing hooks.
- Search for existing motion variants.
- Read related TypeScript types.
- Read related configuration files.

Never immediately create new code without understanding the current architecture.

---

# Rules for AI Agents

## Always Do

- ✅ Read documentation before coding.
- ✅ Reuse existing components whenever possible.
- ✅ Use `cn()` for all className merging.
- ✅ Use motion variants from `src/lib/motion.ts`.
- ✅ Use absolute imports (`@/...`).
- ✅ Follow the project's folder structure.
- ✅ Follow the design system.
- ✅ Define proper TypeScript interfaces.
- ✅ Keep components reusable.
- ✅ Keep components small and focused.
- ✅ Use semantic HTML.
- ✅ Write accessible components.
- ✅ Keep layouts mobile-first.
- ✅ Update documentation when architecture changes.
- ✅ Run lint and build before finishing.

---

## Never Do

- ❌ Don't create duplicate components.
- ❌ Don't duplicate utilities.
- ❌ Don't use inline styles.
- ❌ Don't use `any` in TypeScript.
- ❌ Don't hardcode content.
- ❌ Don't create lorem ipsum.
- ❌ Don't generate fake projects.
- ❌ Don't fabricate experience.
- ❌ Don't rename existing files without documenting the reason.
- ❌ Don't modify unrelated files.
- ❌ Don't disable ESLint rules.
- ❌ Don't ignore TypeScript errors.
- ❌ Don't install dependencies unnecessarily.
- ❌ Don't introduce multiple sources of truth.
- ❌ Don't over-engineer simple solutions.
- ❌ Don't optimize prematurely.
- ❌ Don't push directly to `main`.

---

# Architecture Rules

Never

- Move folders without reason.
- Rename reusable components without updating references.
- Introduce circular dependencies.
- Couple UI components with business logic.
- Import portfolio data directly inside UI components.

Always

- Separate logic from presentation.
- Prefer composition over inheritance.
- Keep components focused on one responsibility.
- Build reusable abstractions.
- Extend existing architecture instead of replacing it.

---

# Component Creation Checklist

Before creating a component

- Check if a similar component already exists.
- Check if it can be extended instead.

When creating a new component

- Use the correct directory.
- Use kebab-case filenames.
- Use PascalCase component names.
- Define TypeScript interfaces.
- Use `cn()` for class merging.
- Use `cva()` when variants exist.
- Make it responsive.
- Make it accessible.
- Avoid unnecessary props.
- Keep it reusable.

---

# Design Rules

Every UI component must

- Follow the existing design language.
- Use design tokens.
- Use existing spacing.
- Use existing typography.
- Use existing colors.
- Support dark mode.
- Be mobile-first.
- Match the visual quality of premium SaaS products.

Never invent new styles when reusable tokens already exist.

---

# Animation Rules

- Shared animations belong inside `src/lib/motion.ts`.
- Component-specific animations may remain inside the component.
- Use Framer Motion for UI animations.
- Use GSAP only for advanced timeline animations.
- Never duplicate animation variants.
- Never introduce another smooth scrolling library.
- Lenis is the only scrolling solution.

---

# Dependency Rules

Before installing a dependency

1. Check if the functionality already exists.
2. Check if an existing library already solves the problem.
3. Avoid dependencies for simple utilities.
4. Document every new dependency inside `TECH_STACK.md`.
5. Explain why the dependency is needed.

Prefer fewer dependencies.

---

# Data Flow

```text
config/
    Static application configuration

data/
    Portfolio content

content/
    MDX / Articles / Case Studies

types/
    TypeScript interfaces

hooks/
    Business logic

providers/
    Global state and providers

components/
    Pure UI
```

Business logic belongs inside

- Hooks
- Providers
- Server Actions

UI components should remain presentational whenever possible.

Components receive data through props.

---

# Performance Rules

Always

- Prefer Server Components where appropriate.
- Lazy load expensive components.
- Optimize images.
- Minimize client-side JavaScript.
- Minimize unnecessary re-renders.
- Keep bundle size small.
- Prefer reusable animations.

Performance should never be sacrificed for unnecessary visual effects.

---

# Testing Changes

After every implementation

Run

```bash
pnpm lint

pnpm build

pnpm dev
```

Verify

- No TypeScript errors.
- No ESLint errors.
- No build errors.
- Responsive layout.
- Accessibility.
- Existing functionality still works.

Never mark work complete if any verification fails.

---

# Before Finishing Any Task

Always verify

- Code builds successfully.
- Lint passes.
- No TypeScript errors.
- Responsive layout maintained.
- Accessibility preserved.
- Existing functionality not broken.
- Documentation updated if required.
- Git status is clean.

---

# AI Completion Checklist

Before considering the task complete

- [ ] Read all required documentation.
- [ ] Reused existing components.
- [ ] No duplicate code.
- [ ] Code follows project standards.
- [ ] Responsive verified.
- [ ] Accessibility verified.
- [ ] Build successful.
- [ ] Lint successful.
- [ ] Documentation updated.
- [ ] Git ready for commit.

---

# Success Criteria

Every implementation must be

- Production-ready
- Fully typed
- Reusable
- Accessible
- Responsive
- Maintainable
- Performance conscious
- Well documented
- Consistent with the design system
- Compatible with future phases

If any of these are missing, the implementation is not complete.

---

# When Unsure

If multiple implementation approaches exist

Choose the solution that

- Requires fewer dependencies.
- Maximizes reusability.
- Minimizes complexity.
- Fits the current architecture.
- Matches the design system.
- Is easiest to maintain long-term.

Never introduce architectural changes without documenting them in `DECISIONS.md`.

---

# Need Help?

| Question | Document |
|-----------|----------|
| Architecture | `ARCHITECTURE.md` |
| Design | `DESIGN_SYSTEM.md` |
| Coding Style | `CODING_STANDARDS.md` |
| Folder Layout | `FOLDER_STRUCTURE.md` |
| Tech Stack | `TECH_STACK.md` |
| Git Process | `GIT_WORKFLOW.md` |
| Previous Decisions | `DECISIONS.md` |
| Current Phase | `PROJECT_ROADMAP.md` |
| Project Rules | `PROJECT_RULES.md` |

---

# Final Reminder

This repository represents a long-term production software project.

Do not think in terms of completing a task.

Think in terms of improving and extending a codebase that will continue to evolve over many future phases.

Every decision should leave the project cleaner, more scalable, and easier to maintain than before.