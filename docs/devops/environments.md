---
id: devops-environments
title: Environments
sidebar_label: Environments
---

# Environments

scholarGate uses multiple environments to safely roll out changes.

## Standard Environments

- **Local** – developer machines.
- **Dev** – shared environment for integration.
- **QA** – environment for QA and UAT.
- **Staging** (optional) – near-production environment.
- **Production** – live tenant traffic.

## Configuration Management

- Use environment variables or configuration services.
- Never hard-code secrets; store them in a secure vault.
- Keep non-sensitive configuration in version control.

## Data Strategy

- Dev and QA may use anonymized or synthetic data.
- Production data is never copied directly to non-production environments without proper masking and approvals.

## Observability

Each environment should have:

- Logging (centralized).
- Metrics and dashboards.
- Basic alerts for critical errors.

This document provides the baseline for environment management and should be extended with deployment URLs and access policies.
