'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Images', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      file: {

        type: Sequelize.STRING
      },
      productId: {
        type: Sequelize.INTEGER,
        references:  {model : { /*foreign key*/
          tableName : 'Products'
        },
        key : 'id'
      },
      	onDelete:'cascade' /*para que cuando se borre un prducto se borren las imagenes */ 
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue : null,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Images');
  }
};