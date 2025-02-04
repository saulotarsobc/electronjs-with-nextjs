# electronjs-with-nextjs

- <img alt="Version" src="https://img.shields.io/github/v/release/microsoft/TypeScript.svg"> Typescript
- <img alt="Version" src="https://img.shields.io/github/v/release/vercel/next.js.svg"> NextJS
- <img alt="Version" src="https://img.shields.io/github/v/release/facebook/react.svg"> ReactJS
- <img alt="Version" src="https://img.shields.io/github/v/release/mantinedev/mantine.svg"> Mantine UI
- <img alt="Version" src="https://img.shields.io/github/v/release/sequelize/sequelize.svg"> Sequelize

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
  <img alt="demo" src="./demo/demo.gif">
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
- [What is CODE SIGNING | Importance of code sign | Code sing in electron js](https://youtu.be/a27EtDuUGYg)
- [Electron Builder Tutorial: How to Sign Your Electron App's Code](https://youtu.be/WnipZaYslRc)
- [Electron AutoUpdater Tutorial: How to Ship Updates to Your Electron App on Mac](https://youtu.be/CtuV6hho2U0)
- [Electron Mini Tutorials](https://youtube.com/playlist?list=PL_2VhOvlMk4XLzvGgqbmjF9PkVgUGMDcJ&si=7r5qeWiby_1d6vCr)
- [Any Linux Target](https://www.electron.build/linux)

## NPM Commands

- **dev:** Builds the backend and then runs the application in development mode using Electron.

  ```json
  "dev": "npm run build:backend && electron . --dev"
  ```

  - `npm run build:backend`: Compiles the backend code using TypeScript.
  - `electron . --dev`: Starts the Electron application in development mode.

- **prebuild:** Cleans up the `build` and `dist` directories before building the project.

  ```json
  "prebuild": "rimraf build && rimraf dist"
  ```

  - `rimraf build`: Removes the `build` directory.
  - `rimraf dist`: Removes the `dist` directory.

- **build:** Builds both the frontend and the backend.

  ```json
  "build": "npm run build:frontend && npm run build:backend"
  ```

  - `npm run build:frontend`: Builds the frontend using Next.js.
  - `npm run build:backend`: Compiles the backend code using TypeScript.

- **build:frontend:** Compiles the frontend using Next.js.

  ```json
  "build:frontend": "next build frontend"
  ```

- **build:backend:** Compiles the backend using TypeScript.

  ```json
  "build:backend": "tsc -p backend"
  ```

- **postinstall:** Installs the application's dependencies using `electron-builder`.

  ```json
  "postinstall": "electron-builder install-app-deps"
  ```

- **dist:** Builds the project and then creates distribution artifacts using `electron-builder`.
  ```json
  "dist": "npm run build && electron-builder"
  ```
