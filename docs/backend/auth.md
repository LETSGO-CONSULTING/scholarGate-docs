---
id: backend-auth
title: Authentication & Authorization
sidebar_label: Auth
---

# Authentication & Authorization

**Stateless JWT-based auth** via Spring Security. No sessions stored server-side.

## Auth Endpoints

```
POST /api/v1/auth/register          Register new user
POST /api/v1/auth/login             Login (returns access + refresh tokens)
POST /api/v1/auth/login/superadmin  Super admin login (no tenant header required)
POST /api/v1/auth/refresh           Refresh access token
```

All other `/api/v1/**` endpoints require a valid Bearer token.

## Token Format

```http
Authorization: Bearer <access_token>
```

**JWT Payload includes:**
- `sub` — user ID
- `tenant_id` — tenant context
- `roles` / `authorities` — RBAC grants
- `iat`, `exp` — issued at / expiration

**TTLs (configurable via env vars):**
- Access token: **15 minutes** (default)
- Refresh token: **7 days** (default)

## Filter Chain

```
Request
  │
  ├─► TenantFilter           → reads X-Tenant-ID header → sets TenantContext
  ├─► TenantAccessGuardFilter → validates tenant is active
  ├─► JwtAuthenticationFilter → validates JWT, sets SecurityContext
  │
  └─► Controller
```

## Public Routes (no auth required)

```
/api/v1/health
/api/v1/auth/**
/actuator/**
/swagger-ui/**
/v3/api-docs/**
```

## Protected Routes

| Pattern | Requirement |
|---|---|
| `/api/v1/platform/**` | `SUPER_ADMIN` role |
| `/api/v1/**` (all others) | Any authenticated user |

## Multi-tenant Header

Every request to tenant-scoped endpoints must include:

```http
X-Tenant-ID: your-tenant-id
```

The `TenantFilter` extracts this and stores it in thread-local context. All JPA queries then automatically filter by `tenant_id`.

## RBAC

Roles are tenant-scoped. Default seeded roles:

| Role | Description |
|---|---|
| `ADMIN` | Full access to tenant resources |
| `TEACHER` | Academic: grades, attendance, schedules |
| `TUTOR` | Limited academic view |
| `STUDENT` | Grade portal, resources |
| `PARENT` | Guardian view |
| `SUPER_ADMIN` | Platform-level, cross-tenant |

Fine-grained permission evaluation via `SecurityACLService` and `PermissionEvaluatorService`.

## Password & Session Notes

- Passwords hashed with BCrypt
- No plain-text storage
- Sessions are stateless — revocation via refresh token invalidation
- User invitation flow: `POST /api/v1/user-invitations`
