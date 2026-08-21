<h1 align="center">robertsinski.dev</h1>

<p align="center">
  <em>Personal site: what I do, where I worked, and how the projects behind it are built.</em>
</p>

<p align="center">
  <a href="https://robertsinski.dev">Live</a> ·
  <a href="#tech-stack">Tech Stack</a> ·
  <a href="#getting-started">Getting Started</a> ·
  <a href="#project-structure">Project Structure</a> ·
  <a href="#resume">Resume</a>
</p>

---

One page with the usual sections, plus a case study for each larger project:
what problem it solves, how the pieces fit together, and the decisions worth
explaining. Dark only, glass over an aurora background, no client-side state
except the tabs in the background section.

## Tech Stack

| Layer      | Technology                                            |
| ---------- | ----------------------------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) (App Router, RSC)    |
| UI         | [React 19](https://react.dev)                         |
| Language   | [TypeScript 5](https://www.typescriptlang.org)        |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com)             |
| Type       | Outfit (display) + Geist (body) via `next/font`       |
| Icons      | [Lucide](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons/) |
| Data       | GitHub contributions API, revalidated hourly          |
| CI         | GitHub Actions: lint, typegen, typecheck, build        |

## Project Structure

```
src/
├── app/
│   ├── (home)/                 the one page
│   │   └── _components/        one folder per section, partials inside
│   ├── (case-study)/           /klaps, /boardflow, /orderflow
│   ├── globals.css             theme tokens, glass utilities, animations
│   ├── layout.tsx              fonts, metadata, Person schema
│   ├── not-found.tsx
│   ├── robots.ts
│   └── sitemap.ts
├── components/                 shared across routes (logo tile, rows)
└── lib/                        content: experience, projects, case studies
```

Content lives in `src/lib` as typed data, not in the components. Adding a job
or a project means editing one file there.

## Getting Started

### Prerequisites

- Node.js 24
- npm

### Install & Run

```bash
npm install
npm run dev
```

The site runs on [localhost:3000](http://localhost:3000).

### Checks

```bash
npm run lint         # eslint
npx next typegen     # route types, needed before typecheck on a clean checkout
npx tsc --noEmit     # typecheck
npm run build        # production build
```

## Resume

`public/resume.pdf` is generated from `resume/resume.html` with headless Chrome.
It has to stay one A4 page; the scale knobs and the render command are described
in [resume/README.md](resume/README.md).

## Deployment

Every push to `main` and `dev`, and every pull request, runs the same checks
through [GitHub Actions](.github/workflows/ci.yml). The site itself is a static
build with one hourly revalidated fetch.
