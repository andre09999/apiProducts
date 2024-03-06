'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Xiaomi Redmi 9',
        brand: 'Xiaomi',
        model: 'Redmi 9',
        price: 10000,
        color: 'Red',
      },
      {
        name: 'Iphone 10',
        brand: 'apple',
        model: '10',
        price: 6000,
        color: 'gray',
      },
      // Adicione mais dados conforme necessário
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
