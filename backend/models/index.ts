import { Sequelize, DataTypes } from "sequelize";
import { app } from "electron";
import { join } from "path";

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: join(app.getPath("appData"), 'database.sqlite'),
});

export const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});

sequelize.sync({alter:true});