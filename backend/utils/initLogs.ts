import Logger from "electron-log";
import { exec } from "node:child_process";
import { join } from "node:path";
import { databasePath } from "../database";
import { isDev } from "../constants";

/**
 * Initializes the logs by executing a command to list the files in the specified directory.
 *
 * @return {Promise<void>} A promise that resolves when the logs have been initialized.
 */
export function initLogs(): void {
  const directoryPath = join(__dirname, "..", "..");
  const command =
    process.platform === "win32"
      ? `dir ${directoryPath}`
      : `ls -lah ${directoryPath}`;

  exec(command, (error: Error | null, stdout: string, stderr: string) => {
    if (error) {
      Logger.error(`ERROR IN ${command}:\n${error}`);
      Logger.error(`ERROR IN ${command} "stderr":\n${stderr}`);
      return;
    }
    Logger.log(`FILES IN DIRECTORY ${directoryPath}:\n${stdout}`);
  });

  Logger.info("DIRNAME: ", directoryPath);
  Logger.info("DATABASE: ", databasePath);
  Logger.info("IS_DEV: ", isDev);
}
