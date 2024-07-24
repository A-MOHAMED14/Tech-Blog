const { Model, Datatypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection.js");
const { PassThrough } = require("stream");

class User extends Model {}

User.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: Datatypes.STRING,
      allowNull: false,
    },

    email: {
      type: Datatypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },

    password: {
      type: Datatypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;