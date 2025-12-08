---
id: database-schema
title: Database Schema
sidebar_label: Schema
---

# Database Schema

scholarGate uses **PostgreSQL** with a schema designed for multi-tenant operation.

## Core Tables

Minimum core tables include:

- `tenants` – tenant metadata and status.
- `branches` – branches belonging to a tenant.
- `users` – user accounts.
- `roles` and `user_roles` – RBAC model.
- `audit_log` – important system events.

Each domain module (academic, billing, etc.) introduces its own tables with a consistent naming scheme.

## Naming Conventions

- Table names: `snake_case`, plural (`students`, `tenants`).
- Primary keys: `id` with type `UUID` or `BIGSERIAL` depending on strategy.
- Foreign keys: `<referenced_table>_id` (e.g. `tenant_id`, `user_id`).
- Tenant discriminator: `tenant_id` for tenant-owned records.

## Multi-Tenant Fields

Most tables contain:

- `tenant_id` – required for tenant ownership.
- `branch_id` – when the record is scoped to a branch.

These fields must always be present in WHERE clauses when querying tenant data.

## Auditing Fields

- `created_at`, `created_by`
- `updated_at`, `updated_by`
- Optionally `deleted_at`, `deleted_by` for soft deletes.

This document should link to detailed ER diagrams and module-specific schema documentation.
