# Electron + Typescript + Next

## How to use

```sh
git clone https://github.com/saulotarsobc/electron-next-ts.git;
cd electron-next-ts;
yarn install;
yarn dev;
```

## Scripts

```json
"clean": "rimraf dist main renderer/out renderer/.next",
"dev": "npm run build-electron && electron .",
"build-renderer": "next build renderer",
"build-electron": "tsc -p electron-src",
"build": "npm run build-renderer && npm run build-electron",
"pack-app": "npm run build && electron-builder --dir",
"dist": "npm run build && electron-builder",
"type-check": "tsc -p ./renderer/tsconfig.json && tsc -p ./electron-src/tsconfig.json"
```
