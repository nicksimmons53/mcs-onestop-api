import * as dotenv from "dotenv";
const { Sequelize } = require("sequelize");

dotenv.config( );

const dbName = process.env.DB_NAME_DEV;
const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const host = process.env.DB_HOST;

const sequelize = new Sequelize(dbName, username, password, {
  host: host,
  dialect: "mysql"
});

export default sequelize;