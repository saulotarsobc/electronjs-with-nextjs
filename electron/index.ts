// Native
import { join } from "path";
import { format } from "url";

// Packages
import { BrowserWindow, app, ipcMain, IpcMainEvent } from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";
import { getWinSettings, setWinSettings } from "./Storage";
import { dialog } from "electron/main";

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
      contextIsolation: false,
      preload: join(__dirname, "preload.js"),
    },
  });

  mainWindow.on("resize", () => {
    setWinSettings(mainWindow.getSize());
  });

  mainWindow.setMenu(null)

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

  // ipc listeners
  ipcMain.on('chooseFiles', (event) => {
    dialog.showOpenDialog({ properties: ['openFile', 'multiSelections'] })
      .then((result: any) => {
        event.returnValue = result.filePaths;
      }).catch((err: Error) => {
        event.returnValue = err.message;
      });
  });
});

// Quit the app once all windows are closed
// Saia do aplicativo quando todas as janelas estiverem fechadas
app.on("window-all-closed", app.quit);

// "listening" to the `test` channel
// "ouvindo" o canal  `test`
ipcMain.on("test", (_event: IpcMainEvent, _message: any) => {
  console.log(_message, "pong");
});
