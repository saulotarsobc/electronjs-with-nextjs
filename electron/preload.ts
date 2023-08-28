import { ipcRenderer, IpcRenderer } from "electron";

declare global {
  namespace NodeJS {
    interface Global {
      ipcRenderer: IpcRenderer;
    }
  }
}

process.once("loaded", () => {
  (global as any).ipcRenderer = ipcRenderer;
});
