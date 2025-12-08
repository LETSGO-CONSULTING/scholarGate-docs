---
id: architecture-microservices
title: Microservices & Modularization
sidebar_label: Microservices
---

# Microservices & Modularization

scholarGate starts as a **modular monolith** with a clear separation of domains and an easy path to future microservices.

## Current Approach

- Single deployable backend application.
- Strong **package/module boundaries** for each domain (auth, tenant, user, academic, billing, etc.).
- Shared **common** and **infrastructure** modules only for cross-cutting concerns.

## When to Extract a Microservice

A module becomes a candidate for extraction when:

- It requires **independent scaling**.
- It has **distinct SLA or compliance** requirements.
- It needs to be deployed **independently** from the rest of the system.
- It is a good boundary for integration with external systems (e.g. payments).

## Service Responsibilities

Each future microservice must:

- Own its **data** (no shared DB tables).
- Expose **well-defined APIs**.
- Publish domain events when state changes.
- Avoid direct coupling to other services' internals.

## Communication Patterns

- **Synchronous**: REST over HTTPS via API Gateway.
- **Asynchronous**: message broker (e.g. Kafka) for events such as `StudentRegistered`, `InvoicePaid`, `GradeUpdated`.

## Deployment Considerations

- Each microservice should be independently deployable.
- CI/CD pipelines per service.
- Versioned APIs and backward compatibility guarantees.

This document acts as a guideline for future microservice extraction and should be revisited regularly.
