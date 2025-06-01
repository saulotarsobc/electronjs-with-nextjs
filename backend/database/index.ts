import { DataTypes, Sequelize } from "sequelize";
import { DATABASE_PATH } from "../constants";


export const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: DATABASE_PATH,
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
