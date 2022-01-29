const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');
const commentRoutes = require('./comment-routes')


// prefix of pixxas to routes in pizza-routes.js
router.use('/pizzas', pizzaRoutes);
router.use('/comments', commentRoutes);

module.exports = router;