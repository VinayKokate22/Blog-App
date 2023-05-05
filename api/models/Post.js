const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please provide unique Title Name"],
      unique: [true, "Title Name Exist"],
    },
    desc: {
      type: String,
      required: [true, "please enter the description"],
    },
    photo: {
      type: String,
      required: [true, "please enter your password"],
    },
    username: {
      type: String,
      required: [true, "plese enter the username"],
    },
    categories: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
