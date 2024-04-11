import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const Status = sequelize.define(
  "status",
  {
    clientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    current: {
      type: DataTypes.STRING
    },
    remindAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
    approvedAt: {
      type: DataTypes.DATE,
    },
    pushedAt: {
      type: DataTypes.DATE,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    }
  },
  {
    indexes: [{ unique: true, fields: ["clientId"] }]
  }
);

export default Status;