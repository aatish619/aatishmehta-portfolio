# Decisions

> Architectural Decision Records (ADRs) for the portfolio project.
> Every significant decision is documented here with rationale.

---

## ADR-001: Use Next.js 15 with App Router

**Date**: 2024-01-01
**Status**: Accepted

**Context**: Need a React framework for a production portfolio with SSG, SSR, and API routes.

**Decision**: Next.js 15 with App Router.

**Rationale**:
- App Router is the future of Next.js (stable since v13.4).
- React Server Components for performance.
- Built-in image/font optimization.
- Vercel deployment is first-class.
- Static generation for portfolio pages = fast TTFB.

---

## ADR-002: Tailwind CSS 3.4.x over v4

**Date**: 2024-01-01
**Status**: Accepted

**Context**: Tailwind v4 is available but ecosystem support (especially `shadcn/ui`) is still stabilizing.

**Decision**: Use Tailwind CSS 3.4.x.

**Rationale**:
- shadcn/ui has mature, battle-tested support for v3.
- `tailwindcss-animate` plugin works seamlessly with v3.
- v4's CSS-first configuration is promising but breaking changes are risky for a long-term project.
- Can upgrade to v4 in a future phase when ecosystem stabilizes.

---

## ADR-003: Dark Mode Only

**Date**: 2024-01-01
**Status**: Accepted

**Context**: Should we support light and dark modes?

**Decision**: Dark mode only. No light mode toggle.

**Rationale**:
- Premium, developer-focused aesthetic.
- Reduces design surface area and testing burden.
- Consistent visual experience across all users.
- Aligned with the design language of Vercel, Linear, and Raycast.

---

## ADR-004: Framer Motion + GSAP for Animations

**Date**: 2024-01-01
**Status**: Accepted

**Context**: Need an animation strategy that's both easy for simple effects and powerful for complex ones.

**Decision**: Use Framer Motion as the primary animation library, GSAP for complex timelines.

**Rationale**:
- Framer Motion: Declarative, React-native, great for UI transitions.
- GSAP: Industry standard for complex, timeline-based, scroll-driven animations.
- Lenis: Smooth scroll that works with both.
- Avoid overlap — Framer Motion for component animations, GSAP for advanced effects.

---

## ADR-005: shadcn/ui for Component Primitives

**Date**: 2024-01-01
**Status**: Accepted

**Context**: Need accessible, customizable UI primitives.

**Decision**: Use shadcn/ui (copy-paste components using Radix primitives).

**Rationale**:
- Not a library — components are owned by us.
- Full customization control.
- Built on Radix UI (best-in-class accessibility).
- Works perfectly with Tailwind and CVA.
- No version lock-in.

---

## ADR-006: File Naming Convention

**Date**: 2024-01-01
**Status**: Accepted

**Context**: Need consistent file naming across the project.

**Decision**: kebab-case for all files, PascalCase for component exports.

**Rationale**:
- kebab-case is the Next.js convention.
- Consistent with shadcn/ui naming.
- Avoids case-sensitivity issues across OS.
- PascalCase exports make JSX usage clear.

---

## ADR-007: Geist + Inter Font Strategy

**Date**: 2024-01-01
**Status**: Accepted

**Context**: Need a premium, modern font stack.

**Decision**: Geist for headings, Inter for body, Geist Mono for code.

**Rationale**:
- Geist is Vercel's custom font — modern, geometric, premium feel.
- Inter is the industry standard for UI body text.
- Geist Mono for code blocks maintains the Vercel aesthetic.
- All available via `next/font` for zero layout shift.

---

*Add new decisions below this line, following the ADR format above.*
