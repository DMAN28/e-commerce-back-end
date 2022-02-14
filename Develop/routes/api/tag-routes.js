const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags findAll method on Tag's model object to return all tags
  // be sure to include its associated Product data include data from products as well as tag_name attributes.
  Tag.findAll({ 
    attributes: ['id', 'tag_name'],
    include: {
      models : Product,
      attributes:['id','product_name','price','stock','category_id']

    }
  })
  .then(dbTagData => res.json(dbTagData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


router.get('/:id', (req, res) => {
  // find a single tag by its `id` looking for a single tag by its id and then it will fetch the associated product data.
  // be sure to include its associated Product data
  Tag.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'tag_name'],
      include: {
        models : Product,
        attributes:['id','product_name','price','stock','category_id']

  },
  }
    ).then(dbTagData => {
      if (!dbTagData) {
        res.status(404).json({ message: 'Tag not found' });
        return;
      }
      res.json(dbTagData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  // create a new tag in the database and returns to client
  Tag.create({
    Tag_name: req.body.Tag_name,
  
  })
    .then(dbNewTag => res.json(dbNewTag))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Category.update(
    {Tag_name: req.body.Tag_name,},
     {
    where: {
      id: req.params.id
    }
  })
    .then(dbUpdateTag => {
      if (!dbUpdateTag[0]) {
        res.status(404).json({ message: 'No Tag found' });
        return;
      }
      res.json(dbUpdateTag);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbDeleteData => {
      if (!dbDeleteData) {
        res.status(404).json({ message: 'No Tag found' });
        return;
      }
      res.json(dbDeleteData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
