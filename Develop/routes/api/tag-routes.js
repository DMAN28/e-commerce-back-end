const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags findAll method on Tag's model object to return all tags
  // be sure to include its associated Product data include data from products as well as tag_name attributes.
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id` looking for a single tag by its id and then it will fetch the associated product data.
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag in the database and returns to client
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
