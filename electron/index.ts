// Native
import { join } from "path";
import { format } from "url";

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent } from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";
import { getWinSettings, setWinSettings } from "./Storage";

// Prepare the frontend once the app is ready
// Prepare o frontend quando o aplicativo estiver pronto
app.on("ready", async () => {
  await prepareNext("./frontend");

  const winSize = getWinSettings();

  const mainWindow = new BrowserWindow({
    height: winSize.h,
    width: winSize.w,
    minHeight: 400,
    minWidth: 400,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
    autoHideMenuBar: true,
  });

  mainWindow.on("resize", () => {
    setWinSettings(mainWindow.getSize());
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
// Saia do aplicativo quando todas as janelas estiverem fechadas
app.on("window-all-closed", app.quit);

// "listening" to the `test` channel
// "ouvindo" o canal  `test`
ipcMain.on("test", (_event: IpcMainEvent, _message: any) => {
  console.log(_message, "pong");
});
