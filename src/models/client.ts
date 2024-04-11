import {DataTypes} from "sequelize";
import sequelize from "../config/db";

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
      allowNull: false
    },
    territory: {
      type: DataTypes.STRING,
      allowNull: false
    },
    arSpecialist: {
      type: DataTypes.INTEGER,
    },
    employeeNumber: {
      type: DataTypes.INTEGER,
    },
    clientType: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.INTEGER,
    },
    notes: {
      type: DataTypes.STRING,
    },
    createdAt: {
      type: DataTypes.DATE,
    },
    updatedAt: {
      type: DataTypes.DATE,
    },
    sageObjectId: {
      type: DataTypes.STRING
    }
  },
  {
    indexes: [{ unique: true, fields: ["id"] }]
  }
);

export default Client;
