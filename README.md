# electronjs-with-nextjs

<div align="center">
  <img alt="Stars" src="https://img.shields.io/github/stars/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Forks" src="https://img.shields.io/github/forks/saulotarsobc/electronjs-with-nextjs.svg">
</div>

<div align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg">
  <img alt="Version" src="https://img.shields.io/github/v/release/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Contributors" src="https://img.shields.io/github/contributors/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Last Commit" src="https://img.shields.io/github/last-commit/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Issues" src="https://img.shields.io/github/issues/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Pull Requests" src="https://img.shields.io/github/issues-pr/saulotarsobc/electronjs-with-nextjs.svg">
  <img alt="Build Status" src="https://img.shields.io/github/actions/workflow/status/saulotarsobc/electronjs-with-nextjs/.github/workflows/launch-app.yaml">
</div>

---

<div align="center">
  <img alt="Static Badge" src="https://img.shields.io/badge/ElectronJS-v34-46816e">
  <img alt="Static Badge" src="https://img.shields.io/badge/Electron Builder-v25-blue">
  <img alt="Static Badge" src="https://img.shields.io/badge/NodeJS-v22-44883e">
  <img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-v5-blue">
  <img alt="Static Badge" src="https://img.shields.io/badge/NestJS-v15-black">
  <img alt="Static Badge" src="https://img.shields.io/badge/ReactJS-v19-61DAFB">
  <img alt="Static Badge" src="https://img.shields.io/badge/Sequelize-v6-52B0E7">
</div>

---

<div align="center">
  <img alt="demo" src="./demo/demo.png">
</div>

---

## Use

```sh
git clone https://github.com/saulotarsobc/electron-next-ts.git;
cd electron-next-ts;
npm install;
npm run dev;
```

## Help

- [Electronjs - documentation](https://www.electronjs.org/pt/docs/latest/)
- [Any Linux Target](https://www.electron.build/linux)

## NPM Commands

- `npm run dev`: Run Electron with development build.
  - `npm run build:backend`: Build backend with TypeScript.
  - `electron . --dev`: Run Electron with development build.
- `npm run prebuild`: Remove build and dist directories.
- `npm run build`: Build frontend and backend.
  - `npm run build:frontend`: Build frontend with Next.js.
  - `npm run build:backend`: Build backend with TypeScript.
- `npm run postinstall`: Install dependencies for Electron.
- `npm run dist`: Build and make a distribution package with Electron Builder.

## Git Commands

### Release

```bash
#! bash
git tag "v$1"
git push origin --tags
```
