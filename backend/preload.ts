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
  ping: () => { ipcRenderer.send("test", { msg: "enviado ping para o main" }) },

  chooseFiles: () => {
    return ipcRenderer.sendSync("chooseFiles");
  }
}

process.once("loaded", () => {
  (global as any).API = API;
});
