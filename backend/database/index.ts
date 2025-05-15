import { app } from "electron";
import { join } from "node:path";
import { DataTypes, Sequelize } from "sequelize";

export const databasePath = join(app.getPath("userData"), "database.sqlite");

export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: databasePath,
  logging: false,
});

export const User = sequelize.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    createdAt: true,
    updatedAt: "updateTimestamp",
    comment: "Users table",
  }
);
