const { Model, DataTypes } = require('sequelize');
//
const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
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
