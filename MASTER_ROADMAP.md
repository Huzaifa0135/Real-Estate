# MASTER ROADMAP — EasyProperty

**Start Date:** 26 October 2026  
**Target Completion:** 8 March 2027  
**Duration:** 19 weeks + 1 submission week (≈ 4.5 months)  
**Primary Developer:** Huzaifa

## Phase Overview

| Phase | Weeks | Dates | Focus |
|---|---|---|---|
| **1. Foundation** | 1–4 | Oct 26 – Nov 22 | Setup, architecture, design system, auth |
| **2. Core Domain** | 5–9 | Nov 23 – Dec 27 | Organizations, projects, plots, documents |
| **3. Investor Features** | 10–13 | Dec 28 – Jan 24 | Search, comparison, calculators, enquiries |
| **4. Advanced Features** | 14–16 | Jan 25 – Feb 14 | Dashboard, admin, due diligence |
| **5. Finalization** | 17–19 | Feb 15 – Mar 7 | Notifications, testing, deployment |
| **Submission** | — | Mar 8 | Final submission |

## WEEK 1 — 26 Oct – 1 Nov 2026
**Theme:** Project Setup & First Running App (`001-project-foundation`)

| Day | Date | Tasks |
|---|---|---|
| Mon | Oct 26 | Verify Node.js; create `package.json`; install Next.js + React + TS. |
| Tue | Oct 27 | Install Tailwind + shadcn/ui; create folder structure; `.gitignore` + `.env.example`. |
| Wed | Oct 28 | Install Prisma; create `schema.prisma`; set up PostgreSQL; first migration. |
| Thu | Oct 29 | Initialize Spec Kit; create `constitution.md`. |
| Fri | Oct 30 | Write `specs/001/`, `README.md`, `MASTER_ROADMAP.md`. |
| Sat | Oct 31 | **Design System:** Navy `#0A2540` + Blue `#0070F3`, `next-themes`, Header/Footer/Logo. |
| Sun | Nov 1 | Add `error.tsx`, `not-found.tsx`; Setup Vitest + Playwright; run tests. |

## WEEK 2 — 2 – 8 Nov 2026
**Theme:** Architecture & Database Design

| Day | Tasks |
|---|---|
| Mon | Finalize roles matrix; write `access-control.md`. |
| Tue | Define entities; write `architecture/overview.md`. |
| Wed | Finalize `schema.prisma` with ALL models. |
| Thu | Write `naming-conventions.md` and `api-standards.md`. |
| Fri | Write `error-handling.md`; ADRs. |
| Sat | Review specs 001-003 for contradictions. |
| Sun | Approve architecture baseline; commit. |

## WEEK 3 — 9 – 15 Nov 2026
**Theme:** Application Foundation (Converge)
- Polish layouts, responsive checks.
- Complete UI primitives (DataTable, Dialog, Tabs).
- Write unit and e2e tests.
- Mark `specs/001` complete.

## WEEK 4 — 16 – 22 Nov 2026
**Theme:** Authentication (`004-authentication`)
- Write spec, plan, tasks.
- Configure Better Auth.
- Implement login/register UI.
- Protect dashboard routes.
- Security tests.

## WEEK 5 — 23 – 29 Nov 2026
**Theme:** Organization Profiles (`005-organizations`)
- Prisma models for Organization and Membership.
- API: Create, Read, Update.
- UI: Org creation, settings, member invite.

## WEEK 6 — 30 Nov – 6 Dec 2026
**Theme:** Project Management (`006-projects`)
- Prisma models for Project.
- API: Create, list, update, submit-review.
- UI: Project list, create/edit form.

## WEEK 7 — 7 – 13 Dec 2026
**Theme:** Plot Inventory (`007-plots`)
- Prisma models for Plot.
- API: CRUD under project.
- UI: Inventory table, add/edit forms.

## WEEK 8 — 14 – 20 Dec 2026
**Theme:** Document Register (`008-documents`)
- Prisma models for Document.
- API: Upload, review status transition.
- UI: Document upload, review queue.

## WEEK 9 — 21 – 27 Dec 2026
**Theme:** Public Directory (`009-directory`)
- Build public project listing page.
- Build project detail page.
- Show source, update date, status.

## WEEK 10 — 28 Dec – 3 Jan 2027
**Theme:** Search & Filtering (`010-search`)
- Text and location search.
- Price, type, size filters.
- Pagination.

## WEEK 11 — 4 – 10 Jan 2027
**Theme:** Investor Comparison (`011-comparison`)
- Selection UI.
- Comparison table.
- Missing data handling.

## WEEK 12 — 11 – 17 Jan 2027
**Theme:** Calculators (`012-calculators`)
- Installment schedule function.
- Total cost calculator.
- Display assumptions.

## WEEK 13 — 18 – 24 Jan 2027
**Theme:** Investor Enquiries (`013-enquiries`)
- Prisma model for Enquiry.
- Investor submit UI.
- Org inbox and response.

## WEEK 14 — 25 – 31 Jan 2027
**Theme:** Society Dashboard (`014-dashboard`)
- Summary statistics.
- Data aggregations.
- Recent activity.

## WEEK 15 — 1 – 7 Feb 2027
**Theme:** Admin Moderation (`015-admin`)
- Review queue.
- Approve/reject actions.
- Audit log.

## WEEK 16 — 8 – 14 Feb 2027
**Theme:** Due Diligence (`016-due-diligence`)
- Rule engine.
- Checklist content.
- Risk flag UI.

## WEEK 17 — 15 – 21 Feb 2027
**Theme:** Notifications (`017-notifications`)
- In-app notifications.
- Read status.
- Notification bell.

## WEEK 18 — 22 – 28 Feb 2027
**Theme:** Testing & Security (`018-testing`)
- Expand Vitest.
- Playwright critical paths.
- Security boundary tests.

## WEEK 19 — 1 – 7 Mar 2027
**Theme:** Deployment & Final (`019-deployment`)
- Deploy to Vercel + Neon.
- Demo data.
- User guide and final docs.

## SUBMISSION — 8 March 2027
- Final acceptance checklist.
- All tests green.
- Submit.