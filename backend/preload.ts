import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

/**
 * The Channels enum defines the possible IPC channels for communication between the renderer and main processes.
 * Each channel is represented by a string value.
 */
export enum Channels {
  ADD_USER = "add-user",
  REMOVE_USER = "remove-user",
  UPDATE_USER = "update-user",
}


/**
 * The `Channel` type is a union of the possible IPC channels.
 * It is used to restrict the type of the `channel` parameter in the `on` and `send` functions.
 */
type Channel = "add-user" | "remove-user" | "update-user";

export const api = {
  /**
   * Registers a callback function to be invoked when a message is received on the specified IPC channel.
   *
   * @param {Channel} channel - The name of the IPC channel to listen on.
   * @param {Function} callback - The callback function to be invoked when a message is received.
   *                             The callback function will receive two parameters: the event object and the message data.
   */
  on: (channel: Channel, callback: (event: IpcRendererEvent, args: unknown) => void) => {
    ipcRenderer.on(channel, (event: IpcRendererEvent, args: unknown) =>
      callback(event, args)
    );
  },

  /**
   * Sends a message through the IPC channel with the specified channel name and arguments.
   *
   * @param {Channel} channel - The name of the IPC channel to send the message through.
   * @param {any} args - The arguments to send along with the message.
   * @return {void} This function does not return anything.
   */
  send: (channel: Channel, args: unknown): void => {
    ipcRenderer.send(channel, args);
  },

  /**
   * Sends a synchronous message through the IPC channel with the specified channel name and arguments.
   *
   * @param {Channel} channel - The name of the IPC channel to send the message through.
   * @param {any} args - The arguments to send along with the message.
   * @return {any} The response from the main process.
   */
  sendSync: (channel: Channel, args: unknown): unknown => {
    return ipcRenderer.sendSync(channel, args);
  },
};

contextBridge.exposeInMainWorld("api", api);


export type ApiType = typeof api;