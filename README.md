# 100 Days of DevOps — Learning Journal

A Vue 3 + TypeScript + Vite foundation for documenting a KodeKloud 100 Days of DevOps journey. All 100 entries start as planned templates; the site does not claim lessons, lab results, commands, or personal experiences that have not been written by the author.

## Quick start

```bash
npm install
npm run dev
```

Use `npm run build` for a production build and `npm run preview` to inspect it locally.

## Content workflow

- `days/day-01.md` through `days/day-100.md` are the Markdown-first entries. Each template includes goal, concepts, commands/lab steps/references, surprises, problems/causes/fixes, a production-minded takeaway, and a next exploration prompt.
- `src/data/journal.ts` is the single source of truth for day metadata and status. The index reads it for progress, filters, and labels; all days remain `planned` until real notes exist.
- `src/composables/useMarkdown.ts` contains the small renderer used by the current templates.

To add the first genuine entry, edit `days/day-01.md`, replace the prompts with notes you actually produced, then update only that day’s `status` to `completed` in `src/data/journal.ts`. Preview, commit, and push:

```bash
git add days/day-01.md src/data/journal.ts
git commit -m "Document day 01"
git push
```

## GitHub Pages

Vite uses `/devops-field-notes/` as its production base path. `.github/workflows/deploy.yml` builds `dist/` and deploys it with the official Pages artifact and deploy actions. Enable GitHub Pages with **GitHub Actions** as the source; pushes to `main` publish updates.

## Project guidance

`AGENTS.md` is version-controlled project guidance for future Codex sessions. It links to `docs/design-system.md`, which holds durable Swiss Minimalist design decisions and tokens. When a durable rule or project decision changes, edit the relevant guidance document and commit it so it is available in future sessions. Codex uses repository guidance when it is available and in context; this is not a guarantee that instructions can never be forgotten.

## VS Code workflow

Open the repository in VS Code, edit a day Markdown file, run `npm run dev`, and inspect `/day/01`. Review the Source Control diff, commit a focused change, and click **Sync Changes** (or run `git push`).
