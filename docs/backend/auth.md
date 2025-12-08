---
id: backend-auth
title: Authentication & Authorization
sidebar_label: Auth
---

# Authentication & Authorization

The **Auth module** is responsible for user authentication, session management and authorization.

## Authentication Methods

Supported login flows:

- **Email / username + password**
- **Google login** (OAuth2)
- **Apple login** (planned)

All tokens are issued as **JWTs** with:

- Subject (`sub`) = user identifier
- Tenant identifier (`tenant_id`)
- Roles and/or permissions
- Standard token metadata (issued at, expiration, etc.)

## Refresh Tokens

- Short-lived access tokens.
- Long-lived refresh tokens stored in the database.
- Ability to revoke refresh tokens per user/device.

## Password Policies

- Minimum length and complexity.
- Secure hashing using modern algorithms.
- No storage of plain-text passwords.

## Authorization

- Role-based access control (RBAC) as the initial model.
- Roles are tenant-scoped (e.g. `TENANT_ADMIN`, `TEACHER`, `STUDENT`, `GUARDIAN`).
- Certain operations may also use **fine-grained permissions** in the future.

## Security Considerations

- All auth endpoints must be rate-limited.
- Brute-force protection on login endpoints.
- Audit trails for security-sensitive operations (password changes, role changes, etc.).

This document defines the baseline for the Auth module and should be kept in sync with security requirements.
