import { contextBridge, ipcRenderer, IpcRendererEvent } from "electron";

export const api = {
  /**
   * Registers a callback function to be invoked when a message is received on the specified IPC channel.
   *
   * @param {string} channel - The name of the IPC channel to listen on.
   * @param {Function} callback - The callback function to be invoked when a message is received.
   *                             The callback function will receive two parameters: the event object and the message data.
   */
  on: (channel: string, callback: (event: IpcRendererEvent, args: unknown) => void) => {
    ipcRenderer.on(channel, (event: IpcRendererEvent, args: unknown) =>
      callback(event, args)
    );
  },

  /**
   * Sends a message through the IPC channel with the specified channel name and arguments.
   *
   * @param {string} channel - The name of the IPC channel to send the message through.
   * @param {any} args - The arguments to send along with the message.
   * @return {void} This function does not return anything.
   */
  send: (channel: string, args: unknown): void => {
    ipcRenderer.send(channel, args);
  },

  /**
   * Sends a synchronous message through the IPC channel with the specified channel name and arguments.
   *
   * @param {string} channel - The name of the IPC channel to send the message through.
   * @param {any} args - The arguments to send along with the message.
   * @return {any} The response from the main process.
   */
  sendSync: (channel: string, args: unknown): unknown => {
    return ipcRenderer.sendSync(channel, args);
  },
};

contextBridge.exposeInMainWorld("api", api);
