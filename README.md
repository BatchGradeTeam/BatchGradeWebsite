# BatchGrade Website

BatchGrade is an in-progress automated grading tool for computer science classrooms. This repository contains the public-facing website and documentation pages for the project.

The site is built with Next.js, React, TypeScript, and Tailwind CSS. It introduces the BatchGrade product, explains the local-first grading workflow, links to the project repository, and provides getting-started documentation for instructors.

## Pages

- `/` - Product overview, features, audience, and workflow.
- `/docs` - Installation, test-case configuration, grader usage, exporting, and FAQ.
- `/about` - Project mission, technology stack, and team information.

## Tech Stack

- Next.js 16 with the App Router
- React 19
- TypeScript
- Tailwind CSS 4
- ESLint 9 with the Next.js config

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

<<<<<<< Updated upstream
=======
## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines, PR expectations, and commit message conventions.

## License

This repository is not open source. See [LICENSE](LICENSE) for the repository's proprietary terms and restrictions on reuse.

>>>>>>> Stashed changes
## Available Scripts

```bash
npm run dev
```

Starts the local development server.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Runs the production build locally.

```bash
npm run lint
```

Runs ESLint across the project.

## Project Structure

```text
app/
  about/          About page
  docs/           Documentation page
  globals.css     Global styles and Tailwind import
  layout.tsx      Shared metadata, navigation, and footer
  page.tsx        Home page
components/       Shared UI components
components/docs/  Documentation-specific components
lib/constants.ts  Shared project constants
public/           Static assets
```

## Configuration

The external BatchGrade repository URL is defined in `lib/constants.ts`:

```ts
export const GITHUB_URL =
  "https://github.com/UNLV-CS472-672/2026-S-GROUP3-BatchGrade";
```

Update this value if the upstream project repository changes.

## Deployment

The site can be deployed anywhere that supports Next.js. For Vercel, connect the repository and use the default Next.js build settings:

- Build command: `npm run build`
- Development command: `npm run dev`
- Output: managed by Next.js
