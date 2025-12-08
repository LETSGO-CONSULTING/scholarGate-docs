---
id: backend-database-layer
title: Database Layer
sidebar_label: Database Layer
---

# Database Layer

The backend uses **PostgreSQL** as the main relational database.

## ORM / Persistence

- The recommended stack is **JPA/Hibernate** or a similar ORM.
- Entities must include tenant-related fields where applicable (`tenant_id`, `branch_id`).
- Mappings are defined using standard annotations, following clear naming conventions.

## Repositories

- Each aggregate has a corresponding repository interface.
- Repositories must **always filter by tenant** when dealing with tenant-owned data.
- Complex queries should be encapsulated in repository or query classes, not scattered across services.

## Transactions

- Service layer methods define transaction boundaries.
- Use read-only transactions for query-only operations.
- Avoid long-running transactions, especially when interacting with external systems.

## Performance Considerations

- Proper indexing on `tenant_id`, `branch_id` and foreign keys.
- Avoid N+1 queries; use join fetching when necessary.
- Consider pagination and filtering on large result sets.

## Migrations

Database changes are managed through a migration tool (see `Database / Migrations` document) to keep all environments in sync.
