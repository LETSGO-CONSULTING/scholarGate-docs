---
id: standards-conventional-commits
title: Conventional Commits
sidebar_label: Conventional Commits
---

# Conventional Commits

The project follows the **Conventional Commits** specification for commit messages.

## Format

```text
<type>[optional scope]: <short descriptive message>
```

Examples:

- `feat(auth): add login endpoint`
- `fix(tenant): correct timezone handling`
- `chore: update dependencies`

## Common Types

- `feat` – new feature.
- `fix` – bug fix.
- `docs` – documentation changes.
- `refactor` – code refactoring without changing behavior.
- `test` – adding or updating tests.
- `chore` – maintenance tasks (build, tooling, configs).

## Benefits

- Clear change history.
- Easier generation of changelogs.
- Better collaboration across the team.

All team members should follow this convention for every commit.
