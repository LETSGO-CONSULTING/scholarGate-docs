---
id: database-migrations
title: Database Migrations
sidebar_label: Migrations
---

# Database Migrations

Database changes are managed via **migrations** to keep all environments consistent.

## Tooling

The recommended tool is **Liquibase** or a similar migration framework.

Key principles:

- All schema changes must be done via migrations.
- Migrations are **idempotent** and versioned.
- No manual changes directly in production databases.

## Migration Workflow

1. Create a new migration file for the change (table, column, index, etc.).
2. Apply the migration locally and verify.
3. Commit the migration file with the related code changes.
4. CI runs migrations automatically on test environments.
5. Production deployments run migrations as part of the release process.

## Naming & Organization

- Use timestamp-based or incremental versioning for migration IDs.
- Group related changes in a single migration when possible.
- Avoid large destructive changes; break them into safe steps.

## Rollback Strategy

- Provide rollback scripts when feasible.
- For destructive operations (drops), make sure backups and retention policies are in place.

This document should be extended with concrete examples and migration templates used in scholarGate.
