# SC - Electron and Next

> A template to build an ElectronJS app with NextJS

⚠️ See also [electron-with-vite](https://github.com/saulotarsobc/electron-with-vite)

---

<div align="center">
  <img alt="demo" src="./demo/demo.png">
</div>

---

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

<!-- Badge Start -->
<div align="center">
 <img alt="static badge from nodejs" src="https://img.shields.io/badge/NodeJS-v22.16.0-44883e">
 <img alt="static badge from electronjs" src="https://img.shields.io/badge/ElectronJS-v36.3.2-46816e">
 <img alt="static badge from electron builder" src="https://img.shields.io/badge/Electron%20Builder-v26.0.12-blue">
 <img alt="static badge from typescript" src="https://img.shields.io/badge/TypeScript-v5.8.3-blue">
 <img alt="static badge from nextjs" src="https://img.shields.io/badge/NextJS-v15.3.3-black">
 <img alt="static badge from reactjs" src="https://img.shields.io/badge/ReactJS-v19.0.0-61DAFB">
 <img alt="static badge from sequelize" src="https://img.shields.io/badge/Sequelize-v6.37.7-52B0E7">
</div>
<!-- Badge End -->

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

## Scripts

- `dev`: Run Electron with development build.
- `build:backend`: Build backend with TypeScript.
- `prebuild`: Remove build and dist directories.
- `build`: Build frontend and backend.
- `build:frontend`: Build frontend with Next.js.
- `build:backend`: Build backend with TypeScript.
- `postinstall`: Install dependencies for Electron.
- `dist`: Build and make a distribution package with Electron Builder.

## electron-builder Configutarion to this project

```json
...
 "build": {
    "appId": "br.com.electron.next",
    "productName": "SC - Electron and Next",
    "files": [
      "dist"
    ],
    "directories": {
      "output": "out"
    },
    "win": {
      "target": [
        "nsis"
      ],
      "artifactName": "${name}-${version}-windows-${arch}.${ext}"
    },
    "mac": {
      "target": "dmg",
      "signIgnore": null,
      "artifactName": "${productName}-Setup-${version}.${ext}"
    },
    "linux": {
      "target": [
        "AppImage",
        "deb"
      ],
      "artifactName": "${name}-${version}-linux-${arch}.${ext}"
    }
  }
...
```

## Git Commands

### Release

```bash
#! bash
git tag "v$1"
git push origin --tags
```
