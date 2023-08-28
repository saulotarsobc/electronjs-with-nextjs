import Store from "electron-store"

export const storage = new Store({});

const getWinSettings = (): number[] | {} => {
    const defalt_bounds = [600, 800]
    const size = storage.get("win-size");

    if (size) {
        return size;
    } else {
        storage.set("win-size", defalt_bounds);
        return defalt_bounds;
    }
}

export { getWinSettings }