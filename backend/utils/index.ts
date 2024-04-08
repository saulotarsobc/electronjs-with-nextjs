import { app } from "electron";
import { join } from "path";

// "file:./database.sqlite"
export const databaseUrl =
  "file:" + join(app.getPath("userData"), "database.sqlite");
