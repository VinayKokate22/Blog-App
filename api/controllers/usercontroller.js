const asyncHandler = require("express-async-handler");
const User = require("../models/User");
const Post = require("../models/Post");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const registerUser = asyncHandler(async (req, res) => {
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(404);
    throw new Error("Please enter username email and password");
  }
  const userName = await User.findOne({ username });
  const userEmail = await User.findOne({ email });
  if (userName || userEmail) {
    res.status(403);
    throw new Error("Username or Email already exist");
  }
  const hashpassword = await bcrypt.hash(password, 10);
  const user = await User.create({
    username,
    email,
    password: hashpassword,
  });
  res.status(200).json({
    success: true,
    user,
  });
});
const loginUser = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.status(400);
    throw new Error("Please Enter Username and Password");
  }
  const dbuser = await User.findOne({ username }).select("+password");
  if (!dbuser) {
    res.status(404);
    throw new Error("Username does not exist");
  }
  const comparepassword = await bcrypt.compare(password, dbuser.password);
  if (!comparepassword) {
    res.status(401);
    throw new Error("Incorrect Username or Password");
  }
  const accesstoken = jwt.sign(
    {
      userid: dbuser.id,
      username: dbuser.username,
    },
    process.env.SECRET_KEY,
    { expiresIn: "24h" }
  );
  res.status(200).json({
    success: true,
    username: dbuser.username,
    accesstoken,
  });
});
const updateUser = asyncHandler(async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400);
      throw new Error("Please enter the email");
    }

    const userid = await req.user.userid;
    const newData = {
      email: email,
    };
    const dbuser = await User.findByIdAndUpdate(userid, newData, {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    });
    res.status(200).json({
      success: true,
      message: "The data has been updated",
      dbuser,
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
});
const deleteUser = asyncHandler(async (req, res) => {
  const userid = await req.user.userid;
  const dbuser = await User.findById(userid);

  await Post.deleteMany({ username: dbuser.username });

  await User.findByIdAndDelete(userid);

  res.status(200).json({
    success: true,
    message: "Your account has been deleted",
    dbuser,
  });
});
const getUserdata = asyncHandler(async (req, res) => {
  const userid = await req.user.userid;
  const dbuser = await User.findById(userid);
  res.status(200).json({
    success: true,
    dbuser,
  });
});
module.exports = {
  registerUser,
  loginUser,
  updateUser,
  deleteUser,
  getUserdata,
};
