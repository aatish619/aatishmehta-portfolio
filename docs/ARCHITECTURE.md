# Architecture

> Technical architecture of the Aatish Mehta portfolio.

## Overview

This is a Next.js 15 application using the App Router, React 19, and TypeScript. It follows a layered architecture that separates concerns cleanly:

```
┌─────────────────────────────────────────────────┐
│                    App Layer                     │
│         (Next.js pages, layouts, routes)         │
├─────────────────────────────────────────────────┤
│                 Sections Layer                   │
│     (Hero, Projects, Experience, Contact…)       │
├─────────────────────────────────────────────────┤
│                Components Layer                  │
│      (UI, Layout, Navigation, Effects, 3D)       │
├─────────────────────────────────────────────────┤
│                Foundation Layer                  │
│  (Design System, Animations, Hooks, Utilities)   │
├─────────────────────────────────────────────────┤
│                   Data Layer                     │
│      (Config, Constants, Types, Content)         │
└─────────────────────────────────────────────────┘
```

## Directory Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with providers
│   ├── page.tsx            # Home page (assembles sections)
│   ├── globals.css         # Global styles + design tokens
│   ├── robots.ts           # SEO robots
│   ├── sitemap.ts          # SEO sitemap
│   └── manifest.ts         # PWA manifest
│
├── components/
│   ├── ui/                 # Atomic UI components (Button, Card, Badge…)
│   ├── layout/             # Layout components (Container, Section…)
│   ├── navigation/         # Navbar, Footer, mobile nav
│   ├── shared/             # Shared composite components
│   ├── effects/            # Visual effects (GradientBorder, Glow…)
│   ├── backgrounds/        # Animated backgrounds, particles
│   ├── animations/         # Animation wrapper components
│   └── 3d/                 # React Three Fiber components
│
├── sections/               # Page sections (Hero, Projects…)
│
├── providers/              # React context providers
│   ├── theme-provider.tsx
│   ├── lenis-provider.tsx
│   └── motion-provider.tsx
│
├── hooks/                  # Custom React hooks
│
├── lib/                    # Utility libraries
│   ├── cn.ts               # className merge utility
│   ├── utils.ts            # General helpers
│   ├── fonts.ts            # Font configuration
│   ├── motion.ts           # Framer Motion variants
│   └── seo.ts              # SEO helper functions
│
├── config/                 # App configuration
│   ├── site.ts             # Site metadata
│   ├── navigation.ts       # Nav links
│   ├── theme.ts            # Theme tokens
│   └── socials.ts          # Social links
│
├── constants/              # Static constants
├── types/                  # TypeScript type definitions
├── styles/                 # Additional style files
├── content/                # MDX/markdown content (future)
└── data/                   # Structured data files
```

## Rendering Strategy

| Route | Strategy | Reason |
|-------|----------|--------|
| `/` | Static (SSG) | Portfolio home — no dynamic data |
| `/projects/[slug]` | Static (SSG) | Pre-rendered from data files |
| `/api/*` | Edge/Serverless | Future API routes (contact form, AI chat) |

## Component Architecture

Components follow a strict hierarchy:

1. **UI Components** — Smallest atomic units. No business logic. Fully reusable.
2. **Layout Components** — Structural wrappers (Container, Section). Control spacing and responsive behavior.
3. **Shared Components** — Composite components built from UI components.
4. **Section Components** — Full page sections. Consume data via props.
5. **Page Components** — Assemble sections into complete pages.

## State Management

- **Theme**: `next-themes` provider
- **Scroll**: Lenis smooth scroll provider
- **Animations**: Framer Motion + GSAP (no global state needed)
- **Future**: React Context or Zustand if complex state emerges

## Performance Strategy

- Static generation for all portfolio pages
- Dynamic imports for heavy components (3D, GSAP scenes)
- Image optimization via `next/image`
- Font optimization via `next/font`
- Bundle analysis via `@next/bundle-analyzer`
- Lighthouse target: 95+ across all categories
