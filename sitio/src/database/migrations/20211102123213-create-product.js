'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(700)
      },
      price: {
        allowNull: false,
        type: Sequelize.DECIMAL(10,2)
      },
      discount: {
        type: Sequelize.INTEGER,
        defaultValue : null,
        defaultValue: 0,

      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Categories'
          },
          key : 'id'
        }
      },

      weighId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName : 'Weighs'
          },
          key : 'id'
        }
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        defaultValue : null

        ,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE,
        defaultValue : null
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Products');
  }
};