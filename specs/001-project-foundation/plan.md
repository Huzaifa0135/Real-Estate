# Implementation Plan — 001 Project Foundation

**Feature:** 001 Project Foundation
**Week:** 1 (Oct 26 – Nov 1, 2026)

## Daily Work Plan (32 hours)

### Day 1 — Monday, Oct 26 (4h)
- Verify Node.js/npm.
- Scaffold Next.js app (`npx create-next-app@latest`).
- Verify `npm run dev`.
- **Deliverable:** Running Next.js app.

### Day 2 — Tuesday, Oct 27 (4h)
- Create folders: `src/components/ui`, `src/features`, `src/lib`, `tests`.
- Add `.env.example` and `.gitignore`.
- **Deliverable:** Structure ready.

### Day 3 — Wednesday, Oct 28 (4h)
- Install Prisma.
- Create `prisma/schema.prisma` and `prisma.config.ts`.
- Set up PostgreSQL and run first migration.
- **Deliverable:** DB connected.

### Day 4 — Thursday, Oct 29 (4h)
- Initialize Spec Kit (`specify init`).
- Create `.specify/memory/constitution.md`.
- **Deliverable:** SDD workflow ready.

### Day 5 — Friday, Oct 30 (4h)
- Write `spec.md`, `plan.md`, `tasks.md` (this file).
- Write `README.md` and `MASTER_ROADMAP.md`.
- **Deliverable:** SDD artifacts committed.

### Day 6 — Saturday, Oct 31 (6h)
- Save `logo.svg`.
- Configure Tailwind with Navy/Blue tokens.
- Setup `next-themes` and `<ThemeToggle />`.
- Build Header, Footer.
- **Deliverable:** Themed shell.

### Day 7 — Sunday, Nov 1 (6h)
- Add `error.tsx`, `not-found.tsx`.
- Setup Vitest and Playwright.
- Write first unit tests and smoke tests.
- **Deliverable:** Foundation complete and tested.