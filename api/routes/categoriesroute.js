const express = require("express");
const {
  category,
  getAllcategory,
} = require("../controllers/categorycontroller");

const router = express.Router();
router.route("/").post(category);
router.route("/all").get(getAllcategory);

module.exports = router;
