// import {createPool} from 'mysql2/promise';
//
// export async function connect() {
//   return createPool({
//     connectionLimit: 20,
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME_DEV,
//     port: 3306,
//     multipleStatements: true,
//     rowsAsArray: true
//   });
// }


// import mysql, {PoolOptions} from "mysql2";
//
// const devDatabase = {
//   connectionLimit: 20,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME_DEV,
//   port: 3306,
//   multipleStatements: true
// };
//
// const prodDatabase = {
//   connectionLimit: 20,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME_PROD,
//   port: 3306,
//   multipleStatements: true
// };
//
// const access: PoolOptions = {
//   connectionLimit: 20,
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME_DEV,
//   port: 3306,
//   multipleStatements: true,
//   rowsAsArray: true
// }
//
// export const conn = mysql.createPool(access);

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