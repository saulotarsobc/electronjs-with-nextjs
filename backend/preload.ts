import { contextBridge, ipcRenderer } from "electron";

const ADD_USER_CHANNEL = "users:add";

export interface UserDto {
  id: number;
  name: string;
  createdAt: string;
  updateTimestamp: string;
}

export type AddUserResponse =
  | { ok: true; data: UserDto }
  | { ok: false; error: string };

export const api = {
  addUser: (name: string): Promise<AddUserResponse> =>
    ipcRenderer.invoke(ADD_USER_CHANNEL, { name }),
};

contextBridge.exposeInMainWorld("api", api);

export type Api = typeof api;
