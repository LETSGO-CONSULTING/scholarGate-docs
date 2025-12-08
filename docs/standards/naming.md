---
id: standards-naming
title: Naming Conventions
sidebar_label: Naming
---

# Naming Conventions

Consistent naming makes the codebase easier to understand and maintain.

## General Rules

- All names must use **English**.
- Choose clear and descriptive names.
- Avoid abbreviations unless they are widely understood (`id`, `URL`, `API`).

## Backend

- Packages: `lowercase`, dot-separated (`com.company.scholargate.auth`).
- Classes: `PascalCase` (`StudentService`, `TenantController`).
- Methods and variables: `camelCase` (`createStudent`, `tenantId`).
- Constants: `UPPER_SNAKE_CASE` (`DEFAULT_PAGE_SIZE`).

## Database

- Tables: `snake_case`, plural (`students`, `tenants`).
- Columns: `snake_case` (`first_name`, `tenant_id`).
- Primary key: `id`.
- Foreign keys: `<table>_id` (`user_id`, `branch_id`).

## Frontend

- Components: `PascalCase` (`StudentListComponent`).
- Files: `kebab-case` (`student-list.component.ts`).
- CSS classes: `kebab-case` (`student-card`, `page-header`).

These conventions should be followed for all new code and database objects.
