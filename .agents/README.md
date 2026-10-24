# Agent prompts

This directory contains optional, task-specific prompt and handoff files for Codex or other repository-aware agents.

Examples:

```text
.agents/handoff.md
.agents/review.md
.agents/release.md
```

The repository handoff is kept in [`.agents/handoff.md`](handoff.md). It summarizes the current architecture, relevant reference-repository context, and the next-session checklist.

Use an explicit reference such as `@.agents/handoff.md` when you want an agent to apply that file as additional context or instructions for a task. Keep reusable project-wide rules in the root `AGENTS.md`; keep these files focused on a specific workflow or handoff.
