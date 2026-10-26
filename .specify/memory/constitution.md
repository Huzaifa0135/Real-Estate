# EasyProperty Constitution

Project-wide engineering principles. The constitution wins over any other document unless formally amended.

## Article 1 — Specification First
1. No feature is implemented without an approved `spec.md` containing measurable acceptance criteria.
2. Ambiguities are resolved before planning.
3. `spec.md`, `plan.md`, and `tasks.md` are the source of truth.

## Article 2 — Security and Privacy
1. Authentication is required for private data.
2. **Organization-level authorization** is enforced server-side. Knowing an ID is not authorization.
3. Secrets live only in `.env`. Never commit them.
4. Private documents are never placed in `public/`.
5. Error responses never leak stack traces, SQL, or credentials.

## Article 3 — Data Integrity
1. Money is stored using `Decimal` — never floating point.
2. Schema changes go through reviewed Prisma migrations.
3. Multi-step changes use transactions.

## Article 4 — Truthful Information
1. Every published project displays its **information source** and **update date**.
2. Information is labeled as *submitted*, *reviewed*, or *verified* — never overstated.
3. Risk flags are explanations, **not** proof of fraud.
4. Financial calculations are estimates, not guarantees.

## Article 5 — Architecture
1. Single Next.js App Router application. No microservices.
2. Application code lives under `src/`.
3. Domain logic lives in `src/features/`.
4. Generic UI primitives live in `src/components/ui/`.
5. Server-only code and credentials must not enter client bundles.

## Article 6 — Code Quality
1. TypeScript strict mode; avoid `any`.
2. Follow `docs/engineering/naming-conventions.md`.
3. Linting and type checking must pass before a feature is accepted.

## Article 7 — Testing
1. Business rules and calculations are unit-tested.
2. Authorization is integration/e2e tested.
3. Critical journeys have e2e coverage.

## Article 8 — Design System & Theming
1. **Brand Identity:** EasyProperty logo (Navy `#0A2540` + Blue `#0070F3`) must be used everywhere.
2. **Both light and dark themes are mandatory.** A feature is not complete unless it renders correctly in both themes.
3. All colors come from CSS variables. Hardcoded hex in `src/components/**` is forbidden.
4. WCAG AA minimum contrast (4.5:1) must be met in both themes.
5. Interactive elements have visible focus rings and minimum tap targets of 44×44 px.
6. No horizontal scroll on any page at any viewport width ≥ 320px.

## Article 9 — Documentation and Traceability
1. Significant decisions get an ADR.
2. SDD artifacts remain consistent with the implementation.

## Article 10 — Definition of Done
A module is complete when:
- Spec is approved.
- Implementation matches requirements.
- Server-side validation and authorization are implemented.
- DB changes are migrated.
- Success, empty, invalid, not-found, and error states are handled.
- Tests pass.
- Lint and type checks pass.
- Docs are updated.
- Verified work is committed.