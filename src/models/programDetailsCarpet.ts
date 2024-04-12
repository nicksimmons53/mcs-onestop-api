import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const ProgramDetails_Carpet = sequelize.define(
  "carpet_program_details",
  {
    clientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    version: {
      type: DataTypes.INTEGER
    },
    substitutionsAllowed: {
      type: DataTypes.INTEGER
    },
    preferredPadding: {
      type: DataTypes.STRING
    },
    takeoffResponsibility: {
      type: DataTypes.STRING
    },
    wasteFactor: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.STRING
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
    indexes: [{ unique: true, fields: ["id"] }]
  }
)

export default ProgramDetails_Carpet;