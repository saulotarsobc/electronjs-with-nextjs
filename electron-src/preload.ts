/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ipcRenderer, IpcRenderer } from "electron";

declare global {
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer;
    }
  }
}

// Como desabilitamos o nodeIntegration, podemos reintroduzir
// funcionalidade necessária do nó aqui
process.once("loaded", () => {
  (global as any).ipcRenderer = ipcRenderer;
});
