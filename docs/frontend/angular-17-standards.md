---
id: frontend-angular-17-standards
title: Frontend Standards (Angular 19)
sidebar_label: Angular 19 Standards
---

# Frontend Standards (Angular 19)

> The app was built on Angular 17 and has been upgraded to **Angular 19**. This document reflects the current state.

## Tech Stack

| Library | Version | Purpose |
|---|---|---|
| Angular | 19.0.5 | Core framework |
| Fuse Admin Template | 21.0.0 | Layout, navigation, base components |
| Angular Material | 19.0.4 | UI component library |
| Tailwind CSS | 3.4.17 | Utility styling |
| Transloco | 7.5.1 | i18n (ES / EN) |
| FullCalendar | 6.1.20 | Academic schedule visualization |
| ApexCharts | 4.3.0 | Dashboards & analytics |
| Quill | 2.0.3 | Rich text (announcements, messages) |
| Luxon | 3.5.0 | Date/time handling |
| TypeScript | 5.6.3 | Strict mode enabled |

## Project Structure

```
src/app/
├── @fuse/           # Fuse framework (directives, pipes, validators, services)
├── core/            # Auth, navigation, security, tenant, toast, icons
│   ├── auth/        # Guards, interceptors, auth.service.ts
│   ├── security/    # permission-evaluator, role-catalog services
│   ├── tenant/      # TenantContext, tenant-plan-status
│   └── transloco/   # i18n config
├── layout/          # App shell layouts
├── modules/
│   ├── admin/       # Main app (12 feature areas)
│   ├── auth/        # Login, register, password reset
│   ├── landing/     # Public landing page
│   └── temp/        # Temporary/WIP components
└── shared/
    └── ui/          # Reusable UI components
        ├── date/
        ├── filter-drawer/
        ├── input/
        ├── modal/
        ├── select/
        ├── table/
        └── time/
```

## Admin Module Feature Areas

| Area | Contents |
|---|---|
| `academic/` | Students, teachers, enrollments, subjects, assignments, grades, rubrics, assessments, schedules, resources, levels, study groups, space booking |
| `attendance/` | Record attendance, group reports, student reports |
| `classroom/` | Sections, class schedules, shifts |
| `communications/` | Announcements, messaging |
| `community/` | Parent engagement, news |
| `dashboards/` | Tenant analytics, metrics, financial overview |
| `discipline/` | Incidents, behavioral tracking |
| `finance/` | Billing, payments, invoices, reports |
| `grades/` | Grade recording, portal, report cards, rubrics |
| `platform/` | Tenant management, plans (SUPER_ADMIN only) |
| `reports/` | Academic, attendance, financial exports (PDF/Excel) |
| `tenant/` | Settings, preferences, branding, users, roles |

## Module Structure Convention

```
feature-module/
├── pages/       # Route-level components
├── components/  # Reusable within module
├── dialogs/     # Material dialog components
├── services/    # Module-specific HTTP services
└── models/      # TypeScript interfaces
```

## Coding Guidelines

- **Strong typing everywhere** — `strict` mode enabled in `tsconfig.json`
- **Services handle all HTTP** — components never call `HttpClient` directly
- **Reactive patterns** — `Observable` + `RxJS` for state and async; avoid raw Promises
- **Smart vs dumb components** — pages are smart (inject services), components are presentational
- **No business logic in templates** — move to component class or service
- **Lazy-loaded routes** — every feature area is lazy-loaded for performance
- **OnPush change detection** — use where possible to reduce render cycles

## State Management

RxJS/Services-based — no NgRx:
- Services expose `BehaviorSubject` / `ReplaySubject` for shared state
- Components subscribe, unsubscribe via `takeUntilDestroyed()` (Angular 16+)
- Fuse base classes handle common lifecycle patterns

## HTTP Interceptors

1. **Auth interceptor** — injects `Authorization: Bearer <token>` on every request
2. **Tenant interceptor** — injects `X-Tenant-ID` header from TenantContext
3. **Error interceptor** — handles 401 (redirect to login), 403, 500 globally

## i18n

- Framework: **Transloco 7**
- Supported languages: **ES** (primary), **EN**
- All user-facing strings must use `transloco` pipe or service
- Translation files: `assets/i18n/es.json`, `assets/i18n/en.json`

## Security (Frontend)

- **Route guards:** Auth guard blocks unauthenticated navigation
- **Permission guards:** `PermissionEvaluatorService` checks RBAC before activating routes
- **Role-based navigation:** Dynamic menu built from `/api/v1/navigation` response
- **Plan-gated features:** `TenantPlanStatusService` disables features not included in tenant plan

## Useful Commands

```bash
npm start                    # Dev server (port 4200)
npm run build                # Production build
ng generate component ...    # Generate component
ng generate service ...      # Generate service
```
