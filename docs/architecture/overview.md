---
id: architecture-overview
title: Architecture Overview
sidebar_label: Overview
---

# Architecture Overview

This document provides a high-level view of the **scholarGate** architecture.

## High-Level Diagram

At a conceptual level, the platform is composed of:

- **API Gateway / Edge Layer**
- **Authentication & Authorization service**
- **Core backend services** (users, tenants, branches, academic, billing, notifications, etc.)
- **Frontend applications** (admin portal, teacher portal, student/guardian portal)
- **Database layer** (PostgreSQL) with multi-tenant support
- **Messaging / Event bus** for async communication
- **File storage** for documents and assets
- **Observability stack** (logs, metrics, traces)

> The detailed diagrams (C4 model: Context, Container, Component) should be added here as the system evolves.

## Architectural Style

- **Microservice-friendly modular monolith** to start, with a clear path to service extraction.
- **Hexagonal / Ports & Adapters** for core services where applicable.
- **RESTful APIs** with consistent conventions.
- **Event-driven patterns** for long-running or cross-module workflows.

## Main Modules

- **Auth** – login, registration, JWT, refresh tokens, OAuth providers.
- **Tenant** – tenant lifecycle, configuration, branding.
- **Branch** – physical or virtual branches within a tenant.
- **User** – user profiles, roles and permissions.
- **Academic** – courses, subjects, schedules, grades.
- **Finance** – billing, payments, receipts.
- **Communication** – emails, notifications, messaging.

## Non-Functional Requirements

- **Scalability** – horizontal scaling where possible.
- **Security** – strong authentication and RBAC/ABAC.
- **Reliability** – clear error handling and retry strategies.
- **Performance** – efficient DB access and caching where needed.
- **Observability** – logs, metrics and traces per tenant.

This document should be updated continuously as the platform grows.
