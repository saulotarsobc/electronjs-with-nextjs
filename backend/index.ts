import { app, BrowserWindow, ipcMain } from "electron";
import { join, sep } from "node:path";
import { pathToFileURL } from "node:url";
import { prepareNext } from "sc-prepare-next";
import { PORT } from "./constants";
import { sequelize, User } from "./database";

const ADD_USER_CHANNEL = "users:add";

interface AddUserRequest {
  name: string;
}

function isAddUserRequest(value: unknown): value is AddUserRequest {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    typeof value.name === "string"
  );
}

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
  const rendererPath = join(
    __dirname,
    "..",
    "..",
    "dist",
    "frontend",
    "index.html",
  );
  const rendererDirectoryUrl = pathToFileURL(join(rendererPath, "..") + sep).href;
  const developmentOrigin = `http://localhost:${PORT}`;
  const win = new BrowserWindow({
    title: "SC - Electron and Next",
    icon: "./build/icon.png",
    width: 900,
    height: 700,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
      webSecurity: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  win.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
  win.webContents.on("will-navigate", (event, url) => {
    const isAllowed = app.isPackaged
      ? url.startsWith(rendererDirectoryUrl)
      : new URL(url).origin === developmentOrigin;

    if (!isAllowed) event.preventDefault();
  });
  win.webContents.session.setPermissionRequestHandler(
    (_webContents, _permission, callback) => callback(false),
  );

  if (app.isPackaged) {
    void win.loadFile(rendererPath);
  } else {
    void win.loadURL(`${developmentOrigin}/`);
    win.webContents.openDevTools();
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
  if (!app.isPackaged) {
    await prepareNext("./src", PORT);
  }

  await sequelize.sync({
    logging: app.isPackaged ? false : true,
    alter: !app.isPackaged,
    // The 'force' option is used for development.
    // If you want to reset the database, set this to true and run the script again. Otherwise, set it to false.
    force: false,
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
ipcMain.handle(ADD_USER_CHANNEL, async (_event, payload: unknown) => {
  if (!isAddUserRequest(payload)) {
    return { ok: false, error: "Invalid user data." } as const;
  }

  const name = payload.name.trim();
  if (name.length === 0 || name.length > 100) {
    return {
      ok: false,
      error: "Name must contain between 1 and 100 characters.",
    } as const;
  }

  try {
    const createdUser = await User.create({ name });
    const data = createdUser.get({ plain: true });

    return {
      ok: true,
      data: {
        id: data.id,
        name: data.name,
        createdAt: new Date(data.createdAt).toISOString(),
        updateTimestamp: new Date(data.updateTimestamp).toISOString(),
      },
    } as const;
  } catch (error) {
    console.error("Failed to create user", error);
    return { ok: false, error: "Unable to add user." } as const;
  }
});
