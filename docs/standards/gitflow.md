---
id: standards-gitflow
title: Git Workflow
sidebar_label: Git Workflow
---

# Git Workflow

The project uses a simple but robust Git workflow.

## Main Branches

- `main` – production-ready code.
- `qa` – integrated testing branch.
- `dev` – active development.

## Feature Branches

New work starts from `dev`:

```bash
git checkout dev
git checkout -b feature/<short-description>
```

Examples:

- `feature/auth-login-endpoint`
- `feature/tenant-crud`

## Pull Requests

- All feature branches are merged via **Pull Request**.
- At least one review is required.
- CI must pass before merging.

## Merge Flow

1. Feature branch → `dev`.
2. When stable, `dev` → `qa`.
3. After testing, `qa` → `main` for production release.

## Hotfixes

Critical production fixes can branch from `main`:

```bash
git checkout main
git checkout -b hotfix/<issue-id>
```

Then merged back to `main`, `qa` and `dev`.

This workflow should be adapted if the team grows or release strategy changes.
