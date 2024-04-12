import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import {DateTime} from "luxon";

const AccountingInfo = sequelize.define(
  "accounting_details",
  {
    clientId: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    autopay: {
      type: DataTypes.INTEGER
    },
    invoiceEmailAddress: {
      type: DataTypes.STRING
    },
    paymentType: {
      type: DataTypes.STRING
    },
    paymentPortal: {
      type: DataTypes.INTEGER
    },
    paymentURL: {
      type: DataTypes.STRING
    },
    poRequired: {
      type: DataTypes.INTEGER
    },
    poInvoiceRequired: {
      type: DataTypes.INTEGER
    },
    paymentFrequency: {
      type: DataTypes.STRING
    },
    approvalsRequired: {
      type: DataTypes.INTEGER
    },
    contractAttached: {
      type: DataTypes.INTEGER
    },
    contactName: {
      type: DataTypes.STRING
    },
    contactPhone: {
      type: DataTypes.STRING
    },
    contactEmail: {
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
    indexes: [{ unique: true, fields: ["clientId"] }]
  }
)

export default AccountingInfo;