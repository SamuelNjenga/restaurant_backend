'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class table_registration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  table_registration.init({
    level: DataTypes.INTEGER,
    booked: DataTypes.BOOLEAN,
    label: DataTypes.STRING,
    arrived: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'table_registration',
  });
  return table_registration;
};