import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const ProgramDetails_Cabinet = sequelize.define(
  "cabinet_program_details",
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
    preferredColors: {
      type: DataTypes.STRING
    },
    preferredStyle: {
      type: DataTypes.STRING
    },
    overlay: {
      type: DataTypes.STRING
    },
    preferredCrown: {
      type: DataTypes.STRING
    },
    bidType: {
      type: DataTypes.STRING
    },
    upperCabinetSpecs: {
      type: DataTypes.STRING
    },
    vanityHeightSpecs: {
      type: DataTypes.STRING
    },
    softCloseStandard: {
      type: DataTypes.INTEGER
    },
    areasOptionedOut: {
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

export default ProgramDetails_Cabinet;