import sequelize from "../config/db";
import {DataTypes} from "sequelize";

const Programs = sequelize.define(
  "programs",
  {
    clientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    cabinets: {
      type: DataTypes.INTEGER,
    },
    countertops: {
      type: DataTypes.INTEGER,
    },
    tile: {
      type: DataTypes.INTEGER,
    },
    wood: {
      type: DataTypes.INTEGER,
    },
    vinyl: {
      type: DataTypes.INTEGER,
    },
  }, {
    indexes: [{ unique: true, fields: ["clientId"] }]
  }
)

export default Programs;