# Project guidance

This file is the short, version-controlled operating guide for agents working in this repository. Read it before making changes, then read the linked document that matches the task.

## Project scope

- Preserve the Vue 3, TypeScript, and Vite stack, existing routes, copy, behavior, and small understandable architecture.
- Follow the visual rules in [`docs/design-system.md`](docs/design-system.md).
- Keep changes scoped to the requested work; do not add unrelated services, dependencies, pages, or abstractions.

## Content and truthfulness

- Keep course content and personal learning claims grounded in notes the author actually provides. Never invent lessons, lab results, commands, or experiences.
- Keep all days planned until real notes exist and the author explicitly marks them complete.
- Keep day metadata and status in `src/data/journal.ts`, the single documented source of truth; day content lives in `days/day-XX.md`.

## Implementation practices

- Prefer small, maintainable changes.
- Explain significant Vue patterns in concise comments or the README so the code remains approachable while learning Vue.
- Preserve accessible names, keyboard support, visible focus states, readable contrast, responsive reading order, and reduced-motion behavior.
- When a durable project decision or recurring mistake is established, update this file or the relevant linked project document.

## Verification and handoff

- Run the production build and available checks after implementation changes, then report the result honestly.
- Before creating a branch, use a valid Conventional Branch name. Before committing, use a valid Conventional Commit message. Before opening a PR, use a valid Conventional Commits title and complete the PR checklist.
- Read [`.agents/handoff.md`](.agents/handoff.md) when continuing work from another session or agent. Treat it as contextual handoff, not a replacement for this file.
- Record only durable, reusable, verified lessons in [`.agents/lessons.md`](.agents/lessons.md). Do not record every implementation detail or temporary debugging note. Verify lessons against source code, tests, build output, or documentation.

## Agent-facing files

- Use `.agents/` for optional task-specific prompts, handoffs, reviews, and other agent context files.
- When adding a new agent-facing file under `.agents/`, add a short linked entry below explaining its purpose so future agents can discover it.

Current agent-facing files:

- [`.agents/README.md`](.agents/README.md) — explains the folder convention and how to reference agent context.
- [`.agents/handoff.md`](.agents/handoff.md) — summarizes the architecture, reference-repository context, and next-session checklist.
- [`.agents/lessons.md`](.agents/lessons.md) — stores durable, verified lessons; it is not a general change log.

## Contribution references

- [Conventional Commits 1.0.0](https://www.conventionalcommits.org/en/v1.0.0/) — commit message specification.
- [Conventional Branch](https://conventionalbranch.org/) — branch name specification.
