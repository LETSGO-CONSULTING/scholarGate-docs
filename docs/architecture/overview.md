---
id: architecture-overview
title: Architecture Overview
sidebar_label: Overview
---

# Architecture Overview

scholarGate is a **modular monolith** with hexagonal architecture and full multi-tenant support. Each domain module is self-contained but shares the same deployment unit.

## System Components

```
                    ┌──────────────────────────────────┐
                    │        Angular 19 Frontend        │
                    │   (Fuse + Material + Tailwind)    │
                    └──────────────┬───────────────────┘
                                   │ REST + Bearer JWT
                                   │ X-Tenant-ID header
                    ┌──────────────▼───────────────────┐
                    │     Spring Boot 3.3.3 API         │
                    │                                   │
                    │  TenantFilter                     │
                    │  TenantAccessGuardFilter          │
                    │  JwtAuthenticationFilter          │
                    │                                   │
                    │  ┌──────────┐  ┌──────────────┐  │
                    │  │ Academic │  │   Platform   │  │
                    │  │ (20 mod) │  │  (15 mod)    │  │
                    │  └──────────┘  └──────────────┘  │
                    │  ┌──────────┐  ┌──────────────┐  │
                    │  │ Finance  │  │  Security    │  │
                    │  │ Payments │  │  RBAC / ACL  │  │
                    │  └──────────┘  └──────────────┘  │
                    └──────────────┬───────────────────┘
                                   │
             ┌─────────────────────┼─────────────────────┐
             │                     │                     │
      ┌──────▼──────┐   ┌──────────▼────────┐  ┌────────▼─────┐
      │ PostgreSQL  │   │       Redis        │  │  File Store  │
      │  (Flyway)   │   │   (Cache layer)    │  │  (uploads/)  │
      └─────────────┘   └───────────────────┘  └──────────────┘
```

## Architectural Style

**Hexagonal (Ports & Adapters)** per module:
- `api/` — inbound adapters (REST controllers, DTOs)
- `application/` — use cases, business orchestration
- `domain/` — entities, business rules, repository interfaces

Domain logic is decoupled from Spring/JPA/HTTP, making each module independently testable.

## Module Count

| Category | Count |
|---|---|
| Academic domain | 20 |
| Platform / business | 15 |
| Security (RBAC, ACL, roles) | 3 |
| Cross-cutting (common) | 4 |
| **Total** | **~42** |

## Data Flow per Request

```
HTTP Request
  → TenantFilter           (reads X-Tenant-ID → sets TenantContext)
  → TenantAccessGuardFilter (validates tenant active)
  → JwtAuthenticationFilter (validates token → sets SecurityContext)
  → Controller              (maps HTTP → command / query)
  → Service                 (business logic, @Transactional boundary)
  → Repository              (JPA, filtered by tenant_id via Hibernate)
  → PostgreSQL
```

## Technology Decisions

| Decision | Choice | Reason |
|---|---|---|
| Language | Java 21 | LTS, virtual threads ready |
| Framework | Spring Boot 3.3 | Mature ecosystem + Spring Security |
| DB migration | Flyway 10 | Simple, SQL-based, 90 migrations |
| Cache | Redis | Query caching, session data |
| Auth | Stateless JWT | No session state, horizontal scale |
| Multitenancy | Shared DB + `tenant_id` filter | Simple to operate |
| Payments | Culqi | Peruvian market |
| Reports | PDFBox + Apache POI | PDF report cards, Excel exports |

## Non-Functional Characteristics

- **Scalability** — stateless backend, horizontal scaling possible
- **Security** — RBAC + ACL + audit logging + tenant isolation
- **Performance** — Redis caching, Hibernate filters
- **Observability** — audit events per tenant, `/actuator/health`
- **Testability** — TestContainers for PostgreSQL integration tests
