---
id: api-rest-guidelines
title: REST API Guidelines
sidebar_label: REST Guidelines
---

# REST API Guidelines

scholarGate follows consistent patterns for all REST APIs.

## URL Design

- Use **nouns**, not verbs.
- Plural resource names: `/api/v1/students`, `/api/v1/classes`.
- Nest resources when there is a clear containment: `/api/v1/tenants/{tenantId}/branches`.

## HTTP Methods

- `GET` – retrieve resources.
- `POST` – create new resources or trigger actions.
- `PUT` – full update of a resource.
- `PATCH` – partial update.
- `DELETE` – remove or deactivate a resource.

## Status Codes

- `200 OK` – successful GET or update.
- `201 Created` – successful resource creation.
- `204 No Content` – successful operation with no body.
- `400 Bad Request` – validation errors.
- `401 Unauthorized` – missing or invalid authentication.
- `403 Forbidden` – not enough permissions.
- `404 Not Found` – resource does not exist.
- `409 Conflict` – version conflict or business conflict.
- `500 Internal Server Error` – unexpected error.

## Versioning

- Prefix APIs with a version: `/api/v1/...`.
- Avoid breaking changes within the same major version.

## Pagination & Filtering

- Use query parameters: `?page=1&pageSize=20`.
- Provide total count when applicable.
- Support filtering and sorting where needed.

All endpoints must also respect multi-tenancy and security rules.
