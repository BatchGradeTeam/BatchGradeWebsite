# Contributing to BatchGrade Website

Thanks for contributing to the BatchGrade website and documentation. This repository contains the public-facing site for the project, built with Next.js, React, TypeScript, and Tailwind CSS.

## Before You Start

- Look for an existing issue before starting work.
- If your change does not map cleanly to an issue, open or request one first.
- Keep pull requests within the scope of the linked issue. If you discover unrelated work along the way, open a follow-up issue instead of expanding the PR.
- Prefer small pull requests. Smaller PRs are easier to review, test, and merge with confidence.

## Local Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build the site for production validation:

```bash
npm run build
```

4. Run lint checks:

```bash
npm run lint
```

Open `http://localhost:3000` in your browser when the dev server is running.

## What To Contribute

This repository is for the BatchGrade website and documentation. Good contributions include:

- updates to site content and documentation
- improvements to shared UI components and page structure
- bug fixes affecting the website experience
- repository maintenance for this codebase, including CI and tooling

If a change belongs in the upstream BatchGrade application rather than this website repo, it should be proposed in the appropriate repository instead.

## Pull Request Expectations

- Link the PR to a relevant issue.
- Keep the PR focused on resolving that issue.
- Keep the PR small when possible.
- Describe what changed, why it changed, and how you validated it.
- Include screenshots or visual evidence for UI or content changes when helpful.

If the work grows beyond the original issue, split the extra scope into a separate issue or follow-up PR.

## Commit Messages

Try to follow the team's naming conventions for commits and PRs, but be practical. Consistency helps, and we want good commit messages, but this repo is lenient here. Clear and descriptive is more important than perfect formatting.

If you use Conventional Commits-style naming, these labels are a good fit:

- `feat`: new user-facing functionality
- `fix`: bug fixes
- `docs`: documentation-only changes
- `test`: adding or updating tests
- `refactor`: restructuring code without changing behavior
- `chore`: tooling, configuration, CI, dependencies, or general maintenance
- `build` or `ci`: acceptable when you want to call out pipeline or tooling work more specifically

For this team, CI/CD setup and workflow changes are generally considered `chore` work unless there is a strong reason to classify them more specifically.

## Validation

Before opening a PR, run the checks that match your change. Common validation steps for this repo include:

- `npm run lint`
- `npm run build`
- manual review of affected pages such as `/`, `/docs`, and `/about`

## Review Process

- Review feedback is part of the normal process.
- If requested changes would push the PR beyond the issue scope, prefer a follow-up issue or separate PR.
- Keep discussion tied to the current change so we can merge safely and keep momentum.
