import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const ProgramDetails_WoodVinyl = sequelize.define(
  "wood_vinyl_program_details",
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
    preferredGlueProducts: {
      type: DataTypes.STRING
    },
    otherGlueProducts: {
      type: DataTypes.STRING
    },
    stainedOrPrimed: {
      type: DataTypes.STRING
    },
    transitionStripsStandard: {
      type: DataTypes.INTEGER
    },
    hvacRequirement: {
      type: DataTypes.INTEGER
    },
    MCInstalledTrim: {
      type: DataTypes.INTEGER
    },
    secondFloorConstruction: {
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

export default ProgramDetails_WoodVinyl;