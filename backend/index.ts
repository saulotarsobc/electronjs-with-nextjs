import { app, BrowserWindow, ipcMain } from "electron";
import { join } from "node:path";
import { Model } from "sequelize";
import { sequelize, User } from "./database";
import { initLogs, isDev, prepareNext } from "./utils";

/**
 * Creates the main application window.
 *
 * The window is created with the following options:
 *
 * - `width`: 900
 * - `height`: 700
 * - `webPreferences`:
 *   - `nodeIntegration`: false
 *   - `contextIsolation`: true
 *   - `preload`: the path to the preload script
 *
 * If the application is running in development mode, the window is loaded with
 * the URL "http://localhost:4444/", and the devtools are opened. The window is
 * also maximized.
 *
 * If the application is running in production mode, the window is loaded with
 * the path to the main application HTML file, and the menu is set to null.
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

  if (isDev) {
    win.loadURL("http://localhost:4444/");
    win.webContents.openDevTools();
    win.maximize();
  } else {
    win.loadFile(join(__dirname, "..", "frontend", "out", "index.html"));
    win.setMenu(null);
  }
}

/**
 * When the application is ready, this function is called.
 *
 * It creates a BrowserWindow instance and loads the main application.
 * It also sets up the logging and database connections.
 *
 * @returns {Promise<void>} A Promise that resolves when all the setup is done.
 */
app.whenReady().then(async () => {
  await prepareNext("./frontend", 4444);

  await initLogs();

  await sequelize
    .sync({
      logging: true,
      alter: true,

      // this is used for development.
      // If you want to reset the database, set this to true and run the script again.
      // Otherwise, set it to false.
      force: false,
    })
    .then(() => {
      console.log("Database synced");
    });

  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

/* ++++++++++ events ++++++++++ */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

/* ++++++++++ code ++++++++++ */
ipcMain.on("addUser", async (event, data: any) => {
  await User.create(data)
    .then((data: Model) => {
      event.returnValue = {
        error: false,
        data: data.dataValues,
      };
    })
    .catch((error) => {
      event.returnValue = {
        error: true,
        data: error,
      };
    });
});
