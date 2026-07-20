# Git Workflow

> Branching, committing, release strategy, and collaboration guidelines for the Aatish Mehta Portfolio project.

---

# Branch Strategy

```text
main                     ← Production (deployed to Vercel)
│
├── develop              ← Integration branch
│   ├── feature/*
│   ├── fix/*
│   ├── chore/*
│   └── hotfix/*
```

---

# Repository Protection

The following rules must always be followed.

- `main` must always be production-ready.
- `develop` must always remain deployable.
- Never push directly to `main`.
- Never push directly to `develop`.
- Never force push to `main` or `develop`.
- Never rewrite Git history on shared branches.
- Always create Pull Requests.
- Resolve merge conflicts locally before opening a Pull Request.
- Keep the Git history clean and meaningful.

---

# Branch Rules

1. All development must happen on feature branches.
2. Every new task starts with a new branch.
3. Feature branches are merged into `develop`.
4. `develop` is merged into `main` only after an entire phase has been completed and verified.
5. Delete merged feature branches after successful merge.
6. Never continue working on an already merged branch.

---

# Branch Naming Convention

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/<phase>-<description>` | `feature/phase-1-foundation` |
| Fix | `fix/<description>` | `fix/navbar-blur-mobile` |
| Chore | `chore/<description>` | `chore/update-dependencies` |
| Hotfix | `hotfix/<description>` | `hotfix/deployment-error` |

---

# Commit Convention

Follow **Conventional Commits**.

```text
<type>(<scope>): <description>
```

## Commit Types

| Type | Usage |
|------|-------|
| feat | New feature |
| fix | Bug fix |
| docs | Documentation |
| style | Formatting only |
| refactor | Internal code improvements |
| perf | Performance improvements |
| test | Tests |
| chore | Dependencies / tooling |

## Good Examples

```text
feat(ui): create reusable GlassCard component

feat(theme): configure global dark theme

feat(animation): add reusable fade-up motion variant

fix(navbar): resolve mobile overflow issue

docs: update ARCHITECTURE.md

refactor(button): simplify component variants

perf(images): optimize image loading

chore(deps): upgrade framer-motion
```

## Bad Examples

```text
update

changes

misc

fixes

final update

new code
```

---

# Commit Guidelines

- Each commit should represent **one logical change**.
- Keep commits small and focused.
- Avoid combining unrelated work into one commit.
- Commit frequently during development.
- Every commit should be understandable without additional context.

---

# Pull Request Process

Every Pull Request should include:

## Title

Use Conventional Commit format.

Example

```text
feat(ui): add reusable GlassCard component
```

---

## Description

Include

- Summary
- What was built
- Technical decisions
- Breaking changes (if any)
- Screenshots (for UI updates)
- Testing completed

---

## Pull Request Checklist

- [ ] Project builds successfully
- [ ] No TypeScript errors
- [ ] No ESLint errors
- [ ] Responsive on Mobile
- [ ] Responsive on Tablet
- [ ] Responsive on Desktop
- [ ] Accessibility verified
- [ ] Components are reusable
- [ ] No unnecessary console logs
- [ ] No commented production code
- [ ] Documentation updated (if required)

---

# Merge Strategy

Default merge strategy

**Squash and Merge**

Only use **Rebase and Merge** if preserving a clean linear Git history is explicitly required.

---

# Before Every Push

Always verify

```bash
pnpm lint

pnpm build
```

Ensure

- No TypeScript errors
- No ESLint errors
- No build errors
- No unused imports
- No unused variables
- No console errors
- No commented production code
- Responsive layout verified

Never push failing code.

---

# AI Development Rules

When development is performed by an AI coding agent

- Never push broken code.
- Never bypass lint errors.
- Never skip build verification.
- Never merge incomplete work.
- Never modify unrelated files.
- Never remove existing components without a valid reason.
- Keep commits atomic.
- Follow the project's documentation inside `/docs`.
- Update documentation whenever architecture changes.
- Preserve existing architecture unless a breaking change is approved.

---

# Release Process

When a phase is completed

1. Merge all feature branches into `develop`.
2. Verify `develop`.
3. Run

```bash
pnpm lint
pnpm build
```

4. Review documentation.
5. Create Pull Request

```text
develop → main
```

6. Merge into `main`.
7. Deploy to Vercel.
8. Create Git tag.

---

# Release Checklist

Before merging into `main`

- [ ] All feature branches merged
- [ ] Build passes
- [ ] Lint passes
- [ ] Responsive verification complete
- [ ] Accessibility reviewed
- [ ] Metadata verified
- [ ] README updated
- [ ] Documentation updated
- [ ] Version tag created

---

# Versioning Strategy

Follow **Semantic Versioning**.

## Planned Versions

| Version | Phase |
|----------|-------|
| v0.1.0 | Foundation & Design System |
| v0.2.0 | Landing Experience |
| v0.3.0 | Project Showcase |
| v0.4.0 | Architecture Gallery |
| v0.5.0 | Experience & Skills |
| v0.6.0 | Resume & Contact |
| v0.7.0 | AI Assistant |
| v0.8.0 | Performance & SEO |
| v1.0.0 | First Public Release |

### Patch Releases

Examples

```text
v0.2.1

v0.2.2

v0.3.1
```

Patch releases should contain only

- Bug fixes
- Minor improvements
- Performance optimizations

No new features.

---

# Branch Cleanup

After a Pull Request is merged

1. Delete the merged feature branch.
2. Pull the latest `develop`.
3. Create a new feature branch.
4. Never continue development on an already merged branch.

---

# Hotfix Workflow

Critical production issues should follow

```text
main
   │
   └── hotfix/<description>
            │
            ├── main
            └── develop
```

After deployment

- Tag the release.
- Delete the hotfix branch.

---

# Project Milestones

| Version | Milestone |
|----------|-----------|
| v0.1.0 | Foundation |
| v0.2.0 | Landing Experience |
| v0.3.0 | Projects Showcase |
| v0.4.0 | Architecture Gallery |
| v0.5.0 | Experience & Skills |
| v0.6.0 | Resume & Contact |
| v0.7.0 | AI Assistant |
| v0.8.0 | Performance, SEO & Optimization |
| v1.0.0 | Production Release |

---

# Guiding Principles

Every commit should improve the project.

Prioritize

- Code Quality
- Readability
- Maintainability
- Scalability
- Performance
- Accessibility
- Consistency

This repository should always reflect production-quality engineering practices.