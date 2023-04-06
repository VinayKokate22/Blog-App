const asyncHandler = require("express-async-handler");
const Category = require("../models/Category");
const category = asyncHandler(async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400);
    throw new Error("Please enter the Category name");
  }
  const dbcat = await Category.create({
    name,
  });
  res.status(200).json({
    success: true,
    dbcat,
  });
});
const getAllcategory = asyncHandler(async (req, res) => {
  const dbcat = await Category.find();
  if (!dbcat) {
    res.status(404);
    throw new Error("There are no catergories");
  }
  res.status(200).json({
    success: true,
    dbcat,
  });
});
module.exports = { category, getAllcategory };
