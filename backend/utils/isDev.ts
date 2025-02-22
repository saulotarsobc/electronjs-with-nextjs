import Logger from "electron-log";
export const isDev = process.argv.some((str) => str == "--dev");
Logger.info("IS_DEV: ", isDev);
