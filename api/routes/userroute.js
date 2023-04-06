const express = require("express");

const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");
const isauthenticatd = require("../middlewares/auth");
const {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserdata,
} = require("../controllers/usercontroller");
router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/update").put(isauthenticatd, updateUser);
router.route("/delete").delete(isauthenticatd, deleteUser);
router.route("/profile").get(isauthenticatd, getUserdata);
module.exports = router;
