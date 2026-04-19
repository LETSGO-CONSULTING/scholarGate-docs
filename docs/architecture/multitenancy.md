---
id: architecture-multitenancy
title: Multitenancy Design
sidebar_label: Multitenancy
---

# Multitenancy Design

scholarGate is **multi-tenant by design**. A single deployment hosts many schools, with strict data isolation per tenant.

## Tenant Model

```
Platform (SUPER_ADMIN)
  └── Tenant (School / Institution)
        ├── Branch (Campus / Location)
        │     └── Academic Offerings
        └── Users (Admin, Teacher, Student, Parent...)
```

- **Tenant** — represents a school or institution
- **Branch** — campus or logical subdivision within a tenant
- **User** — always belongs to exactly one tenant

## Isolation Strategy

**Shared database, row-level isolation via `tenant_id`:**

- Single PostgreSQL instance
- All tenant-owned tables have a `tenant_id` column (and often `branch_id`)
- `TenantScopedEntity` base class auto-injects `tenant_id` on all queries
- Hibernate filters applied at the persistence layer — no manual filtering needed in services

## Tenant Resolution

Every authenticated request provides the tenant via:

```http
X-Tenant-ID: <tenant-identifier>
```

**Filter pipeline:**
1. `TenantFilter` — reads `X-Tenant-ID` header, stores in `TenantContext` (thread-local)
2. `TenantAccessGuardFilter` — validates tenant exists and is active
3. All downstream services read from `TenantContext` — no explicit parameter passing

**Platform tenant** (`PLATFORM_TENANT_ID`) is a special tenant used exclusively by `SUPER_ADMIN` users for cross-tenant operations.

## Entity Base Classes

```java
// All entities
class BaseEntity {
    UUID id;
    Instant createdAt;
    Instant updatedAt;
}

// Tenant-scoped entities (majority)
class TenantScopedEntity extends BaseEntity {
    String tenantId;   // auto-set from TenantContext
}
```

## Per-Tenant Configuration

Tenants can configure independently:

| Category | Examples |
|---|---|
| Branding | Logo, name, colors |
| Academic | Grading scales, periods, school year, shifts |
| Preferences | Student code format, schedule windows |
| Modules | Enable/disable feature modules |
| Navigation | Dynamic menu per role |
| Plans | Subscription tier controls feature access |

## Access Control Rules

- Every service operation is automatically scoped to the current tenant
- `SUPER_ADMIN` role can operate cross-tenant via `/api/v1/platform/**`
- Cross-tenant reads are explicitly handled and audit-logged
- Branch-level isolation applies where relevant (academic offerings, schedules)

## Tenant Lifecycle

| State | Description |
|---|---|
| Active | Normal operation |
| Inactive | Login blocked, data preserved |
| Suspended | Platform admin action |

Operations available via `/api/v1/platform/tenants`:
- Create, activate, deactivate tenant
- View usage metrics per tenant
- Manage tenant users (platform-level)
