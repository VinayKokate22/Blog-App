const asyncHandler = require("express-async-handler");
const Post = require("../models/Post");
const User = require("../models/User");

const postBlog = asyncHandler(async (req, res) => {
  const { title, desc, photo } = req.body;
  const userid = req.user.userid;
  const user = await User.findById(userid);
  const username = user.username;

  if (!title || !desc || !photo || !username) {
    res.status(400);
    throw new Error(
      "Please enter the title description and photo and username of the blog"
    );
  }

  const blogtitle = await Post.findOne({ title });
  if (blogtitle) {
    res.status(400);
    throw new Error("The Title is already taken");
  }

  const blog = await Post.create({
    title,
    desc,
    photo,
    username,
  });
  res.status(200).json({
    success: true,
    blog,
  });
});
const updateBlog = asyncHandler(async (req, res) => {
  const { title, desc, photo, category } = req.body;
  if (!title || !desc || !photo) {
    res.status(400);
    throw new Error("Please enter the title description and photo");
  }

  const newData = {
    title: title,
    desc: desc,
    photo: photo,
  };
  const user = await User.findById(req.user.userid);
  const username = user.username;
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error("This post does not exist");
  }
  if (username !== post.username) {
    res.status(401);
    throw new Error("You are not allowed to change the data");
  }
  const dbpost = await Post.findByIdAndUpdate(req.params.id, newData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  res.status(200).json({
    success: true,
    message: "The blog has been updated",
    dbpost,
  });
});
const deleteBlog = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.userid);
  const username = user.username;
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.status(404);
    throw new Error("This post does not exist");
  }
  if (username !== post.username) {
    res.status(401);
    throw new Error(
      "You are not allowed to delete the post because you didnt fuking write it"
    );
  }
  await Post.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "The blog has been deleted",
  });
});
const getPostdata = asyncHandler(async (req, res) => {
  const dbpost = await Post.findById(req.params.id);
  if (!dbpost) {
    res.status(404);
    throw new Error("This Post does not exist");
  }
  res.status(200).json({
    success: true,
    dbpost,
  });
});
const getManyPost = asyncHandler(async (req, res) => {
  const username = req.query.user;
  const catName = req.query.cat;

  let dbpost;
  if (username) {
    dbpost = await Post.find({ username });
  } else if (catName) {
    dbpost = await Post.find({
      categories: {
        $in: [catName],
      },
    });
  } else {
    dbpost = await Post.find();
  }
  if (!dbpost) {
    res.status(404);
    throw new Error("This Post does not exist");
  }
  res.status(200).json({
    success: true,
    dbpost,
  });
});

module.exports = { postBlog, updateBlog, deleteBlog, getPostdata, getManyPost };
