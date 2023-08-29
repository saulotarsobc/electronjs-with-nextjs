# Electron + Typescript + Next

## Documentção

### Context Isolation

> O Context Isolation (Isolamento de Contexto) é um recurso que garante que tanto os seus scripts do preload quanto a lógica interna do Electron sejam executados em um `contexto separado` para a pagina que você carregar em um webContent. Isso é importante por `questões de segurança`, pois ajuda a `impedir` que a pagina web acesse os módulos internos do Electron ou aos privelégios de APIs que seu script de preload tem acesso.
>
> Isto significa que o objeto window ao qual seu script de preload tem acesso seja realmente um objeto diferente do qual a sua pagina web teria acesso. For example, if you set window.hello = 'wave' in your preload script and context isolation is enabled, window.hello will be undefined if the website tries to access it.
>
> Context isolation has been enabled by default since Electron 12, and it is a recommended security setting for all applications.

## Como usar

```sh
git clone https://github.com/saulotarsobc/electron-next-ts.git;
cd electron-next-ts;
yarn install;
yarn dev;
```

## Help

- [electronjs - documentation](https://www.electronjs.org/pt/docs/latest/)
- [What is CODE SIGNING | Importance of code sign | Code sing in electron js](https://youtu.be/a27EtDuUGYg)
- [Electron Mini Tutorials](https://youtube.com/playlist?list=PL_2VhOvlMk4XLzvGgqbmjF9PkVgUGMDcJ&si=7r5qeWiby_1d6vCr)

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
