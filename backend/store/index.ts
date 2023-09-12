import Store from "electron-store";
import { windowSize } from "../@types";

const storage = new Store({});

export const getWinSettings = () => {
    const defalt_bounds: windowSize = { h: 600, w: 800 };
    const size: windowSize = storage.get("win-size") as windowSize;

    if (size) {
        return size;
    } else {
        storage.set("win-size", defalt_bounds);
        return defalt_bounds;
    }
};

export const setWinSettings = (sizes: number[]) => {
    const newSize: windowSize = { w: sizes[0], h: sizes[1] };
    storage.set("win-size", newSize);
};