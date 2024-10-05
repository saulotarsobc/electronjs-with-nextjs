import Logger from "electron-log";
import { DataSource } from "typeorm";
import databasePath from "../utils/databasePath";
import { User } from "./entitys/User";

export const database = new DataSource({
  type: "sqlite",
  database: databasePath,
  entities: [User],
  synchronize: true,
  logging: false,
});

database
  .initialize()
  .then(() => {
    Logger.log("DB initiated!");
  })
  .catch(() => {
    Logger.log("DB not initiated!");
  });
