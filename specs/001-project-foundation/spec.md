# Feature Specification — 001 Project Foundation

**Feature ID:** 001
**Name:** Project Foundation
**Status:** Approved
**Owner:** Huzaifa

## 1. Problem Statement
The repository requires a running Next.js shell, a configured SDD workflow, a code structure that matches the target layout, and the engineering documentation needed for subsequent features.

## 2. Goals
- Initialize Next.js + TypeScript + Tailwind.
- Establish the target repository layout.
- Establish the project constitution and SDD artifacts.
- Implement Navy + Blue design system with light/dark themes.
- Configure linting, type checking, and test runners.

## 3. Functional Requirements
- **FR-1** App starts with `npm run dev`.
- **FR-2** Dashboard route exists behind auth stub.
- **FR-3** Layout components (Header, Footer, Sidebar) are responsive.
- **FR-4** Navy/Blue tokens configured in Tailwind.
- **FR-5** UI primitives (Button, Input, Card, DataTable, Dialog) exist.
- **FR-11** Both light and dark themes implemented (`next-themes`).
- **FR-12** Theme toggle in header.
- **FR-13** No hardcoded hex in components.
- **FR-18** Official EasyProperty logo used.
- **FR-20** Brand colors match logo (`--primary: #0A2540`, `--secondary: #0070F3`).

## 4. Acceptance Criteria
| ID | Criterion | Verification |
|---|---|---|
| AC-1 | `npm run dev` serves the app. | Manual / Playwright |
| AC-2 | Dashboard placeholder renders and is guarded. | Playwright |
| AC-4 | Navy/Blue tokens used in components. | Code review |
| AC-11 | Theme toggle switches and persists. | Playwright |
| AC-12 | Lighthouse accessibility ≥ 95 in both themes. | Playwright + axe |
| AC-17 | Logo renders correctly in both themes. | Manual / Playwright |
| AC-18 | No horizontal scroll at 320px. | Playwright screenshot |