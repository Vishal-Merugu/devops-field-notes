# Agent handoff

## Current repository

This is the Vue 3 + TypeScript + Vite DevOps learning journal at:

`/Users/vishal/Documents/Repos/devops-field-notes`

The app uses Markdown day entries in `days/`, day metadata/status in `src/data/journal.ts`, Vue routes in `src/main.ts`, and GitHub Pages deployment through `.github/workflows/deploy.yml`. Read the root `AGENTS.md` and `docs/design-system.md` before changing it.

## Reusable workflow lessons

- Read repository guidance before acting.
- Use the project’s declared package manager and validation commands.
- Verify lessons against source code, tests, build output, or documentation.
- Keep handoffs compact and reference existing files instead of duplicating large plans or diffs.
- Do not copy credentials, tokens, private service setup, or unrelated infrastructure into this project.

## Next-session checklist

1. Inspect the current working tree and read `AGENTS.md`.
2. Read the relevant files before changing code.
3. Make the smallest understandable change.
4. Run `npm run build` after implementation changes.
5. Report verification honestly and update `.agents/lessons.md` only if a durable, verified lesson was discovered.
