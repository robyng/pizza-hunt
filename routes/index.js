const router = require('express').Router();
//impoprt all api routes from api/index.js
const htmlRoutes = require('./html/html-routes');
const apiRoutes = require('./api');

//add prefix of api to all api routes imported from api directory
router.use('/api', apiRoutes);
router.use('/', htmlRoutes);

router.use((req, res) => {
  res.status(404).send('<h1>😝 404 Error!</h1>');
});

module.exports = router;
