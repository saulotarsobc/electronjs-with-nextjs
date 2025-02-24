import { app } from "electron/main";
import { join } from "node:path";
export const databasePath = join(app.getPath("userData"), "database.sqlite");
