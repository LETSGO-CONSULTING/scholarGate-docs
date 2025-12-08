---
id: architecture-multitenancy
title: Multitenancy Design
sidebar_label: Multitenancy
---

# Multitenancy Design

scholarGate is **multi-tenant by design**. A single platform hosts many schools (tenants), while keeping strict data isolation.

## Tenant Model

Core concepts:

- **Tenant** – represents a school or institution.
- **Branch** – represents a campus, building or logical subdivision of a tenant.
- **User** – always belongs to a tenant; may be linked to one or more branches.

## Isolation Strategy

The initial strategy is **shared database with tenant discriminator**:

- A single PostgreSQL database.
- Every tenant-owned table includes a `tenant_id` (and often `branch_id`) column.
- All queries must filter by `tenant_id` (enforced in the data access layer).

In the future, high-volume tenants may be migrated to **separate databases** if required.

## Tenant Resolution

Tenant is resolved from:

- The authenticated user's context (preferred).
- The request domain or subdomain (e.g. `schoolA.scholargate.app`).
- Explicit headers in system-to-system calls.

## Access Control

- Every request runs within a **tenant context**.
- Services are responsible for ensuring that all operations are tenant-scoped.
- Admin users may have **cross-tenant** visibility, but this must be explicitly handled and audited.

## Configuration per Tenant

Tenants may override or configure:

- Branding (logo, colors, name).
- Localization defaults (language, date formats).
- Enabled modules and features.
- Academic settings (grading scale, periods, schedules).

All configuration is stored in tenant-aware tables to keep full separation.

## Data Migration & Offboarding

Procedures must exist for:

- Tenant provisioning and initial setup.
- Exporting tenant data on request.
- Safely deactivating or deleting a tenant while keeping audit trails when required.

This document is the reference for all multi-tenant decisions and must stay aligned with implementation.
