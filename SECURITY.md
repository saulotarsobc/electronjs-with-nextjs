# Security Policy

## Supported Versions

We actively maintain and provide security updates for the following versions:

| Version | Supported |
| ------- | --------- |
| 1.x     | ✅ Yes    |
| < 1.0   | ❌ No     |

Please update to the latest version to receive security fixes.

---

## Reporting a Vulnerability

If you discover a security vulnerability in this Electron + Next.js app template, **please do not open a public issue**. Instead, report it directly to us via:

📧 **security@[yourdomain].com**  
🔒 For secure disclosure, consider using [PGP/GPG keys](https://en.wikipedia.org/wiki/Pretty_Good_Privacy) if available.

We take all reports seriously and aim to respond within **3 working days**.

---

## Security Best Practices

If you're building an app based on this template, here are some key security recommendations:

### Electron Security

- Enable [`contextIsolation`](https://www.electronjs.org/docs/latest/tutorial/context-isolation) and disable `nodeIntegration`.
- Use `preload` scripts carefully and expose only the minimal APIs needed.
- Set `webSecurity: true` and validate origins when loading external resources.
- Never load remote content in `BrowserWindow` unless absolutely necessary.
- Sanitize any input from `ipcRenderer` to `ipcMain`.

### Next.js Security

- Use built-in features like [API routes](https://nextjs.org/docs/api-routes/introduction) securely and validate all inputs.
- Leverage headers (e.g., `Content-Security-Policy`, `X-Frame-Options`) via middleware or proxies.
- Regularly update dependencies to patch known vulnerabilities.

---

## Dependency Management

We recommend using tools like:

- `npm audit`
- `electron-forge` / `electron-builder` with secure configurations
- `next lint` and `eslint-plugin-security`

Automated CI checks (e.g., GitHub Dependabot) are encouraged.

---

## Responsible Disclosure

We are committed to responsible disclosure. If a fix is required, we will release it as soon as possible and credit the reporter, unless anonymity is requested.

---

Thank you for helping us keep this project secure!
