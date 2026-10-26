# EasyProperty

### Housing Project Transparency & Investor Intelligence Platform

EasyProperty is a Pakistan-focused web application designed to connect housing societies and developers with prospective buyers and investors. Participating organizations can maintain structured information about their projects, plots, installment plans and document statuses. Investors can discover and compare projects, review the source and freshness of information, use basic financial calculators, and submit enquiries.

> **Project status:** Academic MVP in development  
> **Development method:** Spec-Driven Development (SDD) using GitHub Spec Kit  
> **Target completion:** 9 March 2027  
> **Primary developer:** Huzaifa

---

## Table of Contents

- [Project Overview](#project-overview)
- [Problem and Proposed Solution](#problem-and-proposed-solution)
- [User Pain Points in Existing Tools and EasyProperty Solutions](#user-pain-points-in-existing-tools-and-easyproperty-solutions)
- [Goals and MVP Scope](#goals-and-mvp-scope)
- [User Roles](#user-roles)
- [Technology Stack](#technology-stack)
- [Development Tools](#development-tools)
- [Professional SDD Repository Structure](#professional-sdd-repository-structure)
- [SDD Workflow](#sdd-workflow)
- [Feature Modules](#feature-modules)
- [20-Week Development Roadmap](#20-week-development-roadmap)
- [Engineering Standards](#engineering-standards)
- [Database and API Standards](#database-and-api-standards)
- [Testing Strategy](#testing-strategy)
- [Getting Started](#getting-started)
- [Definition of Done](#definition-of-done)
- [Scope Limits and Risks](#scope-limits-and-risks)
- [Official Documentation](#official-documentation)

---

## Project Overview

EasyProperty focuses on two connected groups:

1. **Housing societies and developers** maintain project profiles, plot information, installment schedules, document metadata and enquiry responses.
2. **Investors and prospective buyers** explore projects, compare available information, review due-diligence indicators, estimate basic costs and contact participating organizations.

A platform administrator manages moderation, reports and publication controls. The initial release is a demonstrable academic MVP, not a replacement for official land-record or property-registration authorities.

## Problem and Proposed Solution

Property information can be spread across advertisements, agent conversations, project documents and separate follow-up channels. Investors may struggle to compare information consistently or determine what has and has not been independently verified. Organizations also need a structured way to publish updates and respond to interested buyers.

EasyProperty proposes to address these challenges through:

- Structured project and plot information.
- Public project discovery and search filters.
- Side-by-side comparison of project facts and installment terms.
- Visible information sources, update dates and document-review statuses.
- Basic installment and financial-estimation tools with clear assumptions.
- Investor enquiries and status tracking.
- Organization-level dashboards and controlled administration.
- Due-diligence checklists and explainable warnings for incomplete or unusual information.

These features represent a **proposed value proposition**, not proof that EasyProperty has already demonstrated market demand. A small pilot with a willing society/developer and feedback from target investors should be used to validate it.

## User Pain Points in Existing Tools and EasyProperty Solutions

This section compares the *types of tools currently available* in Pakistan's property ecosystem and the user problems EasyProperty intends to address. It is not a claim that every existing platform has every limitation listed below. Existing services have different purposes: property portals focus on discovery and advertising, official land-record services handle specific government records/services, and housing-society software commonly focuses on internal operational workflows.

### Existing tools and the gaps EasyProperty will investigate

| Existing tool/category | What users can already do | Potential user pain point or remaining gap | EasyProperty response | Boundary / validation needed |
|---|---|---|---|---|
| Property listing portals, such as [Zameen.com](https://www.zameen.com/) | Search for sale/rent listings, browse projects and agents, use filters, area guides, property tools and other discovery features. | A person comparing several projects may still need to collect details, payment terms, source documents and follow-up history across different pages, conversations and organizations. This is a workflow hypothesis, not a claim that the portal lacks its advertised tools. | Provide project-focused comparison, visible information source/update date, installment-term summaries and a connected enquiry history in one workflow. | Compare current products directly and interview investors before asserting that this gap is widely experienced. |
| Social media, messaging and agent conversations | Ask questions, receive informal updates, send photos/documents and contact agents or developers. | Details can be spread across conversations; it may be hard to compare versions, retain a structured record of a response or see the current status of an enquiry. | Link each enquiry to a project, store status and response history, and show the latest published project information. | Do not attempt to scrape private conversations. Information is added by authorized users or supplied through permitted integrations. |
| Official land-record and government portals, such as the [Punjab Land Records Authority (PLRA)](https://www.punjab-zameen.gov.pk/) | Access official services offered by the relevant authority, including specified land-record, registry and housing-society-status services. | Investors may need to identify which official authority/service is relevant, understand what a record can confirm and separately compare commercial project information. Official data access is jurisdiction- and service-specific. | Provide a due-diligence checklist, source links and explicit labels showing whether information is society-submitted, reviewed by EasyProperty or checked against an authoritative source. | EasyProperty does not replace PLRA, a registrar, a development authority, a lawyer or an official verification process. Do not claim an official integration until it is actually authorized and implemented. |
| Housing-society/community management tools, such as [Hamari Society](https://hamarisociety.pk/) and [Manzhil](https://www.manzhil.com/pakistan) | Their published materials describe workflows such as resident records, billing/dues, complaints, announcements, visitor management and communication. | A prospective investor's workflow—researching a project, comparing installment terms, checking the source/status of project information and asking pre-purchase questions—is different from a resident/community operations workflow. Some providers may support additional features; confirm capabilities directly. | Focus EasyProperty's initial scope on the bridge between society/developer-provided project information and investor-facing discovery, comparison, document-status visibility and enquiries. | Do not recreate every resident-management feature. Interview organizations to confirm which records and tasks they need before extending into full society ERP functionality. |
| Spreadsheets and manually maintained project records | Staff can track plot inventory, price lists, installments and document status using existing office tools. | Multiple copies can become inconsistent; it may be difficult to preserve a clear change history or share a current, approved public version. These are risks to validate with each pilot organization, not assumptions about all societies. | Provide structured project/plot records, role-based editing, documented status changes and a public view limited to authorized/published information. | Import only records the organization is authorized to provide. Test migration and reconciliation with sample data before using production records. |
| Standalone calculators and informal investment estimates | Users can calculate payments or consider prices with general calculators and market estimates. | Different calculations may use different assumptions; users can mistake estimates or marketing claims for guaranteed returns or formal valuations. | Provide transparent inputs and formulas for installment totals and optional estimates, showing the assumptions and labeling outputs as estimates. | No guaranteed-return claims, financial advice claims or formal valuation claims. Use appropriate numeric precision for money. |
| Property/project advertisements and promotional materials | Users receive information from advertisers, developers, agents and project marketing channels. | Claims about location, charges, facilities or approval status may need independent checking. Pakistan's Competition Commission has publicly identified deceptive marketing, hidden charges and misrepresentation of project approval status as concerns in the real-estate sector. ([CCP open-hearing report, 27 August 2026](https://beta.cc.gov.pk/home/viewpressreleases/766); [CCP Tribunal decision announcement, 20 April 2026](https://cc.gov.pk/home/viewpressreleases/743)). | Show source, date, submission/review status, reported discrepancies and human-review warnings; provide a route to relevant official sources where possible. | A risk flag is not proof of fraud. A submitted or reviewed document is not proof of legal ownership or final approval. Human and official verification must be represented accurately. |

### Pain point to feature traceability

| User pain point | EasyProperty module | Acceptance criterion to define in the feature specification |
|---|---|---|
| Investors cannot easily compare project details collected from different sources. | Public project directory and investor comparison | An investor can compare at least two published projects using the agreed fields; missing values are clearly marked rather than treated as zero. |
| Price and installment terms are difficult to evaluate consistently. | Installment and financial calculators | Given the same valid inputs, the calculator produces the expected totals and displays its assumptions; invalid values are rejected. |
| Users cannot tell where project information came from or when it was updated. | Project information and document-status register | A published project displays its information source/update date and accurately labels submitted, reviewed and independently verified information. |
| Enquiries and responses are scattered across channels. | Investor enquiries | An authenticated investor can submit an enquiry and view its status; only authorized organization users can view and update the relevant enquiry. |
| Societies need a controlled way to maintain project and plot details. | Organization profiles, project management and plot inventory | Authorized members can create/update their organization's records; users from another organization cannot access private records. |
| Incomplete or unusual details are difficult to notice. | Due-diligence guidance and rule-based risk flags | The system explains which information triggered a warning and does not present the warning as a definitive fraud finding. |
| Investors need to check official records separately. | Due-diligence checklist and official-source links | The interface identifies the relevant next check and makes clear that EasyProperty has not independently verified the record unless a real, documented verification process has succeeded. |

### How EasyProperty will validate these pain points

These pain points should be treated as research hypotheses until validated with actual users. Before claiming the product solves them, conduct a small discovery exercise:

1. Interview prospective investors/buyers about how they currently discover projects, compare installment plans, verify claims and keep track of enquiries.
2. Interview at least one willing society/developer representative about how project information, plot availability, updates and enquiries are currently managed.
3. Ask participants to demonstrate their current process using only information they are comfortable sharing; avoid collecting confidential documents unnecessarily.
4. Record recurring difficulties, current workarounds, frequency and consequences. Separate observed facts from assumptions.
5. Convert validated needs into SDD specifications with measurable acceptance criteria.
6. During a pilot, measure whether users can compare projects faster, whether enquiries are responded to, whether records remain current and whether the information-status labels are understood.

**Market-positioning principle:** EasyProperty should not claim that existing tools are useless or that it provides legally verified data by default. Its proposed differentiator is a connected, investor-focused workflow combining structured project information, transparent source/status labels, comparison and enquiry tracking—subject to validation with real users and participating organizations.

## Goals and MVP Scope

### Included in the MVP

- Account registration, login and session management.
- Role- and organization-based authorization.
- Housing society/developer profiles.
- Project creation, editing and publication status.
- Plot/unit inventory associated with projects.
- Document register with source, upload/submission date and review status.
- Public project directory and project detail pages.
- Search, filters and pagination.
- Investor project comparison.
- Installment totals and basic estimate calculators.
- Enquiries and response status tracking.
- Admin moderation and audit history for sensitive actions.
- Rule-based completeness/risk indicators and due-diligence guidance.
- Automated tests, documentation and a deployment-ready configuration.

### Conditional or outside the initial MVP

- AI API integration, maps, notifications through external services and 360-degree tours depend on access, cost, compatible data/media and available time.
- Live payments, holding property funds, automated property transfers and regulated investment services are not MVP requirements.
- Official legal ownership verification is not claimed unless a reliable, authorized integration and verification process are secured.
- A submitted, uploaded or admin-reviewed document is not automatically proof of title or legal approval.
- AI warnings do not prove fraud, and financial estimates do not guarantee profit or represent formal valuations.
- A complete society ERP covering accounting, security guards, visitor control, resident management and every operational workflow is outside the initial scope.

## User Roles

| Role | Main permissions and responsibilities |
|---|---|
| Visitor | View public, published project information and use public search. |
| Investor / Buyer | Compare projects, use calculators, submit enquiries and track own requests. |
| Society / Developer Manager | Manage authorized organization profile, projects, plots, document status and incoming enquiries. |
| Organization Staff (optional) | Perform explicitly assigned duties within their organization. |
| Platform Administrator | Review publication requests, handle reports, manage moderation and inspect audit records. |

**Multi-organization rule:** A user must only access organization records they are authorized to manage. Knowing a society ID, project ID or plot ID is not sufficient authorization.

## Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Web framework | Next.js App Router | Public pages, dashboards, server-rendered views and Route Handlers. |
| Language | TypeScript | Type-safe application and business logic. |
| Styling | Tailwind CSS | Responsive layouts and visual styling. |
| UI components | shadcn/ui | Accessible, reusable forms, dialogs, tables, tabs and dashboard components. |
| Database | PostgreSQL | Relational storage with constraints and transactions. |
| ORM | Prisma ORM | Typed database access, schema management and migrations. |
| Authentication | Better Auth (planned) | Login and session management, using a compatible supported configuration. |
| Validation | Zod | Validate request payloads and form data. |
| Forms | React Hook Form | Manage interactive forms and validation state. |
| SDD toolkit | GitHub Spec Kit | Feature specifications, plans, task breakdown and implementation workflow. |
| Unit tests | Vitest | Test business rules, calculations and utility code. |
| Browser tests | Playwright | Verify end-to-end user workflows. |
| Version control | Git + GitHub | History, branches, code review and backup. |
| Deployment | Vercel + managed PostgreSQL (planned) | Host the Next.js app and relational database. |

Use mutually compatible stable releases and pin dependency versions. Follow the official documentation for the versions installed in this repository; configuration examples can differ between major versions, particularly Prisma ORM.

## Development Tools

- **Visual Studio Code:** Primary editor and AI-assisted development environment.
- **PowerShell:** Run development, setup, database and test commands on Windows.
- **Node.js and npm:** JavaScript runtime and package management.
- **GitHub Spec Kit:** Generate and maintain SDD artifacts.
- **AI coding agent:** Help with specifications, plans, implementation and review; code must still be reviewed and tested.
- **Prisma Studio or PostgreSQL administration tool:** Inspect local development records.
- **Browser Developer Tools:** Diagnose rendering, network and runtime issues.
- **Postman or an equivalent API client:** Test HTTP endpoints where useful.
- **Figma (optional):** Create interface wireframes and prototypes.

---

## Professional SDD Repository Structure

The following is the **target repository layout**. GitHub Spec Kit initialization creates its managed configuration, templates and agent integration files. Do not manually overwrite those files with copies from another version. Spec Kit may evolve; keep the generated structure appropriate to the installed release.

```text
EasyProperty/
├── .github/
│   ├── workflows/                   # CI checks (add when configured)
│   └── pull_request_template.md     # Optional review checklist
│
├── .specify/                        # Managed by GitHub Spec Kit
│   ├── memory/
│   │   └── constitution.md          # Project-wide engineering principles
│   ├── templates/                   # Spec Kit templates
│   ├── scripts/                     # Spec Kit scripts, depending on setup
│   └── ...                          # Other generated Spec Kit configuration
│
├── specs/                           # SDD artifacts, grouped by feature
│   ├── 001-project-foundation/
│   │   ├── spec.md                  # User-facing requirements and acceptance criteria
│   │   ├── plan.md                  # Technical implementation plan
│   │   ├── research.md              # Decisions and technical research, when needed
│   │   ├── data-model.md            # Data model, when needed
│   │   ├── quickstart.md             # Developer/test walkthrough, when needed
│   │   ├── contracts/               # API/interface contracts, when needed
│   │   ├── checklists/              # Review or quality checklists, when generated
│   │   └── tasks.md                 # Ordered implementation tasks
│   ├── 002-organization-profiles/
│   ├── 003-project-management/
│   └── ...                          # One directory per feature/specification
│
├── docs/
│   ├── architecture/
│   │   ├── overview.md              # System boundaries and component interactions
│   │   └── decisions/               # Architecture Decision Records (ADRs)
│   ├── engineering/
│   │   ├── naming-conventions.md
│   │   ├── api-standards.md
│   │   └── error-handling.md
│   ├── security/
│   │   └── access-control.md
│   ├── testing/
│   │   └── test-strategy.md
│   └── user-guide.md
│
├── prisma/
│   ├── schema.prisma                # Database models and mapping
│   ├── migrations/                  # Versioned schema migrations
│   └── seed.ts                      # Non-production demonstration data
│
├── public/                          # Public static assets only
│
├── src/
│   ├── app/                         # Next.js routes, pages, layouts and API handlers
│   │   ├── (public)/                # Public-facing route group
│   │   ├── (dashboard)/             # Authenticated dashboard route group
│   │   ├── api/                     # Route Handlers / HTTP endpoints
│   │   ├── layout.tsx
│   │   ├── error.tsx
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── ui/                      # Shared UI primitives
│   │   └── layout/                  # Shared navigation and layout components
│   │
│   ├── features/
│   │   ├── organizations/           # Society/developer profiles and membership
│   │   ├── projects/                # Project creation and project details
│   │   ├── plots/                   # Plot/unit inventory
│   │   ├── documents/               # Document metadata and review status
│   │   ├── installments/            # Schedules and financial calculation rules
│   │   ├── investor-comparison/     # Project comparison
│   │   ├── enquiries/               # Investor/organization communications
│   │   ├── moderation/              # Admin review and reports
│   │   └── notifications/           # In-app notifications, if implemented
│   │
│   └── lib/
│       ├── prisma.ts                # Shared Prisma client setup
│       ├── auth.ts                  # Shared authentication configuration
│       ├── validation/              # Shared validation utilities
│       ├── errors/                  # Error types and response helpers
│       └── logging/                 # Structured logging utilities
│
├── tests/
│   ├── unit/                        # Unit tests
│   ├── integration/                 # Data/service integration tests
│   └── e2e/                         # Playwright end-to-end tests
│
├── .env.example                    # Names/placeholders only; no secrets
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
├── next.config.ts
└── prisma.config.ts                # If required by the installed Prisma version
```

### Structure rules

- Treat `.specify/` as Spec Kit-managed configuration. Use the installed CLI and generated instructions instead of copying a stale template.
- Put each feature's SDD artifacts in `specs/<number>-<feature-name>/` following the configured Spec Kit convention.
- The example artifact list is a target guide; not every feature needs every optional artifact. Keep `spec.md`, `plan.md` and `tasks.md` central to the usual feature cycle.
- Keep application code under `src/`. Next.js has special filenames such as `page.tsx`, `layout.tsx`, `route.ts`, `loading.tsx`, `error.tsx` and `not-found.tsx`; retain those names.
- Keep domain logic with its feature. Keep generic UI primitives in `src/components/ui/`.
- Keep private documents and confidential uploads out of `public/`.
- Use `docs/architecture/decisions/` for important technical choices that deserve a short ADR: context, decision, alternatives and consequences.
- Use migrations to change the database schema. Do not manually change production tables without recording the migration.
- Do not create a separate Express service or microservices for the MVP unless a documented requirement justifies the additional operational complexity.

---

## SDD Workflow

Use Spec-Driven Development for each meaningful feature:

1. **Constitution:** Establish project-wide rules for security, architecture, naming, tests and maintainability once at the beginning.
2. **Specify:** Describe the user problem, intended behavior, edge cases, constraints and measurable acceptance criteria.
3. **Clarify:** Resolve missing or ambiguous requirements before committing to an implementation.
4. **Plan:** Design the implementation, data model, permissions, interfaces and dependencies.
5. **Tasks:** Break the approved plan into small, ordered and testable tasks.
6. **Analyze:** Check specifications, plans and tasks for contradictions or omissions where the installed Spec Kit workflow provides this step.
7. **Implement:** Implement a limited set of approved tasks; inspect every meaningful code change.
8. **Converge:** Compare implementation and tests against the approved requirements, fix gaps, and repeat until complete.
9. **Commit:** Commit verified code and keep SDD artifacts consistent with any approved requirement changes.

### Typical Spec Kit commands

The exact command spelling depends on your selected AI-agent integration and installed Spec Kit version. Use the command files generated inside your repository as the authority. Common current integrations expose commands equivalent to:

```text
/speckit-constitution
/speckit-specify
/speckit-plan
/speckit-tasks
/speckit-analyze
/speckit-implement
/speckit-converge
```

Do not ask the agent to implement the whole product in one prompt. Review each specification and plan before allowing implementation to proceed.

## Feature Modules

| Module | Feature | Expected result |
|---|---|---|
| 1 | Project setup and SDD foundation | Repository baseline, constitution and initialized Spec Kit workflow. |
| 2 | Requirements, architecture and database design | Approved requirements, architecture and initial data model. |
| 3 | Application foundation and design system | Running Next.js shell and shared responsive components. |
| 4 | Authentication and access control | Login, sessions and server-side permission checks. |
| 5 | Society/developer profiles | Organization profile management with authorized access. |
| 6 | Housing project management | Create, edit and manage housing-project publication status. |
| 7 | Plot/unit inventory | Manage plot records and availability under a project. |
| 8 | Document register and information status | Record sources and statuses without overstating verification. |
| 9 | Public project directory | Public project pages for published information. |
| 10 | Search and filtering | Database-backed search with filters and pagination. |
| 11 | Investor comparison | Compare project details, asking prices and installment terms. |
| 12 | Installment and financial calculators | Calculations with visible assumptions and validated inputs. |
| 13 | Investor enquiries | Submit enquiries and track responses. |
| 14 | Society dashboard and reporting | Summary statistics and basic operational reports. |
| 15 | Platform administration and moderation | Review information, handle reports and maintain history. |
| 16 | Due-diligence guidance and risk flags | Checklists and explainable warnings for further human review. |
| 17 | Notifications and optional integrations | Basic notification behavior; optional media/maps if feasible. |
| 18 | Integration, security and automated testing | Tested end-to-end workflows and repaired defects. |
| 19 | Deployment and pilot feedback | Deployed demonstration and user feedback, if participants are available. |
| 20 | Final verification and submission | Stable release, documentation, evidence and demonstration. |

---

## 20-Week Development Roadmap

**Planned period:** 21 October 2026 – 9 March 2027. Each week is a timebox. Every module must follow SDD; the daily activities below are suggested working targets, not permission to skip unresolved requirements or failed tests.

### Week 1 — 21–27 October: Project Setup and SDD Foundation

- **Day 1:** Inspect existing project files, tools and Git status; preserve existing work.
- **Day 2:** Draft the project constitution and engineering principles.
- **Day 3:** Initialize Spec Kit for the chosen coding-agent integration; review generated files.
- **Day 4:** Confirm the target users, MVP scope and excluded functionality.
- **Day 5:** Specify the application foundation and first public-discovery feature.
- **Day 6:** Review acceptance criteria, assumptions and ambiguities.
- **Day 7:** Approve artifacts and commit the baseline.
- **Deliverable:** Reviewable repository baseline, constitution and first feature specification.

### Week 2 — 28 October–3 November: Requirements, Architecture and Database Design

- **Day 1:** Confirm roles and permissions.
- **Day 2:** Define entities and relationships.
- **Day 3:** Draw system boundaries and architecture.
- **Day 4:** Plan PostgreSQL tables, keys and constraints.
- **Day 5:** Define organization-level data access and audit rules.
- **Day 6:** Analyze design for contradictions and missing requirements.
- **Day 7:** Approve technical plan and document key decisions.
- **Deliverable:** Requirements baseline, architecture and initial data model.

### Week 3 — 4–10 November: Application Foundation and Design System

- **Day 1:** Specify shared layouts and UI behavior.
- **Day 2:** Plan routes, design tokens and reusable components.
- **Day 3:** Configure Next.js, TypeScript, Tailwind CSS and linting.
- **Day 4:** Establish the navy/white/teal design system.
- **Day 5:** Build navigation, footer, buttons, cards and form primitives.
- **Day 6:** Check responsive behavior, keyboard access and type/lint errors.
- **Day 7:** Test acceptance criteria and commit.
- **Deliverable:** Running application shell and shared UI foundation.

### Week 4 — 11–17 November: Authentication and Access Control

- **Day 1:** Specify registration, login, logout and session requirements.
- **Day 2:** Plan authentication and authorization rules.
- **Day 3:** Configure Better Auth and required data integration.
- **Day 4:** Implement registration and login.
- **Day 5:** Implement protected operations and role checks.
- **Day 6:** Test invalid credentials, expired sessions and unauthorized access.
- **Day 7:** Review security behavior and commit.
- **Deliverable:** Tested authentication and access-control baseline.

### Week 5 — 18–24 November: Society and Developer Profiles

- **Day 1:** Specify organization profile behavior.
- **Day 2:** Plan membership relationships and authorization.
- **Day 3:** Implement organization schema and migrations.
- **Day 4:** Build profile forms and dashboard view.
- **Day 5:** Implement profile creation, reading and editing.
- **Day 6:** Test cross-organization access and invalid fields.
- **Day 7:** Review and commit.
- **Deliverable:** Database-backed organization profiles.

### Week 6 — 25 November–1 December: Housing Project Management

- **Day 1:** Specify project fields and publication states.
- **Day 2:** Plan validation, ownership and project relationships.
- **Day 3:** Implement project creation and retrieval.
- **Day 4:** Implement editing and publication status.
- **Day 5:** Connect project forms to the database.
- **Day 6:** Test permissions, missing records and state changes.
- **Day 7:** Review and commit.
- **Deliverable:** Housing-project management workflow.

### Week 7 — 2–8 December: Plot and Unit Inventory

- **Day 1:** Specify plot fields and availability behavior.
- **Day 2:** Plan plot-project relationships and uniqueness rules.
- **Day 3:** Implement the plot model and migrations.
- **Day 4:** Build create/edit forms.
- **Day 5:** Implement inventory tables and availability updates.
- **Day 6:** Test duplicate identifiers and conflicting updates.
- **Day 7:** Review and commit.
- **Deliverable:** Plot inventory linked to projects.

### Week 8 — 9–15 December: Document Register and Information Status

- **Day 1:** Specify document types and review states.
- **Day 2:** Plan document metadata and access boundaries.
- **Day 3:** Implement document metadata and status records.
- **Day 4:** Build the document register/upload reference workflow.
- **Day 5:** Implement source, date and review-status fields.
- **Day 6:** Test permissions and allowed status transitions.
- **Day 7:** Review and commit.
- **Deliverable:** Controlled document register with explicit status labels.

### Week 9 — 16–22 December: Public Project Directory

- **Day 1:** Specify public listing/visibility rules.
- **Day 2:** Plan project cards and details layouts.
- **Day 3:** Build project directory page.
- **Day 4:** Build individual project pages.
- **Day 5:** Display source, update date and document status.
- **Day 6:** Test unpublished projects and missing information.
- **Day 7:** Review metadata, accessibility and commit.
- **Deliverable:** Public project discovery and detail pages.

### Week 10 — 23–29 December: Search and Filtering

- **Day 1:** Specify search, filters and pagination.
- **Day 2:** Plan database queries and indexing needs.
- **Day 3:** Implement text/location search.
- **Day 4:** Add price, project type, size and installment filters.
- **Day 5:** Connect filters and pagination to database results.
- **Day 6:** Test combined filters, empty results and invalid ranges.
- **Day 7:** Review and commit.
- **Deliverable:** Database-backed project search.

### Week 11 — 30 December–5 January: Investor Comparison

- **Day 1:** Specify comparison fields and missing-data rules.
- **Day 2:** Plan the data shape and comparison logic.
- **Day 3:** Build comparison selection and table.
- **Day 4:** Compare prices, location, size and installment terms.
- **Day 5:** Display data sources and document status.
- **Day 6:** Test incomplete data and consistent units.
- **Day 7:** Review and commit.
- **Deliverable:** Investor comparison tool.

### Week 12 — 6–12 January: Installment and Financial Calculators

- **Day 1:** Specify formulas and financial assumptions.
- **Day 2:** Plan calculation rules and validation.
- **Day 3:** Implement reusable calculation functions and unit tests.
- **Day 4:** Build installment schedule and total-cost calculator.
- **Day 5:** Add one basic optional rental-yield or repayment estimate.
- **Day 6:** Test rounding and input boundaries.
- **Day 7:** Document assumptions, limitations and commit.
- **Deliverable:** Tested financial calculations with non-guaranteed estimates clearly labelled.

### Week 13 — 13–19 January: Investor Enquiries

- **Day 1:** Specify enquiry states and required data.
- **Day 2:** Plan investor and organization permissions.
- **Day 3:** Implement enquiry creation and persistence.
- **Day 4:** Build investor enquiry history.
- **Day 5:** Build organization inbox and response status.
- **Day 6:** Test unauthorized access and duplicate submissions.
- **Day 7:** Verify end-to-end and commit.
- **Deliverable:** Investor-to-society enquiry workflow.

### Week 14 — 20–26 January: Society Dashboard and Reporting

- **Day 1:** Specify dashboard statistics and reports.
- **Day 2:** Plan authorized aggregation queries.
- **Day 3:** Implement summary counts.
- **Day 4:** Build the organization dashboard.
- **Day 5:** Add filters and an optional export.
- **Day 6:** Compare dashboard totals to database records.
- **Day 7:** Review and commit.
- **Deliverable:** Society dashboard and basic reports.

### Week 15 — 27 January–2 February: Administration and Moderation

- **Day 1:** Specify admin actions and reporting workflows.
- **Day 2:** Define moderation state transitions and audit rules.
- **Day 3:** Build the review queue.
- **Day 4:** Implement approve/reject/request-correction actions.
- **Day 5:** Add report handling and history.
- **Day 6:** Test admin permissions and prohibited transitions.
- **Day 7:** Review and commit.
- **Deliverable:** Administrative moderation workflow.

### Week 16 — 3–9 February: Due-Diligence Guidance and Risk Flags

- **Day 1:** Specify assistant scope and limitations.
- **Day 2:** Define rules for incomplete or unusual information.
- **Day 3:** Implement due-diligence checklist content.
- **Day 4:** Implement explainable risk flags.
- **Day 5:** Build the guidance interface and relevant source links.
- **Day 6:** Test false positives and wording.
- **Day 7:** Verify that warnings are not presented as proof of fraud or legal status.
- **Deliverable:** Due-diligence guidance and rule-based risk indicators.

### Week 17 — 10–16 February: Notifications and Optional Integrations

- **Day 1:** Specify notification triggers.
- **Day 2:** Plan notification storage, read status and access.
- **Day 3:** Implement in-app notifications.
- **Day 4:** Connect status changes to notifications.
- **Day 5:** Add a map or 360-degree media demonstration if feasible.
- **Day 6:** Test privacy and integration failure states.
- **Day 7:** Review and commit.
- **Deliverable:** Basic notifications and an optional integration if time permits.

### Week 18 — 17–23 February: Integration, Security and Testing

- **Day 1:** Review acceptance criteria for completed modules.
- **Day 2:** Test business rules with Vitest.
- **Day 3:** Test database workflows and organization access boundaries.
- **Day 4:** Add Playwright tests for project creation, search and comparison.
- **Day 5:** Test enquiries, document status and administration end-to-end.
- **Day 6:** Fix high-priority defects and test error states.
- **Day 7:** Run regression tests and document known limitations.
- **Deliverable:** Tested release candidate and verification evidence.

### Week 19 — 24 February–2 March: Deployment and Pilot Feedback

- **Day 1:** Define deployment requirements.
- **Day 2:** Configure environment variables and database access.
- **Day 3:** Deploy and apply approved migrations.
- **Day 4:** Verify authentication and critical workflows in the deployed environment.
- **Day 5:** Prepare demo data and gather user feedback if a pilot participant is available.
- **Day 6:** Fix critical usability/reliability problems.
- **Day 7:** Document deployment and outstanding limitations.
- **Deliverable:** Deployed demo and feedback report where possible.

### Week 20 — 3–9 March: Final Verification and Submission

- **Day 1:** Run final acceptance checklist.
- **Day 2:** Perform end-to-end regression testing.
- **Day 3:** Complete report, architecture and database diagrams.
- **Day 4:** Complete user and developer guides.
- **Day 5:** Capture screenshots, test results and SDD artifacts.
- **Day 6:** Rehearse the demonstration and check backups.
- **Day 7:** Submit the final project by 9 March 2027.
- **Deliverable:** Application, source code, SDD artifacts, tests, documentation and final demonstration.

---

## Engineering Standards

### Naming

- React components and TypeScript types: `PascalCase` (for example, `ProjectCard.tsx`, `HousingProject`).
- Variables and functions: `camelCase` (for example, `projectPrice`, `calculateInstallment`).
- Environment variables: `UPPER_SNAKE_CASE` (for example, `DATABASE_URL`).
- API resources: lowercase plural nouns (for example, `/api/projects`).
- Preserve Next.js special filenames (`page.tsx`, `layout.tsx`, `route.ts`, `error.tsx`, `not-found.tsx`).
- Use meaningful names and avoid unexplained abbreviations.

### Code quality

- Use strict TypeScript and avoid `any` unless explicitly justified.
- Keep components and functions focused.
- Avoid duplicated validation and business logic.
- Keep server-only code and credentials out of client bundles.
- Run linting, type checking and applicable tests before a feature is accepted.
- Add an Architecture Decision Record (ADR) for major decisions that affect future development.

## Database and API Standards

### Database

- Use a shared Prisma Client configured according to the installed Prisma version and hosting model.
- Configure connection pooling and timeouts; avoid creating a new client for each request or disconnecting after every query.
- Keep credentials in environment variables. Do not commit `.env` files containing secrets.
- Change the schema through reviewed Prisma migrations.
- Use foreign keys, unique constraints, indexes and transactions where appropriate.
- Enforce organization-level access on every private record operation.
- Represent money using appropriate decimal or integer-based values; do not rely on ordinary floating-point arithmetic for balances.
- Distinguish installment schedules, manually recorded payments and payment-provider-confirmed transactions.
- Keep private documents out of the publicly served `public/` directory.

### API routes and HTTP status codes

Use resource-oriented endpoints such as:

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/api/projects` | List published projects accessible to the caller. |
| `POST` | `/api/projects` | Create a project for an authorized organization. |
| `GET` | `/api/projects/{projectId}` | Retrieve one accessible project. |
| `PATCH` | `/api/projects/{projectId}` | Update authorized project fields. |
| `GET` | `/api/societies/{societyId}/projects` | List projects belonging to an organization, subject to permission rules. |
| `POST` | `/api/projects/{projectId}/enquiries` | Create an investor enquiry. |

Typical HTTP status choices:

- `200 OK`: request succeeded and a response representation is returned.
- `201 Created`: a resource was created.
- `202 Accepted`: processing was accepted but may not be complete.
- `204 No Content`: request succeeded and no response body is returned.
- `400 Bad Request`: malformed request.
- `401 Unauthorized`: authentication is required or invalid.
- `403 Forbidden`: caller lacks permission.
- `404 Not Found`: resource/route not found, or resource existence is intentionally hidden.
- `405 Method Not Allowed`: endpoint does not support the requested HTTP method.
- `409 Conflict`: operation conflicts with current state, such as an already allocated plot.
- `413 Content Too Large`: request/upload exceeds configured limits.
- `415 Unsupported Media Type`: payload format is unsupported.
- `422 Unprocessable Content`: well-formed request fails semantic validation, under this project's convention.
- `429 Too Many Requests`: request rate limit exceeded.
- `500 Internal Server Error`: unexpected server-side failure.
- `501 Not Implemented`: server does not support the requested functionality; not a generic internal error.
- `502 Bad Gateway`: invalid response received from an upstream server.
- `503 Service Unavailable`: temporary service unavailability.
- `504 Gateway Timeout`: an upstream request timed out through a gateway/proxy.

Adopt RFC 9457 Problem Details (or a documented equivalent) for structured errors. Keep stable application error codes such as `PROJECT_NOT_FOUND`, `VALIDATION_ERROR` and `DATABASE_UNAVAILABLE` separate from HTTP status codes. Never return stack traces, raw SQL/Prisma errors, credentials or secrets to users. Log technical details safely on the server.

## Testing Strategy

- **Unit tests:** Validation rules, comparison logic, installment calculations and status-transition rules.
- **Integration tests:** Prisma/database operations, authorization and transaction behavior.
- **End-to-end tests:** Organization profile creation, project creation, publication, search, comparison, enquiries and moderation.
- **Security tests:** Cross-organization access, role restrictions, invalid input, upload controls and unauthorized operations.
- **UI tests:** Responsive behavior, accessible controls, form validation and loading/empty/error states.
- **Regression tests:** Re-run key workflows whenever changes may affect an already accepted feature.

The following commands are common examples after the associated scripts and dependencies have been configured:

```powershell
npm run lint
npx tsc --noEmit
npm test
npx playwright test
```

## Getting Started

### Prerequisites

- A supported Node.js LTS release compatible with the selected Next.js and Prisma versions.
- npm.
- Git.
- PostgreSQL, locally or through a managed service.
- Python and `uv` if required by the installed Spec Kit release.
- A supported AI coding-agent integration for Spec Kit.

### Initialize Spec Kit in an existing project

First, inspect the repository and commit or stash work so the initialization diff can be reviewed. Then use the official Spec Kit instructions for your selected integration. A common command pattern is:

```powershell
uv tool install specify-cli
specify init --here --integration copilot --script ps
```

Replace `copilot` with the key for your chosen coding agent. If the directory is non-empty, do not use force-overwrite options until you have backed up/committed work and understand which managed files could change. Review every generated file and diff before continuing.

Official guidance: https://github.com/github/spec-kit/blob/main/docs/guides/existing-projects.md

### Application setup

Once the Next.js app and `package.json` exist:

```powershell
npm install
```

Create a local `.env` based on `.env.example` and configure `DATABASE_URL` for your PostgreSQL environment. Do not put real credentials in this README or commit the `.env` file.

After Prisma is installed and configured according to the version selected for this project, use its documented generate/migration commands. For example, a common development flow is:

```powershell
npx prisma generate
npx prisma migrate dev
npm run dev
```

These commands must match the configured Prisma version and schema; follow the current official Next.js/Prisma integration guide before running migrations against any shared or production database.

### First development feature

Start with a bounded feature such as **public project discovery**:

1. Create a feature specification with clear acceptance criteria.
2. Resolve ambiguities and agree the requirements.
3. Produce and review the technical plan.
4. Generate and review implementation tasks.
5. Analyze the artifacts for contradictions if supported by the installed workflow.
6. Implement a small task at a time.
7. Test and converge until acceptance criteria pass.
8. Commit the verified code and update the artifacts if requirements changed.

## Definition of Done

A module is complete only when:

- Its specification and acceptance criteria are reviewed.
- The implementation matches the approved requirements.
- Server-side validation and authorization are implemented where relevant.
- Database schema changes are represented by migrations.
- Success, empty, invalid, not-found and relevant error states are handled.
- Appropriate unit/integration/end-to-end tests pass.
- Type checking and linting pass.
- No known critical defect remains unresolved.
- Documentation and SDD artifacts remain consistent with the implementation.
- Verified work is committed to Git.

## Scope Limits and Risks

- **No initial users/partners:** use clearly labelled demonstration data and seek one willing pilot partner; do not present fake data as real.
- **Incorrect project information:** display sources, dates and review statuses; preserve moderation history.
- **No official verification integration:** provide checklists and official-source links, but do not claim title verification.
- **AI inaccuracies:** keep guidance informational, make assumptions visible and provide a non-AI fallback.
- **Schedule pressure:** protect core workflows first; treat advanced integrations as optional.
- **Security and privacy:** enforce organization-level access, protect secrets and private files, and test permission boundaries.
- **Financial records:** do not treat a schedule or manually entered receipt as independently confirmed payment.

## Official Documentation

- GitHub Spec Kit repository: https://github.com/github/spec-kit
- Spec Kit README and workflow: https://github.com/github/spec-kit/blob/main/README.md
- Spec Kit existing-project guidance: https://github.com/github/spec-kit/blob/main/docs/guides/existing-projects.md
- Spec Kit feature plan template: https://github.com/github/spec-kit/blob/main/templates/plan-template.md
- Next.js App Router: https://nextjs.org/docs/app
- Next.js project structure: https://nextjs.org/docs/app/getting-started/project-structure
- Prisma ORM with Next.js: https://www.prisma.io/docs/guides/v7/frameworks/nextjs
- Better Auth: https://www.better-auth.com/docs
- Tailwind CSS: https://tailwindcss.com/docs
- shadcn/ui: https://ui.shadcn.com/docs
- PostgreSQL documentation: https://www.postgresql.org/docs/
- Vitest: https://vitest.dev/guide/
- Playwright: https://playwright.dev/docs/intro
- RFC 9457 — Problem Details for HTTP APIs: https://www.rfc-editor.org/rfc/rfc9457.html
- Zameen.com public property portal: https://www.zameen.com/
- Punjab Land Records Authority: https://www.punjab-zameen.gov.pk/
- Hamari Society (published housing/community management features): https://hamarisociety.pk/
- Manzhil (published housing-society/community management features): https://www.manzhil.com/pakistan
- Competition Commission of Pakistan, *CCP Records Competition Concerns at Open Hearing on Real Estate Sector* (27 August 2026): https://beta.cc.gov.pk/home/viewpressreleases/766
- Competition Commission of Pakistan, *CAT upholds CCP order against Kingdom Valley, maintains Rs35m penalty for deceptive marketing* (20 April 2026): https://cc.gov.pk/home/viewpressreleases/743

---

## Project Principle

**EasyProperty will be developed one specified, planned, implemented and tested feature at a time.** AI-generated code is a proposal, not proof of completion. The accepted specification, tests, security requirements and verified behavior determine whether a module is done.