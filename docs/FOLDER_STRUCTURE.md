# Folder Structure

> Complete directory map for the portfolio project.
> Update this document when adding new directories.

```
aatishmehta-portfolio/
├── docs/                           # Project documentation
│   ├── PROJECT_RULES.md
│   ├── ARCHITECTURE.md
│   ├── DESIGN_SYSTEM.md
│   ├── GIT_WORKFLOW.md
│   ├── CODING_STANDARDS.md
│   ├── PROJECT_ROADMAP.md
│   ├── TECH_STACK.md
│   ├── FOLDER_STRUCTURE.md
│   ├── AI_AGENT_GUIDE.md
│   └── DECISIONS.md
│
├── public/                         # Static assets
│   ├── images/                     # General images
│   ├── videos/                     # Video files
│   ├── apps/                       # App screenshots/demos
│   ├── screenshots/                # UI screenshots
│   ├── logos/                       # Logo assets
│   ├── icons/                      # Icon files & favicons
│   ├── architecture/               # Architecture diagrams
│   └── resume/                     # Resume PDF
│
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout
│   │   ├── page.tsx                # Home page
│   │   ├── globals.css             # Global styles + design tokens
│   │   ├── robots.ts               # SEO robots
│   │   ├── sitemap.ts              # SEO sitemap
│   │   └── manifest.ts            # PWA manifest
│   │
│   ├── components/
│   │   ├── ui/                     # Atomic UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── glass-card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── tag.tsx
│   │   │   ├── heading.tsx
│   │   │   ├── text.tsx
│   │   │   ├── divider.tsx
│   │   │   ├── gradient-border.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── empty-state.tsx
│   │   │   └── loading-screen.tsx
│   │   │
│   │   ├── layout/                 # Layout components
│   │   │   ├── container.tsx
│   │   │   └── section.tsx
│   │   │
│   │   ├── navigation/            # Navigation components
│   │   │   ├── navbar.tsx
│   │   │   └── footer.tsx
│   │   │
│   │   ├── shared/                # Shared composite components
│   │   │
│   │   ├── effects/               # Visual effect components
│   │   │   └── animated-background.tsx
│   │   │
│   │   ├── backgrounds/           # Background components
│   │   │
│   │   ├── animations/            # Animation wrapper components
│   │   │   ├── fade-in.tsx
│   │   │   ├── stagger-children.tsx
│   │   │   └── scroll-reveal.tsx
│   │   │
│   │   └── 3d/                    # React Three Fiber components
│   │
│   ├── sections/                   # Page sections (future phases)
│   │
│   ├── providers/                  # React context providers
│   │   ├── theme-provider.tsx
│   │   ├── lenis-provider.tsx
│   │   └── motion-provider.tsx
│   │
│   ├── hooks/                      # Custom React hooks
│   │   ├── use-mouse-position.ts
│   │   ├── use-scroll-progress.ts
│   │   └── use-media-query.ts
│   │
│   ├── lib/                        # Utility libraries
│   │   ├── cn.ts                   # Class name merge
│   │   ├── utils.ts                # General utilities
│   │   ├── fonts.ts                # Font configuration
│   │   ├── motion.ts               # Framer Motion variants
│   │   └── seo.ts                  # SEO utilities
│   │
│   ├── config/                     # App configuration
│   │   ├── site.ts                 # Site metadata
│   │   ├── navigation.ts           # Nav items
│   │   ├── theme.ts                # Theme constants
│   │   └── socials.ts              # Social links
│   │
│   ├── constants/                  # Static constants
│   │   └── index.ts
│   │
│   ├── types/                      # TypeScript types
│   │   ├── project.ts
│   │   ├── experience.ts
│   │   ├── architecture.ts
│   │   ├── skill.ts
│   │   └── social.ts
│   │
│   ├── styles/                     # Additional styles
│   │
│   ├── content/                    # MDX/markdown content (future)
│   │   ├── projects/
│   │   ├── architecture/
│   │   └── blog/
│   │
│   └── data/                       # Structured data
│       ├── projects/
│       ├── experience/
│       ├── skills/
│       └── socials/
│
├── .env.example                    # Environment template
├── .eslintrc.json                  # ESLint config
├── .prettierrc                     # Prettier config
├── .prettierignore                 # Prettier ignore
├── components.json                 # shadcn/ui config
├── next.config.ts                  # Next.js config
├── package.json                    # Dependencies
├── postcss.config.mjs              # PostCSS config
├── tailwind.config.ts              # Tailwind config
├── tsconfig.json                   # TypeScript config
└── README.md                       # Project overview
```

## Directory Purposes

| Directory | Purpose | Phase |
|-----------|---------|-------|
| `src/components/ui/` | Atomic, stateless UI primitives | 1 |
| `src/components/layout/` | Structural layout wrappers | 1 |
| `src/components/navigation/` | Navbar, Footer, breadcrumbs | 1 |
| `src/components/shared/` | Composite reusable components | 2+ |
| `src/components/effects/` | Visual effects (glow, particles) | 1+ |
| `src/components/backgrounds/` | Animated backgrounds | 2+ |
| `src/components/animations/` | Animation wrapper components | 1 |
| `src/components/3d/` | Three.js scenes and objects | 2+ |
| `src/sections/` | Full page sections | 2+ |
| `src/providers/` | React context providers | 1 |
| `src/hooks/` | Custom React hooks | 1 |
| `src/lib/` | Utility functions and configs | 1 |
| `src/config/` | Application configuration | 1 |
| `src/types/` | TypeScript type definitions | 1 |
| `src/data/` | Portfolio data (typed) | 2+ |
| `src/content/` | MDX/markdown content | 4+ |
