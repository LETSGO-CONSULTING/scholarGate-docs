---
id: api-errors
title: API Error Handling
sidebar_label: Error Handling
---

# API Error Handling

APIs should return **consistent error responses** to clients.

## Error Response Format

A typical error response:

```json
{
  "timestamp": "2025-01-01T10:00:00Z",
  "path": "/api/v1/students",
  "status": 400,
  "error": "Bad Request",
  "code": "VALIDATION_ERROR",
  "message": "One or more fields are invalid.",
  "details": [
    {
      "field": "firstName",
      "message": "must not be blank"
    }
  ]
}
```

## Error Codes

Use stable, documented error codes such as:

- `VALIDATION_ERROR`
- `AUTHENTICATION_FAILED`
- `ACCESS_DENIED`
- `RESOURCE_NOT_FOUND`
- `CONFLICT`
- `INTERNAL_ERROR`

## Logging

- All server-side errors must be logged with enough context.
- Sensitive data (passwords, tokens, personal data) must never be logged.

## Client Behaviour

Clients should rely on:

- HTTP status code for general outcome.
- `code` and `message` for decision-making and user feedback.

This document defines the contract between backend services and clients for error handling.
