# 📚 scholarGate Documentation

This repository contains the official documentation site for **scholarGate**, built using **Docusaurus**, a modern static site generator.

The documentation covers all functional, technical, architectural and operational aspects of the scholarGate ecosystem, including backend services, frontend apps, multitenant logic, DevOps workflows, and more.

---

## 🚀 Project Purpose

The goal of this repository is to centralize:

- Product documentation
- API specifications
- Architectural diagrams
- Deployment and infrastructure guides
- Release notes & changelogs
- Development standards and conventions
- Multi-language content for EN / ES / PT

This site serves as the **knowledge hub** for the entire scholarGate platform.

---

## 🏗️ Tech Stack

- **Docusaurus 3**
- **TypeScript**
- **React**
- **MDX**
- **GitHub Pages** (hosting)

---

## 📦 Installation

```bash
yarn
```

---

## 🧪 Local Development

```bash
yarn start
```

This starts the local dev server and opens the documentation site.  
Changes are applied live without needing a restart.

---

## 🏗️ Build for Production

```bash
yarn build
```

This generates the static site in the `build/` directory.  
It can be deployed to GitHub Pages, Netlify, Vercel, AWS S3, or any static hosting service.

---

## 🚀 Deployment

### Using SSH

```bash
USE_SSH=true yarn deploy
```

### Using GitHub user credentials

```bash
GIT_USER=<Your GitHub username> yarn deploy
```

This builds the site and pushes it to the `gh-pages` branch automatically.

---

## 📁 Recommended Repository Structure

```
scholarGate-docs/
│   README.md
│   docusaurus.config.ts
│   package.json
│
├── docs/
│   ├── introduction.md
│   ├── architecture/
│   ├── backend/
│   ├── frontend/
│   ├── devops/
│   ├── database/
│   ├── api/
│   └── standards/
│
├── i18n/
│   ├── en/
│   ├── es/
│   └── pt/
│
└── static/
```

---

## 🌍 Multi-Language Support

scholarGate documentation supports:

- **English (default)**
- Spanish (`/i18n/es`)
- Portuguese (`/i18n/pt`)

All new content should be written in English first.

---

## 📌 Documentation Standards

- English-only naming in folders, files, variables and examples
- Multi-language end-user content handled through Docusaurus `i18n`
- All new pages must follow the same folder structure and naming convention
- Use MDX when embedding components or complex examples

---

## 🤝 Contribution Workflow

- Main branches: `main`, `qa`, `dev`, `feature/*`
- All updates must be made through Pull Requests
- PRs require at least one review before merging
- Use **Conventional Commits** for commit messages

---
