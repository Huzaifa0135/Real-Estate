# Tasks — 001 Project Foundation

## Day 1 — Monday, Oct 26
- [ ] `node --version` succeeds.
- [ ] `npx create-next-app@latest` succeeds.
- [ ] `npm run dev` opens the app.

## Day 2 — Tuesday, Oct 27
- [ ] Create folder structure (`src/components/ui`, `src/features`, etc.).
- [ ] Add `.env.example`.
- [ ] Update `.gitignore`.

## Day 3 — Wednesday, Oct 28
- [ ] Install `prisma` and `@prisma/client`.
- [ ] Create `prisma/schema.prisma`.
- [ ] Create `prisma.config.ts`.
- [ ] Set `DATABASE_URL` in `.env`.
- [ ] Run `npx prisma migrate dev --name init`.

## Day 4 — Thursday, Oct 29
- [ ] Initialize Spec Kit for Cline.
- [ ] Write `constitution.md`.

## Day 5 — Friday, Oct 30
- [ ] Write `spec.md`, `plan.md`, `tasks.md`.
- [ ] Write `README.md` and `MASTER_ROADMAP.md`.
- [ ] Commit baseline.

## Day 6 — Saturday, Oct 31
- [ ] Save `logo.svg` to `public/`.
- [ ] Configure `tailwind.config.ts` with Navy and Blue scales.
- [ ] Add CSS variables to `globals.css`.
- [ ] Install `next-themes` and configure `ThemeProvider`.
- [ ] Build `<ThemeToggle />`, Header, Footer.
- [ ] No hardcoded hex in components.

## Day 7 — Sunday, Nov 1
- [ ] Add `error.tsx`, `not-found.tsx`.
- [ ] Setup Vitest and write unit tests.
- [ ] Setup Playwright and write E2E smoke tests.
- [ ] Verify both themes.
- [ ] Run `npm run lint` and `npx tsc --noEmit`.