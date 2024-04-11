import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const Approval = sequelize.define(
  "approval",
  {
    clientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    lisak: {
      type: DataTypes.INTEGER
    },
    kimn: {
      type: DataTypes.INTEGER
    },
    edythc: {
      type: DataTypes.INTEGER
    },
    timesSubmitted: {
      type: DataTypes.INTEGER
    },
    firstSubmittedAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
    lastSubmittedAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DateTime.now().toFormat("YYYY-MM-DD HH:mm:ss")
    },
  }, {
    indexes: [{ unique: true, fields: ["clientId"] }]
  }
)

export default Approval;