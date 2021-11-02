'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weigh extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */static associate(models) {
      // define association here
      Weigh.hasMany(models.Product,{
        as : 'products',
        foreignKey : 'weighId'
      })
    }
  };

  
  Weigh.init({
    weigh: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Weigh',
  });
  return Weigh;
};