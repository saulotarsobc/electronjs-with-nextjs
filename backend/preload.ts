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

const db = {
  chooseFiles: () => ipcRenderer.sendSync("chooseFiles"),
  createUser: (data: {}) => ipcRenderer.sendSync("createUser", data),
}

const API = {
  db: db,
}

process.once("loaded", () => {
  (global as any).API = API;
});
