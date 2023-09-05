/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ipcRenderer } from "electron";

declare global {
  namespace NodeJS {
    interface Global {
      API: any;
    }
  }
}

const API = {
  chooseFiles: () => ipcRenderer.sendSync("chooseFiles"),
  createUser: (data: {}) => ipcRenderer.sendSync("createUser", data),
}

process.once("loaded", () => {
  (global as any).API = API;
});
