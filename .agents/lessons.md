# Durable lessons for agents

Use this file for reusable lessons discovered while working in this repository.

Do not add every new change, implementation detail, or temporary debugging note. Add a lesson only when it is likely to help a future agent avoid a repeated mistake, preserve an important project decision, or follow a reliable workflow.

Before adding a lesson, verify it against the repository’s source code, tests, build output, or project documentation. Keep the lesson concise and explain the evidence behind it.

## Lesson format

```md
## Short lesson title

**Context:** What situation exposed this lesson?

**Rule:** What should a future agent do?

**Evidence:** Which source file, test, command, or document supports it?
```

Project-wide rules still belong in `AGENTS.md`. This file is for the supporting lessons that explain why a rule or workflow matters.

## General agent-workflow lessons

These are reusable workflow lessons. They are guidance for agents, not requirements to copy another project’s framework, package manager, infrastructure, or service setup into this Vue project.

### Read repository guidance before acting

**Rule:** Inspect the repository’s `AGENTS.md`, `README.md`, and relevant task guidance before changing code.

**Evidence:** Confirm the repository’s own `AGENTS.md`, `README.md`, setup files, and check scripts before acting.

### Prefer the repository’s declared package manager and checks

**Rule:** Use the package manager and validation commands defined by the repository instead of assuming a default workflow.

**Evidence:** This repository declares npm scripts in `package.json`; use those commands instead of assuming another project’s workflow.

### Verify lessons against source or tests

**Rule:** Record a lesson only when it can be supported by source code, a test, build output, or project documentation.

**Evidence:** Support a lesson with this repository’s source files, tests, build output, or project documentation.
