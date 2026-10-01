# ByteSpace New — Doin Tech Frontend Assessment

A responsive recreation of the **ByteSpace New** landing page from the provided Figma design, built for the Doin Tech frontend assessment.

## Live Demo

**Vercel:** https://bytescpace-task-doin.vercel.app/

**GitHub:** https://github.com/akash-m-abrrar/Bytespace_Task_DoinTech

## Project Overview

The project focuses on translating the provided Figma design into a polished, responsive React application while keeping the codebase maintainable, typed, reusable, and feature-oriented.

The implementation includes:

- Responsive ByteSpace landing page
- Figma-matched visual sections and exported design assets
- Responsive navbar with scroll-aware styling
- Course discovery with category filters and course cards
- Learning path categories
- Professional growth section
- Course creation/management section
- Creator call-to-action section
- Community testimonials
- Footer with newsletter UI and navigation links
- Sign In and Sign Up UI pages
- React Router navigation between `/`, `/sign-in`, and `/sign-up`
- Responsive mobile navigation drawer
- Production deployment on Vercel

> Authentication is currently UI-only for this assessment. No backend authentication or API integration is included.

## Tech Stack

| Technology | Purpose |
| --- | --- |
| React | UI development |
| TypeScript | Type-safe application code |
| Vite | Development server and production build |
| Tailwind CSS v4 | Styling and responsive layout |
| shadcn/ui | Reusable UI foundation/components |
| React Router | Client-side routing |
| Redux Toolkit | Shared client-state foundation |
| React Redux | Typed Redux bindings |
| Lucide React | Icons |
| pnpm | Package management |
| ESLint | Code quality and linting |
| Vercel | Production deployment |

## Design & Implementation

The project follows a **feature-oriented architecture** and keeps repeated UI concerns in shared components.

### Shared UI / Layout

- `Navbar`
- `GridBackground`
- `SectionHeader`
- Reusable UI utilities/components
- Shared Tailwind styling conventions
- Figma-exported assets under `public/Doin_Assets_png/`

### Landing Page Sections

Implemented sections, in order:

1. Hero
2. Company Logo Strip
3. Course Discovery
4. Learning Paths
5. Professional Growth
6. Create & Manage Courses Easily
7. Creator CTA
8. Testimonials
9. Footer

### Authentication

Implemented as a small shared feature:

- `/sign-in`
- `/sign-up`
- Shared authentication layout
- Shared visual system and grid background
- Responsive desktop/mobile layouts
- Navbar links connected to the auth routes

## Project Architecture

```text
src/
├── app/
│   ├── hooks.ts
│   ├── router.tsx
│   └── store.ts
│
├── components/
│   ├── common/
│   │   ├── GridBackground.tsx
│   │   └── SectionHeader.tsx
│   ├── layout/
│   │   └── Navbar.tsx
│   ├── sections/
│   │   ├── CompanyLogoStrip.tsx
│   │   ├── Footer.tsx
│   │   └── HeroSection.tsx
│   └── ui/
│
├── features/
│   ├── auth/
│   │   ├── components/
│   │   ├── data/
│   │   ├── pages/
│   │   └── types.ts
│   │
│   ├── course-discovery/
│   │   ├── components/
│   │   ├── data/
│   │   └── types.ts
│   │
│   ├── learning-paths/
│   │   ├── components/
│   │   ├── data/
│   │   └── types.ts
│   │
│   ├── professional-growth/
│   │   ├── components/
│   │   ├── data/
│   │   └── types.ts
│   │
│   ├── course-management/
│   │   ├── components/
│   │   ├── data/
│   │   └── types.ts
│   │
│   ├── creator-cta/
│   │   ├── components/
│   │   ├── data/
│   │   └── types.ts
│   │
│   └── testimonials/
│       ├── components/
│       ├── data/
│       └── types.ts
│
├── lib/
│   └── utils.ts
│
└── pages/
    └── HomePage.tsx

public/
└── Doin_Assets_png/
    └── Figma-exported image assets
```

## Routing

```text
/          → ByteSpace landing page
/sign-in   → Sign In page
/sign-up   → Sign Up page
```

## Responsive Design

The implementation is designed across:

- Desktop
- Tablet
- Mobile

The navbar switches to a mobile drawer below the `md` breakpoint, while the landing-page sections use responsive grids, stacking, spacing, and typography.

## Assessment / Project Requirements

The project was built around the provided Doin Tech frontend assessment requirements:

- Recreate the ByteSpace landing page from the supplied Figma design
- Use a clean, maintainable React/TypeScript implementation
- Keep the layout responsive
- Use the provided design assets where appropriate
- Organize code using reusable components and feature-oriented modules
- Provide optional Sign In / Sign Up screens
- Keep the GitHub repository public
- Use feature branches and pull requests for implementation work
- Deploy the completed application to Vercel
- Provide the live URL and repository URL for submission

## Development

Install dependencies:

```bash
pnpm install
```

Run the development server:

```bash
pnpm dev
```

Run lint:

```bash
pnpm lint
```

Create a production build:

```bash
pnpm build
```

## Git Workflow

Feature work was organized using branches such as:

```text
feat/navbar
feat/hero-section
feat/company-logo-strip
feat/course-discovery
feat/learning-paths
feat/professional-growth
feat/creator-cta
feat/testimonials-footer
feat/auth-pages
```

The completed work was merged into `main` and deployed from the production branch.

## Notes

- Static content is represented using typed local data.
- No backend or persistent authentication service is connected.
- The current authentication screens are presentation/UI flows.
- Figma-exported assets are reused from `public/Doin_Assets_png/`.
- The implementation intentionally avoids unnecessary abstractions and keeps the main page composition easy to follow.

## Author

**Akash Muhammad Abrrar**

Frontend / Full Stack Web Developer

Dhaka, Bangladesh
