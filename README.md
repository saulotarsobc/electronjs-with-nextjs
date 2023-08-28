# Electron + Typescript + Next

## How to use

## Help

- [electronjs - code-signing](https://www.electronjs.org/docs/latest/tutorial/code-signing)

```sh
git clone https://github.com/saulotarsobc/electron-next-ts.git;
cd electron-next-ts;
yarn install;
yarn dev;
```

## Scripts

```json
"clean": "rimraf dist main frontend/out frontend/.next",
"dev": "npm run build-electron && electron .",
"build-frontend": "next build frontend",
"build-electron": "tsc -p electron",
"build": "npm run build-frontend && npm run build-electron",
"pack-app": "npm run build && electron-builder --dir",
"dist": "npm run build && electron-builder",
"type-check": "tsc -p ./frontend/tsconfig.json && tsc -p ./electron/tsconfig.json"
```
