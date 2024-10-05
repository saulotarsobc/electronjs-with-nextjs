import { ipcMain } from "electron";
import { app, BrowserWindow } from "electron/main";
import { join } from "node:path";
import { database } from "./database";
import { User } from "./database/entitys/User";
import { isDev } from "./utils/env";
import { initLogs } from "./utils/initLogs";
import { prepareNext } from "./utils/prepareNext";

/**
 * Creates a new BrowserWindow with the specified dimensions and web preferences.
 * If in development mode, the window loads the local development server URL,
 * otherwise it loads the built frontend index.html file.
 *
 * @return {void}
 */
function createWindow(): void {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  isDev
    ? win.loadURL("http://localhost:4444/")
    : win.loadFile(join(__dirname, "..", "frontend", "out", "index.html"));

  isDev && win.webContents.openDevTools();
  isDev && win.maximize();
}

app.whenReady().then(async () => {
  await prepareNext("./frontend", 4444);
  initLogs();
  createWindow();
  app.on("activate", async () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
    await database.close();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

/* ++++++++++ code ++++++++++ */
ipcMain.on("addUser", async (event, data: any) => {
  const user = new User();

  user.name = data.name;
  user.email = "mail@example.com";
  user.password = "123456";

  await database.manager
    .save(user)
    .then((data) => {
      event.returnValue = {
        error: false,
        data,
      };
    })
    .catch((error) => {
      event.returnValue = {
        error: true,
        data: error,
      };
    });
});
