// import { join } from "path";
// const prepareNext = require("electron-next");

// import { app, BrowserWindow } from "electron";
// import path from "path";

// const createWindow = () => {
//   const mainWindow = new BrowserWindow({
//     width: 800,
//     height: 600,
//     webPreferences: {
//       preload: path.join(__dirname, "preload.js"),
//     },
//   });

//   // mainWindow.loadFile(
//   //   format({
//   //     pathname: join(__dirname, "frontend", "index.html"),
//   //     protocol: "file",
//   //     slashes: true,
//   //   })
//   // );

//   mainWindow.loadFile(join(__dirname, "..", "frontend", "index.html"));

//   // Open the DevTools.
//   mainWindow.webContents.openDevTools();
// };

// app.whenReady().then(async () => {
//   await prepareNext("../frontend");

//   createWindow();

//   app.on("activate", () => {
//     if (BrowserWindow.getAllWindows().length === 0) createWindow();
//   });
// });

// app.on("window-all-closed", () => {
//   if (process.platform !== "darwin") app.quit();
// });
