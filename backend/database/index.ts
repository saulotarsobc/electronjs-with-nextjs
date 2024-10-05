import { DataSource, Logger as TypeOrmLogger } from "typeorm";
import databasePath from "../utils/databasePath";

import Logger from "electron-log";
import { User } from "./entitys/User";

// Classe personalizada de logger para o TypeORM
class ElectronLogger implements TypeOrmLogger {
  logQuery(query: string, parameters?: any[]) {
    Logger.log(`Query: ${query} Parameters: ${parameters}`);
  }

  logQueryError(error: string | Error, query: string, parameters?: any[]) {
    Logger.error(
      `Query Failed: ${query} Parameters: ${parameters} Error: ${error}`
    );
  }

  logQuerySlow(time: number, query: string, parameters?: any[]) {
    Logger.warn(
      `Query is slow: ${time}ms. Query: ${query} Parameters: ${parameters}`
    );
  }

  logSchemaBuild(message: string) {
    Logger.log(`Schema Build: ${message}`);
  }

  logMigration(message: string) {
    Logger.log(`Migration: ${message}`);
  }

  log(level: "log" | "info" | "warn", message: any) {
    switch (level) {
      case "log":
        Logger.log(message);
        break;
      case "info":
        Logger.info(message);
        break;
      case "warn":
        Logger.warn(message);
        break;
    }
  }
}

export const database = new DataSource({
  type: "sqlite",
  database: databasePath,
  entities: [User],
  synchronize: true,
  logging: true,
  logger: new ElectronLogger(),
});

database
  .initialize()
  .then(() => {
    Logger.log("DB initiated!");
  })
  .catch(() => {
    Logger.log("DB not initiated!");
  });
