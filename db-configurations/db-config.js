const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const db_name = `${process.env.DATABASE}`;
const db_user = `${process.env.DATABASE_USER}`;
const db_password = `${process.env.DATABASE_PASS}`;

const sequelize = new Sequelize(
    db_name,
    db_user,
    db_password,
    {dialect: 'postgres'}
);


async function dbConnectionVerification() {
    try {
        await sequelize.authenticate();
        console.log("Connection to the DB has been established successfully.");
    } catch (error) {
        console.error("Connection to the DB failed.  +  " + error);
    }
}

dbConnectionVerification();

require("./models/todosModel")(sequelize, DataTypes);

module.exports = {
    Sequelize,
    sequelize
};