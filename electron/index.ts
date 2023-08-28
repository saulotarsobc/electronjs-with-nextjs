// Native
import { join } from "path";
import { format } from "url";

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent } from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";

// Prepare the frontend once the app is ready
app.on("ready", async () => {
  await prepareNext("./frontend");

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
  });

  const url = isDev
    ? "http://localhost:8000/"
    : format({
      pathname: join(__dirname, "../frontend/out/index.html"),
      protocol: "file:",
      slashes: true,
    });

  // abre o devtools
  if (isDev) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadURL(url);
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

// "ouvindo" o canal  `test`
ipcMain.on("test", (_event: IpcMainEvent, _message: any) => {
  console.log(_message, "pong");

  // exemplo de como enviar dados para o front
  // setTimeout(() => _event.sender.send("message", "hi from electron"), 500);
});
