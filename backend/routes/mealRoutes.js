const express = require('express');
const { getMeals } = require('../controllers/mealController');
const router = express.Router();

router.route('/').get(getMeals);

module.exports = router;
