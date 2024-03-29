'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      username: {
        allowNull: false,
        primaryKey: true, 
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      }
    },{
      timestamps: false,
      underscored: true
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};