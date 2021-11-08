'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Weighs', [
    {
      weigh: '-',
      createdAt : new Date,                 //1
     },
     {
      weigh: '0.85 g',
      createdAt : new Date,                 //2
     },
     {
      weigh: '179.9 g',
      createdAt : new Date,                 //3
     },
     {
      weigh: '250 g',
      createdAt : new Date,                 //4
     },
     {
      weigh: '400 g',
      createdAt : new Date,                 //5
     },
     {
      weigh: '1 kg',
      createdAt : new Date,                 //6
     },
     {
      weigh: '1.5 kg',
      createdAt : new Date,                 //7
     },
     {
      weigh: '2 kg',
      createdAt : new Date,                 //8
     },
     {
      weigh: '3 kg',
      createdAt : new Date,                 //9
     },
     {
      weigh: '5 kg',
      createdAt : new Date,                 //10
     },
     {
      weigh: '10 kg',
      createdAt : new Date,                 //11
     },
     {
      weigh: '15 kg',
      createdAt : new Date,                 //12
     },
     {
      weigh: '18 kg',
      createdAt : new Date,                 //13
     },
     {
      weigh: '20 kg',
      createdAt : new Date,                 //14
     },
     {
      weigh: '23 kg',
      createdAt : new Date,                 //15
     }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
     await queryInterface.bulkDelete('Weighs', null, {});
  }
};