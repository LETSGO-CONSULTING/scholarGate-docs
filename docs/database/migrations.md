---
id: database-migrations
title: Database Migrations
sidebar_label: Migrations
---

# Database Migrations

Database schema is managed with **Flyway 10** (not Liquibase). All schema changes are SQL-based and versioned.

## Tooling

- **Tool:** Flyway 10.20.0
- **Location:** `src/main/resources/db/migration/`
- **Naming:** `V{number}__{description}.sql`
- **Auto-run:** Flyway runs on application startup (Spring Boot integration)

## Current State

**90 migrations** — `V1` through `V90`.

## Migration Summary by Phase

### Foundation (V1–V9)
- V1: Initial schema (users, tenants, core tables)
- V2: Modules registry
- V3: Navigation menu + super admin
- V4: Payments foundation
- V5: Academic attendance
- V6: Student management
- V7: Tenant plans
- V8–9: Plans catalog, module expansion

### Academic Core (V10–V26)
- V10–15: Module localization (ES), sections, subjects, assignments, levels
- V16–22: Enrollments, documents, teachers, teaching assignments, schedules, resources
- V23–26: Schedule-resources, student metadata (code, gender, DNI), teacher demographics

### Assessments & Grading (V27–V39)
- V27–34: Assessments, rubrics, periods, assessment publishing
- V35–39: Guardians, communications, branch details, school calendar, branding

### RBAC & Configuration (V40–V59)
- V40–45: Levels-sections-branches, grades, grade_id on sections, shifts, role permissions, preferences
- V46–50: Audit events, user expansion, role catalog, branding versioning, school years
- V51–59: Grading scales, RBAC, branch improvements, academic offerings, shifts flexibility

### Advanced Features (V60–V80)
- V60–69: Study groups, resources scoping, space bookings, schedule validity, preferences expansion, user phone
- V70–80: User status, teacher professions, documents, birth date, address, Peru subject fields, section uniqueness per school year, grade renaming, teaching assignment context, platform plan modules

### Recent (V81–V90)
- V81: Menu sections
- V82: User documents
- V83: User name fields split
- V84: Subject branch scoping
- V85: Navigation access control
- V86: Teacher work coverage
- V87: Teacher subjects
- V88–90: Latest schema refinements

## Migration Workflow

```bash
# Migrations run automatically on startup
./mvnw spring-boot:run

# Check migration status
./mvnw flyway:info

# Repair if needed (after fixing failed migration)
./mvnw flyway:repair
```

## Rules

1. **Never modify** an applied migration — create a new version instead
2. **One logical change** per migration when possible
3. **Commit** migration file together with the code that depends on it
4. **No manual DDL** directly in production — all changes via migrations
5. **Destructive changes** (DROP TABLE, DROP COLUMN) must be split: first deprecate, then remove in a later migration

## Testing

Integration tests use **TestContainers** with a real PostgreSQL instance — Flyway runs full migration stack on each test run, ensuring schema consistency.
