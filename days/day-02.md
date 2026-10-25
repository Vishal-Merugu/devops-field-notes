# Day 02 — Temporary User Setup with Expiry

**Status:** Completed
**Category:** Linux & services

## Goal

Create a temporary Linux user account and configure its expiry date.

## What I learned

- A temporary account should have a defined end date so access does not remain active longer than needed.
- The `chage -E` command sets the account expiration date.

## Hands-on work

```bash
# On App Server 3, create the user.
sudo useradd mariyam

# Set the expiry date.
sudo chage -E 2026-12-07 mariyam

# Verify the account expiry.
sudo chage -l mariyam
```

## What surprised me

- The account creation and expiry configuration can be handled as separate steps.

## Debugging notes

- Problem: The user needed access only for a limited assignment.
- Cause: A regular user account without an expiry date could remain active indefinitely.
- Fix: Set the expiry date to `2026-12-07` with `sudo chage -E 2026-12-07 mariyam`.

## Production-minded takeaway

Temporary accounts reduce lingering access after a project or assignment ends. The expiry should be verified after it is configured.

## Next step

- Practice checking account expiry dates during access reviews.
