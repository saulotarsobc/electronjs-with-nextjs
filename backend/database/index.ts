import { DataTypes, Sequelize } from "sequelize";
import { getPath } from "../utils";

export const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: getPath() + "./database.sqlite",
});

export const Meeting = sequelize.define('meeting', {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mid: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mpass: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mic: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
    },
    cam: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true,
    }
});

