const { Model, DataTypes } = require('sequelize');
//
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  { 
    id :{
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  category_name:{
    type: DataTypes.string,
    allowNull: false,
  },

    //TODO Category model is created with two properties: id and category name.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
