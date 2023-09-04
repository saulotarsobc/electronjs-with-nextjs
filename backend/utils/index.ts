import { app } from "electron";

export function getPath(): string {
    return app.getPath("userData");
}

export function getName(): string {
    return app.getName();
}

export function getVersion(): string {
    return app.getVersion();
}