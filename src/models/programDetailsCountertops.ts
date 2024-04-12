import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const ProgramDetails_Countertops = sequelize.define(
  "countertop_program_details",
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
    preferredMaterialThickness: {
      type: DataTypes.STRING
    },
    preferredEdge: {
      type: DataTypes.STRING
    },
    waterfallEdgeStandard: {
      type: DataTypes.STRING
    },
    faucetHoles: {
      type: DataTypes.INTEGER
    },
    stoveRangeSpecifications: {
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

export default ProgramDetails_Countertops;