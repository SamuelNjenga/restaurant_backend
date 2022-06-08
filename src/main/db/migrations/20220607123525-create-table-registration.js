'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('table_registrations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      level: {
        type: Sequelize.INTEGER
      },
      booked: {
        type: Sequelize.BOOLEAN
      },
      label: {
        type: Sequelize.STRING
      },
      arrived: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('table_registrations');
  }
};