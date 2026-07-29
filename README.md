# Founders Developers Network — v1 (Frontend Only)

A premium, dark-themed marketing + directory platform for a software builders'
network. **Version 1 is frontend-only**: every developer, project, and update
is mock data in `src/data/`. There is no auth, no database, and no API layer —
the app is built so a backend can be dropped in later without touching the UI.

## Stack

- **Next.js 15** (App Router) + React 18 + TypeScript
- **Tailwind CSS** with a custom dark/glassmorphism token system
- **shadcn/ui**-style primitives (Button, Badge, Input, Textarea, Card, Label)
- **Framer Motion** for page/section/card animation
- **lucide-react** for icons

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To create a production build:

```bash
npm run build
npm run start
```

## Rebranding

The organization name and identity live in one place:
`src/lib/constants.ts` → `SITE_CONFIG`. Change `orgName`, `orgShortName`,
`tagline`, `description`, `email`, `location`, and social links there and the
whole app updates — navbar, footer, hero, about page, contact page.

## Folder structure

```
src/
├── app/                     # App Router routes
│   ├── layout.tsx           # Root layout: fonts, Navbar, Footer
│   ├── page.tsx             # Landing page
│   ├── globals.css          # Design tokens + Tailwind layers
│   ├── not-found.tsx        # Custom 404
│   ├── developers/
│   │   ├── page.tsx         # Directory (search + domain filter)
│   │   └── [id]/page.tsx    # Developer profile
│   ├── projects/
│   │   ├── page.tsx         # Project listing (search + status filter)
│   │   └── [id]/page.tsx    # Project detail
│   ├── updates/page.tsx     # Timeline (category filter)
│   ├── about/page.tsx       # Mission, vision, values, team
│   └── contact/page.tsx     # Contact form (mock submit)
│
├── components/
│   ├── ui/                  # shadcn-style primitives
│   ├── layout/               # Navbar, Footer
│   ├── sections/             # Landing page sections (Hero, Mission, ...)
│   └── shared/                # Reusable cross-page components
│       (DeveloperCard, ProjectCard, UpdateCard, SearchBar, FilterBar,
│        Avatar, SkillBadge, Tag, ProgressBar, SectionTitle, StatsCard,
│        FadeIn / StaggerContainer motion helpers)
│
├── data/
│   ├── developers.ts         # 10 mock developers
│   ├── projects.ts           # 8 mock projects
│   └── updates.ts            # 12 mock timeline updates
│
└── lib/
    ├── constants.ts          # SITE_CONFIG, nav links, enums
    ├── types.ts               # Developer / Project / Update types
    └── utils.ts                # cn(), date formatting, initials
```

## Connecting a real backend later

Every data-fetching seam is isolated in `src/data/*.ts`. To wire up a real
API:

1. Replace the static arrays (`developers`, `projects`, `updates`) and their
   `getXById` helpers with `fetch`/ORM calls.
2. Convert the pages that read them directly (e.g. `app/developers/page.tsx`)
   into Server Components that `await` the new data functions, or keep them
   client-side and fetch through a route handler.
3. The `Developer`, `Project`, and `Update` types in `src/lib/types.ts` are
   the contract — keep your API responses shaped the same way and the UI
   needs no changes.
4. The contact form in `app/contact/page.tsx` currently just flips local
   state on submit — swap `handleSubmit` for a real request to your backend
   or a form service.

## Accessibility & responsiveness notes

- All interactive elements have visible focus rings (`:focus-visible`).
- Reduced-motion is respected globally via a `prefers-reduced-motion` query.
- Layout is mobile-first; every page has been designed down to ~360px width.
