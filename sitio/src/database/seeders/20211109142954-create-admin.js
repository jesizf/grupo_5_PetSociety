'use strict';
const bcrypt = require('bcryptjs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
     await queryInterface.bulkInsert('Users',[
       {
        name : 'admin',
        email : 'admin@petsociety.com',
        password : bcrypt.hashSync('123123',10),
        image : 'default.png',
        rolId : 2,
        createdAt : new Date,
        updatedAt : new Date
       }
     ], {});
   
  },

  down: async (queryInterface, Sequelize) => {
   
     await queryInterface.bulkDelete('Users', null, {});
     
  }
};
