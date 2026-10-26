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

### Step-by-step procedure

Repeat these steps on each app server:

1. Connect from the jump host with the server's regular user, for example:

   ```bash
   ssh tony@stapp01
   ```

2. Open the SSH daemon configuration:

   ```bash
   sudo vi /etc/ssh/sshd_config
   ```

3. In `vi`, search for the setting by pressing `/`, typing `PermitRootLogin`, and pressing Enter. Press `i` to edit the line and set it to:

   ```text
   PermitRootLogin no
   ```

   If the setting is missing, add the line. Press Escape, type `:wq`, and press Enter to save and exit. Use `:q!` instead if you need to exit without saving.

4. Validate the configuration before reloading SSH:

   ```bash
   sudo sshd -t
   ```

5. Reload SSH without closing the current session:

   ```bash
   sudo systemctl reload sshd
   ```

6. Verify the effective setting:

   ```bash
   sudo sshd -T | grep permitrootlogin
   ```

The expected output is:

```text
permitrootlogin no
```

The same procedure was repeated for `stapp02` and `stapp03` using their regular users.

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
