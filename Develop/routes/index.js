const router = require('express').Router();
// const categoryRoute = require('../routes/api/category-routes')
// const productRoute = require('../routes/api/product-routes')
// const tagRoute = require('../routes/api/tag-routes')
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// router.use('/categories',categoryRoute);
// router.use('/product', productRoute);
// router.use('/tag',tagRoute)

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;