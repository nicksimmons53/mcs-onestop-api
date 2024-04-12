import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const BillingParts = sequelize.define(
  "billing_parts",
  {
    clientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    version: {
      type: DataTypes.INTEGER
    },
    sagePartDescription: {
      type: DataTypes.STRING
    },
    program: {
      type: DataTypes.STRING
    },
    programTable: {
      type: DataTypes.STRING
    },
    level: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    type: {
      type: DataTypes.STRING
    },
    color: {
      type: DataTypes.STRING
    },
    unit: {
      type: DataTypes.STRING
    },
    cost: {
      type: DataTypes.FLOAT
    },
    costWithTax: {
      type: DataTypes.FLOAT
    },
    laborCost: {
      type: DataTypes.FLOAT
    },
    totalCost: {
      type: DataTypes.FLOAT
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

export default BillingParts;