import { Sequelize, DataTypes } from "sequelize";
import { app } from "electron";
import { join } from "path";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: join(app.getPath("userData"), 'database.sqlite'),
});

export const User = sequelize.define('User', {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    // Other model options go here
});

sequelize.sync({ alter: true });
