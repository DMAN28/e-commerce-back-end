const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    //TODO define columns defines the following: - id - an integer primary key, auto-incrementing, and not nullable. - product_id - an integer primary key with references to product and tag models. - tag_id - an integer primary key with references to tag model. 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
