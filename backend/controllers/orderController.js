const asyncHandler = require('express-async-handler');

exports.placeOrders = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 'success' });
});
