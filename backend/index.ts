import dotenv from "dotenv";
dotenv.config();

import { join } from "path";
import { format } from "url";
import prepareNext from "electron-next";
import { BrowserWindow, app, ipcMain, IpcMainEvent, dialog } from "electron";

import { getWinSettings, setWinSettings } from "./store";
import { prisma } from "./prisma";

const isDev = process.argv.some((str) => str == "--dev");
const isStart = process.argv.some((str) => str == "--start");

const MIGRATIONS_FOLDER =
  isStart || isDev
    ? join(__dirname, "..", "prisma", "migrations")
    : join(__dirname, "..", "..", "..", "resources", "prisma", "migrations");

const createWindow = () => {
  const winSize = getWinSettings();

  const mainWindow = new BrowserWindow({
    height: winSize.h,
    width: winSize.w,
    minHeight: 500,
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

  mainWindow.setMenu(null);

  // open devtools
  // abre o devtools se estiver em modo de desenvolvimento
  if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.loadURL(
    isStart || isDev
      ? `http://localhost:8000/`
      : format({
          pathname: join(__dirname, "../frontend/out/index.html"),
          protocol: "file:",
          slashes: true,
        })
  );
};

// Prepare the frontend once the app is ready
// Prepare o frontend quando o aplicativo estiver pronto
app.on("ready", async () => {
  await prepareNext("./frontend");

  await prisma.$queryRaw`CREATE TABLE IF NOT EXISTS "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "age" REAL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
  );`.catch((e: Error) => console.log({ e: e.message }));

  const columnExists: any =
    await prisma.$queryRaw`SELECT COUNT(*) AS column_exists
   FROM users;`;

  if (!columnExists[0].column_exists) {
    await prisma.$executeRaw`ALTER TABLE users ADD COLUMN born DATETIME;`.catch(
      (e: Error) => console.log({ e: e.message })
    );
  }

  createWindow();
});

// Quit the app once all windows are closed
// Saia do aplicativo quando todas as janelas estiverem fechadas
app.on("window-all-closed", app.quit);

/* ++++++++++ code ++++++++++ */
ipcMain.on("chooseFiles", (event: IpcMainEvent) => {
  dialog
    .showOpenDialog({ properties: ["openFile", "multiSelections"] })
    .then((result: any) => {
      event.returnValue = result;
    })
    .catch((err: Error) => {
      event.returnValue = err.message;
    });
});

ipcMain.on("createUser", (event: IpcMainEvent, data: any) => {
  prisma.user
    .create({ data })
    .then((data: any) => {
      event.returnValue = data;
    })
    .catch((_e: Error) => {
      event.returnValue = MIGRATIONS_FOLDER;
    });
});
