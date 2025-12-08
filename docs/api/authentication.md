---
id: api-authentication
title: API Authentication
sidebar_label: Authentication
---

# API Authentication

All protected endpoints require **authentication**.

## Mechanism

- Authentication is performed via **Bearer JWT tokens** in the `Authorization` header:

```http
Authorization: Bearer <access_token>
```

- Access tokens are short-lived and must be refreshed using a refresh token flow.

## Public vs Protected Endpoints

- Public endpoints: login, registration (if allowed), health checks.
- Protected endpoints: everything that accesses tenant or user data.

## Token Contents

Tokens must contain:

- `sub` – user identifier.
- `tenant_id` – current tenant.
- `roles` / `authorities`.
- Expiration time and issuer.

## Token Validation

- Validate signature and expiration.
- Ensure token is not revoked.
- Ensure tenant context is set based on the token.

This document complements the Backend Auth module documentation and defines how clients authenticate to the APIs.
