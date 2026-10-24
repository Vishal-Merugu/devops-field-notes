# Day 01 — Linux User Setup with Non-Interactive Shell

**Status:** Completed
**Category:** Linux & services

## Task

Created the `kirsty` user on App Server 3 (`stapp03`) with a non-interactive shell for the backup agent requirement.

## Goal

Create a Linux user that cannot start an interactive login shell.

## What I learned

- A non-interactive shell prevents interactive login access while leaving the account available for services or scripts.
- `/usr/sbin/nologin` is a suitable shell for this purpose.

## Hands-on work

Connected to App Server 3 from the KodeKloud terminal:

```bash
ssh banner@stapp03
```

Create the user with its non-interactive shell:

```bash
sudo useradd -s /usr/sbin/nologin kirsty
```

Verified the account with:

```bash
getent passwd kirsty
```

## What surprised me

- `sudo usermod -s usr/sbin/nologin kirsty` failed because the leading `/` was missing.
- The correct absolute path is `/usr/sbin/nologin`.

## Debugging notes

- Problem: `usermod: invalid shell 'usr/sbin/nologin'`
- Cause: The shell path was entered as a relative path.
- Fix: Use `sudo usermod -s /usr/sbin/nologin kirsty`.

## Production-minded takeaway

Service accounts often need to run processes without allowing human interactive access. Assigning `nologin` limits the account’s login capability while preserving its use by automation.

## Next step

- Practice checking account fields with `getent passwd`.
