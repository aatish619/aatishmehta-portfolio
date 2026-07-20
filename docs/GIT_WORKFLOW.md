# Git Workflow

> Branching, committing, and release strategy for the portfolio project.

## Branch Strategy

```
main                ← production (deployed to Vercel)
├── develop         ← integration branch
│   ├── feature/*   ← feature branches
│   ├── fix/*       ← bug fix branches
│   └── chore/*     ← maintenance branches
```

## Rules

1. **Never push directly to `main`.**
2. **Never push directly to `develop`.**
3. All work happens on feature branches.
4. Feature branches are merged into `develop` via Pull Request.
5. `develop` is merged into `main` when a phase is complete and verified.

## Branch Naming

| Type | Pattern | Example |
|------|---------|---------|
| Feature | `feature/<phase>-<description>` | `feature/phase-1-foundation` |
| Fix | `fix/<description>` | `fix/navbar-blur-issue` |
| Chore | `chore/<description>` | `chore/update-dependencies` |

## Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>
```

### Types

| Type | Usage |
|------|-------|
| `feat` | New feature or component |
| `fix` | Bug fix |
| `docs` | Documentation only |
| `style` | Formatting, no code change |
| `refactor` | Code change, no new feature or fix |
| `perf` | Performance improvement |
| `chore` | Maintenance, dependencies |
| `test` | Adding tests |

### Examples

```
feat(ui): add GlassCard component
feat(animation): create fade-up motion variant
fix(navbar): resolve blur on mobile Safari
docs: update ARCHITECTURE.md with new section layer
chore(deps): upgrade framer-motion to 12.x
```

## Pull Request Process

1. Create PR from feature branch into `develop`.
2. Title follows conventional commit format.
3. Description includes:
   - What was built
   - Key decisions
   - Screenshots if UI changes
   - Testing done
4. Self-review checklist:
   - [ ] No TypeScript errors
   - [ ] No ESLint errors
   - [ ] Build passes
   - [ ] Responsive tested
   - [ ] Accessible
5. Merge using **Squash and Merge**.

## Phase Release Process

1. All phase features merged into `develop`.
2. Final verification on `develop`.
3. Create PR from `develop` → `main`.
4. Tag release: `v0.1.0`, `v0.2.0`, etc.
