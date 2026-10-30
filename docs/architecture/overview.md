# Architecture Overview

<!-- Document system boundaries and component interactions. -->
# System Architecture Overview — EasyProperty

**Last Updated:** 28 October 2026
**Version:** 1.0 (MVP)
**Target Audience:** Developers, Reviewers, and AI Coding Agents

---

## 1. Purpose of This Document
This document explains the high-level architecture of EasyProperty. It describes how the different parts of the system (Frontend, Backend, Database, and Auth) interact with each other. It serves as the blueprint for how data flows and how security is enforced.

---

## 2. System Boundaries & Core Philosophy

EasyProperty is built as a **Single Monolithic Application** using Next.js. We deliberately avoid microservices to keep the MVP simple, fast, and easy to deploy.

- **Frontend:** Next.js App Router (React Server Components + Client Components).
- **Backend:** Next.js Route Handlers (`/api/*`) and Server Actions.
- **Database:** PostgreSQL.
- **ORM:** Prisma.
- **Authentication:** Better Auth (Session-based).

---

## 3. High-Level Architecture Diagram

```text
┌──────────────────────────────────────────────────────────────┐
│                        CLIENT BROWSER                        │
│   (Visitor, Investor, Society Manager, Admin Dashboards)     │
└───────────────┬──────────────────────────────▲───────────────┘
                │ 1. HTTP Requests (HTML/RSC)  │ 5. HTML/RSC Payload
                │    or Form Submissions       │    or JSON Response
┌───────────────▼──────────────────────────────┴───────────────┐
│                    NEXT.JS SERVER (Vercel)                   │
│                                                              │
│  2. AUTH MIDDLEWARE (Better Auth)                            │
│     - Validates session cookies                              │
│                                                              │
│  3. ROUTE HANDLERS (/api/*) & SERVER ACTIONS                 │
│     - Zod Validation                                         │
│     - Organization-Level Authorization (Multi-Tenancy)       │
│     - Business Logic                                         │
│                                                              │
│  4. PRISMA CLIENT (Singleton)                                │
└───────────────┬──────────────────────────────────────────────┘
                │ 6. SQL Queries
┌───────────────▼──────────────────────────────────────────────┐
│                      POSTGRESQL DATABASE                     │
│   - User & Session Data (Better Auth)                        │
│   - Organization & Project Data                              │
│   - Document & Enquiry Records                               │
└──────────────────────────────────────────────────────────────┘