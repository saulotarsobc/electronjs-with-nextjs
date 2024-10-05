import Logger from "electron-log";
import databasePath from "./databasePath";

/**
 * Initializes the logs by executing a command to list the files in the specified directory.
 *
 * @return {Promise<void>} A promise that resolves when the logs have been initialized.
 */
export async function initLogs(): Promise<void> {
  Logger.info("DATABASE: ", databasePath);
}
