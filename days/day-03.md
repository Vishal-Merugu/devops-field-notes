# Day 03 — Secure Root SSH Access

**Status:** Completed
**Category:** Linux & services

## Goal

Disable direct SSH root login on all application servers in the Stratos Datacenter.

## What I learned

- `root` is Linux's superuser account and direct remote access to it increases the impact of a compromised credential.
- `PermitRootLogin no` disables direct root login through SSH while still allowing authorized users to use `sudo`.
- `sshd -t` checks the SSH configuration before reloading the service.

## Hands-on work

The task was completed on `stapp01`, `stapp02`, and `stapp03` using the KodeKloud jump host.

For each app server, the SSH configuration was updated to:

```text
PermitRootLogin no
```

The configuration was validated and the SSH service reloaded:

```bash
sudo sshd -t
sudo systemctl reload sshd
sudo sshd -T | grep permitrootlogin
```

The effective setting was verified as:

```text
permitrootlogin no
```

## What surprised me

- Reloading the SSH service preserves existing connections, so the active session can remain open while the configuration is checked.

## Debugging notes

- Problem: The SSH configuration must be changed on every app server.
- Cause: `/etc/ssh/sshd_config` is local to each machine.
- Fix: Applied and verified the setting independently on all three app servers.

## Production-minded takeaway

Use named administrative accounts with `sudo`, disable direct root SSH access, validate configuration before reload, and keep an existing session open until access is confirmed.

## Next step

- Practice managing the same server configuration consistently across multiple hosts with automation.
