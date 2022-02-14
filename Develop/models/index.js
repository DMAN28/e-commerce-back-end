// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

//TODO Products belongsTo Category module is the Product model, which has a belongsToMany relationship with Tag and a belongsTo Category relationship.
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});


//TODO Categories have many Products module is the Category model, which has many relationships to Products through its foreignKey property of category_id 
Product.hasMany(Product, {
  foreignKey: 'category_id',
});

//TODO Products belongToMany Tags (through ProductTag)third module is the Tag model, which has many relationships to Products through its as property of tags and its foreignKey property of product_id 
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'product_id'
});

//TODO Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'tags',
  foreignKey: 'Tag_id',
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

