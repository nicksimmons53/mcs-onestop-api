import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const ExpeditingInfo = sequelize.define(
  "expediting_details",
  {
    clientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    vendorPortal: {
      type: DataTypes.INTEGER
    },
    vendorPortalURL: {
      type: DataTypes.STRING
    },
    portalAccountCreated: {
      type: DataTypes.INTEGER
    },
    portalUsername: {
      type: DataTypes.STRING
    },
    portalPassword: {
      type: DataTypes.STRING
    },
    jobReleaseMethod: {
      type: DataTypes.STRING
    },
    poErrorHandling: {
      type: DataTypes.INTEGER
    },
    estimatedHomes: {
      type: DataTypes.STRING
    },
    estimatedStartDate: {
      type: DataTypes.DATE
    },
    inHouseProgram: {
      type: DataTypes.INTEGER
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
    indexes: [{ unique: true, fields: ["clientId"] }]
  }
)

export default ExpeditingInfo;