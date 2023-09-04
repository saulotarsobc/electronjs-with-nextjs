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
  getPath: () => ipcRenderer.sendSync("getPath"),
  chooseFiles: () => ipcRenderer.sendSync("chooseFiles"),

  // database
  getMeetings: () => ipcRenderer.sendSync("getMeetings"),
  createMeeting: (_args: {}) => ipcRenderer.sendSync("createMeeting", _args),
  deleteMeeting: (_id: number) => ipcRenderer.sendSync("deleteMeeting", _id),
  updateMeeting: (_id: number, _args: {}) => ipcRenderer.sendSync("updateMeeting", [_id, _args]),

  // meeting
  openMeeting: (_id: number) => ipcRenderer.sendSync("openMeeting", _id),
}

process.once("loaded", () => {
  (global as any).API = API;
});
