import Logger from "electron-log";
import { app } from "electron/main";
import { join } from "node:path";

export const databasePath = join(app.getPath("userData"), "database.sqlite");

Logger.info("DATABASE: ", databasePath);
