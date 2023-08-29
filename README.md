# Electron + Typescript + Next

## How to use

## Help

- [electronjs - documentation](https://www.electronjs.org/pt/docs/latest/)
- [What is CODE SIGNING | Importance of code sign | Code sing in electron js](https://youtu.be/a27EtDuUGYg)
- [Electron Mini Tutorials](https://youtube.com/playlist?list=PL_2VhOvlMk4XLzvGgqbmjF9PkVgUGMDcJ&si=7r5qeWiby_1d6vCr)

```sh
git clone https://github.com/saulotarsobc/electron-next-ts.git;
cd electron-next-ts;
yarn install;
yarn dev;
```

## Scripts

```json
"scripts": {
    "clean": "rimraf dist main frontend/out frontend/.next",
    "dev": "npm run build-electron && electron .",
    "build-frontend": "next build frontend",
    "build-electron": "tsc -p electron",
    "build": "npm run build-frontend && npm run build-electron",
    "pack-app": "npm run build-frontend && npm run build-electron && npm run build && electron-builder --dir",
    "dist": "npm run build && electron-builder",
    "type-check": "tsc -p ./frontend/tsconfig.json && tsc -p ./electron/tsconfig.json"
  },
```
