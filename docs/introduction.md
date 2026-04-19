---
id: introduction
title: scholarGate Overview
sidebar_label: Introduction
---

# scholarGate – School Management Platform

scholarGate is a **multi-tenant SaaS school management platform** built for schools, institutes and academies. It handles the full lifecycle of academic operations: enrolment, grading, attendance, scheduling, communications and billing — all from a single platform.

## Current Tech Stack

| Layer | Technology |
|---|---|
| Backend | Java 21 · Spring Boot 3.3.3 |
| Frontend | Angular 19 · Fuse Admin Template |
| UI Components | Angular Material 19 · Tailwind CSS 3 |
| Database | PostgreSQL + Flyway 10 (90 migrations) |
| Cache | Redis |
| Security | Spring Security · JWT (JJWT 0.12.5) |
| Payments | Culqi (Peruvian payment gateway) |
| Reports | Apache POI (Excel) · PDFBox (PDF) |
| API Docs | SpringDoc OpenAPI 2.6.0 |
| Charts | ApexCharts |
| Calendar | FullCalendar 6 |
| i18n | Transloco 7 |

## Platform Domains

### Academic
Students · Teachers · Sections · Subjects · Enrollments · Grades · Assessments · Rubrics · Attendance · Schedules · Periods · Resources · Study Groups · Space Booking · Shifts · Levels · Grade Levels

### Platform & Tenant
Tenant · Branch · Users · Roles & Permissions (RBAC) · ACL · Module Management · Navigation · Plans · Audit Logging

### Finance
Payments · Charges · Concepts · Statements · Culqi Integration

### Communication
Announcements · Internal Messaging

### Configuration
School Year · Grading Scales · Tenant Preferences · Branding

## Core Principles

- **Multi-tenant by design** — one platform, many schools.
- **API-first** — all functionality exposed through versioned REST APIs.
- **Hexagonal architecture** — domain logic decoupled from infrastructure.
- **Secure by default** — stateless JWT auth, RBAC, tenant isolation, audit trail.
- **Configurable, not customizable** — behavior driven by configuration, not per-school code.

## Quick Start

```bash
# Backend
cd scholarGate-backend
./mvnw spring-boot:run

# Frontend
cd scholarGate-frontend
npm install && npm start

# Docs site
cd scholarGate-docs
npm start
```

## Environment Variables (Backend)

```env
DATABASE_URL=jdbc:postgresql://localhost:5432/scholargate
DATABASE_USERNAME=postgres
DATABASE_PASSWORD=secret
JWT_SECRET=your-256-bit-secret
REDIS_HOST=localhost
REDIS_PORT=6379
CULQI_PUBLIC_KEY=pk_...
CULQI_PRIVATE_KEY=sk_...
```
