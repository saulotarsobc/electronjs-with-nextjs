# Security Policy

## Supported versions

| Version | Supported |
| ------- | --------- |
| 1.x     | Yes       |
| < 1.0   | No        |

Use the latest release to receive dependency and security fixes.

## Reporting a vulnerability

Do not open a public issue for a suspected vulnerability. Use
[GitHub private vulnerability reporting](https://github.com/saulotarsobc/electronjs-with-nextjs/security/advisories/new)
and include reproduction steps, impact, and affected versions.

## Security baseline

- Keep Electron and Next.js on supported release lines.
- Keep `nodeIntegration` disabled, `contextIsolation` enabled, and renderer
  sandboxing enabled.
- Expose only narrow, validated APIs from preload scripts.
- Do not load untrusted remote content in a privileged `BrowserWindow`.
- Install reproducibly with `npm ci` and the committed `package-lock.json`.
- Run `npm audit`, `npm run lint`, and `npm run typecheck` before releases.
- Sign production installers for each target operating system.

Dependabot is configured to check npm and GitHub Actions dependencies weekly.
