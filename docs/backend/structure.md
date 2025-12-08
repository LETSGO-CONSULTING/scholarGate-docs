---
id: backend-structure
title: Backend Project Structure
sidebar_label: Structure
---

# Backend Project Structure

The backend is built with **Java 21** and follows a modular, layered structure.

## High-Level Modules

Typical package layout:

- `auth` – authentication and authorization.
- `tenant` – tenant lifecycle and configuration.
- `branch` – branches per tenant.
- `user` – user accounts and roles.
- `common` – shared utilities and base classes.
- `config` – configuration, security and infrastructure.

## Layering

Within each module we follow a clean layering:

- **API layer** – controllers, DTOs and API contracts.
- **Application / Service layer** – use cases, orchestration, transactions.
- **Domain layer** – entities, aggregates, domain logic.
- **Infrastructure layer** – repositories, external integrations, persistence configuration.

## Coding Guidelines

- All new classes and DTOs must use **English names**.
- DTOs should use Lombok with the **builder pattern**.
- Exceptions must be meaningful and mapped to consistent HTTP responses.
- Business logic should not be placed inside controllers.

## Testing

- Unit tests for domain and service layers.
- Integration tests for persistence and external integrations.
- API tests for critical endpoints.

This document should be updated as the backend evolves to more modules and services.
