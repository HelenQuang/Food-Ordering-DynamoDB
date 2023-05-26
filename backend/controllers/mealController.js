const asyncHandler = require('express-async-handler');

exports.getMeals = asyncHandler(async (req, res) => {
  res.status(200).json({ status: 'success' });
});
