import {DataTypes} from "sequelize";
import sequelize from "../config/db";
import {DateTime} from "luxon";
import Status from "./status";

/* Todo: add validators to all fields for creating new data */
const Client = sequelize.define(
  "client",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shortName: {
      type: DataTypes.STRING,
    },
    territory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arSpecialist: {
      type: DataTypes.INTEGER,
      defaultValue: 1010,
    },
    employeeNumber: {
      type: DataTypes.INTEGER,
    },
    clientType: {
      type: DataTypes.INTEGER,
    },
    notes: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
    sageObjectId: {
      type: DataTypes.STRING
    }
  },
  {
    indexes: [{ unique: true, fields: ["id"] }]
  }
);

Client.hasOne(Status, {
  foreignKey: "clientId"
})

export default Client;
