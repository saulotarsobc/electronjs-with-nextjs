// Modules
import { BrowserWindow, app, ipcMain, IpcMainEvent } from "electron";
import { getWinSettings, setWinSettings } from "./ElectronStore";
import { Meeting, sequelize } from "./database";
import { getPath } from "./utils";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";

// Native
import { join } from "path";
import { format } from "url";

const createWindow = () => {
	const winSize = getWinSettings();

	const mainWindow = new BrowserWindow({
		height: winSize.h,
		width: winSize.w,
		minHeight: 400,
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

// ++++++++++ code ++++++++++
// sync db
sequelize.sync({ alter: true });

ipcMain.on("getPath", ((_event: IpcMainEvent) => {
	_event.returnValue = getPath();
}));

ipcMain.on("openMeeting", ((_event: IpcMainEvent, _id: number) => {
	console.log(`opening meeting ID: ${_id}`);
	_event.returnValue = `opening meeting ID: ${_id}`;
}));

/* meeting */
ipcMain.on("getMeetings", ((_event: IpcMainEvent, _args: []) => {
	Meeting.findAll()
		.then((data: any) => {
			_event.returnValue = { error: false, data };
		})
		.catch((e: Error) => {
			_event.returnValue = { error: true, msg: e.message };
		});
}));

ipcMain.on("createMeeting", ((_event: IpcMainEvent, _args: []) => {
	Meeting.create({ ..._args })
		.then((data: any) => {
			_event.returnValue = { error: false, data };
		})
		.catch((e: Error) => {
			_event.returnValue = { error: true, msg: e.message };
		});
}));

ipcMain.on("deleteMeeting", ((_event: IpcMainEvent, _id: number) => {
	Meeting.destroy({ where: { id: _id } })
		.then((data: any) => {
			_event.returnValue = { error: false, data };
		})
		.catch((e: Error) => {
			_event.returnValue = { error: true, msg: e.message };
		});
}));

ipcMain.on("updateMeeting", ((_event: IpcMainEvent, { _id, _args }: { _id: number, _args: [] }) => {
	Meeting.update({ ..._args }, {
		where: { id: _id }
	})
		.then((data: any) => {
			_event.returnValue = { error: false, data };
		})
		.catch((e: Error) => {
			_event.returnValue = { error: true, msg: e.message };
		});
}));