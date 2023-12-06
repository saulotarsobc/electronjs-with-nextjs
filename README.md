# Electron + Typescript + Next

## Electron Docmentation

### Context Isolation

#### pt-br

> O Context Isolation (Isolamento de Contexto) é um recurso que garante que tanto os seus scripts do preload quanto a lógica interna do Electron sejam executados em um `contexto separado` para a pagina que você carregar em um webContent. Isso é importante por `questões de segurança`, pois ajuda a `impedir` que a pagina web acesse os módulos internos do Electron ou aos privelégios de APIs que seu script de preload tem acesso.
>
> Isto significa que o objeto window ao qual seu script de preload tem acesso seja realmente um objeto diferente do qual a sua pagina web teria acesso. Por exemplo, se você definir `window.hello = 'wave'` em seu script de pré-carregamento e o isolamento de contexto estiver habilitado, `window.hello` será indefinido se o site tentar acessá-lo.
>
> Context isolation has been enabled by default since Electron 12, and it is a recommended security setting for all applications.

#### en

> Context Isolation is a feature that ensures that both your preload scripts and Electron's internal logic run in a separate context to the website you load in a webContents. This is important for security purposes as it helps prevent the website from accessing Electron internals or the powerful APIs your preload script has access to.
>
> This means that the window object that your preload script has access to is actually a different object than the website would have access to. For example, if you set `window.hello = 'wave'` in your preload script and context isolation is enabled, `window.hello` will be undefined if the website tries to access it.
>
> Context isolation has been enabled by default since Electron 12, and it is a recommended security setting for all applications.

## Como usar

```sh
git clone https://github.com/saulotarsobc/electron-next-ts.git;
cd electron-next-ts;
npm install;
npm start;
```

## Help

- [Electronjs - documentation](https://www.electronjs.org/pt/docs/latest/)
- [What is CODE SIGNING | Importance of code sign | Code sing in electron js](https://youtu.be/a27EtDuUGYg)
- [Electron Mini Tutorials](https://youtube.com/playlist?list=PL_2VhOvlMk4XLzvGgqbmjF9PkVgUGMDcJ&si=7r5qeWiby_1d6vCr)

## Scripts

```json
"scripts": {
    "dev": "npm run build-electron && electron .",
    "clean": "rimraf dist main frontend/out frontend/.next",
    "build-frontend": "next build frontend",
    "build-electron": "tsc -p backend",
    "build": "npm run clean && npm run build-frontend && npm run build-electron",
    "pack-app": "npm run build-frontend && npm run build-electron && npm run build && electron-builder --dir",
    "dist": "npm run clean && npm run build && electron-builder",
    "type-check": "tsc -p ./frontend/tsconfig.json && tsc -p ./backend/tsconfig.json",
    "publish": "electron-builder --win -p always",
    "publish-linux": "electron-builder --linux -p always",
    "postinstall": "electron-builder install-app-deps",
    "release": "electron-builder",
    "libs-update": "ncu -u && npm install"
},
```
