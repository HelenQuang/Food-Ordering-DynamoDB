const express = require('express');
const { placeOrders } = require('../controllers/orderController');
const router = express.Router();

router.route('/').get(placeOrders);

module.exports = router;
