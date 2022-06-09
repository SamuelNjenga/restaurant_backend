"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class TableRegistration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TableRegistration.init(
    {
      level: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      booked: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      label: { type: DataTypes.STRING, allowNull: false },
      arrived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "TableRegistration",
    }
  );
  return TableRegistration;
};
