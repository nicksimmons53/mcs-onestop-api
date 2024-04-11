import sequelize from "../config/db";
import {DataTypes} from "sequelize";
import Client from "./client";

const User = sequelize.define(
  "user",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    auth0Sub: {
      type: DataTypes.STRING,
    },
    sageEmployeeNumber: {
      type: DataTypes.INTEGER,
    },
    sageUserId: {
      type: DataTypes.STRING,
    },
    sagePassword: {
      type: DataTypes.STRING,
    },
  },
  {
    indexes: [{ unique: true, fields: ["id"] }]
  }
);

User.hasMany(Client, {
  foreignKey: "userId"
});

Client.belongsTo(User);

export default User;