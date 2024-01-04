# Electron + Typescript + Next

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

- **dev:** Inicia o aplicativo, primeiro construindo-o com `npm run build-electron` e, em seguida, executando-o com o Electron.
- **clean:** Remove os diretórios de saída e de construção, incluindo `dist`, `main`, `frontend/out` e `frontend/.next`, usando o pacote `rimraf`.
- **build-frontend:** Compila o código do frontend usando o Next.js e gera os artefatos de construção.
- **build-electron:** Compila o código do backend usando o TypeScript (`tsc -p backend`).
- **build:** Executa o processo de limpeza (`npm run clean`) e, em seguida, constrói tanto o frontend quanto o backend.
- **pack-app:** Empacota o aplicativo para distribuição, construindo o frontend, o backend e o pacote geral usando o Electron Builder com a opção `--dir`.
- **dist:** Realiza o processo de limpeza e construção, em seguida, cria os artefatos de distribuição usando o Electron Builder.
- **type-check:** Realiza a verificação de tipos para os códigos TypeScript no frontend e no backend.
- **publish:** Publica o aplicativo para a plataforma Windows usando o Electron Builder.
- **publish-linux:** Publica o aplicativo para a plataforma Linux usando o Electron Builder.
- **postinstall:** Executa o comando `electron-builder install-app-deps` após a instalação de dependências para garantir que as dependências do aplicativo estejam corretas.
- **release:** Inicia o processo de criação de um pacote de lançamento do aplicativo usando o Electron Builder.
- **libs-update:** Atualiza as dependências do projeto usando o `ncu` (npm-check-updates) e, em seguida, reinstala as dependências usando `npm install`.
