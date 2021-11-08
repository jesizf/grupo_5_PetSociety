'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkInsert('Categories', [
    {
      name: 'perro',
      createdAt : new Date,
     },
     {
      name: 'gato',
      createdAt : new Date,
     }

    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Categories', null, {});
     
  }
};
