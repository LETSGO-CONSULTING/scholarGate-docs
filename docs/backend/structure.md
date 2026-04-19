---
id: backend-structure
title: Backend Project Structure
sidebar_label: Structure
---

# Backend Project Structure

Java 21 + Spring Boot 3.3.3. **Hexagonal architecture** (Ports & Adapters) with modular domain boundaries and full multi-tenant support.

## Root Package: `com.scholargate`

### Academic Domain

All modules live under `com.scholargate.academic.*`. Each follows a 3-layer structure: `api/` → `application/` → `domain/`.

| Module | Responsibility |
|---|---|
| `academic.student` | Student profiles, documents, photo upload, student codes |
| `academic.teacher` | Teacher profiles, professions, subject specialties, documents |
| `academic.section` | Class sections (group of students in a grade/level) |
| `academic.subject` | Subject catalog — includes Peru EBR fields |
| `academic.assignment` | Teacher ↔ Subject ↔ Section assignments |
| `academic.enrollment` | Student ↔ Section enrollment lifecycle |
| `academic.gradelevel` | Grade-level (e.g. 1st grade, 2nd grade) management |
| `academic.level` | Academic levels (primary, secondary, etc.) |
| `academic.period` | Academic periods within a school year |
| `academic.grade` | Grades, report cards, grade portal, rubric grading |
| `academic.catalog` | Grading catalog configuration |
| `academic.attendance` | Attendance records and reports |
| `academic.schedule` | Class schedules with versioning & change logs |
| `academic.resource` | Educational resources (branch-scoped) |
| `academic.studygroup` | Study group management |
| `academic.spacebooking` | Classroom/space reservation system |
| `academic.shift` | School shifts (morning, afternoon, evening) |
| `academic.calendar` | School calendar — holidays, events |
| `academic.guardian` | Student guardians (parents/tutors) |
| `academic.teaching` | Teaching assignment context |

### Platform & Business Modules

| Module | Responsibility |
|---|---|
| `auth` | Login, register, JWT, token refresh, super admin login |
| `user` | User accounts, password reset, sessions, invitations |
| `tenant` | Tenant lifecycle, profile, branding, preferences |
| `branch` | Multi-branch management — activate, deactivate, set main |
| `branch.offering` | Academic offerings per branch |
| `plan` | Subscription plans |
| `platform` | Super admin: tenant management, usage metrics, dashboards |
| `module` | Feature module registry and enablement per tenant |
| `navigation` | Dynamic menu/sidebar config per tenant and role |
| `dashboard` | Tenant and platform analytics dashboards |
| `payments` | Billing (payments, charges, concepts, statements) — Culqi |
| `communication.announcement` | Announcements CRUD and publishing |
| `communication.message` | Internal messaging system |
| `configuration.schoolyear` | School year config (activate, close, reopen) |
| `configuration.grading` | Grading scale preferences |
| `security.rbac` | Role-Based Access Control |
| `security.acl` | Access Control Lists |
| `security.roles` | Role catalog and permission matrix |
| `audit` | Audit event logging |

### Cross-Cutting (`com.scholargate.common`)

| Package | Contents |
|---|---|
| `common.persistence` | `BaseEntity`, `TenantScopedEntity`, shared repository patterns |
| `common.security` | JWT utilities, token generation/validation |
| `common.tenant` | Tenant context holder, tenant resolution utilities |
| `common.storage` | File upload handling (avatar, documents) |

## Layer Convention

Within each module:

```
module-name/
├── api/
│   ├── Controller.java          # REST endpoints, request/response mapping
│   └── dto/                     # Request/Response DTOs (Lombok + builder)
├── application/
│   └── Service.java             # Use cases, transactions, orchestration
└── domain/
    ├── Entity.java               # JPA entity
    └── Repository.java           # Spring Data repository
```

## Security Filter Chain

Requests pass through three filters before reaching controllers:

1. `TenantFilter` — extracts `X-Tenant-ID` header, stores in thread-local context
2. `TenantAccessGuardFilter` — validates tenant is active and accessible
3. `JwtAuthenticationFilter` — validates JWT, sets Spring Security context

## Key Configuration

**`application.yml` highlights:**
- Database: PostgreSQL via environment variables
- Flyway: enabled, migrations from `classpath:db/migration`
- Redis: caching layer
- JWT: configurable secret + TTLs via env vars
- Sample seed data: 5 default roles (admin, teacher, tutor, student, parent)
- Peru EBR bootstrap: optional curriculum initialization
- File storage: `uploads/` directory
- i18n: English and Spanish message bundles

## Coding Guidelines

- All classes and DTOs must use **English names**
- DTOs use **Lombok** with `@Builder`
- Exceptions are meaningful and map to consistent HTTP error codes
- Business logic lives in the **application/service layer**, not controllers
- All data access must be scoped by `tenant_id`
