const router = require('express').Router();
const pizzaRoutes = require('./pizza-routes');


// prefix of pixxas to routes in pizza-routes.js
router.use('/pizzas', pizzaRoutes);

module.exports = router;