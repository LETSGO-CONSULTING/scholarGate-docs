---
id: frontend-angular-17-standards
title: Frontend Standards (Angular 17)
sidebar_label: Angular 17 Standards
---

# Frontend Standards (Angular 17)

The main web portals for scholarGate are built with **Angular 17**.

## Goals

- Provide a **consistent UI/UX** across all portals (admin, teacher, student, guardian).
- Use reusable components and modules.
- Keep all labels and texts localized (EN / ES / PT).

## Project Structure

Recommended high-level structure:

- `app/core` – core services, interceptors, guards, layout.
- `app/shared` – reusable components, directives, pipes.
- `app/features` – feature modules (students, classes, grades, billing, etc.).
- `app/config` – i18n configuration and constants.

## Coding Guidelines

- Use **standalone components** where appropriate (Angular 17+).
- Strong typing everywhere (`strict` mode enabled).
- Separate smart (container) and dumb (presentational) components when it makes sense.
- Avoid putting business logic inside components; delegate to services.

## UI Library & Styling

- Use a single chosen UI library (e.g. Angular Material or a custom design system).
- Follow a shared design system (colors, typography, spacing).
- Support responsive layouts for desktop, tablet and mobile.

## Internationalization (i18n)

- All user-facing strings must use the translation system.
- Default language: **English**.
- Spanish and Portuguese translations should be added progressively.

## Testing

- Unit tests for components and services.
- Basic e2e tests for core flows (login, navigation, main CRUD screens).

This document sets the standards for frontend development and should evolve with the UI/UX guidelines.
