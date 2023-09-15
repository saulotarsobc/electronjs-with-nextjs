// Native
import { join } from "path";
import { format } from "url";

// Packages
import isDev from "electron-is-dev";
import prepareNext from "electron-next";

// Modules
import { BrowserWindow, app, ipcMain, IpcMainEvent, dialog } from "electron";
import { getWinSettings, setWinSettings } from "./store";
import { User } from "./models";

const createWindow = () => {
	const winSize = getWinSettings();

	const mainWindow = new BrowserWindow({
		height: winSize.h,
		width: winSize.w,
		minHeight: 500,
		minWidth: 400,
		webPreferences: {
			nodeIntegration: false,
			contextIsolation: false,
			preload: join(__dirname, "preload.js"),
		},
	});

	mainWindow.on("resize", () => {
		setWinSettings(mainWindow.getSize());
	});

	mainWindow.setMenu(null);

	// open devtools
	// abre o devtools se estiver em modo de desenvolvimento
	if (isDev) mainWindow.webContents.openDevTools();

	mainWindow.loadURL((isDev
		? `http://localhost:8000/`
		: format({
			pathname: join(__dirname, "../frontend/out/index.html"),
			protocol: "file:",
			slashes: true,
		})));
}

// Prepare the frontend once the app is ready
// Prepare o frontend quando o aplicativo estiver pronto
app.on("ready", async () => {
	await prepareNext("./frontend");
	createWindow();
});

// Quit the app once all windows are closed
// Saia do aplicativo quando todas as janelas estiverem fechadas
app.on("window-all-closed", app.quit);

/* ++++++++++ code ++++++++++ */
ipcMain.on("chooseFiles", (event: IpcMainEvent) => {
	dialog.showOpenDialog({ properties: ["openFile", "multiSelections"] })
		.then((result: any) => {
			event.returnValue = result;
		}).catch((err: Error) => {
			event.returnValue = err.message;
		});
});

ipcMain.on("createUser", (event: IpcMainEvent, data: {}) => {
	User.create({ ...data })
		.then((data: any) => {
			event.returnValue = data;
		})
		.catch((e: Error) => {
			event.returnValue = e.message;
		})
});