---
id: api-authentication
title: API Authentication
sidebar_label: Authentication
---

# API Authentication

All protected endpoints require a **Bearer JWT token** in the `Authorization` header.

## Required Headers

```http
Authorization: Bearer <access_token>
X-Tenant-ID: <tenant-id>
Content-Type: application/json
```

`X-Tenant-ID` is required for all tenant-scoped endpoints. Omit it only for `/api/v1/auth/**` and platform endpoints.

## Auth Flow

### 1. Login

```http
POST /api/v1/auth/login
Content-Type: application/json

{
  "email": "user@school.com",
  "password": "secret"
}
```

**Response:**
```json
{
  "accessToken": "eyJhbGci...",
  "refreshToken": "eyJhbGci...",
  "expiresIn": 900
}
```

### 2. Use Access Token

```http
GET /api/v1/academic/students
Authorization: Bearer eyJhbGci...
X-Tenant-ID: school-abc
```

### 3. Refresh

```http
POST /api/v1/auth/refresh
Content-Type: application/json

{
  "refreshToken": "eyJhbGci..."
}
```

### 4. Super Admin Login (no tenant required)

```http
POST /api/v1/auth/login/superadmin
Content-Type: application/json

{
  "email": "admin@platform.com",
  "password": "secret"
}
```

## Token Details

| Property | Value |
|---|---|
| Algorithm | HS256 (configurable) |
| Access token TTL | 15 minutes |
| Refresh token TTL | 7 days |
| Secret source | `JWT_SECRET` env var |

## Public Endpoints (no token needed)

```
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/login/superadmin
POST /api/v1/auth/refresh
GET  /api/v1/health
GET  /actuator/**
GET  /swagger-ui/**
GET  /v3/api-docs/**
```

## Error Responses

| Status | Meaning |
|---|---|
| `401 Unauthorized` | Missing, expired or invalid token |
| `403 Forbidden` | Token valid but insufficient role/permission |
| `400 Bad Request` | Missing `X-Tenant-ID` header |

## API Explorer

Swagger UI available at: `http://localhost:8080/swagger-ui/index.html`  
OpenAPI spec: `http://localhost:8080/v3/api-docs`
