# Design System — EasyProperty

**Status:** Approved
**Theme Chosen:** EasyProperty Logo (Deep Navy + Vibrant Blue)
**Applies to:** Every page, every component, every feature
**Last updated:** 26 October 2026

> This file is the **single source of truth** for colors, theming, typography, spacing and accessibility.

## 1. Brand Identity & Logo Usage
- **Primary (Deep Navy `#0A2540`):** Trust, authority, professionalism (from the "Easy" text and left side of the house).
- **Secondary (Vibrant Blue `#0070F3`):** Growth, action, modern tech (from the "Property" text and right side of the house).
- **Success Accent (Teal `#0D9488`):** Used for positive states (Approved, Verified).
- **Both light and dark themes are first-class citizens.** No page ships with only one theme working.

### 1.1 Logo Files
- Primary Logo: `public/logo.svg` (Full color with tagline).
- Dark Mode Logo: `public/logo-white.svg` (For use on dark backgrounds).
- Icon Only: `public/favicon.ico` (House shape).

## 2. Color Tokens

All colors are CSS variables defined in `src/app/globals.css`. Components consume them via Tailwind's `theme.extend.colors`. **Hardcoded hex values inside components are forbidden.**

### 2.1 Core semantic tokens

| Token | Light Mode | Dark Mode | Purpose |
|---|---|---|---|
| `--background` | `#F8FAFC` | `#0B1220` | Page background |
| `--foreground` | `#0F172A` | `#E2E8F0` | Primary text |
| `--card` | `#FFFFFF` | `#111C2E` | Card surface |
| `--primary` | `#0A2540` | `#7CA9D6` | Brand Navy (Easy) |
| `--primary-foreground` | `#FFFFFF` | `#0B1220` | Text on primary |
| `--secondary` | `#0070F3` | `#38BDF8` | Brand Blue (Property) |
| `--secondary-foreground`| `#FFFFFF` | `#0B1220` | Text on secondary |
| `--muted` | `#F1F5F9` | `#1E293B` | Subtle backgrounds |
| `--muted-foreground` | `#64748B` | `#94A3B8` | Secondary text |
| `--border` | `#E2E8F0` | `#1E293B` | Dividers, borders |
| `--ring` | `#0070F3` | `#38BDF8` | Focus ring |
| `--success` | `#0D9488` | `#2DD4BF` | Approved, verified |
| `--warning` | `#D97706` | `#FBBF24` | Due diligence flags |
| `--destructive` | `#DC2626` | `#F87171` | Errors, rejections |

### 2.2 Brand scale (Tailwind extension)
**Navy scale (Easy):** 50: `#F0F4F9`, 500: `#2C5F99`, 900: `#0A1524`
**Blue scale (Property):** 50: `#EFF6FF`, 500: `#0070F3`, 900: `#1E3A8A`

## 3. Typography
- **Body:** Inter
- **Headings:** Plus Jakarta Sans
- Use `clamp()` for fluid sizes (no breakpoint jumps).

## 4. Theming Implementation
- **Library:** `next-themes`
- **Class strategy:** `darkMode: ["class"]`
- **Persistence:** `localStorage`
- **No FOUC:** inline script in `<head>`.

## 5. Accessibility Rules (WCAG AA)
- Body text: ≥ 4.5:1
- Large text: ≥ 3:1
- Tap targets: ≥ 44×44 px
- Focus rings visible

## 6. Anti-Patterns (NEVER Do This)
| ❌ Wrong | ✅ Correct |
|---|---|
| `bg-white text-black` | `bg-background text-foreground` |
| `text-gray-500` | `text-muted-foreground` |
| `bg-[#0A2540]` | `bg-primary` |
| Light-only green badge | Add `dark:bg-green-900/30 dark:text-green-300` |