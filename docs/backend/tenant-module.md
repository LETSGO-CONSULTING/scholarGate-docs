---
id: backend-tenant-module
title: Tenant Module
sidebar_label: Tenant Module
---

# Tenant Module

The Tenant module handles the lifecycle and configuration of **tenants** (schools) within scholarGate.

## Responsibilities

- Create, update and deactivate tenants.
- Store tenant metadata (name, contact info, timezone, locale).
- Manage tenant configuration and feature flags.
- Integrate with provisioning flows (default roles, branches, admin user).

## Tenant Lifecycle

1. **Provisioning** – tenant is created, base configuration is set, and an initial admin user is created.
2. **Active** – tenant is fully operational.
3. **Suspended** – limited access due to billing or compliance issues.
4. **Deactivated** – tenant cannot log in; data is archived or prepared for deletion.

## Configuration

Tenants can configure:

- Branding (logo, primary color, name).
- Default language and regional settings.
- Enabled modules (billing, notifications, etc.).
- Academic parameters (school year, grading configuration).

Configuration should be retrieved through a **tenant configuration service** that caches values when appropriate.

## Integration Points

- Auth module (assign initial admin).
- Branch module (create default branch).
- Billing (subscription and billing status).

All tenant operations must be auditable.
